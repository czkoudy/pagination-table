import { useContext } from 'react';
import css from './searchbox.module.css';
import { PaginationTableContext } from '@/lib/context/PaginationTableContext';

const SearchBox = () => {
  const table = useContext(PaginationTableContext);
  return (
    <div style={{ padding: '10px', paddingRight: '0px' }}>
      Search:{' '}
      <input
        className={css.searchbox}
        type="text"
        value={table.searchString}
        onChange={(e) => table.setSearchString(e.target.value)}
        autoFocus
        // style={defaults.search.style}
      />
    </div>
  );
};

export default SearchBox;
