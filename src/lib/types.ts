export type TableHeaderProps = {
  label: string;
  width?: string;
};

export type TableBodyProps = {
  key: string;
};

export type TableOptionsProps = {
  className: string;
  currentPage: 1;
  customFormatFunctions: () => void;
  emptyRows: boolean;
  headerSeparator: boolean;
  info: {
    active: boolean;
  };
  lengthChange: {
    active: boolean;
    className: string;
  };
  lengthMenu: [5, 10, 15, 20];
  onRowClick: {
    active: boolean;
    excludeColumns: [];
    function: null;
    key: null;
    passEvent: boolean;
    useWholeObject: boolean;
  };
  perPage: 10 | number;
  search: {
    active: boolean;
    className: string;
    columns: 'all';
    skipObjects: boolean;
    style: CSSStyleDeclaration;
  };
  selection: {
    active?: boolean;
    backgroundColor?: '#FFDAC1';
    buttons: [];
    className: string;
    component: null;
    key: null;
    maxCount: boolean;
  };
  selectionRows: any[];
  showPagination: boolean;
  sort: {
    active: boolean;
    column: 0 | number;
    direction: 'asc' | 'desc';
    excludeColumns: number[];
  };
  stayOnPage: boolean;
  tableTitle: string | null;
};

export type PaginationTableProps = {
  body: TableBodyProps[];
  data: any[];
  header: TableHeaderProps[];
  options: TableOptionsProps;
  result: any;
};

export type TableRowProps = {
  body: TableBodyProps;
  emptyRows: boolean;
  entry: object;
  header: TableHeaderProps;
  index: number;
};
