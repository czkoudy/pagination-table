import _ from 'lodash';
import css from '../paginationtable.module.css';

export const searchFunction = ({
  body,
  data,
  searchString,
  search,
  setCurrentPage,
}) => {
  let columns;
  if (search?.columns === 'all') {
    columns = data[0] && body.map((x, index) => index);
  } else if (Array.isArray(search?.columns)) {
    columns =
      data[0] && search?.columns.map((x) => search.columns.includes(x) && x);
  }
  // log(columns);

  const filteredData = data.filter((row) =>
    columns.some((column) => {
      let useDotValue;

      if (body[column].useWholeObject) {
        useDotValue = row;
      } else if (
        body[column].key.includes('.') &&
        !body[column].useWholeObject
      ) {
        useDotValue = _.get(row, body[column].key) || '';
      } else if (!body[column].useWholeObject) {
        useDotValue = row[body[column].key] || '';
      }
      // log(`dotValue:${useDotValue}`);

      if (typeof useDotValue === 'string') {
        return (
          useDotValue?.toLowerCase().indexOf(searchString.toLowerCase()) > -1
        );
      }
      if (typeof useDotValue === 'number') {
        return `${useDotValue}`.indexOf(searchString) > -1;
      }
      if (Array.isArray(useDotValue)) {
        return useDotValue.includes(searchString);
      }
      return (
        useDotValue[body[column].key] +
          ''.toLowerCase().indexOf(searchString.toLowerCase()) >
        -1
      );
    })
  );
  setCurrentPage(1);
  return filteredData;
};

// export const log = (message) => {
//   if (defaults.debug) {
//     console.log(message);
//   }
// };

export const handleOrderColumn = ({ context, index }) => {
  if (
    context.options.sort.active &&
    !context.options.sort.excludeColumns.includes(index)
  ) {
    context.setOrder((prevState) => ({
      direction: prevState.direction === 'desc' ? 'asc' : 'desc',
      column: context.body[index].key,
    }));
    context.setCurrentPage(1);
  }
};
