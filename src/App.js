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
      formatDate: { lastUpdate: '2021-04-01T09:13:01.637Z' },
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
  const body = [{ key: 'id' }, { key: 'name', title: 'First Name' }, { key: 'formatDate.lastUpdate', date: 'd MMM yyyy', useDot: true }];

  return (
    <div style={{ width: '500px' }}>
      <PaginationTable className='table' data={data} header={header} body={body} perPage={5} info sortable emptyRows />
    </div>
  );
};

export default App;
