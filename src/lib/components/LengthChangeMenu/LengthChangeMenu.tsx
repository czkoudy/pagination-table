import { PaginationTableContext } from '@/lib/context/PaginationTableContext';
import { useContext } from 'react';

const LengthChangeMenu = () => {
  const table = useContext(PaginationTableContext);

  const handleOnChangePerPage = (e) => {
    table.setPerPage(parseInt(e.target.value, 10));
    table.setCurrentPage(1);
  };

  return (
    <div>
      Show{' '}
      <select onChange={handleOnChangePerPage} defaultValue={table.perPage}>
        {table.options.lengthMenu.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>{' '}
      entries
      {/* <input className={css.searchbox} type='text' value={searchString} onChange={(e) => setSearchString(e.target.value)} autoFocus /> */}
    </div>
  );
};

export default LengthChangeMenu;
