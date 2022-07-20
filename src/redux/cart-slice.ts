import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {typeItem} from "./catalog-Slice";
import {getCartFromLocalStorage} from "../utils/getCartFromLocalStorage";
import {calcTotalPrice} from "../utils/calcTotalPrice";

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

const {items, totalCount, totalPrice} = getCartFromLocalStorage()

const initialState: stateType = {
    items,
    totalCount,
    totalPrice,
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            state.totalCount++
            const findItem = state.items.find(obj => obj.item.info.id === action.payload.item.info.id)
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                    options: action.payload.options
                })
            }
            state.totalPrice = calcTotalPrice(state.items)
        },
        addItemPlus(state, action) {
            state.totalCount++
            const findItem = state.items.find(obj => obj.item.info.id === action.payload)
            if (findItem) {
                findItem.count++
            }
            state.totalPrice = calcTotalPrice(state.items)
        },
        minusItem(state, action: PayloadAction<{ id: string, price: string }>) {
            const findItem = state.items.find(obj => obj.item.info.id === action.payload.id)
            if (findItem && findItem.count > 1) {
                state.totalCount--
                findItem.count--
                state.totalPrice = state.totalPrice - Number(action.payload.price)
            }
        },
        removeItem(state, action: PayloadAction<{id: string, price: string, count: number}>) {
            state.items = state.items.filter((obj) => obj.item.info.id !== action.payload.id)
            state.totalPrice = state.totalPrice - Number(action.payload.price) * action.payload.count
            state.totalCount = state.totalCount - action.payload.count
        },
        removeAll(state) {
            state.items = []
            state.totalPrice = 0
            state.totalCount = 0
        }
    }


})

export const {addItem, addItemPlus, minusItem, removeItem, removeAll} = cartSlice.actions

export default cartSlice.reducer