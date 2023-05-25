import _ from 'lodash';

export const searchFunction = ({
  body,
  data,
  searchString,
  search,
  setCurrentPage,
  stayOnPage,
}) => {
  if (!data) return null;
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
  if (stayOnPage && searchString === '') {
  } else {
    setCurrentPage(1);
  }
  return filteredData;
};

export const handleOrderColumn = ({ context, index }) => {
  if (
    context.options.sort.active &&
    !context.options.sort.excludeColumns.includes(index)
  ) {
    context.setOrder((prevState) => ({
      direction: prevState.direction === 'desc' ? 'asc' : 'desc',
      column: context.body[index].key,
    }));
    if (context.options.stayOnPage) {
    } else {
      context.setCurrentPage(1);
    }
  }
};

export const handleSelectAllOnPage = ({
  reverse,
  selectionRows,
  data,
  currentPage,
  perPage,
  setSelectionRows,
  setSelectedPerPage,
}) => {
  const newArray = [...selectionRows];
  const newArray2 = data.map((x) => x._id);
  const pageSelection = newArray2.splice(
    currentPage * perPage - perPage,
    perPage
  );

  pageSelection.forEach((y) => {
    const exists = newArray.find((x) => x === y);
    if (exists) {
      if (reverse) {
        const index = newArray.indexOf(y);
        if (index > -1) newArray.splice(index, 1);
      }
    } else {
      newArray.push(y);
    }
  });
  setSelectionRows(newArray);
  if (reverse) {
    setSelectedPerPage((prevState) => ({
      ...prevState,
      [currentPage]: 0,
    }));
  } else {
    setSelectedPerPage((prevState) => ({
      ...prevState,
      [currentPage]: perPage,
    }));
  }
};
