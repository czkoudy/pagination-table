import React from 'react';
import PaginationTable from './components/PaginationTable';

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

  const header = [{ label: 'ID' }, { label: 'Long Name' }, { label: 'Short Name', title: 'Last Name' }];
  const body = [{ key: 'id' }, { key: 'name', title: 'First Name' }, { key: 'shortName' }];

  const options = {
    info: true,
    sortable: true,
    emptyRows: true,
    search: {
      className: '',
    },
  };

  return (
    <div style={{ width: '500px' }}>
      <PaginationTable className='table' data={data} header={header} body={body} options={options} />
    </div>
  );
};

export default App;
