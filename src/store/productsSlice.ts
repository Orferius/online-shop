import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductResult } from "../models";

type ProductsState = {
    products: ProductResult[];
}

const initialState: ProductsState = {
    products: [],
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<ProductResult[]>) {
            state.products = action.payload;
        }
    }
})

export const {setProducts} = productsSlice.actions;
export default productsSlice.reducer;