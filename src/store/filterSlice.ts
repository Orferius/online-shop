import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Filter = {
    filter: string
}

const initialState: Filter = {
    filter: '8'
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter(state, action: PayloadAction<string>) {
            state.filter = action.payload;
        }
    }
})

export const {setFilter} = filterSlice.actions;
export default filterSlice.reducer;