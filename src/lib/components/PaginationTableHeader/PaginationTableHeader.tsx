import { useContext } from 'react';
import SearchBox from '../SearchBox';
import { PaginationTableContext } from '@/lib/context/PaginationTableContext';
import css from './paginationtableheader.module.css';
import LengthChangeMenu from '../LengthChangeMenu';
const PaginationTableHeader = () => {
  const table = useContext(PaginationTableContext);

  return (
    <div className={css.paginationtableheader}>
      {table.options.lengthChange.active && <LengthChangeMenu />}

      <span className={css.paginationtableheader__title}>
        {table.options.tableTitle}
      </span>
      {table.options.search.active && <SearchBox />}
    </div>
  );
};

export default PaginationTableHeader;
