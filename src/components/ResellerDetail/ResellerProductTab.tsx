import React from "react";
import {
  GridContent,
  ProductContent,
  ResellerProductHeader,
  VoucherCard,
} from "./ResellerDetailStyled";
import Select from "../Select/Select";
import AnimalCard from "./AnimalCard";
import { animals } from "./fakeData";

const ResellerProductTab = () => {
  const filterValues=["Terbaru","Harga Tertinggi","Harga Terendah","Ulasan Terbanyak","Pembelian Terbanyak","Dilihat Terbanyak","Pembaruan Terbanyak"]
  return (
    <>
      <ResellerProductHeader>
        <div className="space"></div>
        <header className="header">
          <h2>Semua Produk</h2>
          <div className="filtering">
            <button className="reset-btn">Reset</button>
            <button className="sort-btn">Urutkan</button>
            <div>
              <Select
                onChange={() => null}
                label="Filter"
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
          <GridContent>
            {animals.map((animal) => (
              <AnimalCard animal={animal} />
            ))}
          </GridContent>
        </div>
      </ProductContent>
    </>
  );
};

export default ResellerProductTab;
