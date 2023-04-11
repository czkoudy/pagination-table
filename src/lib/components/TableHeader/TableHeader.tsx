import { useContext } from 'react';
import { PaginationTableContext } from '@/lib/context/PaginationTableContext';
import css from './tableheader.module.css';
import { handleOrderColumn } from '@/lib/utilz';

const TableHeader = () => {
  const table = useContext(PaginationTableContext);
  return (
    <thead>
      <tr>
        {table.header
          .filter((x) => x.hide !== true)
          .map((field, index) => (
            <th
              key={index}
              width={field.width}
              onClick={(e) => handleOrderColumn({ context: table, index })}
              style={{ cursor: 'pointer' }}
              title={field.title || ''}
            >
              {field.label}
              {table.options.sort.active &&
                table.body[index].key === table.order.column &&
                table.order.direction === 'desc' && (
                  <i className={`${css.arrow} ${css.up}`} />
                )}

              {table.options.sort.active &&
                table.body[index].key === table.order.column &&
                table.order.direction === 'asc' && (
                  <i className={`${css.arrow} ${css.down}`} />
                )}
            </th>
          ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
