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
      id: 1,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 1,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 1,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 1,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 1,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 1,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 1,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 1,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 1,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 1,
      name: 'Administartion module',
      shortName: 'Admin',
    },
  ];

  const header = [{ label: 'ID' }, { label: 'Long Name' }, { label: 'Short Name' }];
  const body = [{ key: 'id' }, { key: 'name' }, { key: 'shortName' }];
  return (
    <div style={{ width: '800px' }}>
      <PaginationTable className='' data={data} header={header} body={body} perPage={3} sortable />
    </div>
  );
};

export default App;
