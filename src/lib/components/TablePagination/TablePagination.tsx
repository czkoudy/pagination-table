import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './tablepagination.module.css';

const TablePagination = ({ count, page, onChange, options }) => {
  const defaultProps = {
    siblings: 1,
    boundary: 1,
    ...options,
  };
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
    const totalNumbers = defaultProps.siblings * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (count > totalBlocks) {
      const startPage = Math.max(2, page - defaultProps.siblings);
      const endPage = Math.min(count - 1, page + defaultProps.siblings);
      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = count - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill:
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = ['LEFT', ...extraPages, ...pages];
          break;

        case !hasLeftSpill && hasRightSpill:
          const extraPages3 = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages3, 'RIGHT'];
          break;
        default:
          const extraPages4 = range(page - 1, page + 1);
          pages = ['LEFT', ...extraPages4, 'RIGHT'];
          break;
      }

      return [1, ...pages, count];
    }
    return range(1, count);
  };

  return (
    <div className={css.pagination}>
      <div className={css.pagination__nav_left} onClick={handleOnClickPrev}>
        <FontAwesomeIcon icon="fa-solid fa-angle-left" />
        {/* <i className={`${css.arrow} ${css.left}`} /> */}
      </div>

      {getPageNumbers().map((item) => {
        if (item === 'LEFT' || item === 'RIGHT')
          return (
            <div className={css.pagination__item_spill} key={item}>
              ...
            </div>
          );

        return (
          <div
            key={item}
            className={
              item === page ? css.pagination__item_active : css.pagination__item
            }
            onClick={() => handleOnClick(item)}
          >
            {item}
          </div>
        );
      })}

      <div className={css.pagination__nav_right} onClick={handleOnClickNext}>
        {/* <i className={`${css.arrow} ${css.right}`} /> */}
        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
      </div>
    </div>
  );
};

export default TablePagination;
