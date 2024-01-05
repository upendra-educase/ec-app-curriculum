import React, { useState } from 'react';
import { useTable, useRowSelect } from 'react-table';

const DataTable = ({ data }) => {
  const [filter, setFilter] = useState('');

  const columns = React.useMemo(
    () => [
      {
        Header: 'Checkbox',
        accessor: 'checkbox',
        Cell: ({ row }) => <input type="checkbox" {...row.getToggleRowSelectedProps()} />,
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      // Add more columns as needed
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { selectedRowIds },
    toggleAllRowsSelected,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        hiddenColumns: ['checkbox'], // Hide checkbox column initially
      },
    },
    // Use the useRowSelect plugin to enable row selection
    useRowSelect
  );

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter(value);
  };

  const handleFilterClick = () => {
    // Perform filtering logic
    console.log('Filter button clicked');
  };

  const handleClearClick = () => {
    setFilter('');
    // Clear other filters or perform clear logic
    console.log('Clear button clicked');
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={handleFilterChange}
        />
        <button onClick={handleFilterClick}>Filter</button>
        <button onClick={handleClearClick}>Clear</button>
      </div>
      <table {...getTableProps()} style={{ marginTop: '20px' }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
