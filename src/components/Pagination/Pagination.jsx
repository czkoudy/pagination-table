import React from 'react';
import './pagination.css';

function Pagination({ count, page, onChange, siblings = 2, boundary = 0 }) {
  const range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };

  const handleOnClick = (pageNumber) => {
    onChange(pageNumber);
    // console.log(pageNumber)
  };

  const handleOnClickPrev = () => {
    if (page - 1 <= 0) {
    } else {
      onChange(page - 1);
    }
  };

  const handleOnClickNext = () => {
    if (page + 1 > count) {
    } else {
      onChange(page + 1);
    }
  };

  const getPageNumbers = () => {
    if (count <= 10) {
      const pages = range(2, count);

      return [1, ...pages];
    }
    const startPage = Math.max(2, page - siblings);
    const endPage = Math.min(count - 1, page + siblings);
    const pages = range(startPage, endPage);

    return [1, ...pages, count];
  };

  return (
    <div className='pagination'>
      {page !== 1 && (
        <div className='pagination__nav' onClick={handleOnClickPrev}>
          <i className='arrow left'></i>
        </div>
      )}
      {getPageNumbers().map((item) => (
        <div key={item} className={item === page ? 'pagination__item_active' : 'pagination__item'} onClick={() => handleOnClick(item)}>
          {item}
        </div>
      ))}
      {page !== count && (
        <div className='pagination__nav' onClick={handleOnClickNext}>
          <i className='arrow right'></i>
        </div>
      )}
    </div>
  );
}

// Pagination.defaultProps = {}

export default Pagination;
