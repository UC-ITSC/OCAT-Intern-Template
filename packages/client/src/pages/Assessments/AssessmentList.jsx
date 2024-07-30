import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import { AssessmentService } from '../../services/AssessmentService';

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);

  useEffect(() => {
    const fetchAssessments = async () => {
      try {

        const data = await AssessmentService.getList();
        setAssessments(data || []);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`Error fetching assessments:`, error);
      }
    };
    fetchAssessments();
  }, []);

  const tableData = React.useMemo(() => assessments, [ assessments ]);

  const columns = React.useMemo(
    () => [
      {
        Header: `ID`,
        accessor: `id`,
      },
      {
        Header: `Instrument Type`,
        accessor: `instrumentType`,
      },
      {
        Header: `Score`,
        accessor: `score`,
      },
      {
        Header: `Risk Level`,
        accessor: `riskLevel`,
      },
      {
        Header: `Cat Name`,
        accessor: `catName`,
      },
      {
        Header: `Cat Date of Birth`,
        accessor: `catDateOfBirth`,
      },
      {
        Header: `Created At`,
        accessor: `createdAt`,
      },
      {
        Header: `Updated At`,
        accessor: `updatedAt`,
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data: tableData });

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
  } = tableInstance;

  return (
    <div>
      <h2>Assessment List</h2>
      <table {...getTableProps()} style={{ border: `solid 1px blue` }}>
        <thead>
          {headerGroups.map(headerGroup =>
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column =>
                <th
                  {...column.getHeaderProps()}
                  style={{
                    background: `aliceblue`,
                    borderBottom: `solid 3px red`,
                    color: `black`,
                    fontWeight: `bold`,
                  }}
                >
                  {column.render(`Header`)}
                </th>)}
            </tr>)}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell =>
                  <td
                    {...cell.getCellProps()}
                    style={{
                      background: `papayawhip`,
                      border: `solid 1px gray`,
                      padding: `10px`,
                    }}
                  >
                    {cell.render(`Cell`)}
                  </td>)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
