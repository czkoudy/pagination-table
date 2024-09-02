import { useContext } from 'react';
import { PaginationTableContext } from '@/lib/context/PaginationTableContext';
import { Box } from '@mui/material';
import css from './searchbox.module.css';

const SearchBox = () => {
  const table = useContext(PaginationTableContext);
  return (
    <Box sx={{ paddingRight: '10px' }}>
      Search:{' '}
      <input
        className={css.searchbox}
        type="text"
        value={table.searchString}
        onChange={(e) => table.setSearchString(e.target.value)}
        autoFocus
        // style={defaults.search.style}
      />
    </Box>
  );
};

export default SearchBox;
