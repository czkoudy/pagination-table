/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useEffect } from 'react';
import _ from 'lodash';
import { searchFunction } from '../utilz';
import { PaginationTableProps } from '../types';

export const PaginationTableContext =
  createContext<PaginationTableProps | null>(null);

type PaginationTableInterface = {
  children?: React.ReactNode;
  value: PaginationTableProps & {
    currentPage: number;
  };
};

export const PaginationTableProvider: React.FC<PaginationTableInterface> = ({
  children,
  value: { data: data2, body, header, options, result = () => {} },
}) => {
  const [currentPage, setCurrentPage] = useState(options.currentPage);
  const [perPage, setPerPage] = useState(options.perPage);
  const [data, setData] = useState(data2);
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
          search: options.search,
          searchString,
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
        result({ selectionRows });
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
        result({ selectionRows });
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
    selectionRows,
  ]);

  const bodyKeysHasValueArrays = body.filter((y) => Array.isArray(y.value));

  return (
    <PaginationTableContext.Provider
      value={{
        body,
        currentPage,
        data: data.map((x) => {
          const keys = bodyKeysHasValueArrays.map((z) => z.key);

          const values = bodyKeysHasValueArrays.map((x) => [...x.value]);

          const getValue = (key) => {
            if (values[key][0]?.includes('.') && _.get(x, values[key][0])) {
              return _.get(x, values[key][0]);
            }
            if (!values[key][0]?.includes('.') && x[values[key][0]]) {
              if (_.isObject(x[values[key][0]])) {
                return 'E001';
              }

              return x[values[key][0]];
            }
            if (values[key][1]?.includes('.') && _.get(x, values[key][1])) {
              return _.get(x, values[key][1]);
            }
            if (!values[key][1]?.includes('.') && x[values[key][1]]) {
              if (_.isObject(x[values[key][1]])) {
                return 'E002';
              }
              return x[values[key][1]];
            }

            return '0';
          };

          if (keys.length === 1) {
            return _.merge(x, { [keys[0]]: getValue(0) });
          }
          if (keys.length === 2) {
            return _.merge(
              x,
              { [keys[0]]: getValue(0) },
              {
                [keys[1]]: getValue(1),
              }
            );
          }

          return x;
        }),
        firstIndex,
        header,
        lastIndex,
        options,
        order,
        perPage,
        ref,
        searchString,
        selectedPerPage,
        selectionRows,
        setCurrentPage,
        setData,
        setOrder,
        setPerPage,
        setRef,
        setSearchString,
        setSelectedPerPage,
        setSelectionRows,
      }}
    >
      {children}
    </PaginationTableContext.Provider>
  );
};
