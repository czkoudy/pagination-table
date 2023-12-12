import { PaginationTableContext } from '@/lib/context/PaginationTableContext';
import { createElement, useContext, useState } from 'react';
import { IconButton } from '@mui/material';
import _ from 'lodash';
import TableCell from '../TableCell';
import css from './tablerow.module.css';

interface TableRowProps {
  emptyRows: boolean;
  index: number;
  entry: object;
  body: object;
  header: object;
}

const TableRow = ({
  emptyRows = false,
  index,
  entry,
  body,
  header,
}: TableRowProps) => {
  const table = useContext(PaginationTableContext);
  const { setSelectionRows, setSelectedPerPage } = table;
  const [nestedRows, setNestedRows] = useState(false);
  const isLastPage =
    table.currentPage === Math.ceil(table.data.length / table.perPage);

  const onRowClickHandler = (e, entry) => {
    let useDotValue;

    const { active, key, useWholeObject } = table.options.onRowClick;

    e.stopPropagation();
    e.preventDefault();
    if (
      e.target.classList.contains('row-checkbox') ||
      e.target?.closest('td')?.classList.contains('exclude-row-click')
    ) {
      return;
    }
    if (active) {
      if (useWholeObject) {
        useDotValue = entry;
      }
      if (Array.isArray(key)) {
        if (key[0]?.includes('.') && _.get(entry, key[0])) {
          useDotValue = _.get(entry, key[0]);
        } else if (key[1]?.includes('.') && _.get(entry, key[1])) {
          useDotValue = _.get(entry, key[1]);
        } else if (typeof entry[key[0]] !== 'undefined') {
          useDotValue = entry[key[0]];
        } else if (typeof entry[key[1]] !== 'undefined') {
          useDotValue = entry[key[1]];
        }
      } else if (key?.includes('.') && !useWholeObject) {
        useDotValue = _.get(entry, key);
      } else if (Array.isArray(key)) {
        useDotValue = key.map((x) => entry[x]).join(' ');
      } else {
        useDotValue = entry[key];
      }

      if (typeof table.options.onRowClick.function === 'function') {
        const { key } = table.options.onRowClick;
        if (table.options.onRowClick.passEvent) {
          table.options.onRowClick.function(e, useDotValue);
        } else if (Array.isArray(key)) {
          table.options.onRowClick.function(useDotValue);
        } else {
          table.options.onRowClick.function(useDotValue);
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

      const exists = !!newArray.find((x) => x === entry[key]);

      if (exists) {
        const arrayIndex = newArray.indexOf(entry[key]);

        if (arrayIndex > -1) newArray.splice(arrayIndex, 1);
        setSelectedPerPage((prevState) => ({
          ...prevState,
          [table.currentPage]: prevState[table.currentPage] - 1,
        }));
      } else {
        setSelectedPerPage((prevState) => ({
          ...prevState,
          [table.currentPage]: prevState[table.currentPage] + 1,
        }));
        newArray.push(entry[key]);
      }
      setSelectionRows(newArray);
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
                size="small"
                onClick={() => handleOnNestedRowClick(entry)}
                disableRipple
              >
                <i
                  className={`${css.arrow} ${
                    nestedRows[entry._id] ? css.down : css.right
                  }`}
                />
              </IconButton>
            </td>
          )}

          {table.options?.nestedRows && !entry?.children && <td>&nbsp;</td>}
          {table.options.selection.active && (
            <td
              className={`${css.row__checkbox} exclude-row-click row-checkbox`}
            >
              {table.options.selection.component ? (
                createElement(table.options.selection.component, {
                  key: entry[table.options.selection.key],
                  checked: table.selectionRows.includes(
                    entry[table.options.selection.key]
                  ),
                  disabled:
                    table.options.selection.maxCount &&
                    table.selectionRows.length >=
                      table.options.selection.maxCount &&
                    !table.selectionRows.includes(
                      entry[table.options.selection.key]
                    ),
                  onClick: (e) => onRowSelection(e, entry),
                })
              ) : (
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
              )}
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
                onClick={(e) => onRowClickHandler(e, field2)}
              >
                <td>&nbsp;</td>
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
