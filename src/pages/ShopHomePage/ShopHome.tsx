import React from 'react'
import SearchShop from './SearchShop';
import { CardCategory, CardProduct, Col, CountdownContainer, Logo, PriceDiscount, SeeAll, Title, WrapContainer, Container, RecomendContainer, SwiperImg, SliderContainer, SliderTop, DoubleBanner, RecomText, BackdropImg, BestSeller } from './ShopHomeStyle';
import { categories, Products, BannerAds, ProductAds } from './data';
import Countdown from '../../components/CountDown/CountDown';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SwiperHome from './SwiperHome';


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
    name: string;
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
        <section style={{position: 'relative'}}>
            <SearchShop placeholder='Cari Produk Kesehatan Hewan Terlengkap di SlivaShop'/>
            <SliderTop>
                <div className='slider-navigation'>
                    <SwiperHome images={BannerAds}/>
                </div>
                <div className='slider-row'>
                    {BannerAds.map((ads: string, index: number) => (
                        <SwiperImg key={index} src={ads} alt=''/>
                    ))}
                </div>
            </SliderTop>
        </section>
        <section className='p-1'>
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
            <Col column='6' gap='53px' sGap='30px' sColumn='90px' flow='column'>
                {categories.map((item: IData, index: number) => (
                    <CardCategory key={index}>
                        <img src={item.image} alt=''/>
                        <h6>{item.category}</h6>
                    </CardCategory>
                ))}
            </Col>
        </section>
        <SliderContainer className='p-1'>
            <SwiperHome images={BannerAds}/>
        </SliderContainer> 
        {/* container ads */}
        {ProductAds && ProductAds.map((item:any, index: number) => (
            <WrapContainer key={index}>
                <CountdownContainer className='p-1'>
                    <div className="name-promo">
                        <h3>{item.title}</h3>
                        {item.logo.split(' ').length > 1 ? 
                            <h1>{item.logo.split(' ')[0]}<span>{item.logo.split(' ')[1]}</span></h1> 
                            : <h1>{item.logo}</h1> 
                        }
                    </div>
                    <div className='countdown-wrap'>
                        <Countdown targetDate={targetDate} />
                        <SeeAll to={`/${item.nav}`} key={item.id}>
                            Lihat semua
                        </SeeAll>
                    </div>
                    {item.desc ? <span>{item.desc}</span> : ''}
                </CountdownContainer>
                <div className='wrap-card'>
                    <BackdropImg src={item.imgBackdrop} alt="" />
                    <div className='absolute-wrap'>
                        <Col column='5' gap='28px' sGap='18px' sColumn='110px' flow='column'>
                            {item.products.map((product: IProduct, index: number) => (
                                <CardProduct key={index}>
                                    <img src={product.image} alt=''/>
                                    <div className='product-text'>
                                        <div style={{marginBottom: '6px'}}>
                                            <h1>{product.name}</h1>
                                            <h3>{currency(product.price)}</h3>
                                            {product.discount ? 
                                                <PriceDiscount >
                                                    <h2>{product.discount}</h2>
                                                    <h1>{currency(product.priceBefore!)}</h1>
                                                </PriceDiscount>
                                                : ''
                                            }
                                        </div>
                                        <div className='product-info'>
                                            <h1>Stock Tersisa <span>{product.stock} ekor</span></h1>
                                            <h6>{product.location}</h6>
                                        </div>
                                    </div>
                                </CardProduct>
                            ))}
                        </Col>
                    </div>
                </div>
            </WrapContainer>
        ))}
        {/* end of container ads */}
        <DoubleBanner className='p-1'>
            {BannerAds.map((ads: string, index: number) => (
                <SwiperImg key={index} className='ads-column' src={ads} alt=''/>
            ))}
        </DoubleBanner>
        <BestSeller className='p-1'>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '34px'}}>
                <div className='best-seller-title'>
                    <h2>Produk Terlaris</h2>
                    <Logo>
                        <h1>Sliva<span>Shop</span></h1>
                    </Logo>
                </div>
                <SeeAll to='#'>
                    Lihat semua
                </SeeAll>
            </div>
            <Col column='6' gap='31px' sGap='20px 10px' sColumn='110px'>
                {Products.map((item: IProduct, index: number) => 
                 index < 6 && (
                    <CardProduct key={index}>
                        <img src={item.image} alt=''/>
                        <div className='product-text'>
                            <div style={{marginBottom: '6px'}}>
                                <h1>{item.name}</h1>
                                <h3>{currency(item.price)}</h3>
                                {item.discount ? 
                                    <PriceDiscount >
                                        <h2>{item.discount}</h2>
                                        <h1>{currency(item.priceBefore!)}</h1>
                                    </PriceDiscount>
                                    : ''
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
        </BestSeller>
        <RecomText>Rekomendasi</RecomText>
        <RecomendContainer className='p-1'>
            <Col column='6' gap='30px 31px' sGap='20px 10px' sColumn='110px'>
                {Products.map((item: IProduct, index: number) => (
                    <CardProduct key={index}>
                        <img src={item.image} alt=''/>
                        <div className='product-text'>
                            <div style={{marginBottom: '6px'}}>
                                <h1>{item.name}</h1>
                                <h3>{currency(item.price)}</h3>
                                {item.discount ? 
                                    <PriceDiscount >
                                        <h2>{item.discount}</h2>
                                        <h1>{currency(item.priceBefore!)}</h1>
                                    </PriceDiscount>
                                    : ''
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