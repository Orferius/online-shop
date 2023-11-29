import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsReducer from './productsSlice';
import categoriesReducer from "./categoriesSlice";
import filterReducer from "./filterSlice";
import favsSlice from "./favsSlice";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    filter: filterReducer,
    favs: favsSlice
});

const store = configureStore({
    reducer: rootReducer
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;