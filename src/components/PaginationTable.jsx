/* eslint-disable no-prototype-builtins */
import './paginationtable.css';
import Pagination from './Pagination/Pagination';
import { format } from 'date-fns';
import React, { createElement, useEffect, useState } from 'react';

import _ from 'lodash';

const searchFunction = (data, searchString) => {
  const columns = data[0] && Object.keys(data[0]);
  return data.filter((row) =>
    columns.some((column) => {
      if (typeof row[column] === 'string') {
        return row[column].indexOf(searchString) > -1;
      }
    })
  );
};

function PaginationTable({ data, header, body, onRowClick, options }) {
  const defaults = {
    search: {
      active: options.search || false,
      className: options.search.className || '',
    },
    sortable: {
      active: options.sortable || false,
      column: '',
      direction: '',
    },
    info: options.info || false,
    emptyRows: options.emptyRows || false,
    perPage: options.perPage || 10,
    className: options.className || '',
    pagination: options.pagination || null,
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState({
    column: defaults.sortable.active ? body[defaults.sortable.column]?.key || body[0].key : body[0].key,
    direction: defaults.sortable.active ? defaults.sortable.direction || 'asc' : 'asc',
  });
  const [searchString, setSearchString] = useState('');
  const [sortedData, setSortedData] = useState([]);

  const firstIndex = (currentPage - 1) * defaults.perPage;
  const lastIndex = (currentPage - 1) * defaults.perPage + defaults.perPage;
  const numberOfEmptyRows = defaults.perPage - (sortedData.length % defaults.perPage);

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      if (defaults.search) {
        setSortedData(_.orderBy(searchFunction(data, searchString), [order.column], [order.direction]));
      } else {
        setSortedData(_.orderBy(data, [order.column], [order.direction]));
      }
    }
    return () => {
      isCancelled = true;
    };
  }, [data, order.column, order.direction, searchString]);

  if (!data) {
    return null;
  }

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const onRowClickHandler = (entry) => {
    if (onRowClick) {
      const key = header.find((x) => x.onRowClick !== '').onRowClick;
      onRowClick(entry[key]);
    }
  };

  const handleOrderColumn = (index) => {
    if (defaults.sortable) {
      setOrder((prevState) => ({
        ...prevState,
        direction: prevState.direction === 'desc' ? 'asc' : 'desc',
        column: body[index].key,
      }));
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
        <td key={index} title={field.title || ''} className='column'>
          {useDotValue !== undefined ? format(new Date(useDotValue), field.date) : null}
        </td>
      );
    } else if (field.hasOwnProperty('function')) {
      return (
        <td key={index} title={field.title || ''} className='column'>
          {field.function(useDotValue)}
        </td>
      );
    } else if (field.hasOwnProperty('component')) {
      return (
        <td key={index} title={field.title || ''} className='column'>
          {createElement(field.component, {
            ...field.props,
            checked: entry[field.props.checked],
            entry: entry,
          })}
        </td>
      );
    } else {
      return (
        <td key={index} title={field.title || ''} className='column'>
          {useDotValue}
        </td>
      );
    }
  };

  const getEmptyRows = (count) => {
    let rows = [];

    for (let index = 0; index < count; index++) {
      rows.push(
        <tr key={index} className='anti-hover'>
          <td colSpan={body.length}>&nbsp;</td>
        </tr>
      );
    }
    return rows;
  };

  const SearchBox = () => {
    return (
      <div>
        Search: <input className='searchbox' type='text' value={searchString} onChange={(e) => setSearchString(e.target.value)} autoFocus />
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className='table__top'>{defaults.search.active && <SearchBox className={defaults.search.className} />}</div>
      <table className={defaults.className}>
        <thead>
          <tr>
            {header
              .filter((x) => x.hide !== true)
              .map((field, index) => (
                <th key={index} width={field.width} onClick={(e) => handleOrderColumn(index)} style={{ cursor: 'pointer' }} title={field.title || ''}>
                  {field.label}
                  {defaults.sortable.active && body[index].key === order.column && order.direction === 'desc' && <i className='arrow up'></i>}
                  {defaults.sortable.active && body[index].key === order.column && order.direction === 'asc' && <i className='arrow down'></i>}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.slice(firstIndex, lastIndex).map((entry) => (
            <tr key={entry._id || entry.id || entry.index || entry.GUID} onClick={() => onRowClickHandler(entry)} style={{ cursor: 'pointer' }}>
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
  );
}

export default PaginationTable;
