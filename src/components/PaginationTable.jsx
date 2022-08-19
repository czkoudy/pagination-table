/* eslint-disable no-prototype-builtins */
import css from './paginationtable.module.css';
import Pagination from './Pagination/Pagination';
import { format } from 'date-fns';
import React, { createElement, useEffect, useState } from 'react';
import _ from 'lodash';

const useStateWithCallback = (initialState, callback) => {
  const [state, setState] = useState(initialState);

  useEffect(() => callback(state), [state, callback]);

  return [state, setState];
};

export function usePaginationTable({ data, header, body, options }) {
  const defaults = {
    search: {
      active: options?.search ? true : false,
      className: options?.search?.className || '',
      columns: options?.search?.columns || 'all',
      style: options?.search?.style || {},
    },
    sort: {
      active: options?.sort ? true : false,
      column: options?.sort?.column || 0,
      direction: options?.sort?.direction || 'asc',
      excludeColumns: options?.sort?.excludeColumns || [],
    },
    lengthChange: { active: options?.lengthChange ? true : false, className: options?.lengthChange?.className || '' },
    lengthMenu: options?.lengthMenu || [1, 5, 10, 15, 20],
    info: {
      active: options?.info || true,
      text: options?.info?.text || 'records',
    },
    emptyRows: options?.emptyRows || false,
    perPage: options?.perPage || 10,
    className: options?.className || '',
    style: options?.style || {},
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
      maxCount: options?.selection?.maxCount || false,
      buttons: options?.selection?.buttons || [],
    },
    loading: options?.loading?.component || options?.loading?.text || 'Loading',
    debug: options?.debug ? options?.debug : false,
  };
  const [perPage, setPerPage] = useState(defaults.perPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState({
    // column: defaults.sort.active ? body[defaults.sort.column]?.key || body[0].key : body[0].key,
    column: body[defaults.sort.column]?.key,
    direction: defaults.sort.direction,
  });
  const [searchString, setSearchString] = useState('');
  const [sortedData, setSortedData] = useStateWithCallback([], (sortedData) => {
    setLoading(false);
  });
  const [selectionRows, setSelectionRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const firstIndex = (currentPage - 1) * perPage;
  const lastIndex = (currentPage - 1) * perPage + perPage;
  const numberOfEmptyRows = perPage - (sortedData.length % perPage);

  const log = (message) => {
    if (defaults.debug) {
      console.log(message);
    }
  };

  const searchFunction = (data, searchString, search) => {
    let columns;
    if (search?.columns === 'all') {
      columns = data[0] && body.map((x, index) => index);
    } else {
      if (Array.isArray(search?.columns)) {
        columns = data[0] && search?.columns.map((x) => search.columns.includes(x) && x);
      }
    }
    log(columns);

    const filteredData = data.filter((row) =>
      columns.some((column) => {
        let useDotValue;
        if (body[column].key.includes('.')) {
          useDotValue = _.get(row, body[column]['key']);
        } else {
          useDotValue = row[body[column]['key']];
        }
        log('dotValue:' + useDotValue);

        if (typeof useDotValue === 'string') {
          return useDotValue.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
        } else if (typeof useDotValue === 'number') {
          return (useDotValue + '').indexOf(searchString) > -1;
        } else {
          return useDotValue + '';
        }
      })
    );
    setCurrentPage(1);

    return filteredData;
  };

  useEffect(() => {
    setLoading(true);
    let isCancelled = false;
    if (!isCancelled) {
      if (defaults.search.active) {
        setSortedData(_.orderBy(searchFunction(data, searchString, defaults.search), [order.column], [order.direction]));
      } else {
        setSortedData(_.orderBy(data, [(item) => (typeof _.get(item, order.column) === 'string' ? _.get(item, order.column)?.toLowerCase() : _.get(item, order.column))], [order.direction]));
      }
    }
    return () => {
      isCancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage, order.column, order.direction, searchString]);

  // perPage, firstIndex, lastIndex, order.column, order.direction, searchString, currentPage, selectionRows, setSortedData, data

  if (!data) {
    return null;
  }

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const onRowClickHandler = (e, entry) => {
    if (e.target.classList.contains('row-checkbox')) {
    } else {
      if (defaults.onRowClick) {
        if (typeof defaults.onRowClick.function === 'function') {
          const key = defaults.onRowClick.key;
          defaults.onRowClick.function(entry[key]);
        }
      }
    }
  };

  const handleOrderColumn = (index) => {
    if (defaults?.sort.active && !defaults.sort.excludeColumns.includes(index)) {
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
    if (field.key.includes('.')) {
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

  const handleOnChangePerPage = (e) => {
    setPerPage(parseInt(e.target.value));
    setCurrentPage(1);
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
        Search: <input className={css.searchbox} type='text' value={searchString} onChange={(e) => setSearchString(e.target.value)} autoFocus style={defaults.search.style} />
      </div>
    );
  };

  const LengthChange = () => {
    return (
      <div>
        Show{' '}
        <select onChange={handleOnChangePerPage} defaultValue={perPage}>
          {defaults.lengthMenu.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>{' '}
        entries
        {/* <input className={css.searchbox} type='text' value={searchString} onChange={(e) => setSearchString(e.target.value)} autoFocus /> */}
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
            <div className={css.table__top}>{defaults.lengthChange.active && <LengthChange className={defaults.lengthChange.className} />}</div>
            <div className={css.table__top}>{defaults.search.active && <SearchBox className={defaults.search.className} />}</div>
            <table className={defaults.className} style={defaults.style}>
              <thead>
                {defaults.selection.info && selectionRows.length > 0 && (
                  <tr>
                    <th colSpan={header.length}>
                      {selectionRows.length} selected{' '}
                      {defaults?.selection?.buttons?.length > 0 &&
                        defaults?.selection?.buttons?.map((button, index) => {
                          return createElement(
                            'button',
                            {
                              key: index,
                              className: button?.className || '',
                              onClick: () => {
                                button?.onClickFunction(selectionRows);
                                setSelectionRows([]);
                              },
                            },
                            button?.label ? button?.label : `Button ${index}`
                          );
                        })}
                    </th>
                  </tr>
                )}
                <tr>
                  {defaults.selection.active && <th width='20px'></th>}
                  {header
                    .filter((x) => x.hide !== true)
                    .map((field, index) => (
                      <th key={index} width={field.width} onClick={(e) => handleOrderColumn(index)} style={{ cursor: 'pointer' }} title={field.title || ''}>
                        {field.label}
                        {defaults.sort.active && body[index].key === order.column && order.direction === 'desc' && <i className={`${css.arrow} ${css.up}`}></i>}
                        {defaults.sort.active && body[index].key === order.column && order.direction === 'asc' && <i className={`${css.arrow} ${css.down}`}></i>}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {sortedData.slice(firstIndex, lastIndex).map((entry, index) => (
                  <tr key={index} id={entry[header.find((x) => x.onRowClick !== '').onRowClick] || null} onClick={(e) => onRowClickHandler(e, entry)} style={{ cursor: 'pointer', backgroundColor: selectionRows.includes(entry[defaults.selection.key]) ? defaults.selection.backgroundColor : '' }}>
                    {defaults.selection.active && (
                      <td className='row-checkbox'>
                        <input
                          type='checkbox'
                          onChange={(e) => onRowSelection(e, entry)}
                          id={entry[defaults.selection.key]}
                          checked={selectionRows.includes(entry[defaults.selection.key])}
                          disabled={defaults.selection.maxCount && selectionRows.length >= defaults.selection.maxCount && !selectionRows.includes(entry[defaults.selection.key])}
                          className={`row-checkbox ${defaults.selection.className}`}
                        />
                      </td>
                    )}
                    {body.map((field, index) => (
                      <CustomTD key={index} index={index} field={field} entry={entry} />
                    ))}
                  </tr>
                ))}
                {defaults.emptyRows && currentPage === Math.ceil(sortedData.length / perPage) && sortedData.length > perPage && getEmptyRows(numberOfEmptyRows)}
              </tbody>
            </table>

            <br />
            <div className='d-flex justify-content-between'>
              {sortedData.length > perPage ? <Pagination count={Math.ceil(sortedData.length / perPage)} page={currentPage} onChange={handleChangePage} options={defaults.pagination} /> : <div>&nbsp;</div>}
              {defaults.info.active && `Showing ${firstIndex + 1} to ${lastIndex > sortedData.length ? sortedData.length : lastIndex} of ${sortedData.length} ${defaults.info.text}`}
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
