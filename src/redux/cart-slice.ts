import {createSlice} from "@reduxjs/toolkit";
import {typeItem} from "./catalog-Slice";

export type cartItem = {
    item: typeItem,
    count: number,
    options: string
}

type stateType = {
    items: Array<cartItem>,
    totalCount: number,
    totalPrice: number,
}

const initialState: stateType = {
    items: [],
    totalCount: 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: initialState,
    reducers: {
        addItem (state, action) {
            state.totalCount++
            const findItem = state.items.find (obj => obj.item.info.id === action.payload.item.info.id)
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                    options: action.payload.options
                })
            }
        }
    }
})

export const {addItem} = cartSlice.actions

export default cartSlice.reducer