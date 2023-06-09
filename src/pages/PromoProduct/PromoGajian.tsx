import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Container, CountdownContainer, HeadingContainer, SliderContainer } from "./PromoProductStyle";
import logo from "../../assets/icon/slivasale.svg"
import SearchShop from "../../components/SearchShop/SearchShop";
import SliderPromo from "../../components/SliderPromo/SliderPromo";
import slideimg from "../../assets/banner.png"
import Countdown from "../../components/CountDown/CountDown";
import FilterShop from "../../components/FilterShop/FilterShop";
import { DummyData } from "./datas";
interface PromoGajianProps {
    width: number;
  }

  

  const images = [
    slideimg,
    slideimg,
    slideimg
  ];
  const PromoGajian: React.FC<PromoGajianProps> = ({width}) => {
    const targetDate = new Date("2023-06-31T12:00:00");
    
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
            <h3>Promo Gajian</h3>
            <h1>Sliva<span>Sale</span></h1>
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
export default PromoGajian;