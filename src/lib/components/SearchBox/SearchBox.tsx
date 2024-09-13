import { useContext } from 'react';
import { PaginationTableContext } from '@/lib/context/PaginationTableContext';
import css from './searchbox.module.css';

const SearchBox = () => {
  const table = useContext(PaginationTableContext);
  return (
    <input
      className={css.searchbox}
      type="text"
      value={table?.searchString || ''}
      onChange={(e) => table.setSearchString(e.target.value)}
      autoFocus
      placeholder="Search"
    />
  );
};

export default SearchBox;
