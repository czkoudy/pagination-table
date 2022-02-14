import React, { createElement } from 'react';
import { PaginationTable } from './components/PaginationTable';
import './bootstrap.css';
import { format } from 'date-fns';
const App = () => {
  const data = [
    {
      id: 1,
      name: 'A super long line with text that should create line breaks that should create line breaks that should create line breaks that should create line breaks',
      shortName: 'Admin', balance: {
        today: 50,
        yesterday: 100
      }
    },
    {
      id: 2,
      name: 'Administartion module',
      shortName: 'Admin',
      balance: {
        today: 5,
        yesterday: 10
      }
    },
    // {
    //   id: 3,
    //   name: 'Administartion module',
    //   shortName: 'Test',
    // },
    // {
    //   id: 4,
    //   name: 'Administartion module',
    //   shortName: 'Admin',
    // },
    // {
    //   id: 5,
    //   name: 'Administartion module',
    //   shortName: 'Admin',
    // },
    // {
    //   id: 6,
    //   name: 'Administartion module',
    //   shortName: 'Admin',
    // },
    // {
    //   id: 7,
    //   name: 'Administartion module',
    //   shortName: 'Admin',
    // },
    // {
    //   id: 8,
    //   name: 'Administartion module',
    //   shortName: 'Admin',
    // },
    // {
    //   id: 9,
    //   name: 'Administartion module',
    //   shortName: 'Admin',
    // },
    // {
    //   id: 10,
    //   name: 'Administartion module',
    //   shortName: 'Admin',
    // },
    // {
    //   id: 11,
    //   name: 'Administartion module',
    //   shortName: 'Admin',
    // },
  ];

  const handleOnRowClick = (id) => {
    console.log(id);
  };

  const handleOnRowClick22 = (result) => {
    console.log(result);
  };

  const bytesToMB = (bytes) => {
    if (typeof bytes === undefined) {
      return "jjj"
    } else {
      return bytes
    }
    // if (bytes) {


    //   if (typeof bytes === 'number') {
    //     let result = parseFloat(bytes / 1024 / 1024);
    //     result = Math.round(result);

    //     if (result > 1000) {
    //       return (result / 1024).toFixed(2) + ' GB';
    //     } else {
    //       return result + ' MB';
    //     }
    //   } else {
    //     return 0 + ' MB';
    //   }
    // } else {
    //   return 0 + ' MB';

    // }
  };

  function millisecondsToDate(seconds) {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor(((seconds % 86400) % 3600) / 60);
    return `${days > 0 ? `${days} d ` : ''}${hours > 0 ? `${hours} h ` : ''}${minutes > 0 ? `${minutes} m ` : ''}`;
  }

  // const header = [{ label: 'ID', onRowClick: 'id' }, { label: 'Long Name' }, { label: 'Short Name', title: 'Last Name' }, { label: 'Balance', title: 'Balance' }];
  // const body = [{ key: 'id' }, { key: 'name', title: 'First Name' }, { key: 'shortName' }, { key: 'balance.today', useDot: true }];
  const formatUserType = (type) => {
    return type
  };

  const formatLastLogs = (log) => {
    if (log) {
      const formatedDate = format(log, "dd-MMM-yyyy")
      if (formatedDate === "01-Jan-1970") {
        return "Never Logged In"
      } else {
        return formatedDate
      }
    }
  };

  const handleDeleteSelected = (data) => {
    console.log(data)
  }

  const header = [{ label: 'id', width: '200px' }, { label: 'Name', width: '150px' },];

  const body = [{ key: 'id' }, { key: 'name' },];
  const options = {
    className: 'table table-sm table-hover',
    onRowClick: {
      function: handleOnRowClick,
      key: 'id',
    },
    perPage: 1,
    lengthChange: true,
    selection: {
      backgroundColor: 'rgba(255, 165, 0, 0.5)',
      key: '_id',
      info: true,
      // className: options?.selection?.className || '',
      maxCount: 5,
      buttons: [
        {
          className: 'btn btn-sm btn-danger',
          onClickFunction: (data) => handleDeleteSelected(data),
          label: 'Delete Selected',
        },
      ],
    },
  };

  return (
    <div style={{ width: '500px' }}>
      <PaginationTable data={data} header={header} body={body} options={options} />
    </div>
  );
};

export default App;
