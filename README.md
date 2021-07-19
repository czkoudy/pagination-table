# @czkoudy/pagination-table

> Pagination for tables

[![NPM](https://img.shields.io/npm/v/@czkoudy/pagination-table.svg)](https://www.npmjs.com/package/@czkoudy/pagination-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @czkoudy/pagination-table
```

## Breaking changes from 3.0.1

- PaginationTable now uses hooks
- onRowClick moved to options object

## Additional changes from 3.0.1

- support for row selection

## Usage

```jsx
import { usePaginationTable } from '@czkoudy/pagination-table';

const data = [{ id: 5 }, { id: 6 }];
const header = [{ label: 'ID' }];
const body = [{ key: 'id' }];
const options = {
  search: false,
  sortable: false,
  info: false,
  emptyRows: false,
  perPage: 10,
  className: '',
  pagination: null,
  onRowClick: {
    function: handleOnRowClick, // required
    key: 'id', // defaults to 'id'
  },
  selection: {
    key: 'id', // required
    backgroundColor: '', //string rgb color or rgba, defaults to rgba(255, 165, 0, 0.5)
  },
};

const { PaginationTable } = usePaginationTable({ data, header, body, options });

return <PaginationTable />;
```

## Breaking changes in 2.0.0

Now there is options object passed in rather then individual properties.

### search

default: false

// Adding CSS class for input field
search: {
className: ""
}

### sortable

default: false

sortable: {
column: Integer // index of default column order
direction: String // asc or des
}

### info

default: false

### emptyRows

default: false

### perPage

default: 10

### pagination

default: null

### className

default: ""

CSS class for the whole table

##

All constants are arrays with objects.

# API

## <PaginationTable data={} header={} body={} perPage={} info sortable />

### props:

- data: required - Array of objects
- header: required - Array of objects
- body: required - Array of objects
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
