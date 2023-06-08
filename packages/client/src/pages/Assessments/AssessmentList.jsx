import React, { useEffect, useState } from 'react';
import { useSortBy, useTable } from 'react-table';
import { AssessmentService } from '../../services/AssessmentService';

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);
  const [ sortedColumn, setSortedColumn ] = useState(``);
  const [ sortDirection, setSortDirection ] = useState(`asc`);

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const fetchedAssessments = await AssessmentService.getList();
        setAssessments(fetchedAssessments);
      } catch (error) {
        console.error(`Error fetching assessments:`, error);
      }
    };
    fetchAssessments();
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: `ID`, accessor: `id` },
      { Header: `Instrument Type`, accessor: `instrumentType` },
      { Header: `Score`, accessor: `score` },
      { Header: `Risk Level`, accessor: `riskLevel` },
      { Header: `Cat Name`, accessor: `catName` },
      { Header: `Date of Birth`, accessor: `catDateOfBirth` },
      { Header: `Created At`, accessor: `createdAt` },
      { Header: `Updated At`, accessor: `updatedAt` },
    ],
    []
  );

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable(
    {
      columns,
      data: assessments,
      initialState: {
        sortBy: [{ desc: sortDirection === `desc`, id: sortedColumn }],
      },
    },
    useSortBy
  );

  const handleSort = (column) => {
    if (column.accessor === sortedColumn) {
      // If the same column is clicked, toggle the sort direction
      setSortDirection((prevDirection) =>
        prevDirection === `asc` ? `desc` : `asc`);
    } else {
      // If a different column is clicked, set the new sorted column and default sort direction
      setSortedColumn(column.accessor);
      setSortDirection(`asc`);
    }
  };

  return (
    <div>
      <table className="assessment-table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) =>
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) =>
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.Header}
                  onClick={() => column.toggleSortBy()}
                >

                  {column.render(`Header`)}
                  {column.isSorted &&
                    <span>{column.isSortedDesc ? ` ▼` : ` ▲`}</span>}

                </th>)}
            </tr>)}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={index % 2 === 0 ? `even-row` : `odd-row`}
              >
                {row.cells.map((cell) =>
                  <td {...cell.getCellProps()} key={cell.column.Header}>
                    {cell.render(`Cell`)}
                  </td>)}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ marginTop: `1rem`, textAlign: `right` }}>
        Showing {rows.length} out of {assessments.length} records
      </div>
    </div>
  );
};
