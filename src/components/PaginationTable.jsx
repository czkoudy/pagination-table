/* eslint-disable no-prototype-builtins */
import css from './paginationtable.module.css';
import Pagination from './Pagination/Pagination';
import { format } from 'date-fns';
import React, { createElement, useEffect, useState } from 'react';

import _ from 'lodash';

const searchFunction = (data, searchString) => {
  const columns = data[0] && Object.keys(data[0]);
  return data.filter((row) =>
    columns.some((column) => {
      if (typeof row[column] === 'string') {
        return row[column].toLowerCase().indexOf(searchString.toLowerCase()) > -1;
      } else if (typeof row[column] === 'number') {
        return (row[column] + '').indexOf(searchString) > -1;
      }
    })
  );
};

const useStateWithCallback = (initialState, callback) => {
  const [state, setState] = useState(initialState);

  useEffect(() => callback(state), [state, callback]);

  return [state, setState];
};

export function usePaginationTable({ data, header, body, options }) {
  const defaults = {
    search: {
      active: options?.search || false,
      className: options?.search?.className || '',
    },
    sortable: {
      active: options?.sortable || false,
      column: options?.sortable?.column || 0,
      direction: options?.sortable?.direction || 'asc',
      excludeColumns: options?.sortable?.excludeColumns || [],
    },
    info: options?.info || false,
    emptyRows: options?.emptyRows || false,
    perPage: options?.perPage || 10,
    className: options?.className || '',
    pagination: options?.pagination || null,
    onRowClick: {
      active: options?.onRowClick || null,
      function: options?.onRowClick?.function || null,
      key: options?.onRowClick?.key || 'id',
    },
    selection: {
      active: options?.selection || false,
      backgroundColor: options?.selection?.backgroundColor || 'rgba(255, 165, 0, 0.5)',
      key: options?.selection?.key || null,
      info: options?.selection?.info || false,
      className: options?.selection?.className || '',
      onlyOne: options?.selection?.onlyOne || false,
    },
    loading: options?.loading?.component || options?.loading?.text || 'Loading',
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState({
    column: defaults.sortable.active ? body[defaults.sortable.column]?.key || body[0].key : body[0].key,
    direction: defaults.sortable.active ? defaults.sortable.direction || 'asc' : 'asc',
  });
  const [searchString, setSearchString] = useState('');
  const [sortedData, setSortedData] = useStateWithCallback([], (sortedData) => {
    setLoading(false);
  });
  const [selectionRows, setSelectionRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const firstIndex = (currentPage - 1) * defaults.perPage;
  const lastIndex = (currentPage - 1) * defaults.perPage + defaults.perPage;
  const numberOfEmptyRows = defaults.perPage - (sortedData.length % defaults.perPage);

  useEffect(() => {
    setLoading(true);
    let isCancelled = false;
    if (!isCancelled) {
      if (defaults.search) {
        setSortedData(_.orderBy(searchFunction(data, searchString), [order.column], [order.direction]));
      } else {
        setSortedData(_.orderBy(data.toLowerCase(), [order.column], [order.direction]));
      }
    }
    return () => {
      isCancelled = true;
    };
  }, [order.column, order.direction, searchString, currentPage, selectionRows, setSortedData, data]);

  if (!data) {
    return null;
  }

  console.log(loading);

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const onRowClickHandler = (e, entry) => {
    if (defaults.onRowClick) {
      if (typeof defaults.onRowClick.function === 'function') {
        const key = defaults.onRowClick.key;
        defaults.onRowClick.function(entry[key]);
      }
    }
  };

  const handleOrderColumn = (index) => {
    if (defaults?.sortable.active && !defaults.sortable.excludeColumns.includes(index)) {
      setOrder((prevState) => ({
        ...prevState,
        direction: prevState.direction === 'desc' ? 'asc' : 'desc',
        column: body[index].key,
      }));
      setCurrentPage(1);
    }
  };

  const CustomTD = ({ index, field, entry }) => {
    let useDotValue;
    if (field.hasOwnProperty('useDot')) {
      useDotValue = _.get(entry, field.key);
    } else {
      useDotValue = entry[field.key];
    }

    if (field.hasOwnProperty('date')) {
      return (
        <td key={index} title={field.title || ''} className={css.column}>
          {useDotValue !== undefined ? format(new Date(useDotValue), field.date) : null}
        </td>
      );
    } else if (field.hasOwnProperty('function')) {
      return (
        <td key={index} title={field.title || ''} className={css.column}>
          {field.function(useDotValue)}
        </td>
      );
    } else if (field.hasOwnProperty('component')) {
      return (
        <td key={index} title={field.title || ''} className={css.column}>
          {createElement(field.component, {
            ...field.props,
            checked: entry[field.props.checked],
            entry: entry,
          })}
        </td>
      );
    } else {
      return (
        <td key={index} title={field.title || ''} className={css.column}>
          {useDotValue}
        </td>
      );
    }
  };

  const getEmptyRows = (count) => {
    let rows = [];

    for (let index = 0; index < count; index++) {
      rows.push(
        <tr key={index} className={css.anti_hover}>
          <td colSpan={defaults.selection.active ? body.length + 1 : body.length}>&nbsp;</td>
        </tr>
      );
    }
    return rows;
  };

  const SearchBox = () => {
    return (
      <div>
        Search: <input className={css.searchbox} type='text' value={searchString} onChange={(e) => setSearchString(e.target.value)} autoFocus />
      </div>
    );
  };

  const onRowSelection = (e, entry) => {
    try {
      const key = defaults.selection.key;

      if (!key) {
        throw new Error('No key set in selection Object!');
      }
      const newArray = [...selectionRows];
      const exists = newArray.find((x) => x === entry[key]);

      if (exists) {
        const index = newArray.indexOf(entry[key]);
        if (index > -1) newArray.splice(index, 1);
      } else {
        newArray.push(entry[key]);
      }
      setSelectionRows(newArray);
    } catch (error) {}
  };

  const PaginationTable2 = () => {
    return (
      <>
        {loading && defaults.loading}
        {!loading && (
          <React.Fragment>
            <div className={css.table__top}>{defaults.search.active && <SearchBox className={defaults.search.className} />}</div>
            <table className={defaults.className}>
              <thead>
                {defaults.selection.info && selectionRows.length > 0 && (
                  <tr>
                    <th colSpan={header.length}>{selectionRows.length} selected</th>
                  </tr>
                )}
                <tr>
                  {defaults.selection.active && <th width='20px'></th>}
                  {header
                    .filter((x) => x.hide !== true)
                    .map((field, index) => (
                      <th key={index} width={field.width} onClick={(e) => handleOrderColumn(index)} style={{ cursor: 'pointer' }} title={field.title || ''}>
                        {field.label}
                        {defaults.sortable.active && body[index].key === order.column && order.direction === 'desc' && <i className={`${css.arrow} ${css.up}`}></i>}
                        {defaults.sortable.active && body[index].key === order.column && order.direction === 'asc' && <i className={`${css.arrow} ${css.down}`}></i>}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {sortedData.slice(firstIndex, lastIndex).map((entry) => (
                  <tr
                    key={entry._id || entry.id || entry.index || entry.GUID}
                    id={entry[header.find((x) => x.onRowClick !== '').onRowClick] || null}
                    onClick={(e) => onRowClickHandler(e, entry)}
                    style={{ cursor: 'pointer', backgroundColor: selectionRows.includes(entry[defaults.selection.key]) ? defaults.selection.backgroundColor : '' }}
                  >
                    {defaults.selection.active && (
                      <td>
                        <input
                          type='checkbox'
                          onChange={(e) => onRowSelection(e, entry)}
                          id={entry[defaults.selection.key]}
                          checked={selectionRows.includes(entry[defaults.selection.key])}
                          disabled={defaults.selection.onlyOne && selectionRows.length >= 1 && !selectionRows.includes(entry[defaults.selection.key])}
                        />
                      </td>
                    )}
                    {body.map((field, index) => (
                      <CustomTD key={index} index={index} field={field} entry={entry} />
                    ))}
                  </tr>
                ))}
                {defaults.emptyRows && currentPage === Math.ceil(sortedData.length / defaults.perPage) && sortedData.length > defaults.perPage && getEmptyRows(numberOfEmptyRows)}
              </tbody>
            </table>

            <br />
            <div className='d-flex justify-content-between'>
              {sortedData.length > defaults.perPage ? <Pagination count={Math.ceil(sortedData.length / defaults.perPage)} page={currentPage} onChange={handleChangePage} options={defaults.pagination} /> : <div>&nbsp;</div>}
              {defaults.info && `Showing ${firstIndex + 1} to ${lastIndex > sortedData.length ? sortedData.length : lastIndex} of ${sortedData.length} records`}
            </div>
          </React.Fragment>
        )}
      </>
    );
  };

  return { PaginationTable2, selectionRows, loading };
}

export const PaginationTable = ({ data, header, body, options, result }) => {
  const { PaginationTable2: Table, selectionRows } = usePaginationTable({ data, header, body, options });
  useEffect(() => {
    if (result) {
      result({ selectionRows });
    }
  }, [data, result, selectionRows]);

  return <Table />;
};
