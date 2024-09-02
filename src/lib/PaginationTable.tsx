/* eslint-disable react/display-name */
import {
  forwardRef,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
} from 'react';
import _ from 'lodash';
import {
  PaginationTableContext,
  PaginationTableProvider,
} from '@/lib/context/PaginationTableContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import TableHeader from './components/TableHeader/TableHeader';
import PaginationTableHeader from './components/PaginationTableHeader/PaginationTableHeader';
import css from './paginationtable.module.css';
import PaginationTableFooter from './components/PaginationTableFooter/PaginationTableFooter';
import TableRow from './components/TableRow/TableRow';
import { PaginationTableProps } from './types';

library.add(fas);

const defaultOptions = {
  className: '',
  currentPage: 1,
  customFormatFunctions: {
    currency: {
      code: 'en-UK',
      options: {
        currency: 'GBP',
        style: 'currency',
      },
    },
    date: {
      library: 'date-fns',
      options: {},
    },
  },

  emptyRows: false,
  headerSeparator: false,
  info: {
    active: true,
  },
  lengthChange: {
    active: false,
    className: '',
  },
  lengthMenu: [5, 10, 15, 20],
  onRowClick: {
    active: false,
    excludeColumns: [],
    function: null,
    key: null,
    passEvent: false,
    useWholeObject: false,
  },
  perPage: 10,
  search: {
    active: false,
    className: '',
    columns: 'all',
    skipObjects: true,
    style: {},
  },
  selection: {
    active: false,
    backgroundColor: '#FFDAC1',
    buttons: [],
    className: '',
    component: null,
    key: null,
    maxCount: false,
  },
  showPagination: true,
  sort: {
    active: false,
    column: 0,
    direction: 'asc',
    excludeColumns: [],
  },
  stayOnPage: true,
  tableTitle: '',
};

export const usePaginationTable = ({
  header,
  body,
  ref,
}: PaginationTableProps) => {
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
}: PropsWithChildren<PaginationTableProps>) => {
  return (
    <PaginationTableProvider value={{ body, data, header, options, result }}>
      {children}
    </PaginationTableProvider>
  );
};

export const PaginationTable = forwardRef<
  HTMLInputElement,
  PaginationTableProps
>(({ data, header, body, options = {}, result }, ref) => {
  const { Table, selectionRows } = usePaginationTable({
    body,
    data,
    header,
    options,
    ref,
    result,
  });

  const mergedOptions = _.merge({}, defaultOptions, {
    ...options,
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
    search: {
      ...options.search,
      active:
        typeof options.search === 'undefined'
          ? defaultOptions.search.active
          : !!options.search,
    },
    selection: {
      ...options?.selection,
      active:
        typeof options?.selection === 'undefined'
          ? defaultOptions?.selection?.active
          : !!options.selection,
    },
    sort: {
      ...options.sort,
      active:
        typeof options.sort === 'undefined'
          ? defaultOptions.sort.active
          : !!options.sort,
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
});
