import { format } from 'date-fns';
import css from './tablecell.module.css';
import _ from 'lodash';

const TableCell = ({ index, defaults, field, entry, columnSpan, rowSpan }) => {
  let useDotValue;
  const _fieldKey = rowSpan ? field?.key2 || field?.key : field?.key;

  if (field.useWholeObject) {
    useDotValue = entry;
  } else if (_fieldKey?.includes('.') && !field.useWholeObject) {
    useDotValue = _.get(entry, _fieldKey);
  } else if (!field.useWholeObject) {
    useDotValue = entry[_fieldKey];
  }

  if (field.hasOwnProperty('date')) {
    return (
      <td
        key={index}
        title={field.title || ''}
        className={`${css.column} ${
          defaults.onRowClick.excludeColumns.includes(index)
            ? 'exclude-row-click'
            : ''
        }`}
        colSpan={columnSpan}
      >
        {useDotValue !== undefined
          ? format(new Date(useDotValue), field.date)
          : null}
      </td>
    );
  }
  if (field.hasOwnProperty('function')) {
    if (
      field.hasOwnProperty('useWholeObject') &&
      field.useWholeObject === true
    ) {
      return (
        <td
          key={index}
          title={field.title || ''}
          className={`${css.column} ${
            defaults.onRowClick.excludeColumns.includes(index)
              ? 'exclude-row-click'
              : ''
          }`}
          colSpan={columnSpan}
        >
          {field.function(useDotValue)}
        </td>
      );
    }
    return (
      <td
        key={index}
        title={field.title || ''}
        className={`${css.column} ${
          defaults.onRowClick.excludeColumns.includes(index)
            ? 'exclude-row-click'
            : ''
        }`}
        colSpan={columnSpan}
      >
        {field.function(useDotValue)}
      </td>
    );
  }
  if (field.hasOwnProperty('component')) {
    return (
      <td
        key={index}
        title={field.title || ''}
        className={`${css.column} ${
          defaults.onRowClick.excludeColumns.includes(index)
            ? 'exclude-row-click'
            : ''
        }`}
        colSpan={columnSpan}
      >
        {createElement(field.component, {
          ...field.props,
          checked: entry[field.props.checked],
          entry,
        })}
      </td>
    );
  }
  return (
    <td
      key={index}
      title={field.title || ''}
      // className={`${css.column} ${defaults.onRowClick.excludeColumns.includes(index)
      //   ? 'exclude-row-click'
      //   : ''
      //   }`}
      colSpan={columnSpan}
    >
      {useDotValue}
    </td>
  );
};

export default TableCell;
