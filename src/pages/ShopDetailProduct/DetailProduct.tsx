import React, { useState } from 'react'
import { ButtonAdd, Container, ContainerBlue, ContainerDetail, ContainerFilter, ContainerInfo, ContainerStore, ContainerTestimoni, DropdownTitle, GridCols, ImageShop, ImageTesti, RedStatus, StarRate, Title } from './DetailProductStyle'
import logoShop from '../../assets/image/logoShop.png'
import BaseButton from '../../components/Common/Buttons/BaseButton'
import imgPet from '../../assets/image/dog.png'
import { ReactComponent as ChevronUp} from '../../assets/icon/chevron-up.svg'
import { ReactComponent as ChevronDown} from '../../assets/icon/chevron-down.svg'
import TruckDeliver from '../../assets/icon/truck-deliver.svg'
import SwiperProduct from './SwiperProduct'
import { CheckboxFilter } from './CheckboxFilter'
import { imagesProduct, Testimoni } from './data'
import Dropdown from '../../components/Common/Dropdown/Dropdown'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { title } from 'process'


interface ITestimoni {
    id: number,
    image: string,
    product: string,
    rate: number,
    testi: any,
    reply?: any,
}

interface ShopDetailProductProps {
    width: number
}



const DetailProduct: React.FC<ShopDetailProductProps> = ({ width }) => {
    const [isReply, setIsReply] = useState<boolean>(false)
    const [count, setCount] = useState<number>(0)
    const [filter, setFilter] = useState("Terbaru")
    const [filteredStar, setFilteredStar] = useState<any>([]);
    console.log(filteredStar.length, 'this is length');
    
    
    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }

    const filters = [
        {
            value: 'Terbaru'
        },
        {
            value: 'Terlama'
        },
    ]

    const StarCategories = [
        {
            title: 5
        },
        {
            title: 4
        },
        {
            title: 3
        },
        {
            title: 2
        },
        {
            title: 1
        },
      ];

    let [categoryFilters, setcategoryFilters] = useState(new Set<any>([]));

    function updateFilters(checked:any, categoryFilter:any) {
        if (checked)
        setcategoryFilters((prev) => new Set(prev).add(categoryFilter));
        if (!checked)
        setcategoryFilters((prev) => {
            const next = new Set(prev);
            next.delete(categoryFilter);
            return next;
        });
    }

    const filteredProducts =
        categoryFilters.size === 0
        ? Testimoni
        : Testimoni.filter((p) => (
            categoryFilters.has(p.rate)
            ));
        


    // const handleFilter = (event:any) => {
    //     if (filteredStar.length > 0) {
    //         FilterStar(event);
    //     } else {
    //         setFilteredStar([...filteredStar, ...Testimoni]);
    //     }
    // };

    // const FilterStar = (event:any) => {
    //     let selectedFilter = event.target.value;
    //     selectedFilter = parseInt(selectedFilter)
    //     setFilter(selectedFilter);
    //     const filteredData = Testimoni.filter((star) => star.rate === selectedFilter)
    //     setFilteredStar(filteredData);
    // };

  return (
    <>
    <Navbar width={width} />
    <Container>
        <GridCols column='40%' gap='40px'>
            <SwiperProduct images={imagesProduct} />
            <ContainerInfo>
                <h1>Anjing Buldog</h1>
                <div className='rate'>
                    <span>4.7 rate</span>
                    <span>9.3 rb</span>
                    <span>10 rb</span>
                </div>
                <ContainerBlue>
                    <div style={{marginBottom: '20px'}}>
                        <h2>Rp 4000000</h2>
                        <RedStatus>5% Off</RedStatus>
                    </div>
                    <h4>SlivaShop Garansi 100%</h4>
                    <h6>Garansi Uang Kembali Jika Kondisi Hewan Sampai Dalam Keadaan Tidak Bernyawa</h6>
                </ContainerBlue>
                <div style={{margin: '27px 0 40px'}}>
                    <h5>Pengiriman</h5>
                    <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                        <img src={TruckDeliver} alt='' />
                        <table>
                            <tbody>
                                <tr>
                                    <td>Pengiriman Ke</td>
                                    <td><b>Kota Pekanbaru</b></td>
                                </tr>
                                <tr>
                                    <td>Ongkos Kirim</td>
                                    <td><b>0</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <h5>Kuantitas</h5>
                    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                        <ButtonAdd>
                            <button onClick={decrease}>-</button>
                            <p>{count}</p>
                            <button onClick={increase}>+</button>
                        </ButtonAdd>
                        <span className='span-info'>Tersisa 50 ekor</span>
                    </div>
                </div>
                <div style={{display: 'flex', gap: '18px', marginTop: '34px'}}>
                    <BaseButton 
                        text="Masukkan Keranjang"
                        textColor="#1C1C1C"
                        color="#fff"
                        fontSize="14px"
                        radius="5px"
                        width="30%"
                        height="40px"
                    />
                    <BaseButton 
                        text="Beli Sekarang"
                        textColor="#2335D4"
                        color="#CEEAF0"
                        fontSize="14px"
                        radius="5px"
                        width="30%"
                        height="40px"
                        gap="5px"
                    />
                </div>
            </ContainerInfo>
        </GridCols>
        <ContainerStore>
            <div className='left-store'>
                <ImageShop src={logoShop} alt='' />
                <div style={{marginLeft: '40px', width: '100%'}}>
                    <h1>SlivaPetStore</h1>
                    <span>Kota Bandung</span>
                    <div style={{display: 'flex', gap: '18px'}}>
                        <BaseButton 
                            text="Chat Sekarang"
                            textColor="#2335D4"
                            color="#CEEAF0"
                            fontSize="14px"
                            radius="5px"
                            width="30%"
                            height="40px"
                        />
                        <BaseButton 
                            text="Kunjungi Toko"
                            textColor="#2335D4"
                            color="#CEEAF0"
                            fontSize="14px"
                            radius="5px"
                            width="30%"
                            height="40px"
                            gap="5px"
                        />
                    </div>
                </div>
            </div>
            <div className='right-store'>
                <h6>Penilaian<span>1.6 JT</span></h6>
                <h6>Bergabung<span>1 bulan lalu</span></h6>
                <h6>Produk<span>1.6 RB</span></h6>
                <h6>Pengikut<span>1.6 RB</span></h6>
            </div>
        </ContainerStore>
        <ContainerDetail>
            <Title>
                <h1>Spesifikasi Produk</h1>
            </Title>
            <table>
                <tbody>
                    <tr>
                        <td>Merek</td>
                        <td><b>Anjing Buldog</b></td>
                    </tr>
                    <tr>
                        <td>Stok</td>
                        <td><b>1359</b></td>
                    </tr>
                    <tr>
                        <td>Dikirim dari</td>
                        <td><b>Kota Pekanbaru</b></td>
                    </tr>
                </tbody>
            </table>
            <Title style={{marginTop: '26px'}}>
                <h1>Deskripsi Produk</h1>
            </Title>
            <div className='desc'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex aliquid modi. Esse nihil inventore quo, sunt reprehenderit adipisci accusantium similique assumenda veritatis porro temporibus, praesentium voluptatibus dolore? Adipisci, sequi?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia, perferendis repudiandae mollitia, facilis modi a quas iusto corrupti aut reprehenderit adipisci alias porro, earum ipsa eum possimus dolores. Sed. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae sunt distinctio molestias placeat. Velit mollitia rem error facere saepe earum minus? Quod enim veritatis pariatur doloremque porro maxime sequi ipsa.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex aliquid modi. Esse nihil inventore quo, sunt reprehenderit adipisci accusantium similique assumenda veritatis porro temporibus, praesentium voluptatibus dolore? Adipisci, sequi?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia, perferendis repudiandae mollitia, facilis modi a quas iusto corrupti aut reprehenderit adipisci alias porro, earum ipsa eum possimus dolores. Sed. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae sunt distinctio molestias placeat. Velit mollitia rem error facere saepe earum minus? Quod enim veritatis pariatur doloremque porro maxime sequi ipsa.</p>
                
            </div>
        </ContainerDetail>
        <GridCols column='30%'>
            <div></div>
            <DropdownTitle>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h1>Ulasan Produk</h1>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '21px', alignItems: 'center'}}>
                        <h3>Reset</h3>
                        <h2>Urutkan</h2>
                        <Dropdown
                            options={filters}
                            border="0.5px solid #000000"
                            backgroundColor='#fff'
                            fontSize="14px"
                            width='174px'
                            height='40px'
                            value={filter}
                            setValue={setFilter}
                        />
                    </div>
                </div>
                <p>Menampilkan 2 dari 7 Ulasan</p>
            </DropdownTitle>
        </GridCols>
        <GridCols column='30%'>
            <ContainerFilter>
                <h1 className='filter'>Filter Ulasan</h1>
                <div className='filter'>
                    <h3>Media</h3>
                    <CheckboxFilter
                        id='1'
                        name='media'
                        title='Dengan Foto & Video'
                    />
                </div>
                <div className='filter'>
                    <h3>Rating</h3>
                    {StarCategories.map((item, index) => (
                        <CheckboxFilter
                            id={index.toString()}
                            name='media'
                            title={item.title}
                            handleChange={(e:any) => updateFilters(e.target.checked, item.title)}
                        />
                    ))}
                </div>
                <div style={{marginTop: '19px'}}>
                    <h3>Rating</h3>
                    <CheckboxFilter
                        id='1'
                        name='kualitas'
                        title='Kualitas Produk'
                    />
                    <CheckboxFilter
                        id='2'
                        name='pelayanan'
                        title='Pelayanan Penjual'
                    />
                    <CheckboxFilter
                        id='3'
                        name='deskripsi'
                        title='Sesuai Deskripsi'
                    />
                    <CheckboxFilter
                        id='4'
                        name='pengiriman'
                        title='Pengiriman'
                    />
                </div>
            </ContainerFilter>
            <ContainerTestimoni>
                {filteredProducts.map((item: ITestimoni, index: number) => (
                    <GridCols column='100px' key={index}>
                        <ImageTesti src={item.image} width='98px' height='114px'/>
                        <div>
                            <div style={{borderBottom: '0.5px solid #2335D4', height: '114px', width: '100%'}}>
                                <h1>{item.product}</h1>
                                    <StarRate>
                                        {[...Array(item.rate)].map(() => (
                                            <span className='on'>&#9733;</span>
                                        ))}
                                        <span className='span-text'>24 menit lalu</span>
                                    </StarRate>
                            </div>
                            <GridCols column='50px'>
                                {  item.testi.map((testimony: any) => (
                                    <>
                                        <img src={testimony.pict} style={{width: '39px', height: '38px', marginTop: '25px'}}/>
                                        <div className='testi-text'>
                                            <h2>{testimony.name}</h2>
                                            {testimony.images ? (
                                                <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                                                {
                                                    testimony.images?.map((img: string) => (
                                                        <ImageTesti src={img} width='71px' height='88px'/>
                                                    ))
                                                }
                                                </div>
                                            ) : null}  
                    
                                            <p>{testimony.desc}</p>
                                            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
                                                <div>
                                                    <i className="fa-solid fa-thumbs-up" style={{color: "#7076ae"}}></i>
                                                    <span className='span-text'>{testimony.kepuasan}</span>
                                                </div>
                                                {item.reply ? (
                                                    <button onClick={() => setIsReply(!isReply)} className='btn-reply'>Lihat balasan
                                                        <span>
                                                            {isReply ? <ChevronUp/> : <ChevronDown/>}
                                                        </span>
                                                    </button>
                                                ) : null}
                                            </div>
                                            { item.reply && isReply ? (
                                                <ContainerBlue>
                                                    <GridCols column='50px'>
                                                        <img src={item.reply.logo} style={{width: '39px', height: '38px'}}/>
                                                        <div>
                                                            <h1>{item.reply.shop}</h1>
                                                            <RedStatus>{item.reply.role}</RedStatus>
                                                            <p style={{marginTop: '1rem'}}>{item.reply.desc}</p>
                                                        </div>
                                                    </GridCols>
                                                </ContainerBlue>
                                            ) : ''}
                                            
                                        </div>
                                    </>
                                ))}
                            </GridCols>
                        </div>
                    </GridCols>
                ))}
            </ContainerTestimoni>
        </GridCols>
        
    </Container>
    <Footer/>
    </>
  )
}

export default DetailProduct