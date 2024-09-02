import { useContext } from 'react';
import { PaginationTableContext } from '@/lib/context/PaginationTableContext';
import { Box, Typography } from '@mui/material';
import TablePagination from '../TablePagination/TablePagination';
import LengthChangeMenu from '../LengthChangeMenu';

const PaginationTableFooter = () => {
  const table = useContext(PaginationTableContext);

  const handleChangePage = (newPage: number) => {
    table.setCurrentPage(newPage);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px',
        // backgroundColor: 'blue',
      }}
    >
      {table.data.length > table.perPage && table.options.showPagination ? (
        <Box sx={{ display: 'flex' }}>
          <TablePagination
            count={Math.ceil(table.data.length / table.perPage)}
            page={table.currentPage}
            onChange={handleChangePage}
          />
        </Box>
      ) : (
        <div>&nbsp;</div>
      )}
      {table.options.info.active && (
        <Box
          sx={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            // backgroundColor: 'yellow',
            color: 'gray',
          }}
        >
          <Box>{table.options.lengthChange && <LengthChangeMenu />}</Box>

          <Box sx={{ marginLeft: '25px', marginRight: '25px' }}>
            <Typography sx={{ paddingRight: '10px', fontSize: '14px' }}>
              {`${table.firstIndex + 1}-${
                table.lastIndex > table.data.length
                  ? table.data.length
                  : table.lastIndex
              } of ${table.data.length}`}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PaginationTableFooter;
