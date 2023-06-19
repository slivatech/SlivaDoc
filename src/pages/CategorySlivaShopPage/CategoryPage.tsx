import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Container } from "../../components/Container";
import SearchProduct from "../../components/CategorySlivaShop/SearchProduct";
import PromoBannersSwiper from "../../components/ResellerDetail/PromoBanners";
import CategorySection from "../../components/CategorySlivaShop/CategorySection";
import Select from "../../components/Select/Select";
import { Filtering } from "../../components/CategorySlivaShop/styled";
import ProductContent from "../../components/CategorySlivaShop/ProductContent";

const CategoryPage = () => {

  const [filtering, setFiltering] = useState("");
  const filterValues = [
    "Terbaru",
    "Harga Tertinggi",
    "Harga Terendah",
    "Ulasan Terbanyak",
    "Pembelian Terbanyak",
    "Dilihat Terbanyak",
    "Pembaruan Terbanyak",
  ];

  const handleFilteringChange = (value: string) => {
    setFiltering(value);
  };

  const resetFilter = () => {
    setFiltering("Terbaru")
  }

  return (
    <div style={{ background: "rgba(230, 231, 232, 0.3)" }}>
      <Navbar width={100} />
      <Container>
        <SearchProduct />
        <PromoBannersSwiper />
        <CategorySection />
        <Filtering>
          <button className="reset-btn" onClick={resetFilter}>Reset</button>
          <button className="sort-btn">Urutkan</button>
          <div>
            <Select
              onChange={handleFilteringChange}
              label=""
              defaultValue={"Terbaru"}
              border="1px solid black"
              iconEnd={<i className="fa-solid fa-chevron-down"></i>}
              radius="5px"
              padding=".5rem "
              values={filterValues}
            />
          </div>
        </Filtering>
        <ProductContent filtering={filtering} />
      </Container>
      <Footer />
    </div>
  );
};

export default CategoryPage;
