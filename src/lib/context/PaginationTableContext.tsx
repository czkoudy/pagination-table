import { createContext, useState, useEffect } from 'react';
import _ from 'lodash';
import { searchFunction } from '../utilz';
export const PaginationTableContext = createContext();

export const PaginationTableProvider = ({
  children,
  value: { data: data2, body, header, options },
}) => {
  const [currentPage, setCurrentPage] = useState(options.currentPage);
  const [perPage, setPerPage] = useState(options?.perPage);
  // const [sortedData, setSortedData] = useState([]);
  const [data, setData] = useState(data2);
  // const [header, setHeader] = useState(header);
  // const [body, setBody] = useState(body);

  const firstIndex = (currentPage - 1) * perPage;
  const lastIndex = (currentPage - 1) * perPage + perPage;
  const [order, setOrder] = useState({
    column: body[options.sort.column].key,
    direction: options.sort.direction,
  });
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      if (options.search.active) {
        setData(
          _.orderBy(
            searchFunction({
              body,
              data: data2,
              searchString,
              search: options.search,
              setCurrentPage,
            }),
            [order.column],
            [order.direction]
          )
        );
      } else {
        setData(
          _.orderBy(
            data,
            [
              (item) =>
                typeof _.get(item, order.column) === 'string'
                  ? _.get(item, order.column)?.toLowerCase()
                  : _.get(item, order.column),
            ],
            [order.direction]
          )
        );
      }
    }
    return () => {
      isCancelled = true;
    };
  }, [order.direction, order.column, searchString]);

  return (
    <PaginationTableContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        perPage,
        setPerPage,
        data,
        setData,
        firstIndex,
        lastIndex,
        options,
        header,
        body,
        order,
        setOrder,
        searchString,
        setSearchString,
        // setOptions,
      }}
    >
      {children}
    </PaginationTableContext.Provider>
  );
};
