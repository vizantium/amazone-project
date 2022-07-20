import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {typeItem} from "./catalog-Slice";

type thunkType = {
    searchValue: string
}

export const getItemBySearch = createAsyncThunk('searchSlice/getItemBySearch', async ({searchValue}: thunkType) => {
    const {data} = await axios.get(`https://62c84bd50f32635590d618e2.mockapi.io/computers?search=${searchValue}`)
    return data
})

type stateType = {
    items: Array<typeItem>,
}

const initialState: stateType = {
    items: []
}

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getItemBySearch.fulfilled, (state, action) => {
            state.items = action.payload
        });
        builder.addCase(getItemBySearch.rejected, (state) => {
            state.items = []
            alert('error')
        });
    }
})

export default searchSlice.reducer