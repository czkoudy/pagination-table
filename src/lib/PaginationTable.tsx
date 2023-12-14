/* eslint-disable react/display-name */
import _ from 'lodash';
import { forwardRef, useContext, useEffect, useRef } from 'react';
import {
  PaginationTableContext,
  PaginationTableProvider,
} from '@/lib/context/PaginationTableContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import TableHeader from './components/TableHeader/TableHeader';
import PaginationTableHeader from './components/PaginationTableHeader/PaginationTableHeader';
import css from './paginationtable.module.css';
import PaginationTableFooter from './components/PaginationTableFooter/PaginationTableFooter';
import TableRow from './components/TableRow/TableRow';

library.add(fas, far);

const defaultOptions = {
  perPage: 10,
  currentPage: 1,
  tableTitle: '',
  info: {
    active: true,
  },
  sort: {
    active: false,
    column: 0,
    direction: 'asc',
    excludeColumns: [],
  },
  search: {
    active: false,
    columns: 'all',
    style: {},
    className: '',
    skipObjects: true,
  },
  showPagination: true,
  emptyRows: false,
  className: '',
  lengthChange: {
    active: false,
    className: '',
  },
  lengthMenu: [5, 10, 15, 20],
  selection: {
    active: false,
    backgroundColor: '#FFDAC1',
    key: null,
    className: '',
    maxCount: false,
    buttons: [],
    component: null,
  },
  onRowClick: {
    active: false,
    function: null,
    key: null,
    passEvent: false,
    excludeColumns: [],
    useWholeObject: false,
  },
  stayOnPage: true,
  customFormatFunctions: {
    date: {
      library: 'date-fns',
      options: {},
    },
    currency: {
      code: 'en-UK',
      options: {
        style: 'currency',
        currency: 'GBP',
      },
    },
  },
};

export const usePaginationTable = ({ header, body, ref }) => {
  const Table = () => {
    const table = useContext(PaginationTableContext);
    const tableRef = useRef();

    useEffect(() => {
      table.setRef(tableRef);
    }, [table]);

    if (!table?.data) return null;

    return (
      <div className={`${css.paginationtable}`} ref={ref || tableRef}>
        <PaginationTableHeader />
        <table className={table.options.className}>
          <TableHeader />
          <tbody>
            {table.data
              .slice(table.firstIndex, table.lastIndex)
              .map((entry, index) => (
                <TableRow
                  key={index}
                  index={index}
                  entry={entry}
                  body={body}
                  header={header}
                />
              ))}
            <TableRow emptyRows />
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
  result,
}) => {
  return (
    <PaginationTableProvider value={{ options, data, header, body, result }}>
      {children}
    </PaginationTableProvider>
  );
};

export const PaginationTable = forwardRef(
  ({ data, header, body, options = {}, result }, ref) => {
    const { Table, selectionRows } = usePaginationTable({
      data,
      header,
      body,
      options,
      result,
      ref,
    });

    const mergedOptions = _.merge({}, defaultOptions, {
      ...options,
      sort: {
        ...options.sort,
        active:
          typeof options.sort === 'undefined'
            ? defaultOptions.sort.active
            : !!options.sort,
      },
      search: {
        ...options.search,
        active:
          typeof options.search === 'undefined'
            ? defaultOptions.search.active
            : !!options.search,
      },
      info: {
        ...options.info,
        active:
          typeof options.info === 'undefined'
            ? defaultOptions.info.active
            : !!options.info,
      },
      onRowClick: {
        ...options.onRowClick,
        active:
          typeof options?.onRowClick === 'undefined'
            ? defaultOptions?.onRowClick?.active
            : !!options.onRowClick,
        function:
          typeof options?.onRowClick?.function === 'function'
            ? options?.onRowClick?.function
            : null,
        key:
          typeof options?.onRowClick?.key !== 'undefined'
            ? options?.onRowClick?.key
            : null,
      },
      selection: {
        ...options?.selection,
        active:
          typeof options?.selection === 'undefined'
            ? defaultOptions?.selection?.active
            : !!options.selection,
      },
    });

    return (
      <PaginationTableWrapper
        options={mergedOptions}
        data={data}
        header={header}
        body={body}
        result={result}
      >
        <Table />
      </PaginationTableWrapper>
    );
  }
);
