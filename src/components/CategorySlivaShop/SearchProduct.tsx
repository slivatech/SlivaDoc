import { SearchProductStyled } from "./styled";

const SearchProduct = () => {
  return (
    <SearchProductStyled>
      <input
        type="text"
        placeholder="Cari Produk Kesehatan Hewan Terlengkap di SlivaShop"
      />
      <button className="btn">Cari</button>
    </SearchProductStyled>
  );
};

export default SearchProduct;
