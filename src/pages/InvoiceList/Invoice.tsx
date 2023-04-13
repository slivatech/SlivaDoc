import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Cell, IndeterminateCheckbox, TableV8, createColumnHelper } from '../../components/Common/Tablev8'
import { customers } from './InvoiceListData'
import moneyIc from '../../assets/icon/payment.svg'
import calenderIC from '../../assets/icon/Calendar.svg'
import editIc from '../../assets/icon/edit.svg'
import { IconColumn, NameColumn, StatusColumn } from './InvoiceListStyle'

const Invoice = () => {
    const { alertColumn } =  useAlertColumn()
    const [data, setData] = useState(customers)
    const [selectedRow, setSelectedRow] = useState<any>([])
    const alertRef: any = useRef(null)
    const itemPerPage = 10;
    const detailItemPerPage = 1;
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(Math.ceil(customers.length / itemPerPage));
    const [{ pageIndex, pageSize }, setPagination] = useState({ pageIndex: 0, pageSize: itemPerPage });
    const pagination = useMemo(
        () => ({
          pageIndex,
          pageSize,
        }),
        [pageIndex, pageSize]
      )

    const toDetail = useCallback((selectedRow:any, columnId:any) => {
    if(
        alertRef && alertRef.current && 
        columnId !== 'checked' 
    ){
        console.log({selectedRow})
    }
    },[])

    const handleCheckRow = useCallback((rowsData: any) => { 
        let temp = [...rowsData]

        setSelectedRow([...temp])
    }, [])

    useEffect(() => {
        setPage(pageIndex + 1)
    }, [pageIndex])

    useEffect(() => {
        let startIndex = pageIndex * itemPerPage
        let endIndex = page * itemPerPage
        let data = customers?.slice(startIndex, endIndex)

        setData(data)
    }, [page])

    useEffect(() => {
        console.log({selectedRow})
    },[selectedRow])
  return (
    <div style={{width: '100%', height:'100%', background:"#f1f4fa", display:'flex', justifyContent: 'center'}}>
        <div style={{width:'90%'}}>
            <h2 style={{marginBottom: '35px'}}>Invoice List</h2>
            <TableV8 
                data={data}
                ref={alertRef}
                columns={alertColumn}
                //   paginationStyle='firstlast'
                pagination={pagination}
                setPagination={setPagination}
                pageCount={pageCount}
                paddingStyle={{
                    td: "0.1rem 0.2rem 0rem",
                    th: "0 0.2rem 0.1rem",
                    tr: "0.5rem 0",
                }}
                onCheckRow={handleCheckRow}
                onRowClick={toDetail}
                enableSorting={true}
                stickyHeader={true}
                // stickyFromTop={0} 
                noDataLabel={''}
                      
            />
        </div>

      
    </div>
  )
}

export default Invoice

export const useAlertColumn = () => {
    const [editable, setEditable] = useState<any>(false);
    const table = createColumnHelper()
    const alertColumn = React.useMemo(() => [
        table.display({
            size: 5,
            // align: 'right',
            header: (props: any) => {
                if (props) {
                    const { table } = props;
                    return (
                        <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
                            <IndeterminateCheckbox
                                {...{
                                    checked:  table.getIsAllRowsSelected(),
                                    indeterminate: table.getIsSomeRowsSelected(),
                                    onChange: table.getToggleAllRowsSelectedHandler(),
                                }}
                            /> 
                        </div>
                    )
                } else {
                    return <></>
                }
            },
            id: 'checked',
            cell: (props: any) =>{
                return (
                    <div style={{width:'100%', display:'flex', alignItems:'center', marginTop:'3px', justifyContent:'center'}}>
                        <IndeterminateCheckbox
                            {...{
                                checked: props.row.getIsSelected(),
                                indeterminate: props.row.getIsSomeSelected(),
                                onChange: props.row.getToggleSelectedHandler(),
                            }}
                      />
                    </div>
                )
            } 
        }),
        table.accessor('invoiceId',{
            size: 50,
            id: "invoiceId",
            header: "Invoice Id",
            enableSorting: true,
            cell: (props: any) => (
                <div style={{display:'flex', alignItems:'center'}}>
                    {props.row.original.invoiceId}
                </div>
            ),
        }),
        table.accessor('name',{
            size: 100,
            id: "name",
            header: 'name',
            cell: (props: any) => (
                <NameColumn>
                    <img src={props.row.original.image}/>
                    <div>{props.row.original.name}</div>
                </NameColumn>
            ),
        }),
        table.accessor('payment',{
            size: 125,
            id: "payment",
            header: "Total Price",
            enableSorting: false,
            cell: (props: any) => (
                <IconColumn>
                    <img src={moneyIc}/>
                    <div>{props.row.original.payment}</div>
                </IconColumn>
            ),
        }),
        table.accessor('date',{
            size: 100,
            id: "date",
            header: "Date",
            enableSorting: true,
            cell: (props: any) => (
                <IconColumn>
                    <img src={calenderIC}/>
                    <div>{props.row.original.date}</div>
                </IconColumn>
            ),
        }),
        table.accessor('status',{
            size: 100,
            id: "status",
            header: "Status",
            enableSorting: true,
            cell: (props: any) => (
                <StatusColumn status={props.row.original.status}>
                    {props.row.original.status}
                </StatusColumn>
            ),
        }),
        table.accessor('edit',{
            size: 5,
            enableSorting: false,
            header: () => (
                <div>status</div>
            ),
            id: "edit",
            cell: (props: any) => (
                <div style={{position : "relative"}}>
                    <button style={{backgroundColor: 'transparent', border: 'none', cursor: 'pointer'}} onClick={ () => setEditable(true)}>
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
            ),
        }),
        ],[table]
        
    );
    return { alertColumn }
}
