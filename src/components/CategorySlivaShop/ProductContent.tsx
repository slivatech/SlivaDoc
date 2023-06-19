import { useMemo, useState } from "react";
import { ProductContentStyled } from "./styled";
import { type CategoryLink, categoriesFilter, products } from "./fakeData";
import { GridContent } from "../ResellerDetail/ResellerDetailStyled";
import AnimalCard from "../ResellerDetail/AnimalCard";
import useFilterProductByCategory from "../../Hooks/useFilterProductByCategory";
import { useAppSelector } from "../../store/hooks";

import {
  setProductType,
  setMinPrice,
  setMaxPrice,
} from "../../features/shopCategorySlices/slice";
import { useDispatch } from "react-redux";
interface Props {
  filtering: string;
}

const Products: React.FC<Props> = ({ filtering }) => {
  // const sortBy: Record<string, string> = {
  //   "Terbaru": "createdAt",
  //   "Harga Tertinggi": "price",
  //   "Harga Terendah": "price",
  //   "Ulasan Terbanyak": "reviewsCount",

  //   "Pembelian Terbanyak": "soldCount",
  //   "Dilihat Terbanyak": "viewsCount",
  //   "Pembaruan Terbanyak": "updatedCount",
  // };

  const { filteredProducts } = useFilterProductByCategory();
  console.log(filteredProducts);
  const renderSortedAnimals = useMemo(() => {
    if (filtering === "Terbaru") {
      return (
        <>
          {filteredProducts
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
          {filteredProducts
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
          {filteredProducts
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
          {filteredProducts
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
          {filteredProducts
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
          {filteredProducts
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
        {filteredProducts.map((animal, i) => (
          <AnimalCard animal={animal} key={i} />
        ))}
      </>
    );
  }, [filtering, filteredProducts]);

  return <GridContent>{renderSortedAnimals}</GridContent>;
};

const CategoryLink = ({ link }: { link: CategoryLink }) => {
  const [openChildCategories, setOpenChildCategories] =
    useState<boolean>(false);


    const { productType } = useAppSelector(state=>state.category);
    const dispatch = useDispatch()
    const handleClick = (value:string) => {
      dispatch(setProductType(value))
    }
  return (
    <div className="category" >
      <div
        className="category-link"
        onClick={() => setOpenChildCategories((prev) => !prev)}
      >
        {link.childCategories ? (
          <i
            className={`fa-solid fa-chevron-right ${
              openChildCategories ? "active" : "disabled"
            }`}
          ></i>
        ) : null}

        <p
          className={` ${productType === link.category ? "active-link" : null}`}
          onClick={() => {
            if (link.childCategories) return;
            handleClick(link.category)
            
          }}
        >
          {link.category}
        </p>
      </div>
      <div className="categories-wrapper">
        {openChildCategories ? (
          <>
            {link.childCategories ? (
              <>
                {link.childCategories.map((c, i) => (
                  <CategoryLink  key={i} link={c as CategoryLink} />
                ))}
              </>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
};

const ProductContent: React.FC<{ filtering: string }> = ({ filtering }) => {
  const locations = ["DKI Jakarta", "Bandung", "Surabaya", "Bali", "Pekanbaru"];
  const listPengiriman = ["Kurir Rekomendasi", "Cargo", "SlivaPack"];
  const listToko = ["Official Store", "Sliva Merchant Pro", "Sliva Merchant"];
  const rentangUsia = ["< 1 Tahun", "1 - 2 Tahun", "> 2 Tahun"];
  const dispatch = useDispatch();
  const {
    handleCityChange,
    handleAgeRanges,
    handleDeliveries,
    handleStoreTypes,
  } = useFilterProductByCategory();
  const { priceRange } = useAppSelector((state)=>state.category)
  console.log(priceRange)
  return (
    <ProductContentStyled>
      <div className="filter-section">
        <header className=" wrapper">
          <p>Filter</p>
        </header>
        {categoriesFilter.map((category) => (
          <section className=" wrapper">
            <h4>{category.categoryType}</h4>
            <div className="categories-wrapper">
              {category.categories.map((c, i) => (
                <CategoryLink key={i} link={c as CategoryLink} />
              ))}
            </div>
          </section>
        ))}
        <div className="wrapper">
          <h4>Lokasi</h4>
          {locations.map((location, i) => (
            <div key={i} className="checkbox">
              <input
                type="checkbox"
                onChange={() => handleCityChange(location)}
              />
              <label>{location}</label>
            </div>
          ))}
        </div>
        <div className="wrapper">
          <h4>Pengiriman</h4>
          {listPengiriman.map((x, i) => (
            <div key={i} className="checkbox">
              <input type="checkbox" onChange={() => handleDeliveries(x)} />
              <label>{x}</label>
            </div>
          ))}
        </div>
        <div className="wrapper">
          <h4>Jenis Toko</h4>
          {listToko.map((x, i) => (
            <div
              key={i}
              className="checkbox"
              onChange={() => handleStoreTypes(x)}
            >
              <input type="checkbox" />
              <label>{x}</label>
            </div>
          ))}
        </div>
        <div className="wrapper">
          <h4>Harga</h4>
          <div className="price-input">
            <p>Minimum</p>
            <div className="price-input-wrapper">
              <div className="rp">Rp</div>
              <input
                type="number"
                onChange={(e) => dispatch(setMinPrice(Number(e.target.value)))}
              />
            </div>
          </div>
          <div className="price-input">
            <p>Maksimal</p>
            <div className="price-input-wrapper">
              <div className="rp">Rp</div>
              <input
                type="number"
                onChange={(e) => dispatch(setMaxPrice(Number(e.target.value)))}
              />
            </div>
          </div>
        </div>
        <div className="wrapper">
          <h4>Usia</h4>
          {rentangUsia.map((usia, i) => (
            <div
              key={i}
              className="checkbox"
              onChange={() => handleAgeRanges(usia)}
            >
              <input type="checkbox" />
              <label>{usia}</label>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: 0.75 }}>
        <Products filtering={filtering} />
      </div>
    </ProductContentStyled>
  );
};

export default ProductContent;
