import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filterSlices/filterSlice";
import categoryReducer from '../features/shopCategorySlices/slice'

const store = configureStore({
  reducer: {
    filter: filterReducer,
    category:categoryReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
