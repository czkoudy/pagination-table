import _ from 'lodash';
import React, { useEffect, useContext } from 'react';
// import Pagination from './components/Pagination/Pagination';
import {
  PaginationTableContext,
  PaginationTableProvider,
} from '@/lib/context/PaginationTableContext';
import TableCell from './components/TableCell';
import TablePagination from '@/lib/components/TablePagination/TablePagination';
import TableFooter from './components/PaginationTableFooter';
import TableHeader from './components/TableHeader/TableHeader';
import SearchBox from './components/SearchBox';
import PaginationTableHeader from './components/PaginationTableHeader/PaginationTableHeader';
import css from './paginationtable.module.css';
import PaginationTableFooter from './components/PaginationTableFooter/PaginationTableFooter';

export const defaultOptions = {
  perPage: 5,
  currentPage: 1,
  info: {
    active: true,
    startText: 'Showing',
    endText: 'records',
  },
  sort: {
    active: true,
    column: 0,
    direction: 'asc',
    excludeColumns: [],
  },
  search: {
    active: true,
    columns: 'all',
    style: {},
    className: '',
  },
  showPagination: true,
  emptyRows: false,
  className: '',
  lengthChange: {
    active: false,
    className: '',
  },
  lengthMenu: [1, 5, 10, 15, 20],
};

export const usePaginationTable = ({ data, header, body, options }) => {
  const Table = () => {
    const table = useContext(PaginationTableContext);

    // console.log(table.data[0]);

    const getEmptyRows = () => {
      const numberOfEmptyRows =
        table.perPage - (table.data.length % table.perPage);
      const rows = [];

      if (table.options.rowSpan) {
        for (let index = 0; index < numberOfEmptyRows; index++) {
          rows.push(
            <React.Fragment key={index}>
              <tbody>
                <tr className={css.anti_hover}>
                  <td
                  // colSpan={
                  //   table.options.selection.active
                  //     ? body.length + 1
                  //     : body.length
                  // }
                  >
                    &nbsp;
                  </td>
                </tr>
                <tr className={css.anti_hover}>
                  <td
                  // colSpan={
                  //   table.options.selection.active
                  //     ? body.length + 1
                  //     : body.length
                  // }
                  >
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </React.Fragment>
          );
        }
      } else {
        for (let index = 0; index < numberOfEmptyRows; index++) {
          rows.push(
            <React.Fragment key={index}>
              <tr className={css.anti_hover}>
                <td
                // colSpan={
                //   table.options.selection.active
                //     ? body.length + 1
                //     : body.length
                // }
                >
                  &nbsp;
                </td>
              </tr>
            </React.Fragment>
          );
        }
      }
      return rows;
    };

    return (
      <div className={css.paginationtable}>
        <PaginationTableHeader />
        <table className={table.options.className}>
          <TableHeader />
          <tbody>
            {table.data
              .slice(table.firstIndex, table.lastIndex)
              .map((entry, index) => (
                <tr
                  key={index}
                  id={
                    entry[header.find((x) => x.onRowClick !== '').onRowClick] ||
                    null
                  }
                  onClick={(e) => onRowClickHandler(e, entry)}
                >
                  {body.map((field, index) => {
                    return (
                      <TableCell
                        key={index}
                        defaults={table}
                        index={index}
                        field={field}
                        entry={entry}
                        columnSpan={index === body.length - 1 ? 2 : 1}
                      />
                    );
                  })}
                </tr>
              ))}

            {table.options.emptyRows &&
              table.currentPage ===
                Math.ceil(table.data.length / table.perPage) &&
              getEmptyRows()}
          </tbody>
        </table>
        <PaginationTableFooter />
      </div>
    );
  };

  return { Table };
};

export const PaginationTableWrapper = ({
  children,
  options,
  data,
  header,
  body,
}) => {
  return (
    <PaginationTableProvider value={{ options, data, header, body }}>
      {children}
    </PaginationTableProvider>
  );
};

export const PaginationTable = ({ data, header, body, options, result }) => {
  const { Table, selectionRows } = usePaginationTable({
    data,
    header,
    body,
    options,
  });
  // useEffect(() => {
  //   if (result) {
  //     result({ selectionRows });
  //   }
  // }, [data, result, selectionRows]);

  return (
    <PaginationTableWrapper
      options={{ ...defaultOptions, ...options }}
      data={data}
      header={header}
      body={body}
    >
      <Table />
    </PaginationTableWrapper>
  );
};
