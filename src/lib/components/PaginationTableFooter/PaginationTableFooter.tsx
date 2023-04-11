import { useContext } from 'react';
import TablePagination from '../TablePagination/TablePagination';
import { PaginationTableContext } from '@/lib/context/PaginationTableContext';
import css from './paginationtablefooter.module.css';

const PaginationTableFooter = () => {
  const table = useContext(PaginationTableContext);

  const handleChangePage = (newPage: number) => {
    table.setCurrentPage(newPage);
  };

  return (
    <div className={css.paginationtablefooter}>
      {table.data.length > table.perPage && table.options.showPagination ? (
        <TablePagination
          count={Math.ceil(table.data.length / table.perPage)}
          page={table.currentPage}
          onChange={handleChangePage}
          // options={defaults.pagination}
        />
      ) : (
        <div>&nbsp;</div>
      )}
      <div>
        {table.options.info.active &&
          `${table.options.info.startText} ${table.firstIndex + 1} to ${
            table.lastIndex > table.data.length
              ? table.data.length
              : table.lastIndex
          } of ${table.data.length} ${table.options.info.endText}`}
      </div>
    </div>
  );
};

export default PaginationTableFooter;
