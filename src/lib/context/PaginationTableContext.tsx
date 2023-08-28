/* eslint-disable react/jsx-no-constructed-context-values */
import _ from 'lodash';
import { createContext, useState, useEffect } from 'react';
import { searchFunction } from '../utilz';

export type PaginationTableType = {
  data: any;
  options: {
    className: string;
    data: any[];
    lengthChange: {
      active?: boolean;
    };
    tableTitle: string;
    search: {
      active?: boolean;
    };
    selection: {
      buttons: any[];
    };
  };
  result?: any;
  selectionRows: any[];
  setSelectionRows: ([]) => void;
};

export const PaginationTableContext = createContext<PaginationTableType | null>(
  null
);

interface PaginationTableInterface {
  children?: React.ReactNode;
}

export const PaginationTableProvider: React.FC<PaginationTableInterface> = ({
  children,
  value: { data: data2, body, header, options, divRef },
}) => {
  const [currentPage, setCurrentPage] = useState(options.currentPage);
  const [perPage, setPerPage] = useState(options?.perPage);
  // const [sortedData, setSortedData] = useState([]);
  const [data, setData] = useState(data2);
  // const [header, setHeader] = useState(header);
  // const [body, setBody] = useState(body);
  const [selectionRows, setSelectionRows] = useState([]);
  const [selectedPerPage, setSelectedPerPage] = useState({});
  const [ref, setRef] = useState(null);

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
        const searchData = searchFunction({
          body,
          data: data2,
          searchString,
          search: options.search,
          setCurrentPage,
          stayOnPage: options.stayOnPage,
        });
        setData(
          _.orderBy(
            searchData,
            [
              (item) => {
                if (typeof _.get(item, order.column) === 'string') {
                  return _.get(item, order.column)?.toLowerCase();
                }
                if (Array.isArray(_.get(item, order.column))) {
                  return _.get(item, order.column).map((x) => x.toLowerCase());
                }
                return _.get(item, order.column);
              },
            ],
            [order.direction]
          )
        );
      } else {
        setData(
          _.orderBy(
            data2,
            [
              (item) => {
                if (typeof _.get(item, order.column) === 'string') {
                  return _.get(item, order.column)?.toLowerCase();
                }
                if (Array.isArray(_.get(item, order.column))) {
                  return _.get(item, order.column).map((x) => x.toLowerCase());
                }
                return _.get(item, order.column);
              },
            ],
            [order.direction]
          )
        );
      }
      if (options.stayOnPage) {
      } else {
        setCurrentPage(1);
      }
    }
    return () => {
      isCancelled = true;
    };
  }, [
    body,
    data2,
    options.search,
    options.stayOnPage,
    order.column,
    order.direction,
    searchString,
  ]);
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
        selectionRows,
        setSelectionRows,
        selectedPerPage,
        setSelectedPerPage,
        // setOptions,
        ref,
        setRef,
      }}
    >
      {children}
    </PaginationTableContext.Provider>
  );
};
