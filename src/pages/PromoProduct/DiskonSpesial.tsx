import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Card, CardContent, CardGrid, CardTitle, Container, CountdownContainer, HeadingContainer, SliderContainer } from "./PromoProductStyle";
import logo from "../../assets/icon/slivasale.svg"
import SearchShop from "../../components/SearchShop/SearchShop";
import SliderPromo from "../../components/SliderPromo/SliderPromo";
import slideimg from "../../assets/banner.png"
import Countdown from "../../components/CountDown/CountDown";
import FilterShop from "../../components/FilterShop/FilterShop";
import img1 from "../../assets/image/Anjing.png";
import img2 from "../../assets/image/kucing.png";
interface DiskonSpesial {
    width: number;
  }

  
  interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    discount: number;
    rating: number;
    img:string;
    stok:number;
    city: string;
    province: string;
  }
  const images = [
    slideimg,
    slideimg,
    slideimg
  ];
  const DiskonSpesial: React.FC<DiskonSpesial> = ({width}) => {
    const targetDate = new Date("2023-06-31T12:00:00");

    const DummyData: Product[] = [
      {
        id: 1,
        img:img1,
        name: "Produk 1",
        category: "Aksesoris Hewan",
        price: 5000000,
        discount: 10,
        city: "Bandung",
        province:"Jawa Barat",
        rating:3,
        stok:50,
        
      },
      {
        id: 2,
        img:img1,
        name: "Produk 2",
        category: "Obat & Vitamin",
        price: 1000000,
        discount: 20,
        city: "Medan",
        province:"Sumatra Utara",
        rating:5,
        stok:56,
      },
      {
        id: 3,
        img:img2,
        name: "Produk 3",
        category: "Hewan Peliharaan",
        price: 15000000,
        discount: 5,
        city: "jakarta",
        province:"DKI Jakarta",
        rating:3,
        stok:50,
      },
      {
        id: 4,
        img:img1,
        name: "Produk 4",
        category: "Makanan Hewan",
        price: 2000000,
        discount: 15,
        city: "Malang",
        province:"Jawa Timur",
        rating:4,
        stok:50,
      },
      {
        id: 5,
        img:img2,
        name: "Produk 5",
        category: "Hewan Peliharaan",
        price: 2000000,
        discount: 15,
        city: "Medan",
        province:"Sumatra Utara",
        rating:2,
        stok:50,
      },
      {
        id: 6,
        img:img1,
        name: "Produk 4",
        category: "Makanan Hewan",
        price: 4050000,
        discount: 5,
        city: "Medan",
        province:"Sumatra Utara",
        rating:3,
        stok:50,
      },
      {
        id: 7,
        img:img2,
        name: "Produk 4",
        category: "Obat & Vitamin",
        price: 2800000,
        discount: 1,
        city: "Malang",
        province:"Jawa Timur",
        rating:5,
        stok:50,
      },
    ];
    
    return(
        <>
        <Navbar width={0}/>
        <HeadingContainer>
        <div>
            <img src={logo} alt="logo"/>
            <p>Ambil Kesempatan Anda Sekarang Juga!</p>
        </div>
        </HeadingContainer>
        <Container>
        <SearchShop placeholder={"Cari Produk Kesehatan Hewan Terlengkap di SlivaShop"}/>
        <SliderContainer>
        <SliderPromo images={images}/>
        </SliderContainer>
        <CountdownContainer>
            
          <div className="name-promo">
            <h3>Diskon Spesial</h3>
            <h1>Sliva<span>Pay</span></h1>
          </div>
         
          <Countdown targetDate={targetDate} />
        
      </CountdownContainer>
      <div>
      <FilterShop data={DummyData} />

    </div>
        </Container>
        <Footer/>
        </>
    );
};
export default DiskonSpesial;