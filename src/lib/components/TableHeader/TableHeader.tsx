import { useContext } from 'react';
import { PaginationTableContext } from '@/lib/context/PaginationTableContext';
import { handleOrderColumn, handleSelectAllOnPage } from '@/lib/utilz';
import css from './tableheader.module.css';

const TableHeader = () => {
  const table = useContext(PaginationTableContext);
  const {
    data,
    selectedPerPage,
    currentPage,
    perPage,
    selectionRows,
    setSelectionRows,
    setSelectedPerPage,
  } = table;

  return (
    <thead>
      <tr>
        {table.options.nestedRows && <th width="20px" />}
        {table.options.selection.active && (
          <th width="20px">
            <input
              type="checkbox"
              onChange={() =>
                selectedPerPage[currentPage] === perPage
                  ? handleSelectAllOnPage({
                      reverse: true,
                      selectionRows,
                      data,
                      currentPage,
                      perPage,
                      setSelectionRows,
                      setSelectedPerPage,
                    })
                  : handleSelectAllOnPage({
                      reverse: false,
                      selectionRows,
                      data,
                      currentPage,
                      perPage,
                      setSelectionRows,
                      setSelectedPerPage,
                    })
              }
              checked={
                table.selectedPerPage[table.currentPage] === table.perPage
              }
              disabled={
                table.options.selection.maxCount &&
                table.selectionRows.length >= defaults.selection.maxCount &&
                !table.selectionRows.includes(entry[defaults.selection.key])
              }
              className={`row-checkbox ${table.options.selection.className}`}
            />
          </th>
        )}
        {table.header
          .filter((x) => x.hide !== true)
          .map((field, index) => (
            <th
              key={index}
              width={field.width}
              onClick={(e) => handleOrderColumn({ context: table, index })}
              style={{ cursor: 'pointer' }}
              title={field.title || ''}
              className={`${css.column} ${
                field.align === 'center'
                  ? css.column_align_center
                  : field.align === 'right'
                  ? css.column_align_right
                  : ''
              }`}
            >
              {field.label}
              {table.options.sort.active &&
                table.body[index].key === table.order.column &&
                table.order.direction === 'desc' && (
                  <i className={`${css.arrow} ${css.up}`} />
                )}

              {table.options.sort.active &&
                table.body[index].key === table.order.column &&
                table.order.direction === 'asc' && (
                  <i className={`${css.arrow} ${css.down}`} />
                )}
            </th>
          ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
