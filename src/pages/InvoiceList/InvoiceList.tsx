import React, {SetStateAction, useState, Dispatch, useMemo} from 'react'
import ava from '../../assets/doctor.png'
import moneyIc from '../../assets/icon/payment.svg'
import calenderIC from '../../assets/icon/Calendar.svg'
import { Container } from '../PageArtikel/PageArtikelStyle'
import { TableCustom } from './InvoiceListStyle'
import { customers } from './InvoiceListData'
import { Cell, Column, useSortBy, useTable } from "react-table";

export type TableProps = {
    data: Array<any>;
    columns: Array<Column>;
    enableSorting?: boolean;
    hideHeaders?: boolean;
};

interface ColumnDetails {
    [key: string]: string;
};
const InvoiceList = () => {
    
    const data = useMemo<ColumnDetails[]>(() => customers, []);
    const columns:any = useMemo(
        () => [
        {
            Header: "Invoice Id",
            accessor: "invoiceId",
        },
        {
            Header: "Name",
            accessor: "name",
        },
        {
            Header: "Total Price",
            accessor: "payment",
        },
        {
            Header: "Date",
            accessor: "date",
        },
        {
            Header: "Status",
            accessor: "status",
        },
    ], []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  
  return (
    <>
    <Container>
        <div {...getTableProps()}>
            <div>
              {headerGroups.map((headerGroup, i) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                      {/* <img
                        src="/assets/arrow_dropdown2.svg"
                        className={column.isSortedDesc ? "desc" : ""}
                      /> */}
                    </th>
                  ))}
                </tr>
              ))}
            </div>
            <tbody {...getTableBodyProps()}>
              <tr></tr>
            </tbody>
        </div>
    </Container>
    </>
  )
}

export default InvoiceList

{/* <thead>
                <tr>
                    <th>
                        <input type="checkbox" name="select-all" />
                    </th>
                    <th>Invoice Id</th>
                    <th>Name</th>
                    <th>Total Price</th>
                    <th>Date</th>
                    <th>status</th>
                </tr>
            </thead>
            <tbody>
                    <div className='row'>
                <tr>
                        <td>
                            <input type='checkbox'/>
                        </td>
                        <td>#876364</td>
                        <td>
                            <div className='name'>
                                <img src={ava}/>
                                <div>Arrora gaur</div>
                            </div>
                        </td>
                        <td>
                            <div className='list-icon'>
                                <img src={moneyIc}/>
                                <div>Rp.1.500.000</div>
                            </div>
                        </td>
                        <td>
                            <div className='list-icon'>
                                <img src={calenderIC}/>
                                <div> 12 Dec, 2020</div>
                            </div>
                        </td>
                        <td>
                            <button>Diproses</button>
                        </td>
                </tr>
                </div>
            </tbody> */}