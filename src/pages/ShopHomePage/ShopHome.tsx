import React from 'react'
import SearchShop from '../../components/SearchShop/SearchShop';
import { Backdrop, CardCategory, CardProduct, Col, CountdownContainer, Logo, PriceDiscount, SeeAll, Title, WrapContainer, Container, RecomendContainer } from './ShopHomeStyle';
import { categories, Products } from './data';
import banner from '../../assets/banner.png'
import Countdown from '../../components/CountDown/CountDown';
import imgPet from '../../assets/image/dog.png'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


interface ShopHomeProps {
    width: number;
}

interface IData {
    id: number;
    image: string;
    category: string;
}

interface IProduct {
    id: number;
    image: string;
    price: number;
    discount?: string;
    priceBefore?: number;
    stock: number;
    location: string;
}

const ShopHome: React.FC<ShopHomeProps> = ({ width }) => {
    const targetDate = new Date("2023-05-31T12:00:00");
    const currency = (number: number) => {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
			currency: 'IDR',
		}).format(number);
	};
  return (
    <>
    <Navbar width={width}/>
    <Container>
        <SearchShop placeholder='Cari Produk Kesehatan Hewan Terlengkap di SlivaShop'/>
        <section>
            <Title>
                <div style={{display: 'flex'}}>
                    <p>Jelajahi Kategori Yang Anda Cari di </p>
                    <Logo>
                        <h1>Sliva<span>Shop</span></h1>
                    </Logo>
                </div>
                <SeeAll to='#'>
                    Lihat semua
                </SeeAll>
            </Title>
            <Col column='6' gap='53px'>
                {categories.map((item: IData) => (
                    <CardCategory key={item.id}>
                        <img src={item.image} alt=''/>
                        <h6>{item.category}</h6>
                    </CardCategory>
                ))}
            </Col>
        </section>
        {/* container Promo Gajian */}
        <WrapContainer >
            <CountdownContainer style={{columnGap: '66px'}}>
                <div className="name-promo">
                    <h3>Promo Gajian</h3>
                    <h1>Sliva<span>Sale</span></h1>
                </div>
                <div className='countdown-wrap'>
                    <Countdown targetDate={targetDate} />
                    <SeeAll to='#'>
                        Lihat semua
                    </SeeAll>
                </div>
            </CountdownContainer>
            <div style={{position: 'relative'}}>
                <Backdrop>
                    <h1>Sliva<span>Sale</span></h1>
                    <div className='text-vertical'>
                        <h2>Promo</h2>
                        <h3>Gajian</h3>
                    </div>
                </Backdrop>
                <div className='absolute-wrap'>
                    <Col column='5' gap='28px'>
                        {Products.map((item: IProduct, index: number) => 
                        index < 5 && (
                            <CardProduct key={item.id}>
                                <img src={item.image} alt=''/>
                                <div className='product-text'>
                                    <div style={{marginBottom: '6px'}}>
                                        <h3>{currency(item.price)}</h3>
                                        {item.discount ? 
                                            <PriceDiscount>
                                                <h2>{item.discount}</h2>
                                                <h1>{currency(item.priceBefore!)}</h1>
                                            </PriceDiscount>
                                            : 
                                            ''
                                        }
                                    </div>
                                    <div className='product-info'>
                                        <h1>Stock Tersisa <span>{item.stock} ekor</span></h1>
                                        <h6>{item.location}</h6>
                                    </div>
                                </div>
                            </CardProduct>
                        ))}
                    </Col>
                </div>
            </div>
        </WrapContainer>
        {/* end of container promo gajian */}
        {/* container Diskon Spesial */}
        <WrapContainer>
            <CountdownContainer style={{justifyContent: 'space-between', alignItems: 'center'}}>
                <div className="name-promo">
                    <h3>Diskon Spesial</h3>
                    <h1>Sliva<span>Pay</span></h1>
                </div>
                <div className='countdown-wrap'>
                    <Countdown targetDate={targetDate} />
                    <SeeAll to='#'>
                        Lihat semua
                    </SeeAll>
                </div>
                <span>Promo Khusus Menggunakan SlivaPay</span>
            </CountdownContainer>
            <div style={{position: 'relative'}}>
                <Backdrop>
                    <h1>Sliva<span>Pay</span></h1>
                    <div className='text-vertical'>
                        <h2>Diskon</h2>
                        <h3>Spesial</h3>
                    </div>
                </Backdrop>
                <div className='absolute-wrap'>
                    <Col column='5' gap='28px'>
                        {Products.map((item: IProduct, index: number) => 
                            index < 5 && (
                            <CardProduct key={item.id}>
                                <img src={item.image} alt=''/>
                                <div className='product-text'>
                                    <div style={{marginBottom: '6px'}}>
                                        <h3>{currency(item.price)}</h3>
                                        {item.discount ? 
                                            <PriceDiscount>
                                                <h2>{item.discount}</h2>
                                                <h1>{currency(item.priceBefore!)}</h1>
                                            </PriceDiscount>
                                            : 
                                            ''
                                        }
                                    </div>
                                    <div className='product-info'>
                                        <h1>Stock Tersisa <span>{item.stock} ekor</span></h1>
                                        <h6>{item.location}</h6>
                                    </div>
                                </div>
                            </CardProduct>
                        ))}
                    </Col>
                </div>
            </div>
        </WrapContainer>
        {/* end of container promo gajian */}
        <section style={{paddingBottom: '39px', borderBottom: '1.5px solid #E0E0E0'}}>
            <h1>Produk Terlaris</h1>
            <Logo style={{marginBottom: '41px'}}>
                <h1>Sliva<span>Shop</span></h1>
            </Logo>
            <Col column='6' gap='31px'>
                {Products.map((item: IProduct, index: number) => 
                 index < 6 && (
                    <CardProduct key={item.id}>
                        <img src={item.image} alt=''/>
                        <div className='product-text'>
                            <div style={{marginBottom: '6px'}}>
                                <h3>{currency(item.price)}</h3>
                                {item.discount ? 
                                    <PriceDiscount>
                                        <h2>{item.discount}</h2>
                                        <h1>{currency(item.priceBefore!)}</h1>
                                    </PriceDiscount>
                                    : 
                                    ''
                                }
                            </div>
                            <div className='product-info'>
                                <h1>Stock Tersisa <span>{item.stock} ekor</span></h1>
                                <h6>{item.location}</h6>
                            </div>
                        </div>
                    </CardProduct>
                ))}
            </Col>
        </section>
        <RecomendContainer>
            <div className='title'>Rekomendasi</div>
            <Col column='6' gap='34px 31px'>
                {Products.map((item: IProduct) => (
                    <CardProduct key={item.id}>
                        <img src={item.image} alt=''/>
                        <div className='product-text'>
                            <div style={{marginBottom: '6px'}}>
                                <h3>{currency(item.price)}</h3>
                                {item.discount ? 
                                    <PriceDiscount>
                                        <h2>{item.discount}</h2>
                                        <h1>{currency(item.priceBefore!)}</h1>
                                    </PriceDiscount>
                                    : 
                                    ''
                                }
                            </div>
                            <div className='product-info'>
                                <h1>Stock Tersisa <span>{item.stock} ekor</span></h1>
                                <h6>{item.location}</h6>
                            </div>
                        </div>
                    </CardProduct>
                ))}
            </Col>
            <div className='btn'>
                <button>Lihat Selengkapnya</button>
            </div>
        </RecomendContainer>
    </Container>
    <Footer/>
    </>     
    
  )
}

export default ShopHome