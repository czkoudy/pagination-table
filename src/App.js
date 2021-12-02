import React from 'react';
import { PaginationTable } from './components/PaginationTable';
import './bootstrap.css';
const App = () => {
  const data = [
    {
      id: 1,
      name: 'A super long line with text that should create line breaks that should create line breaks that should create line breaks that should create line breaks',
      shortName: 'Admin',
    },
    {
      id: 2,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 3,
      name: 'Administartion module',
      shortName: 'Test',
    },
    {
      id: 4,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 5,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 6,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 7,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 8,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 9,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 10,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 11,
      name: 'Administartion module',
      shortName: 'Admin',
    },
  ];

  const handleOnRowClick = (id) => {
    // console.log(id);
  };

  const header = [{ label: 'ID', onRowClick: 'id' }, { label: 'Long Name' }, { label: 'Short Name', title: 'Last Name' }];
  const body = [{ key: 'id' }, { key: 'name', title: 'First Name' }, { key: 'shortName' }];

  const options = {
    className: 'table table-sm table-hover',
    onRowClick: {
      function: handleOnRowClick,
      key: 'name',
    },
    selection: {
      key: 'id',
      info: true,
      onlyOne: true,
    },
    emptyRows: true,
    perPage: 5,
    search: true,
    sortable: {
      excludeColumns: [0],
    },
  };

  return (
    <div style={{ width: '500px' }}>
      <PaginationTable data={data} header={header} body={body} options={options} />
    </div>
  );
};

export default App;
