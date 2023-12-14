/* eslint-disable no-case-declarations */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '@mui/material';

type TablePaginationProps = {
  count: number;
  page: number;
  onChange: (number: number) => void;
};

const TablePagination = ({ count, page, onChange }: TablePaginationProps) => {
  const defaultProps = {
    siblings: 1,
    boundary: 1,
  };
  const range = (from: number, to: number, step = 1) => {
    let i = from;
    const rangeArray = [];

    while (i <= to) {
      rangeArray.push(i);
      i += step;
    }

    return rangeArray;
  };

  const handleOnClick = (pageNumber: number) => {
    onChange(pageNumber);
  };

  const handleOnClickPrev = () => {
    if (page - 1 > 0) {
      onChange(page - 1);
    }
  };

  const handleOnClickNext = () => {
    if (page + 1 <= count) {
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
    <Box
      sx={{
        display: 'flex',
        width: '400px',
        // paddingLeft: '10px',
      }}
    >
      <Box
        sx={{
          border: '1px solid lightgray',
          borderRadius: '3px',
          padding: '7px',
          margin: '5px',
          marginLeft: '0px',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'whitesmoke',
            cursor: 'pointer',
          },
        }}
        onClick={handleOnClickPrev}
      >
        <FontAwesomeIcon icon="fa-solid fa-angle-left" />
      </Box>

      {getPageNumbers().map((item) => {
        if (item === 'LEFT' || item === 'RIGHT')
          return (
            <Box
              sx={{
                width: '35px',
                border: '1px solid transparent',
                padding: '6px',
                margin: '5px',
                height: '15px',
                textAlign: 'center',
              }}
              key={item}
            >
              ...
            </Box>
          );

        const isActive = item === page;

        return (
          <Box
            key={item}
            sx={{
              width: '35px',
              border: '1px solid lightgray',
              padding: '7px',
              margin: '5px',
              borderRadius: '3px',
              textAlign: 'center',
              backgroundColor: isActive ? 'rgb(251, 233, 188)' : '',
              borderColor: isActive ? 'rgb(253, 204, 79)' : '',
              fontWeight: 500,
              cursor: isActive ? 'pointer' : '',
              '&:hover': {
                backgroundColor: !isActive ? 'whitesmoke' : '',
                cursor: !isActive ? 'pointer' : '',
              },
            }}
            onClick={() => handleOnClick(item)}
          >
            {item}
          </Box>
        );
      })}

      <Box
        sx={{
          border: '1px solid lightgray',
          borderRadius: '3px',
          padding: '7px',
          margin: '5px',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'whitesmoke',
            cursor: 'pointer',
          },
        }}
        onClick={handleOnClickNext}
      >
        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
      </Box>
    </Box>
  );
};

export default TablePagination;
