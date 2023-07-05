import { createElement, useContext } from 'react';
import { PaginationTableContext } from '@/lib/context/PaginationTableContext';
import SearchBox from '../SearchBox';
import css from './paginationtableheader.module.css';
import LengthChangeMenu from '../LengthChangeMenu';

const PaginationTableHeader = () => {
  const table = useContext(PaginationTableContext);

  if (!table) return null;

  return (
    <div
      className={`${css.paginationtableheader} ${
        table.selectionRows?.length > 0 && css.paginationtableheader__selection
      }`}
    >
      {table.options.lengthChange.active && <LengthChangeMenu />}
      <span className={`${css.paginationtableheader__title}`}>
        {table.selectionRows?.length <= 0 && table.options.tableTitle}
        {table.selectionRows?.length > 0 &&
          `${table.selectionRows?.length} selected`}
      </span>
      {table.options.search.active && <SearchBox />}
      <div className={css.paginationtableheader__selection}>
        {table.options.selection?.buttons?.length > 0 &&
          table.selectionRows?.length > 0 &&
          table.options.selection?.buttons?.map((button, index) => {
            return createElement(
              button.component,
              {
                key: index,
                style: {
                  width: '40px',
                  height: '40px',
                  marginTop: '5px',
                },
                ...button.props,
                onClick: () => {
                  button?.props?.onClick(table.selectionRows);
                  table.setSelectionRows([]);
                },
              },
              typeof button?.label === 'object'
                ? createElement(button.label, {
                    ...button.labelProps,
                  })
                : typeof button?.label === 'string'
                ? button.label
                : `Button ${index}`
            );
          })}
      </div>
    </div>
  );
};

export default PaginationTableHeader;
