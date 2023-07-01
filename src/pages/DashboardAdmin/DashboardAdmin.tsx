import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { TableV8, createColumnHelper } from '../../components/Common/Tablev8'
import { article, months, analytics, products, databanner } from './data'
import {Container, ImageColumn, Content,  Chart, StatusColumn, Name, AreaChartContainer, TopConsultContainer, BannerContainer } from './DashboardAdminStyle'
import PieChartComp from '../../components/Chart/PieChart'
import AreaChart from '../../components/Chart/AreaChart'
import TopConsultasion from '../../components/TopConsultasion/TopConsultasion'
import BannerDashboard from '../../components/BannerDashboard/BannerDashboard'

const chartData = [
    { name: '11Am', value: 40 },
    { name: '10Am', value: 50 },
    { name: '9Am', value: 55 },
    { name: '8Am', value: 45 },
    { name: '7Am', value: 85 },
    { name: '6Am', value: 95 },
    { name: '5Am', value: 57 },
    { name: '4Am', value: 54 },
    { name: '3Am', value: 33 },
    { name: '2Am', value: 95 },

  ];

const DashboardAdmin = () => {

    const { alertColumn } =  useAlertColumn();
    const [data, setData] = useState(article);
    const [selectedRow, setSelectedRow] = useState<any>([]);
    const alertRef: any = useRef(null);
    const itemPerPage = 5;
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(
        Math.ceil(article.length / itemPerPage)
    );
    const [{ pageIndex, pageSize }, setPagination] = useState({
        pageIndex: 0,
        pageSize: itemPerPage,
    });
    const pagination = useMemo(
        () => ({
        pageIndex,
        pageSize,
        }),
        [pageIndex, pageSize]
    );

    const toDetail = useCallback((selectedRow: any, columnId: any) => {
        if (alertRef && alertRef.current && columnId !== "checked") {
        console.log({ selectedRow });
        }
    }, []);

    const handleCheckRow = useCallback((rowsData: any) => {
        let temp = [...rowsData];

        setSelectedRow([...temp]);
    }, []);


    useEffect(() => {
        setPage(pageIndex + 1);
    }, [pageIndex]);

    useEffect(() => {
        let startIndex = pageIndex * itemPerPage;
        let endIndex = page * itemPerPage;

        let data = article?.slice(startIndex, endIndex);

        setData(data);
    }, [page]);

    useEffect(() => {
        console.log({ selectedRow });
        console.log(data?.length)
    }, [data?.length, selectedRow]);

    return (
    <Container >
        <h2 style={{ fontWeight: 700, fontSize: '26px'}}>Dashboard</h2>
        <BannerContainer>
        <BannerDashboard data={databanner}/>
        </BannerContainer>
        <Content>
        <AreaChartContainer>
        <div >
            <h5>Reports</h5>
        </div>
      <AreaChart data={chartData} />
      </AreaChartContainer>
      <Chart>
                    <div className='pie-chart'>
                        <h5 style={{marginBottom: "30px"}}>Analytics</h5>
                        <PieChartComp
                            data={analytics}
                            width={375}
                            height={300}
                            innerRadius={50}
                            outerRadius={100}
                        />
                    </div>
                </Chart>
        </Content>
          
            <Content>
                <div className='table'>
                    <div style={{padding: '30px 28px'}}>
                        <h5>Recent Orders</h5>
                    </div>
                    <div style={{width:'100%', padding: '0 28px 30px'}}>
                        <TableV8 
                            data={data}
                            ref={alertRef}
                            columns={alertColumn}  
                            pagination={pagination}
                            setPagination={setPagination}
                            pageCount={pageCount}
                            paddingStyle={{
                                td: "0.1rem 0.2rem 0rem",
                                th: "0 0.5rem 0.1rem",
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
                <TopConsultContainer>
                    <h5>Top Consultasion</h5>
                <TopConsultasion products={products} />
                </TopConsultContainer>
            </Content>
     
    </Container>
  );
};

export default DashboardAdmin;

export const useAlertColumn = () => {
    const table = createColumnHelper();
    
    const alertColumn = React.useMemo(
      () => [
        table.accessor("trackingno", {
            size: 90,
            header: "Tracking no",
            id: "trackingno",
            cell: (props: any) => (
                <div style={{width:'100%',display:"flex",justifyContent:'center',textAlign:'center'}}>
                    <p>{props.row.original.trackingno}</p>
                </div>
            ),
        }),
        table.accessor("customername", {
            size: 150,
            id: "customername",
            enableSorting:false,
            header: "Customer Name",
            cell: (props: any) => (
                <><ImageColumn src={props.row.original.image} alt='' /><Name>{props.row.original.customername}</Name></>          
            ),
        }),
        
        table.accessor("price", {
            size: 100,
            id: "price",
            header: "Price",
            cell: (props: any) => (
                <p>Rp. {props.row.original.price.toLocaleString('id-ID')}</p>
            ),
        }),
        table.accessor("totalorder", {
            size: 100,
            id: "totalorder",
            header: "Total Order ",
            cell: (props: any) => (
              <StatusColumn >
                <p>{props.row.original.totalorder}</p>
              </StatusColumn>
            ),
          }),
          table.accessor("totalamount", {
            size: 150,
            id: "totalamount",
            header: "Total Amount",
            cell: (props: any) => (
                <p>Rp. {props.row.original.totalamount.toLocaleString('id-ID')}</p>
            ),
        }),
      ],
      [table]
    );
    return { alertColumn }
  };