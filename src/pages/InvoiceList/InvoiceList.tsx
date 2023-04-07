import React, {SetStateAction, useState, Dispatch, useMemo, useEffect} from 'react'
import ava from '../../assets/doctor.png'
import moneyIc from '../../assets/icon/payment.svg'
import calenderIC from '../../assets/icon/Calendar.svg'
import editIc from '../../assets/icon/edit.svg'
import { Container } from '../PageArtikel/PageArtikelStyle'
import {  TableRow, TableHead, TableStyle } from './InvoiceListStyle'
import { customers } from './InvoiceListData'
import { Column, useSortBy, useTable, useRowSelect, Cell } from "react-table";
import Checkbox from './Checkbox'

export type TableProps = {
    data: Array<any>;
    columns: Array<Column>;
    enableSorting?: boolean;
    hideHeaders?: boolean;
};

interface ColumnDetails {
    // [id: number]: any;
    [key: string]: any;
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

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, selectedFlatRows } =
    useTable({ columns, data }, useSortBy, 
        // useRowSelect,
        // (hooks) => {
        //     hooks.visibleColumns.push(() => {
        //         return [
        //             {
        //                 id: 'selection',
        //                 Header: ({getToggleAllRowsSelectedProps}) => (
        //                     <Checkbox {...getToggleAllRowsSelectedProps}/>
        //                 ),
        //                 Row: ({getToggleRowSelectedProps}) => (
        //                     <Checkbox {...getToggleRowSelectedProps}/> 
        //                 )
        //             }
        //         ]
        //     })
        // }
        );
    
    const [editable, setEditable] = useState(false);


  
    return (
        <>
        <Container>
            <TableStyle {...getTableProps()}>
                <TableHead>
                {headerGroups.map((headerGroup, i) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        <th> <input type='checkbox' /> </th>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            {column.render("Header")}
                            {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                            </th>
                        ))}
                        <th> <button className='btn-edit'><img src={editIc}/></button> </th>
                    </tr>
                ))}
                </TableHead>
                <tbody {...getTableBodyProps()}>

                {rows.map((row, id) => {
                    prepareRow(row);
                    const {date, invoiceId, name, payment, status} = row.values;
                    return (
                        <TableRow {...row.getRowProps()}>
                            <td><input type='checkbox'/></td>
                            <td>{invoiceId}</td>
                            <td>
                                <div className='name'>
                                    <img src={ava}/>
                                    <div>{name}</div>
                                </div>
                            </td>
                            <td>
                                <div className='list-icon'>
                                    <img src={moneyIc}/>
                                    <div>{payment}</div>
                                </div>
                            </td>
                            <td>
                                <div className='list-icon'>
                                    <img src={calenderIC}/>
                                    <div> {date}</div>
                                </div>
                            </td>
                            <td> <button className={`${status.toLowerCase()} btn-status`}>{status}</button> </td>
                            <td> 
                                <button className='btn-edit' key={id} onClick = {()=> setEditable(prev => !prev)}>
                                    <img src={editIc} />
                                </button>
                                {
                                    editable  ? 
                                    <span>
                                        <button style={{display : "block"}}>Complete</button> 
                                        <button style={{display : "block"}}>Cancel</button> 
                                        <button style={{display : "block"}}>Pending</button> 
                                    </span>  : " "
                                }
                            </td>
                        </TableRow>
                    );
                })}
                </tbody>
            </TableStyle>
        </Container>
        </>
    )
}
// const TableContent = (cell: {value: value<ReactNodecolumn, any>; cell: Cell<ColumnDetails, any> }) => {
//     console.log(cell);
//     return (
//       <TableData>
//         {cell.column.id === "name" ? (
//           <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
//             <img src={cell.row.original.image} />
//             {cell.value}
//           </div>
//         ) : cell.column.id === "gender" ? (
//           <div className={`${cell.value.toLowerCase()} genderRow`}>
//             {cell.value}
//           </div>
//         ) : (
//           cell.value
//         )}
//       </TableData>
//     );
//   };

export default InvoiceList
