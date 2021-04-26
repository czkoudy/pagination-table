import React from 'react';
import PaginationTable from './components/PaginationTable';

const App = () => {
  const data = [
    {
      id: 1,
      name: 'Administartion module',
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
      shortName: 'Admin',
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
  const body = [{ key: 'id' }, { key: 'name', title: 'Fierst Name' }, { key: 'shortName' }];

  return (
    <div style={{ width: '800px' }}>
      <PaginationTable className='' data={data} header={header} body={body} perPage={10} sortable emptyRows />
    </div>
  );
};

export default App;
