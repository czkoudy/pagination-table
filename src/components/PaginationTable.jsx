/* eslint-disable no-prototype-builtins */
import Pagination from './Pagination/Pagination';
import { format } from 'date-fns';
import React, { createElement, useEffect, useState } from 'react';

import _ from 'lodash';

function PaginationTable({ data, header, body, perPage, onRowClick, sortable, info, className, pagination = null, emptyRows }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState({
    column: sortable ? body[sortable.column] || body[0].key : body[0].key,
    direction: sortable ? sortable.direction : 'asc',
  });
  const [sortedData, setSortedData] = useState([]);

  const firstIndex = (currentPage - 1) * perPage;
  const lastIndex = (currentPage - 1) * perPage + perPage;
  const numberOfEmptyRows = perPage - (sortedData.length % perPage);

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      setSortedData(_.orderBy(data, [order.column], [order.direction]));
    }
    return () => {
      isCancelled = true;
    };
  }, [data, order]);

  const handleChangePage = (newPage) => {
    // console.log('Test', newPage)
    setCurrentPage(newPage);
  };

  const onRowClickHandler = (entry) => {
    if (onRowClick) {
      const key = header.find((x) => x.onRowClick !== '').onRowClick;
      onRowClick(entry[key]);
    }
  };

  const handleOrderColumn = (index) => {
    if (sortable) {
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
        <td key={index} title={field.title || ''}>
          {format(new Date(useDotValue), field.date)}
        </td>
      );
    } else if (field.hasOwnProperty('function')) {
      return (
        <td key={index} title={field.title || ''}>
          {field.function(useDotValue)}
        </td>
      );
    } else if (field.hasOwnProperty('component')) {
      return (
        <td key={index} title={field.title || ''}>
          {createElement(field.component, {
            ...field.props,
            checked: entry[field.props.checked],
            entry: entry,
          })}
        </td>
      );
    } else {
      return (
        <td key={index} title={field.title || ''}>
          {useDotValue}
        </td>
      );
    }
  };

  const getEmptyRows = (count) => {
    let rows = [];

    for (let index = 0; index < count; index++) {
      rows.push(
        <tr key={index}>
          <td>&nbsp;</td>
        </tr>
      );
    }
    return rows;
  };

  return (
    <React.Fragment>
      <table className={className}>
        <thead>
          <tr>
            {header
              .filter((x) => x.hide !== true)
              .map((field, index) => (
                <th key={index} width={field.width} onClick={(e) => handleOrderColumn(index)} style={{ cursor: 'pointer' }} title={field.title || ''}>
                  {field.label}
                  {sortable && body[index].key === order.column && order.direction === 'desc' && <i className='arrow up'></i>}
                  {sortable && body[index].key === order.column && order.direction === 'asc' && <i className='arrow down'></i>}
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
          {emptyRows && currentPage === Math.ceil(sortedData.length / perPage) && getEmptyRows(numberOfEmptyRows)}
        </tbody>
      </table>
      <br />
      <div className='d-flex justify-content-between'>
        <Pagination count={Math.ceil(sortedData.length / perPage)} page={currentPage} onChange={handleChangePage} options={pagination} />
        {info && `Showing ${firstIndex + 1} to ${lastIndex > sortedData.length ? sortedData.length : lastIndex} of ${sortedData.length} records`}
      </div>
    </React.Fragment>
  );
}

export default PaginationTable;
