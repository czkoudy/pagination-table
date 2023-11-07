import { PaginationTableContext } from '@/lib/context/PaginationTableContext';
import { useContext, useState } from 'react';
import { IconButton } from '@mui/material';
import TableCell from '../TableCell';
import css from './tablerow.module.css';

interface TableRowProps {
  emptyRows: boolean;
  index: number;
  entry: {};
  body: {};
  header: {};
}

const TableRow = ({
  emptyRows = false,
  index,
  entry,
  body,
  header,
}: TableRowProps) => {
  const table = useContext(PaginationTableContext);
  const [nestedRows, setNestedRows] = useState(false);
  const isLastPage =
    table.currentPage === Math.ceil(table.data.length / table.perPage);

  const onRowClickHandler = (e, entry) => {
    e.stopPropagation();
    e.preventDefault();
    if (
      e.target.classList.contains('row-checkbox') ||
      e.target?.closest('td')?.classList.contains('exclude-row-click')
    ) {
      return;
    }
    if (table.options.onRowClick.active) {
      if (typeof table.options.onRowClick.function === 'function') {
        const { key } = table.options.onRowClick;
        if (table.options.onRowClick.passEvent) {
          table.options.onRowClick.function(e, entry[key]);
        } else if (Array.isArray(key)) {
          table.options.onRowClick.function(...key.map((x) => entry[x]));
        } else {
          table.options.onRowClick.function(entry[key]);
        }
      } else {
        throw new Error('Function Must be defined in onRowClick handler!');
      }
    }
  };

  const onRowSelection = (e, entry) => {
    try {
      const { key } = table.options.selection;

      if (!key) {
        throw new Error('No key set in selection Object!');
      }
      const newArray = [...table.selectionRows];
      const exists = newArray.find((x) => x === entry[key]);
      if (exists) {
        const index = newArray.indexOf(entry[key]);
        if (index > -1) newArray.splice(index, 1);
        table.setSelectedPerPage((prevState) => ({
          ...prevState,
          [table.currentPage]: prevState[table.currentPage] - 1,
        }));
      } else {
        table.setSelectedPerPage((prevState) => ({
          ...prevState,
          [table.currentPage]: Number.isNaN(prevState[table.currentPage])
            ? 2
            : prevState[table.currentPage] + 1,
        }));
        newArray.push(entry[key]);
      }
      table.setSelectionRows(newArray);
    } catch (error) {}
  };

  const handleOnNestedRowClick = (entry) => {
    setNestedRows((prevState) => ({
      [entry._id]:
        prevState[entry._id] === undefined ? true : !prevState[entry._id],
    }));
  };

  if (emptyRows && table.options.emptyRows && isLastPage) {
    const numberOfEmptyRows =
      table.perPage - (table.data.length % table.perPage);

    const rowsArray = Array.from(Array(numberOfEmptyRows).keys());
    const Rows = rowsArray.map((x, index) => (
      <tr key={index} className={css.anti_hover}>
        <td
          colSpan={
            table.options.selection.active
              ? table.body.length + 1
              : table.body.length
          }
        >
          &nbsp;
        </td>
      </tr>
    ));

    return Rows;
  }
  if (!emptyRows) {
    return (
      <>
        <tr
          key={index}
          id={entry[header.find((x) => x.onRowClick !== '').onRowClick] || null}
          onClick={(e) => onRowClickHandler(e, entry)}
          className={nestedRows[entry._id] ? css.row__selected : ''}
        >
          {table.options?.nestedRows && entry?.children?.length > 0 && (
            <td
              className={`${css.row__checkbox} exclude-row-click row-checkbox`}
            >
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => handleOnNestedRowClick(entry)}
                sx={
                  {
                    // marginLeft: '4px',
                    // padding: '14px',
                    // paddingRight: '4px',
                  }
                }
              >
                <i
                  className={`${css.arrow} ${
                    nestedRows[entry._id] ? css.down : css.right
                  }`}
                />
              </IconButton>
            </td>
          )}

          {table.options?.nestedRows && !entry?.children && <th width="20px" />}
          {table.options.selection.active && (
            <td
              className={`${css.row__checkbox} exclude-row-click row-checkbox`}
            >
              <input
                type="checkbox"
                onChange={(e) => onRowSelection(e, entry)}
                id={entry[table.options.selection.key]}
                checked={table.selectionRows.includes(
                  entry[table.options.selection.key]
                )}
                disabled={
                  table.options.selection.maxCount &&
                  table.selectionRows.length >=
                    table.options.selection.maxCount &&
                  !table.selectionRows.includes(
                    entry[table.options.selection.key]
                  )
                }
                className={`row-checkbox ${table.options.selection.className}`}
              />
            </td>
          )}
          {body?.map((field, index) => {
            return (
              <TableCell
                key={index}
                defaults={table.options}
                index={index}
                field={field}
                entry={entry}
                columnSpan={1}
              />
            );
          })}
        </tr>
        {nestedRows[entry._id] &&
          entry?.children?.map((field2, index) => {
            return (
              <tr
                key={index}
                className={css.subrow}
                onClick={(e) => onRowClickHandler(e, entry)}
              >
                <td />
                {body?.map((field, index) => {
                  return (
                    <TableCell
                      key={index}
                      defaults={table.options}
                      index={index}
                      field={field}
                      entry={field2}
                      columnSpan={1}
                    />
                  );
                })}
              </tr>
            );
          })}
      </>
    );
  }
  return null;
};

export default TableRow;

// table.currentPage ===
//   Math.ceil(table.data.length / table.perPage) &&
// getEmptyRows(table)}
