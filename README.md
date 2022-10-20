# @czkoudy/pagination-table

> React component for turning tables into Pagination Tables

[![NPM](https://img.shields.io/npm/v/@czkoudy/pagination-table.svg)](https://www.npmjs.com/package/@czkoudy/pagination-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Downloads](https://img.shields.io/npm/dm/@czkoudy/pagination-table?style=for-the-badge)

## Install

```bash
npm install --save @czkoudy/pagination-table
```

## Usage

```jsx
import PaginationTable from '@czkoudy/pagination-table';

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

return <PaginationTable data={data} header={header} body={body} options={options} />;
```

## Changes in 3.6.1

[New] - body option `useWholeObject` - this will return whole object to set function rather than single field - key and function fields are required

## Changes from 3.3.0

[Fix] - sorting was ignoring casing
[New] - show page length menu

    const options = {
        lengthChange:  true, //default false
        lengthMenu:  Array[] // default [5, 10, 15, 20],
    }

    const options = {
        selection: {
          buttons: [ // Array of object for buttons to be visible
            {
              label: "",
              onClickFunction: () => function() // function will receive an array of keys defined in selection.key
              className: "", // className for button
            }
          ]
        }
    }

#### New option in sortable settings

    excludeColumns: Array[] // default [], array of indexes of columns to exclude

## Changes from 3.2.5

[New] - debug option in options object, default: false

[Fix] - added fields to search objects

- colums - array of column indexes to be included in search, default string "all"

## Changes from 3.2.0

- now exports PaginationTable as well as usePaginationTable hook

## Breaking changes from 3.0.1

- PaginationTable now uses hooks

- onRowClick moved to options object

## Additional changes from 3.0.1

- support for row selection

## Breaking changes in 2.0.0

Now there is options object passed in rather then individual properties.

### search

default: false

// Adding CSS class for input field

    search: {
        className: ""
    }

### sortable

**default:** `false`

    sortable: {
        column: Integer // index of default column order
      direction: String // 'asc' or 'des'
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

### PaginationTable props

| Name    | Type    | Required | Default |
| ------- | ------- | -------- | ------- |
| data    | Array[] | Yes      | -       |
| header  | Array[] | Yes      | -       |
| body    | Array[] | Yes      | -       |
| options | Array[] | No       | -       |

### options props

| Name                    | Type              | Required | Default      | Description                                    |
| ----------------------- | ----------------- | -------- | ------------ | ---------------------------------------------- |
| perPage                 | Int               | No       | 10           |
| emptyRows               | Boolean           | No       | false        |
| lengthChange            | Boolean           | No       | false        |
| lengthMenu              | Array[]           | No       | [5,10,15,20] |
| info                    | Boolean           | No       | false        |
| search                  | Boolean or Object | No       | false        |
| search.columns          | Array or String   | No       | "all"        | Array of indexes of columns to search within   |
| search.className        | String            | No       | false        | ClassName for search input                     |
| sortable                | Boolean or Object | No       | false        |
| sortable.column         | Int               | No       | 0            | Index of default column to sort by             |
| sortable.direction      | String            | No       | "asc"        | "asc" or "desc"                                |
| sortable.excludeColumns | Array             | No       | []           | Array of columns indesx to exclude sorting for |
| onRowClick              | Object            | No       | {}           |
| onRowClick.function     | Function          | No       | {}           | function to be actioned on click on row        |
| onRowClick.key          | String            | No       | "id"         | Key to be passed to function                   |
| loading                 | Object            | No       | {}           |
| loading.component       | React.Component   | No       | null         |
| loading.text            | String            | No       | "Loading"    |
| debug                   | Boolean           | No       | false        | Logging to console progress of PaginationTable |

### header props

| Name  | Type    | Required | Default | Description |
| ----- | ------- | -------- | ------- | ----------- |
| label | Int     | No       | 10      |
| width | Boolean | No       | false   |

### header props

| Name  | Type   | Required | Default | Description             |
| ----- | ------ | -------- | ------- | ----------------------- |
| label | String | Yes      | -       |
| width | String | No       | -       | String with pixel width |

### body props

| Name      | Type      | Required | Default | Description                                                                                                   |
| --------- | --------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| key       | String    | Yes      | -       |
| date      | String    | No       | -       | this is using format() from date-fns module. See more at [date-fns](https://date-fns.org/v2.19.0/docs/format) |
| function  | Function  | No       | -       | referencing function which will have key as its argument                                                      |
| component | Component | No       | -       | will wrap the key in the Component                                                                            |
| useDot    | Boolean   | No       | True    | allows to dive into objects with dot notation                                                                 |
| component | Component | No       | -       | will wrap the key in the Component                                                                            |
| component | Component | No       | -       | will wrap the key in the Component                                                                            |

## License

MIT © [czkoudy](https://github.com/czkoudy)
