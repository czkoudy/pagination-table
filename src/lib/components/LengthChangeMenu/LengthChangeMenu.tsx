import { PaginationTableContext } from '@/lib/context/PaginationTableContext';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';

const LengthChangeMenu = () => {
  const table = useContext(PaginationTableContext);

  const handleOnChangePerPage = (e) => {
    table.setPerPage(parseInt(e.target.value, 10));
    table.setCurrentPage(1);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography sx={{ paddingRight: '10px', fontSize: '14px' }}>
        Rows per page:{' '}
      </Typography>

      <select onChange={handleOnChangePerPage} defaultValue={table.perPage}>
        {table.options.lengthMenu.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </Box>
  );
};

export default LengthChangeMenu;
