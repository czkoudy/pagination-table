# @czkoudy/pagination-table

> Pagination for tables

[![NPM](https://img.shields.io/npm/v/@czkoudy/pagination-table.svg)](https://www.npmjs.com/package/@czkoudy/pagination-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @czkoudy/pagination-table
```

## Usage

```jsx
import PaginationTable from '@czkoudy/pagination-table';

const Table = () => {
  const data = [{ id: 5 }, { id: 6 }];
  const header = [{ label: 'ID' }];
  const body = [{ key: 'id' }];

  return <PaginationTable className='table table-sm table-hover' data={data} header={header} body={body} perPage={10} />;
};
```

##

All constants are arrays with objects.

# API

## <PaginationTable data={} header={} body={} perPage={} info sortable />

### props:

- data: required - Array of objects
- header: required - Array of objects
- body: required - Array of objects
- perPage: required - Number of items per page
- info: optional - show info of total items and per page
- sortable: optional - allows table to be sorted by columns
- onRowClick: optional - function to handle on click with argument from header

# Header

## label: String

label of column

## width: String

width of column
example:

```
const header = [{
label: "First Name", width: "100px"
}]
```

## onRowClick: String

argument passed to onRowClick function
example:

```
const header = [{
label: "ID", width: "100px", onRowClick: "id"
}]
```

# Body

## date: "newformatdate"

this is using format() from date-fns module. See more at [date-fns](https://date-fns.org/v2.19.0/docs/format)

example:

```
const body = [{
  key: "dateOfBirth", date: "d MMM yyyy"
}]
```

## function: newFunction

this is referencing function which will have key as its argument

example:

```
const doubleValue = key => {
  const newValue = key * 2
  return newValue

}
const body = [{
  key: "value", function: doubleValue
}]
```

## component: Component

this is will wrap the key in the Component

example:

```
import Toggle from "./Toggle/Toggle"
const body = [{
  key: "inUse", component: Toggle, props : { checked: 'inUse', onChange: onToggleChange }
}]
```

## useDot: "true"

allows to dive into objects with dot notation

example:

```
const body = [{
  key: "user.firstName", useDot: true
}]
```

## License

MIT © [czkoudy](https://github.com/czkoudy)
