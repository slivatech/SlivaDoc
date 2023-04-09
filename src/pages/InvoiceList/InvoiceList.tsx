import React, { useState, useMemo} from 'react'
import moneyIc from '../../assets/icon/payment.svg'
import calenderIC from '../../assets/icon/Calendar.svg'
import editIc from '../../assets/icon/edit.svg'
import { Container } from '../PageArtikel/PageArtikelStyle'
import {  TableRow, TableHead, TableStyle } from './InvoiceListStyle'
import { customers } from './InvoiceListData'
import { Column, useSortBy, useTable, useRowSelect, useGlobalFilter } from "react-table";
import Checkbox from './Checkbox'
import { GlobalFilter } from './GlobalFilter'

// export type TableProps = {
//     data: Array<any>;
//     columns: Array<Column>;
// };

interface ColumnDetails {
    // [id: number]: any;
    [key: string]: any;
};

const InvoiceList = () => {
    const data = useMemo<ColumnDetails[]>(() => customers, []);
    const columns: Column<ColumnDetails>[] = useMemo(
        () => [
        {
            Header: "Invoice Id",
            accessor: "invoiceId",
        },
        {
            Header: "Name",
            accessor: "image",
            Cell: ({ cell: { value } }) => <img src={value} className='name'/>
        },
        {
            Header: "",
            accessor: "name",
            width: 200
        },
        {
            Header: "Total Price",
            accessor: "payment",
            Cell: ({ cell: { value } }) => {
                return (
                    <div className='list-icon'>
                        <img src={moneyIc}/>
                        <div>{value}</div>
                    </div>
                )
            },
        },
        {
            Header: "Date",
            accessor: "date",
            Cell: ({ cell: { value } }) => {
                return (
                    <div className='list-icon'>
                        <img src={calenderIC}/>
                        <div> {value}</div>
                    </div>
                )
            }
        },
        {
            Header: "Status",
            accessor: "status",
            Cell: ({ cell: { value } }) => {
                return (
                    <button className={`${value.toLowerCase()} btn-status`}>{value}</button>
                )
            },
            width: 200
        },
    ], []
    );

    const TableInstance = useTable(
        { columns, data },
        useGlobalFilter, 
        useSortBy, 
        useRowSelect, 
        insertCheckbox, 
        insertEdit 
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter } = TableInstance
    const {globalFilter} = state

    function insertCheckbox  (hooks:any)  {
        hooks.visibleColumns.push((columns: any) => {
            return [
                {
                    id: 'selection',
                    Header: ({getToggleAllRowsSelectedProps} : (any)) => (
                        <Checkbox {...getToggleAllRowsSelectedProps()}/>
                    ),
                    Cell: ({ row }: (any)) => (
                        <Checkbox {...row.getToggleRowSelectedProps()}/> 
                    )
                },            
                ...columns
            ]
        })
    }

    function insertEdit  (hooks:any)  {
        hooks.visibleColumns.push((columns: any) => {
            return [
                ...columns,
                {
                    id: 'edit',
                    Header: ({getToggleAllRowsSelectedProps} : (any)) => (
                        <ButtonEdit {...getToggleAllRowsSelectedProps()}/>
                    ),
                    Cell: ({ row }: (any)) => (
                        <ButtonEdit {...row.getToggleRowSelectedProps()}/> 
                    )
                },            
              
            ]
        })
    }

    return (
        <>
        <Container style={{ background: 'rgba(153, 178, 198, 0.2)'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem'}}>
                <h2 style={{ fontSize: '2rem', fontWeight: '700'}}>Invoice List</h2>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </div>
            <TableStyle {...getTableProps()}>
                <TableHead>
                {headerGroups.map((headerGroup, i) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            {column.render("Header")}
                            {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
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
                                <TableRow {...cell.getCellProps()}>
                                    {cell.render("Cell")}
                                </TableRow>
                            );
                            })}
                        </tr>
                    );
                })}
                </tbody>
            </TableStyle>
        </Container>
        </>
    )
}

const ButtonEdit = () => {
    const [editable, setEditable] = useState(false);
  return (
    <div style={{position : "relative"}}>
        <button className='btn-edit' onClick={ () => setEditable(v => !v)}>
            <img src={editIc}/>
        </button>
        {
            editable ?
            <span style={{
                position : "absolute", 
                right : '4rem', 
                display : 'flex', 
                width : '100%', 
                flexDirection : 'column',
                }}>
                <button style={{display : "flex", padding : "1rem"}}>Complete</button> 
                <button style={{display : "flex", padding : "1rem"}}>Cancel</button> 
                <button style={{display : "flex", padding : "1rem"}}>Pending</button> 
            </span>  : ""
        }
    </div>
  )
}



export default InvoiceList
