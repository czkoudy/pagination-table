import { useContext } from 'react';
import { PaginationTableContext } from '@/lib/context/PaginationTableContext';
import { handleOrderColumn, handleSelectAllOnPage } from '@/lib/utilz';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                      maxCount: table?.options.selection.maxCount,
                    })
                  : handleSelectAllOnPage({
                      reverse: false,
                      selectionRows,
                      data,
                      currentPage,
                      perPage,
                      setSelectionRows,
                      setSelectedPerPage,
                      maxCount: table?.options.selection.maxCount,
                    })
              }
              checked={
                table.selectedPerPage[table.currentPage] === table.perPage
              }
              disabled={
                false
                // table.options.selection.maxCount &&
                // table.selectionRows.length >= table.options.selection.maxCount
                // !table.selectionRows.includes(
                //   entry[table.options.selection.key]
                // )
              }
              className={`row-checkbox ${table.options.selection.className}`}
            />
          </th>
        )}
        {table.header
          .filter((x) => x.hide !== true)
          .map((field, index) => {
            const keyIsArray = Array.isArray(table.body[index].key);

            return (
              <th
                key={index}
                width={field.width}
                onClick={(e) =>
                  handleOrderColumn({
                    context: table,
                    index,
                  })
                }
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
                    <FontAwesomeIcon
                      icon="fa-solid fa-arrow-down-wide-short"
                      style={{ paddingLeft: '5px', color: 'gray' }}
                      size="xs"
                    />
                    // <i className={`${css.arrow} ${css.up}`} />
                  )}

                {table.options.sort.active &&
                  table.body[index].key === table.order.column &&
                  table.order.direction === 'asc' && (
                    // <i className={`${css.arrow} ${css.down}`} />
                    <FontAwesomeIcon
                      icon="fa-solid fa-arrow-up-wide-short"
                      style={{ paddingLeft: '5px', color: 'gray' }}
                      size="xs"
                    />
                  )}
              </th>
            );
          })}
      </tr>
    </thead>
  );
};

export default TableHeader;
