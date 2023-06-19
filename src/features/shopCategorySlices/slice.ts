import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterState {
  productType: string;
  locations: string[];
  deliveries: string[];
  storeTypes: string[];
  priceRange: {
    min: number;
    max: number;
  };
  ageRanges: string[];
}

const initialState: FilterState = {
  productType: "",
  locations: [],
  deliveries: [],
  storeTypes: [],
  priceRange: {
    min: 0,
    max: 10000000,
  },
  ageRanges: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setProductType(state, action: PayloadAction<string>) {
      state.productType = action.payload;
    },
    setLocation(state, action: PayloadAction<string>) {
      if (!state.locations.includes(action.payload)) {
        
        state.locations = [...state.locations, action.payload];
      } else {
        state.locations = state.locations.filter((location)=>location !== action.payload)
      }
      
    },
    setDelivery(state, action: PayloadAction<string>) {
      if (!state.deliveries.includes(action.payload)) {
        
        state.deliveries = [...state.deliveries, action.payload];
      } else {
        state.deliveries = state.deliveries.filter((delivery)=>delivery !== action.payload)
      }
    },

    setStoreType(state, action: PayloadAction<string>) {
      if (!state.storeTypes.includes(action.payload)) {
        
        state.storeTypes = [...state.storeTypes, action.payload];
      } else {
        state.storeTypes = state.storeTypes.filter((storeType)=>storeType !== action.payload)
      }
    },
    setMinPrice(state, action: PayloadAction<number>) {
      state.priceRange = { ...state.priceRange, min: action.payload };
    },
    setMaxPrice(state, action: PayloadAction<number>) {
      state.priceRange = { ...state.priceRange, max: action.payload };
    },
    setAgeRange(state, action: PayloadAction<string>) {
      if (!state.ageRanges.includes(action.payload)) {
        
        state.ageRanges = [...state.ageRanges, action.payload];
      } else {
        state.ageRanges = state.ageRanges.filter((age)=>age !== action.payload)
      }
    },
  },
});

export const {
  setLocation,
  setMaxPrice,
  setMinPrice,
  setDelivery,
  setStoreType,
  setAgeRange,
  setProductType,
} = categorySlice.actions;

export default categorySlice.reducer;
