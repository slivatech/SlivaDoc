import { SetStateAction, useState, Dispatch, useMemo } from "react";
import { customers } from "./fakeData";
import { Cell, Column, useSortBy, useTable } from "react-table";
import { TableData, TableHead, TableStyle } from "./TableStyle";
import { Container } from "../Container";
import CustomerSidebar from "./CustomerSidebar";
import styled from "styled-components";
export type TableProps = {
  data: Array<any>;
  columns: Array<Column>;
  enableSorting?: boolean;
  hideHeaders?: boolean;
};

export const CustomerListStyle = styled.div<{ isSidebarOpen: boolean }>(
  ({ isSidebarOpen }) => `
    background: #f1f4fa;
  height: 100vh;
  overflow-x:hidden;
  width:100%;
  margin-right:${isSidebarOpen ? "25%" : 0};
  transition: margin-right .5s; 

  h2 {
    margin:0;
  }
`
);

interface ColumnDetails {
  [key: string]: string;
}
const CustomerList = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const data = useMemo<ColumnDetails[]>(() => customers, []);
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <div style={{ background: "#f1f4fa" }}>
      <div style={{ display: "flex", overflowX: "hidden" }}>
        <CustomerListStyle isSidebarOpen={isSidebarOpen}>
          <Container>
            <h2 style={{ margin: "0 auto",padding:"1rem 4rem" }}>Customer List</h2>

            <TableStyle {...getTableProps()}>
              <TableHead>
                {headerGroups.map((headerGroup, i) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}
                        {/* {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""} */}
                        <img
                          alt="arrow"
                          src="/assets/arrow_dropdown2.svg"
                          className={column.isSortedDesc ? "desc" : ""}
                        />
                      </th>
                    ))}
                  </tr>
                ))}
              </TableHead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          // <TableData {...cell.getCellProps()}>{cell.render("Cell")}</TableData>
                          <TableContent
                            cell={cell}
                            setSidebarOpen={setSidebarOpen}
                          />
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </TableStyle>
          </Container>
        </CustomerListStyle>
        {isSidebarOpen ? <CustomerSidebar isOpen={isSidebarOpen} /> : null}
      </div>
    </div>
  );
};

const TableContent = ({
  cell,
  setSidebarOpen,
}: {
  cell: Cell<ColumnDetails, any>;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  console.log(cell);
  return (
    <TableData>
      {cell.column.id === "name" ? (
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          <img src={cell.row.original.image} alt="profile-img" />
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setSidebarOpen(true)}
          >
            {cell.value}
          </span>
        </div>
      ) : cell.column.id === "gender" ? (
        <div className={`${cell.value.toLowerCase()} genderRow`}>
          {cell.value}
        </div>
      ) : (
        cell.value
      )}
    </TableData>
  );
};

export default CustomerList;
