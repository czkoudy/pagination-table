import { useContext } from 'react';
import { Box } from '@mui/material';
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

  const { headerSeparator } = table?.options;

  const filteredHeaders = table.header.filter((x) => x.hide !== true);

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
                      currentPage,
                      data,
                      maxCount: table?.options.selection.maxCount,
                      perPage,
                      reverse: true,
                      selectionRows,
                      setSelectedPerPage,
                      setSelectionRows,
                    })
                  : handleSelectAllOnPage({
                      currentPage,
                      data,
                      maxCount: table?.options.selection.maxCount,
                      perPage,
                      reverse: false,
                      selectionRows,
                      setSelectedPerPage,
                      setSelectionRows,
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
        {filteredHeaders.map((field, index) => {
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
                field.align === 'left'
                  ? css.column_align_left
                  : field.align === 'right'
                    ? css.column_align_right
                    : css.column_align_center
              }`}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ flexGrow: 1 }}>
                  {field.label}
                  {table.options.sort.active &&
                    !table?.options.sort?.excludeColumns?.includes(index) &&
                    table.order.direction === 'desc' && (
                      <FontAwesomeIcon
                        icon="fa-solid fa-arrow-down-wide-short"
                        size="xs"
                        style={{
                          color:
                            table.body[index].key === table.order.column
                              ? 'black'
                              : 'lightgray',
                          paddingLeft: '5px',
                        }}
                      />
                    )}

                  {table.options.sort.active &&
                    table.order.direction === 'asc' &&
                    !table?.options.sort?.excludeColumns?.includes(index) && (
                      <FontAwesomeIcon
                        icon="fa-solid fa-arrow-up-wide-short"
                        style={{
                          color:
                            table.body[index].key === table.order.column
                              ? 'black'
                              : 'lightgray',
                          paddingLeft: '5px',
                        }}
                        size="xs"
                      />
                    )}
                </Box>

                <Box style={{ color: 'lightgray' }}>
                  {headerSeparator &&
                    index !== filteredHeaders?.length - 1 &&
                    ' | '}
                </Box>
              </Box>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
