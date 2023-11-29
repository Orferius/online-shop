import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryResult } from "../models";

type CategoriesState = {
    categories: CategoryResult[];
}

const initialState: CategoriesState = {
    categories: [],
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories(state, action: PayloadAction<CategoryResult[]>) {
            state.categories = action.payload;
        }
    }
})

export const {setCategories} = categoriesSlice.actions;
export default categoriesSlice.reducer;
