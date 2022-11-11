/* eslint-disable no-prototype-builtins */
import { format } from 'date-fns';
import _ from 'lodash';
import React, { createElement, useEffect, useState } from 'react';
import Pagination from './Pagination/Pagination';
import css from './paginationtable.module.css';

const useStateWithCallback = (initialState, callback) => {
  const [state, setState] = useState(initialState);

  useEffect(() => callback(state), [state, callback]);

  return [state, setState];
};

export const usePaginationTable = ({ data, header, body, options }) => {
  const defaults = {
    search: {
      active: options?.search ? true : true,
      columns: options?.search?.columns || 'all',
      style: options?.search?.style || {},
      className: options?.search?.className || '',
    },
    sort: {
      active: options?.sort ? true : false,
      column: options?.sort?.column || 0,
      direction: options?.sort?.direction || 'asc',
      excludeColumns: options?.sort?.excludeColumns || [],
    },
    tableTitle: options.tableTitle || '',
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
      passEvent: options?.onRowClick?.passEvent || false,
      excludeColumns: options?.onRowClick?.excludeColumns || [],
    },
    selection: {
      active: options?.selection || false,
      backgroundColor: options?.selection?.backgroundColor || '#FFDAC1',
      key: options?.selection?.key || null,
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
  const [selectedPerPage, setSelectedPerPage] = useState({});

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

        if (body[column].useWholeObject) {
          useDotValue = row;
        } else if (body[column].key.includes('.') && !body[column].useWholeObject) {
          useDotValue = _.get(row, body[column].key);
        } else if (!body[column].useWholeObject) {
          useDotValue = row[body[column]['key']];
        }
        log('dotValue:' + useDotValue);

        if (typeof useDotValue === 'string') {
          return useDotValue.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
        } else if (typeof useDotValue === 'number') {
          return (useDotValue + '').indexOf(searchString) > -1;
        } else if (Array.isArray(useDotValue)) {
          return useDotValue.includes(searchString);
        } else {
          return useDotValue[body[column]['key']] + ''.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
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
  }, [perPage, order.column, order.direction, searchString, data]);

  // perPage, firstIndex, lastIndex, order.column, order.direction, searchString, currentPage, selectionRows, setSortedData, data

  if (!data) {
    return null;
  }

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const onRowClickHandler = (e, entry) => {
    if (e.target.classList.contains('row-checkbox') || e.target.classList.contains('exclude-row-click')) {
    } else {
      if (defaults.onRowClick) {
        if (typeof defaults.onRowClick.function === 'function') {
          const key = defaults.onRowClick.key;
          if (defaults.onRowClick.passEvent) {
            defaults.onRowClick.function(e, entry[key]);
          } else if (Array.isArray(key)) {
            defaults.onRowClick.function(...key.map((x) => entry[x]));
          } else {
            defaults.onRowClick.function(entry[key]);
          }
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

    if (field.useWholeObject) {
      useDotValue = entry;
    } else if (field.key.includes('.') && !field.useWholeObject) {
      useDotValue = _.get(entry, field.key);
    } else if (!field.useWholeObject) {
      useDotValue = entry[field.key];
    }

    if (field.hasOwnProperty('date')) {
      return (
        <td key={index} title={field.title || ''} className={`${css.column} ${defaults.onRowClick.excludeColumns.includes(index) ? 'exclude-row-click' : ''}`}>
          {useDotValue !== undefined ? format(new Date(useDotValue), field.date) : null}
        </td>
      );
    } else if (field.hasOwnProperty('function')) {
      if (field.hasOwnProperty('useWholeObject') && field.useWholeObject === true) {
        return (
          <td key={index} title={field.title || ''} className={`${css.column} ${defaults.onRowClick.excludeColumns.includes(index) ? 'exclude-row-click' : ''}`}>
            {field.function(useDotValue)}
          </td>
        );
      } else {
        return (
          <td key={index} title={field.title || ''} className={`${css.column} ${defaults.onRowClick.excludeColumns.includes(index) ? 'exclude-row-click' : ''}`}>
            {field.function(useDotValue)}
          </td>
        );
      }
    } else if (field.hasOwnProperty('component')) {
      return (
        <td key={index} title={field.title || ''} className={`${css.column} ${defaults.onRowClick.excludeColumns.includes(index) ? 'exclude-row-click' : ''}`}>
          {createElement(field.component, {
            ...field.props,
            checked: entry[field.props.checked],
            entry: entry,
          })}
        </td>
      );
    } else {
      return (
        <td key={index} title={field.title || ''} className={`${css.column} ${defaults.onRowClick.excludeColumns.includes(index) ? 'exclude-row-click' : ''}`}>
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
      <div style={{ padding: '10px' }}>
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
        setSelectedPerPage((prevState) => ({
          ...prevState,
          [currentPage]: prevState[currentPage] - 1,
        }));
      } else {
        // setSelectedPerPage((prevState) => ({ ...prevState, [currentPage]: prevState[currentPage]++ }));
        setSelectedPerPage((prevState) => ({
          ...prevState,
          [currentPage]: Number.isNaN(prevState[currentPage]) ? 2 : prevState[currentPage] + 1,
        }));
        newArray.push(entry[key]);
      }
      setSelectionRows(newArray);
    } catch (error) {}
  };

  const handleSelectAllOnPage = ({ reverse }) => {
    const newArray = [...selectionRows];
    const newArray2 = sortedData.map((x) => x._id);
    const pageSelection = newArray2.splice(currentPage * perPage - perPage, perPage);

    pageSelection.forEach((y) => {
      const exists = newArray.find((x) => x === y);
      if (exists) {
        if (reverse) {
          const index = newArray.indexOf(y);
          if (index > -1) newArray.splice(index, 1);
        }
      } else {
        newArray.push(y);
      }
    });
    setSelectionRows(newArray);
    if (reverse) {
      setSelectedPerPage((prevState) => ({
        ...prevState,
        [currentPage]: 0,
      }));
    } else {
      setSelectedPerPage((prevState) => ({
        ...prevState,
        [currentPage]: perPage,
      }));
    }
  };

  const PaginationTable2 = () => {
    return (
      <>
        {loading && defaults.loading}
        {!loading && (
          <React.Fragment>
            <div className={css.table__top}>{defaults.lengthChange.active && <LengthChange className={defaults.lengthChange.className} />}</div>
            <div className={css.table__top} style={{ width: '100%', display: 'flex', paddingTop: '0px', justifyContent: 'space-between', backgroundColor: selectionRows.length > 0 ? '#FFDAC1' : '' }}>
              <div
                style={{
                  marginTop: '12px',
                  marginLeft: '10px',
                  fontWeight: 600,
                }}
              >
                {selectionRows.length === 0 && `${defaults.tableTitle}`}
                {selectionRows.length > 0 && `${selectionRows.length} ${selectionRows.length > 1 ? 'rows' : 'row'} selected`}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {defaults.search.active && <SearchBox className={defaults.search.className} />}
                {defaults?.selection?.buttons?.length > 0 &&
                  selectionRows?.length > 0 &&
                  defaults?.selection?.buttons?.map((button, index) => {
                    return createElement(
                      button.component,
                      {
                        key: index,
                        ...button.props,
                        style: {
                          width: '40px',
                          height: '40px',
                          marginTop: '5px',
                        },
                        onClick: () => {
                          button?.props?.onClick(selectionRows);
                          setSelectionRows([]);
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
            <table className={defaults.className} style={defaults.style}>
              <thead>
                <tr>
                  {defaults.selection.active && (
                    <th width='20px'>
                      <input
                        type='checkbox'
                        onChange={() => (selectedPerPage[currentPage] === perPage ? handleSelectAllOnPage({ reverse: true }) : handleSelectAllOnPage({ reverse: false }))}
                        checked={selectedPerPage[currentPage] === perPage}
                        // disabled={defaults.selection.maxCount && selectionRows.length >= defaults.selection.maxCount && !selectionRows.includes(entry[defaults.selection.key])}
                        // className={`row-checkbox ${defaults.selection.className}`}
                      />
                    </th>
                  )}
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
};

export const PaginationTable = ({ data, header, body, options, result }) => {
  const { PaginationTable2: Table, selectionRows } = usePaginationTable({ data, header, body, options });
  useEffect(() => {
    if (result) {
      result({ selectionRows });
    }
  }, [data, result, selectionRows]);

  return <Table />;
};
