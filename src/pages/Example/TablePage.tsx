import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Cell, IndeterminateCheckbox, TableV8, createColumnHelper } from '../../components/Common/Tablev8'
import { AlertData } from './fakeData'

const TablePage = () => {
    const { alertColumn } =  useAlertColumn()
    const [data, setData] = useState(AlertData)
    const [selectedRow, setSelectedRow] = useState<any>([])
    const alertRef: any = useRef(null)
    const itemPerPage = 10;
    const detailItemPerPage = 1;
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(Math.ceil(AlertData.length / itemPerPage));
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

        let data = AlertData?.slice(startIndex, endIndex)

        setData(data)
    }, [page])

    useEffect(() => {
        console.log({selectedRow})
    },[selectedRow])
  return (
    <div style={{width: '100%', height:'100%', background:"#f1f4fa", display:'flex', justifyContent: 'center'}}>

        <div style={{width:'90%'}}>
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

export default TablePage

export const useAlertColumn = () => {
    // const { t } = useTranslation();
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
        table.accessor('tableMssg',{
            size: 5,
            enableSorting: false,
            header: () => (
                <div style={{color:'#74b87d', width:'100%', display:'flex', justifyContent:'center', marginTop:'5px', alignItems:'center'}}>
                   <i className="fa fa-envelope-o fa-fw" aria-hidden="true"></i>
                </div>
            ),
            id: "tableMssg",
            cell: (props: any) => (
                <div style={{width:'100%', display:'flex', marginTop:'5px', justifyContent:'center', alignItems:'center'}}>
                    <i className="fa fa-envelope-o fa-fw" aria-hidden="true"></i>
                </div>
            ),
        }),
        table.accessor('type',{
            size: 50,
            id: "type",
            header: 'Type',
            cell: (props: any) => (
                <div>
                    <Cell
                        value={{ row1: props.row.original.type }}
                        type="1row"
                        align="left"
                    />
                </div>
            ),
        }),
        table.accessor('message',{
            size: 120,
            id: "message",
            header: "Message",
            enableSorting: false,
            cell: (props: any) => (
                <div style={{width:'100%', whiteSpace:'break-spaces'}}>
                    {props.row.original.message}
                </div>
            ),
        }),
        table.accessor('dateTime',{
            size: 60,
            id: "dateTime",
            header: "Date/Time",
            cell: (props: any) => (
                <div style={{ width: "100%" }}>
                    <Cell
                        value={{ row1: props.row.original.dateTime }}
                        type="1row"
                        align="left"
                    />
                </div>
            ),
        }),
        ],[table]
    );
    return { alertColumn }
}
