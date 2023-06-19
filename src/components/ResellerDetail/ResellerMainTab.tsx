
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import { GridContent,  Row } from "./ResellerDetailStyled";
import { animals, bestSellers } from "./fakeData";
import AnimalCard from "./AnimalCard";
import PromoBannersSwiper from "./PromoBanners";

const ResellerMainTab = () => {

  return (
    <>
      <PromoBannersSwiper />
      <Row>
        <h2>Terlaris</h2>
        <GridContent>
          {bestSellers.map((animal) => (
            <AnimalCard animal={animal} />
          ))}
        </GridContent>
      </Row>
      <Row>
        <h2 style={{ margin: "1.5rem 0" }}>Semua Produk</h2>
        <GridContent>
          {animals.map((animal, i) => (
            <AnimalCard animal={animal} key={i} />
          ))}
        </GridContent>
      </Row>
    </>
  );
};

export default ResellerMainTab;
