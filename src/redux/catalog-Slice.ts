import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

type FetchCatType = {
    category: string,
    sort: string,
    order: string
}
export const getCatalogByCategory = createAsyncThunk('catalogSlice/getCatalogByCategory', async ({category, sort, order}: FetchCatType) => {
    const {data} = await axios.get<item[]>(`https://62c84bd50f32635590d618e2.mockapi.io/computers?category=${category}&sortBy=${sort}&order=${order}`)
    console.log(data)
    return data as item[]
})

type item = {
    name: string,
    imageUrl: string,
    price: string,
    rating: string,
    ratings: string,
    category: string,
    brand: string,
    info: {
        size: [
            string,
            string
        ],
        style: [
            string,
            string
        ],
        id: string,
        brands: Array<string>
    },

}

type stateType = {
    items: Array<item>
}

const initialState: stateType = {
    items: []
}

const catalogSlice = createSlice({
    name: 'catalogSlice',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCatalogByCategory.fulfilled, (state, action) => {
            state.items = action.payload
        });
        builder.addCase(getCatalogByCategory.rejected, (state) => {
            state.items = []
            alert('error')
        })
    }
})

export default catalogSlice.reducer