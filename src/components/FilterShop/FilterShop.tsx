import React, { useEffect, useState } from "react";
import filtericon from "../../assets/icon/Filter.png";
import { Button, Card, CardContainer, CardContent, CardGrid, CardTitle, CloseButton, Detailproduk, Discount, DiscountedPrice, FilterButton, FilterContainer, FilterDropdown, FilterInput, FilterOverlay, FilterPopup, HeadPopup, Images, OriginalPrice, Rating, Tab, TabContainer } from "./FilterShopStyle";

interface FilterProps {
  data: Product[];
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  discount: number;
  city: string;
  province: string;
  rating: number;
  img:string;
  stok:number;
}

const FilterShop: React.FC<FilterProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [discount, setDiscount] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleReset = () => {
    setSortBy("");
    setCategory("");
    setMinPrice(0);
    setMaxPrice(0);
    setDiscount("");
    setCity("");
    setProvince("");
    setFilteredData(data);
  };
  useEffect(() => {
    handleFilter();
  }, [sortBy, category, minPrice, maxPrice, discount, city, province]);

  const handleFilter = () => {
    let filteredItems = [...data];

    if (sortBy === "largestDiscount") {
      filteredItems.sort((a, b) => b.discount - a.discount);
    } else if (sortBy === "lowestPrice") {
      filteredItems.sort((a, b) => a.price - b.price);
    } else if (sortBy === "highestPrice") {
      filteredItems.sort((a, b) => b.price - a.price);
    }else{
      filteredItems=[...data];
    }

    filteredItems = filteredItems.filter((item) => {
      if (category !== "" && category !== item.category) {
        return false;
      }
      if (minPrice > 0 && item.price < minPrice) {
        return false;
      }
      if (maxPrice > 0 && item.price > maxPrice) {
        return false;
      }
      if (discount !== "" && item.discount <= parseInt(discount.slice(1))) {
        return false;
      }
      if (city !== "" && city !== item.city) {
        return false;
      }
      if (province !== "" && province !== item.province) {
        return false;
      }
      return true;
    });

    setFilteredData(filteredItems);
    
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  
  return (
    <>
      <FilterContainer>
        <div className="Tab-Container">
          <h1>Sedang Berlangsung</h1>
      <TabContainer>
        <Tab
          isActive={category === ""}
          onClick={() => setCategory("")}
        >
          Semua Produk
        </Tab>
        <Tab
          isActive={category === "Aksesoris Hewan"}
          onClick={() => setCategory("Aksesoris Hewan")}
        >
          Aksesoris Hewan
        </Tab>
        <Tab
          isActive={category === "Obat & Vitamin"}
          onClick={() => setCategory("Obat & Vitamin")}
        >
          Obat & Vitamin
        </Tab>
        <Tab
          isActive={category === "Hewan Peliharaan"}
          onClick={() => setCategory("Hewan Peliharaan")}
        >
          Hewan Peliharaan
        </Tab>
   
      </TabContainer>
      </div>
      
        <div className="Head-filter">
 
        <FilterButton onClick={() => setIsOpen(!isOpen)}>
        <img src={filtericon} alt="icon" />
            <p>Filter</p>
          </FilterButton>
          
          <div>
        <h1 onClick={handleReset}>Reset</h1>
        <FilterDropdown
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >   
              <option value="Paling Sesuai">Paling Sesuai</option>
              <option value="largestDiscount">Diskon Terbesar</option>
              <option value="highestPrice">Harga Terbesar</option>
              <option value="lowestPrice">Harga Terendah</option>
            </FilterDropdown>
            </div>
        </div>
        {isOpen && (
          <>
             <FilterOverlay onClick={handleFilter}/>
            <FilterPopup >
              <HeadPopup>Semua Filter</HeadPopup>
              <CloseButton onClick={handleClose}>X</CloseButton>
              <div className="filter">
  <label>Urutkan</label>
  <div className="filter-select">
    <div
      id="mostRelevant"
      className={sortBy === "mostRelevant" ? "selected" : ""}
      onClick={(e) =>
        setSortBy(sortBy === "mostRelevant" ? "" : e.currentTarget.id)
      }
    >
      Paling Sesuai
    </div>
    <div
      id="largestDiscount"
      className={sortBy === "largestDiscount" ? "selected" : ""}
      onClick={(e) =>
        setSortBy(sortBy === "largestDiscount" ? "" : e.currentTarget.id)
      }
    >
      Diskon Terbesar
    </div>
    <div
      id="lowestPrice"
      className={sortBy === "lowestPrice" ? "selected" : ""}
      onClick={(e) =>
        setSortBy(sortBy === "lowestPrice" ? "" : e.currentTarget.id)
      }
    >
      Harga Terendah
    </div>
    <div
      id="highestPrice"
      className={sortBy === "highestPrice" ? "selected" : ""}
      onClick={(e) =>
        setSortBy(sortBy === "highestPrice" ? "" : e.currentTarget.id)
      }
    >
      Harga Tertinggi
    </div>
  </div>
</div>
              <div className="filter">
                <label>Kategori</label>
                <div className="filter-select">
                  <div
                    className={category === "Aksesoris Hewan" ? "selected" : ""}
                    onClick={() =>
                      setCategory(
                        category === "Aksesoris Hewan" ? "" : "Aksesoris Hewan"
                      )
                    }
                  >
                    Aksesoris Hewan
                  </div>
                  <div
                    className={category === "Obat & Vitamin" ? "selected" : ""}
                    onClick={() =>
                      setCategory(
                        category === "Obat & Vitamin" ? "" : "Obat & Vitamin"
                      )
                    }
                  >
                    Obat & Vitamin
                  </div>
                  <div
                    className={
                      category === "Hewan Peliharaan" ? "selected" : ""
                    }
                    onClick={() =>
                      setCategory(
                        category === "Hewan Peliharaan"
                          ? ""
                          : "Hewan Peliharaan"
                      )
                    }
                  >
                    Hewan Peliharaan
                  </div>
                </div>
              </div>
              <div className="filter">
                <label>Harga</label>
                <div className="input-filter">
                  <FilterInput
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(parseInt(e.target.value))}
                  />
                  <FilterInput
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                  />
                </div>
              </div>
              <div className="filter">
  <label>Diskon</label>
  <div className="filter-select">
  <div
      className={discount === ">5%" ? "selected" : ""}
      onClick={() =>
        setDiscount(discount === ">5%" ? "" : ">5%")
      }
    >
      {">"}5%
    </div>
    <div
      className={discount === ">10%" ? "selected" : ""}
      onClick={() =>
        setDiscount(discount === ">10%" ? "" : ">10%")
        
      }
    >
      {">"}10%
    </div>
    <div
      className={discount === ">15%" ? "selected" : ""}
      onClick={() =>
        setDiscount(discount === ">15%" ? "" : ">15%")
      }
    >
      {">"}15%
    </div>
    <div
      className={discount === ">20%" ? "selected" : ""}
      onClick={() =>
        setDiscount(discount === ">20%" ? "" : ">20%")
      }
    >
       {">"}20%
    </div>
  
  </div>
</div>

              <div className="filter">
                <label>Lokasi</label>
                 <div>
            <FilterDropdown
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Pilih kota</option>
       
              <option value="Medan">Medan</option>
              <option value="Kota2">Kota 2</option>
   
            </FilterDropdown>
            <FilterDropdown
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            >
              <option value="">Pilih provinsi</option>
         
              <option value="Provinsi1">Provinsi 1</option>
              <option value="Provinsi2">Provinsi 2</option>
       
            </FilterDropdown>
          </div>
              </div>
        
            </FilterPopup>
          </>
        )}

      </FilterContainer>
      <CardContainer>
        <CardGrid>
          {filteredData.map((item) => (
            <Card key={item.id}>
              <Images src={item.img} alt="product" />
              <CardTitle>{item.name}</CardTitle>
              <CardContent>

                  <Rating>
                    {Array.from({ length: 5 }, (_, index) => (
                      <span
                        key={index}
                        className={index < item.rating ? "" : "empty"}
                      >
                        ★
                      </span>
                    ))}
                  </Rating>

        <DiscountedPrice>
        Rp. {(item.price - (item.price * item.discount) / 100).toLocaleString("id-ID")}
        </DiscountedPrice>
              <div className="discount-detail">
                <Discount>
                  <p>{item.discount}%</p>
                  </Discount>
                <OriginalPrice> Rp. {item.price.toLocaleString("id-ID")}</OriginalPrice>
                </div>
                </CardContent>
                <Detailproduk>
                <p><span>Stok Tersisa </span>{item.stok} Ekor</p>
                <p>{item.city}</p>
                </Detailproduk>
              
            </Card>
          ))}
        </CardGrid>
      </CardContainer>
      <Button>
        <button>Lihat Selengkapnya</button>
      </Button>
    </>
  );
};

export default FilterShop;
