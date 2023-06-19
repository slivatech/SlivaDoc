import { useDispatch } from "react-redux";
import { Product, products } from "../components/CategorySlivaShop/fakeData";
import { useState, useEffect } from "react";
import { useAppSelector } from "../store/hooks";
import {
  setAgeRange,
  setDelivery,
  setLocation,
  setStoreType,

} from "../features/shopCategorySlices/slice";

const useFilterProductByCategory = () => {
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const {
    ageRanges,
    productType,
    storeTypes,
    deliveries,
    locations,
    priceRange,
  } = useAppSelector((state) => state.category);
  // console.log(locations, storeTypes, deliveries, ageRanges);

  const handleCityChange = (city: string) => {
    console.log(city);
    dispatch(setLocation(city));
  };
  const handleStoreTypes = (storeType: string) => {
    console.log(storeType);
    dispatch(setStoreType(storeType));
  };
  const handleDeliveries = (delivery: string) => {
    console.log(delivery);
    dispatch(setDelivery(delivery));
  };
  const handleAgeRanges = (ageRange: string) => {
    console.log(ageRange);
    dispatch(setAgeRange(ageRange));
  };
  // const handlePriceRangeChange = (min: number, max: number) => {
  //   dispatch(setMinPrice(min));
  //   dispatch(setMaxPrice(max));
  // };
  useEffect(() => {
    const filteredValues = handleFilter(
      storeTypes,
      locations,
      productType,
      deliveries,
      ageRanges,
      priceRange.min,
      priceRange.max
    );
    setFilteredProducts(filteredValues);
    console.log(filteredProducts);
  }, [storeTypes, locations, productType, deliveries, ageRanges,priceRange]);

  const handleFilter = (
    storeTypes: string[],
    locations: string[],
    productType: string,
    deliveries: string[],
    ageRanges: string[],
    minPrice: number,
    maxPrice: number
  ): Product[] => {
    if (
      storeTypes.length === 0 &&
      locations.length === 0 &&
      productType === "" &&
      deliveries.length === 0 &&
      ageRanges.length === 0 &&
      priceRange.max === 0 &&
      priceRange.min === 0
    )
      return products;
    return products.filter((product) => {
      const cityMatches =
        locations.length === 0 || locations.includes(product.city);
      const productTypeMatches =
        productType === "" || product.name === productType;
      const storeTypeMatches =
        storeTypes.length === 0 || storeTypes.includes(product.storeType);
      const deliveryMatches =
        deliveries.length === 0 || deliveries.includes(product.delivery);
      const priceMatches = 
        product.price >= minPrice && product.price <= maxPrice;

      const ageMatches =
        ageRanges.length === 0 ||
        (ageRanges.includes("< 1 Tahun") && product.age <= 1) ||
        (ageRanges.includes("1 - 2 Tahun") &&
          product.age >= 1 &&
          product.age <= 2) ||
        (ageRanges.includes("> 2 Tahun") && product.age > 2);
      return (
        cityMatches &&
        productTypeMatches &&
        storeTypeMatches &&
        deliveryMatches &&
        priceMatches &&
        ageMatches
      );
    });
  };

  return {
    handleCityChange,
    filteredProducts,
    handleStoreTypes,
    handleDeliveries,
    handleAgeRanges,
  };
};

export default useFilterProductByCategory;
