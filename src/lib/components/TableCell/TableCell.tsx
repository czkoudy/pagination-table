/* eslint-disable react/no-unstable-nested-components */
import { format } from 'date-fns';
import _ from 'lodash';
import { createElement } from 'react';
import css from './tablecell.module.css';

type TableCellProps = {
  index: number;
  defaults: object;
  field: object;
  entry: object;
  columnSpan: number;
  rowSpan: number;
};

const TableCell = ({
  index,
  defaults,
  field,
  entry,
  columnSpan,
  rowSpan,
}: TableCellProps) => {
  let useDotValue: string | number | Date | undefined;
  const _fieldKey = rowSpan ? field?.key2 || field?.key : field?.key;

  if (field.useWholeObject) {
    useDotValue = entry;
  }
  if (Array.isArray(_fieldKey)) {
    if (_fieldKey[0]?.includes('.') && _.get(entry, _fieldKey[0])) {
      useDotValue = _.get(entry, _fieldKey[0]);
    } else if (_fieldKey[1]?.includes('.') && _.get(entry, _fieldKey[1])) {
      useDotValue = _.get(entry, _fieldKey[1]);
    } else if (typeof entry[_fieldKey[0]] !== 'undefined') {
      useDotValue = entry[_fieldKey[0]];
    } else if (typeof entry[_fieldKey[1]] !== 'undefined') {
      useDotValue = entry[_fieldKey[1]];
    }
  } else if (_fieldKey?.includes('.') && !field.useWholeObject) {
    useDotValue = _.get(entry, _fieldKey);
  } else if (!field.useWholeObject) {
    useDotValue = entry[_fieldKey];
  }

  const cellElement = () => {
    if (field.hasOwnProperty('date')) {
      if (useDotValue === undefined) {
        return null;
      }

      // return useDotValue !== undefined
      //   ? format(new Date(useDotValue), field.date, {
      //       locale: defaults.customFormatFunctions.data.locale,
      //     })
      //   : null;

      if (defaults.customFormatFunctions.date.library !== 'date-fns') {
        // todo implement other libraries support
      }
      return format(
        new Date(useDotValue),
        field.date,
        defaults.customFormatFunctions.date.options
      );
    }

    if (field.hasOwnProperty('currency')) {
      if (useDotValue === undefined) {
        return null;
      }

      return new Intl.NumberFormat(
        defaults.customFormatFunctions.currency.code,
        defaults.customFormatFunctions.currency.options
      ).format(parseFloat(useDotValue));
    }

    if (field.hasOwnProperty('function')) {
      if (
        field.hasOwnProperty('useWholeObject') &&
        field.useWholeObject === true
      ) {
        return field.function(useDotValue);
      }
      return field.function(useDotValue);
    }
    if (field.hasOwnProperty('component')) {
      return createElement(field.component, {
        ...field.props,
        checked: entry[field.props.checked],
        entry,
      });
    }

    return useDotValue;
  };

  return (
    <td
      key={index}
      title={field.title || ''}
      className={`${css.column} ${
        defaults.onRowClick.excludeColumns.includes(index)
          ? 'exclude-row-click'
          : ''
      } ${
        field.align === 'center'
          ? css.column_align_center
          : field.align === 'right'
          ? css.column_align_right
          : ''
      }`}
      colSpan={columnSpan}
    >
      {cellElement()}
    </td>
  );
};

export default TableCell;
