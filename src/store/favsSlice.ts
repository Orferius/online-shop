import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductResult } from "../models";

type ProductsState = {
    favs: ProductResult[];
}

const initialState: ProductsState = {
    favs: [],
}

const favsSlice = createSlice({
    name: 'favs',
    initialState,
    reducers: {
        setFavs(state, action: PayloadAction<ProductResult[]>) {
            state.favs = action.payload;
        }
    }
})

export const {setFavs} = favsSlice.actions;
export default favsSlice.reducer;