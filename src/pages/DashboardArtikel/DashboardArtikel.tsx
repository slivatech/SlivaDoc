import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { TableV8, createColumnHelper } from '../../components/Common/Tablev8'
import { article, months, analytics } from './data'
import { Link } from 'react-router-dom'
import { ImageColumn, Content, Form, Profile, Chart } from './DashboardArticleStyle'
import BarChartVertical from '../../components/Chart/BarChartVertical'
import { Container } from '../PageArtikel/PageArtikelStyle'
import BaseButton from '../../components/Common/Buttons/BaseButton'
import ModalRight from '../../components/Common/Modal/ModalRight'
import downloadIcon from '../../assets/icon/Download.svg'
import Dropdown from '../../components/Common/Dropdown/Dropdown'
import TabGroup, { TTab } from './TabGroup'
import PieChartComp from '../../components/Chart/PieChart'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

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

const types:TTab[] = [
    {   id: 1,
        label: 'Upload'
    },
    {   id: 2,
        label: 'Draft'
    },
];

interface FormDataType {
    title:string, 
    category: string, 
    description: string,
    imageURLs?: string,
}

interface DashboardArticleProps {
    width : number;
}

const DashboardArtikel: React.FC<DashboardArticleProps> = ({width}) => {
    // state form
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState('Category');
    // const [picture, setPicture] = useState<any>(null);
    const [images, setImages] = useState<any>([]) ;
    const [imageURLs, setImageURLs] = useState<any>([]);
    let formData : FormDataType = {
        title,
        category,
        description,
        imageURLs,
    }
    const [update, setUpdate] = useState<any>(false);
     // ==========
    // state tabs
    const [tab, setTab] = useState(types[0].id);
    // ==========
    // state table
    const { alertColumn } =  useAlertColumn();
    const [data, setData] = useState(article);
    const [selectedRow, setSelectedRow] = useState<any>([]);
    const alertRef: any = useRef(null);
    const itemPerPage = 5;
    // const detailItemPerPage = 1;
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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        
        // Reset the form fields
        setTitle('');
        setDescription('');
        setCategory('Category');
        setImages([]);
        setImageURLs([])
    };

    useEffect (() => {
        if (images.length < 1) return;
        const newImageUrls:any = [];
        images.forEach((image:any) => newImageUrls.push(URL.createObjectURL(image))); 
        setImageURLs(newImageUrls);
    }, [images]);

    function onImageChange (e:any) {
        setImages([...e.target.files])
    }

    useEffect(() => {
        setPage(pageIndex + 1);
    }, [pageIndex]);

    useEffect(() => {
        let startIndex = pageIndex * itemPerPage;
        let endIndex = page * itemPerPage;

        let data = article?.slice(startIndex, endIndex);

        setData(data);
    }, [page, pageIndex]);

    useEffect(() => {
        console.log({ selectedRow });
        console.log(data?.length)
    }, [data?.length, selectedRow]);

    return (
        <>
        <Navbar width={width}/>
    <Container style={{ background: 'rgba(153, 178, 198, 0.2)'}}>
        <h2 style={{ fontWeight: 700, fontSize: '26px'}}>Article</h2>
        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', margin: '30px 0 34px'}}>
            <TabGroup
                types={types}
                active={tab}
                setActive={setTab}
            />
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
            //section modal update article
            update &&
            <ModalRight
                open={update} 
                setIsOpen={setUpdate} 
                isBackgroundClick={true}
            >
                <div style={{padding: '1.5rem'}}>
                    <div style={{display: 'flex', columnGap:'3rem', margin: '2rem 0'}}>
                        <button style={{border: 'none', background: 'transparent', cursor: 'pointer'}} onClick={ () => setUpdate(false)}>
                            <i className="fa-solid fa-chevron-left" style={{color: "#06152b"}}></i>
                        </button>
                        <h5>Add a New Article</h5>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px'}}>
                                <input 
                                    type="file" multiple 
                                    accept="image/*" 
                                    id='image'
                                    onChange={onImageChange} 
                                    style={{display: 'none'}}
                                /> 
                                <label htmlFor='image'>
                                    <Profile>
                                        <i className="fa-solid fa-camera" style={{color: '#06152b', opacity: 0.7, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1}}></i>
                                        { imageURLs.map((imageSrc:any) => (
                                            <img src={imageSrc}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    position: "absolute",
                                                    zIndex: 10,
                                                    objectFit: 'cover',
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }} 
                                                alt=''
                                            />
                                        )) }
                                    </Profile>
                                </label>
                        </div>
                        <div>
                            <div className="inpWrap">
                                <label htmlFor='title'>Title</label>
                                <input type='text' name='title' value={title} onChange={(e)=> setTitle(e.target.value)}/>
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
                                <textarea name="description" rows={4} cols={20} placeholder='Write something here' value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
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
                                onClick={handleSubmit}
                            />
                        </div>
                    </Form>
                </div>
            </ModalRight>
            // end of section modal update article
        }
        </div>
        {
            // section upload tab
            tab === types[0].id && (
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
                    <div className='bar-chart'>
                        <h5 style={{marginBottom: "30px"}}>Article Add by Month</h5>
                        <BarChartVertical
                            data={months}
                            left="name"
                            right='total'
                        />
                    </div>
                    <div className='pie-chart'>
                        <h5 style={{marginBottom: "30px"}}>Article Analytics</h5>
                        <PieChartComp
                            data={analytics}
                            width={'100%'}
                            height={300}
                            innerRadius={50}
                            outerRadius={100}
                        />
                    </div>
                </Chart>
            </Content>
            )
            // end of section upload tab
        }
        {
            // section draft tab
            tab === types[1].id && (
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
                    <div className='bar-chart'>
                        <h5 style={{marginBottom: "30px"}}>Article Add by Month</h5>
                        <BarChartVertical
                            data={months}
                            left="name"
                            right='total'
                        />
                    </div>
                </Chart>
            </Content>
            )
            // end of section draft tab
        } 
    </Container>
    <Footer/>
    </>
  )
}

export default DashboardArtikel

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
            size: 270,
            id: "titlte",
            header: "Title",
            cell: (props: any) => (
                <Link to='/' style={{textDecoration: 'none'}}>{props.row.original.title}</Link>
            ),
        }),
        table.accessor("category", {
            size: 170,
            id: "category",
            enableSorting:false,
            header: "Category",
            cell: (props: any) => (
                <p>{props.row.original.category}</p>
            ),
        }),
        table.accessor("description", {
            size: 150,
            id: "description",
            enableSorting:false,
            header: "Description",
            cell: (props: any) => (
                <p style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{props.row.original.description}</p>
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