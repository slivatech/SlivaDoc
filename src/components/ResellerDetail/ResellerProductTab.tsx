import React, { useMemo, useState } from "react";
import {
  GridContent,
  ProductContent,
  ResellerProductHeader,
  ShowMoreBtn,
  VoucherCard,
} from "./ResellerDetailStyled";
import Select from "../Select/Select";
import AnimalCard from "./AnimalCard";
import { animals } from "./fakeData";

interface AnimalsProps {
  filtering: string;
}

const Animals: React.FC<AnimalsProps> = ({ filtering }) => {
  // const sortBy: Record<string, string> = {
  //   "Terbaru": "createdAt",
  //   "Harga Tertinggi": "price",
  //   "Harga Terendah": "price",
  //   "Ulasan Terbanyak": "reviewsCount",

  //   "Pembelian Terbanyak": "soldCount",
  //   "Dilihat Terbanyak": "viewsCount",
  //   "Pembaruan Terbanyak": "updatedCount",
  // };

  const renderSortedAnimals = useMemo(() => {
    if (filtering === "Terbaru") {
      return (
        <>
          {animals
            .sort((a, b) =>
              a.createdAt?.getTime() > b.createdAt?.getTime() ? -1 : 1
            )
            .map((animal, i) => (
              <AnimalCard animal={animal} key={i} />
            ))}
        </>
      );
    }

    if (filtering === "Dilihat Terbanyak") {
      return (
        <>
          {animals
            .sort((a, b) => (a.viewsCount > b.viewsCount ? -1 : 1))
            .map((animal, i) => (
              <AnimalCard animal={animal} key={i} />
            ))}
        </>
      );
    }
    if (filtering === "Pembaruan Terbanyak") {
      return (
        <>
          {animals
            .sort((a, b) => (a.updatedCount > b.updatedCount ? -1 : 1))
            .map((animal, i) => (
              <AnimalCard animal={animal} key={i} />
            ))}
        </>
      );
    }
    if (filtering === "Ulasan Terbanyak") {
      return (
        <>
          {animals
            .sort((a, b) => (a.reviewsCount > b.reviewsCount ? -1 : 1))
            .map((animal, i) => (
              <AnimalCard animal={animal} key={i} />
            ))}
        </>
      );
    }
    if (filtering === "Pembelian Terbanyak") {
      return (
        <>
          {animals
            .sort((a, b) => (a["soldCount"] > b["soldCount"] ? -1 : 1))
            .map((animal, i) => (
              <AnimalCard animal={animal} key={i} />
            ))}
        </>
      );
    }
    if (filtering === "Harga Tertinggi" || filtering === "Harga Terendah") {
      return (
        <>
          {animals
            .sort((a, b) =>
              filtering === "Harga Tertinggi"
                ? a.price > b.price
                  ? -1
                  : 1
                : b.price > a.price
                ? -1
                : 1
            )
            .map((animal, i) => (
              <AnimalCard animal={animal} key={i} />
            ))}
        </>
      );
    }
    return (
      <>
        {animals.map((animal, i) => (
          <AnimalCard animal={animal} key={i} />
        ))}
      </>
    );
  }, [filtering]);

  return <GridContent>{renderSortedAnimals}</GridContent>;
};

const ResellerProductTab = () => {
  const [isSorted, setIsSorted] = useState<boolean>(false);

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
    <>
      <ResellerProductHeader>
        <div className="space"></div>
        <header className="header">
          <h2>Semua Produk</h2>
          <div className="filtering">
            <button className="reset-btn" onClick={resetFilter}>Reset</button>
            <button className="sort-btn" onClick={() => setIsSorted(!isSorted)}>
              Urutkan
            </button>
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
          </div>
        </header>
      </ResellerProductHeader>
      <ProductContent>
        <aside className="sidebar">
          <div className="voucher">
            <div className="header">
              <h4>Voucher</h4>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <VoucherCard>
              <div className="firstRow">
                <p>Cashback</p>
                <p style={{ fontWeight: 700 }}>100rb</p>
              </div>
              <p className="minimal">Minimal pembelian 3jt</p>
              <div className="voucher-name">
                <img src="/assets/arrow-chevron.svg" height={"100%"} />
                <h1>
                  Voucher <br /> special
                </h1>
              </div>
            </VoucherCard>
            <VoucherCard>
              <div className="firstRow">
                <p>Cashback</p>
                <p style={{ fontWeight: 700 }}>100rb</p>
              </div>
              <p className="minimal">Minimal pembelian 3jt</p>
              <div className="voucher-name">
                <img src="/assets/arrow-chevron.svg" height={"100%"} />
                <h1>
                  Voucher <br /> special
                </h1>
              </div>
            </VoucherCard>
          </div>
          <div className="etalase">
            <h4>Etalase Toko</h4>
            <label className="all-product">Semua Produk</label>
            <label className="discount-promo">
              <span>Diskon</span>
              <div className="promo">Promo</div>
            </label>
            <label>Produk terjual</label>
          </div>
        </aside>
        <div className="product-row">
          {/* <GridContent>
            {isSorted ? (
              <>
                {animals
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((animal) => (
                    <AnimalCard animal={animal} />
                  ))}
              </>
            ) : (
              <>
                {animals.map((animal) => (
                  <AnimalCard animal={animal} />
                ))}
              </>
            )}
          </GridContent> */}
          <Animals filtering={filtering} />
          <ShowMoreBtn>Lihat Selengkapnya</ShowMoreBtn>
        </div>
      </ProductContent>
    </>
  );
};

export default ResellerProductTab;
