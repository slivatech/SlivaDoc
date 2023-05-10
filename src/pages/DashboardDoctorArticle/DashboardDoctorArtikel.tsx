import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Cell, IndeterminateCheckbox, TableV8, createColumnHelper } from '../../components/Common/Tablev8'
import { article, months } from './data'
import { Link } from 'react-router-dom'
import { ImageColumn, Content, Form, Chart } from './DashboardDoctorArticleStyle'
import BarChartVertical from '../../components/Chart/BarChartVertical'
import { Container } from './DashboardDoctorArticleStyle'
import BaseButton from '../../components/Common/Buttons/BaseButton'
import ModalRight from '../../components/Common/Modal/ModalRight'
import downloadIcon from '../../assets/icon/Download.svg'
import Dropdown from '../../components/Common/Dropdown/Dropdown'
import PieChartComp from '../../components/Chart/PieChart'

const categories = [
    {
        value: 'Bulu kucing'
    },
    {
        value: 'Bulu anjing'
    },
    {
        value: 'Bulu harimau'
    },
]
const datas = [
    { name: 'Total Article', value: 124, fill: '#3A36DB' },
  { name: 'Draft', value: 30, fill: '#FF69B4' },
  { name: 'Total Visit', value: 60, fill: '#03A89E' },
  ];
  
const DashboardDoctorArticel = () => {
    const { alertColumn } =  useAlertColumn();
    const [update, setUpdate] = useState<any>(false);
    const [category, setCategory] = useState('Category')
    const [data, setData] = useState(article);
    const [selectedRow, setSelectedRow] = useState<any>([]);
    const alertRef: any = useRef(null);
    const itemPerPage = 5;
    const detailItemPerPage = 1;
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
    <Container style={{ background: 'rgba(153, 178, 198, 0.2)'}}>
        <h2 style={{ fontWeight: 700, fontSize: '26px' }}>Article</h2>
        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', margin: '30px 0 34px'}}>
            <div style={{display: 'flex'}}>
                <BaseButton
                    text="Upload"
                    textColor="#fff"
                    color="#3A36DB"
                    fontSize="14px"
                    radius="10px"
                    height="44px"
                    width="100px"
                />
                <BaseButton
                    text="Draft"
                    textColor="#06152B"
                    color="#FFF"
                    fontSize="14px"
                    radius="10px"
                    height="44px"
                    width="100px"
                />
            </div>
            <div>
                <BaseButton
                    text="Upload"
                    iconStart={
                        <i className="fa-light fa-plus fa-lg" style={{color: '#fff'}}></i>
                    }
                    textColor="#fff"
                    color="#3A36DB"
                    fontSize="14px"
                    radius="10px"
                    height="44px"
                    width="144px"
                    onClick={ () => setUpdate(true)}
                />
            </div>
            {
                update &&
                <ModalRight
                    open={update} 
                    setIsOpen={setUpdate} 
                    isBackgroundClick={true}
                >
                    <div style={{padding: '1.5rem'}}>
                        <div style={{marginTop: '7rem', display: 'flex', columnGap:'3rem', marginBottom: '2rem'}}>
                            <button style={{border: 'none', background: 'transparent', cursor: 'pointer'}} onClick={ () => setUpdate(false)}>
                                <i className="fa-solid fa-chevron-left" style={{color: "#06152b"}}></i>
                            </button>
                            <h5>Add a New Article</h5>
                        </div>
                    <Form>
                        <div>
                            <div className="inpWrap">
                                <label htmlFor='title'>Title</label>
                                <input type='text'/>
                            </div>
                            <div className="inpWrap">
                                <label htmlFor='category'>Category</label>
                                <div style={{backgroundColor: '#F1F4FA', borderRadius: '10px' }}>
                                    <Dropdown
                                        options={categories}
                                        border="none"
                                        fontSize="14px"
                                        width='100%'
                                        height='50px'
                                        value={category}
                                        setValue={setCategory}
                                    />
                                </div>
                            </div>
                            <div className="inpWrap">
                                <label htmlFor='description'>Descriptions</label>
                                <textarea name="textarea" rows={4} cols={20}>Write something here</textarea>
                            </div>
                        </div>

                        <div className="submit">
                            <BaseButton
                                text="Upload"
                                iconStart={
                                    <img src={downloadIcon} alt="" width={20} />
                                }
                                textColor="#fff"
                                color="#3A36DB"
                                fontSize="14px"
                                radius="10px"
                                height="44px"
                            />
                        </div>
                </Form>
                    </div>
                </ModalRight>
            }
        </div>
        
        <Content>
            <div className='table'>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '30px 28px'}}>
                    <h5>List Article</h5>
                    <Link to='/' style={{fontSize: '12px', textDecoration: 'none'}}>See more</Link>
                </div>
                <div style={{width:'100%', padding: '0 28px 30px'}}>
                    <TableV8 
                        data={data}
                        ref={alertRef}
                        //   paginationStyle='firstlast'
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
            
            <Chart>
            <div className='chart'>
                <div style={{padding: '30px'}}>
                    <h5 style={{marginBottom: "30px"}}>Article Add by Month</h5>
                    <BarChartVertical
                        data={months}
                        left="name"
                        right='total'
                    />
                </div>
            </div>
            <div className='pie-chart'>
          
            <h5 >Article Analytics</h5>
        <PieChartComp
             data={datas}
             width={400}
             height={400}
             innerRadius={50}
             outerRadius={100}
             />
    
            </div>
         </Chart>
        </Content>
       
    </Container>
  )
}

export default DashboardDoctorArticel;

export const useAlertColumn = () => {
    const table = createColumnHelper();
    
    const alertColumn = React.useMemo(
      () => [
        table.accessor("id", {
            size: 50,
            header: "ID",
            id: "id",
            cell: (props: any) => (
                <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
                    <p>{props.row.original.id}</p>
                </div>
            ),
        }),
        table.accessor("title", {
            size: 250,
            id: "titlte",
            header: "Title",
            cell: (props: any) => (
                <Link to='/' style={{textDecoration: 'none'}}>{props.row.original.title}</Link>
            ),
        }),
        table.accessor("category", {
            size: 150,
            id: "category",
            enableSorting:false,
            header: "Category",
            cell: (props: any) => (
                <p>{props.row.original.category}</p>
            ),
        }),
        table.accessor("description", {
            size: 200,
            id: "description",
            enableSorting:false,
            header: "Description",
            cell: (props: any) => (
                <p>{props.row.original.description}</p>
            ),
        }),
        table.accessor("image", {
            size: 100,
            id: "image",
            enableSorting:false,
            header: "Image",
            cell: (props: any) => (
                <ImageColumn src={props.row.original.image} alt=''/>
            ),
        }),
      ],
      [table]
    );
    return { alertColumn }
  };