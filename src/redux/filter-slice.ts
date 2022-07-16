import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type stateType = {
    category: string,
    sort: string,
    order: string,
    searchValue: string,
    checkBoxValue: Array<string>
}

const initialState: stateType = {
    category: '',
    sort: '',
    order: '',
    searchValue: '',
    checkBoxValue: []
}

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState: initialState,
    reducers: {
        setCategory(state, action:PayloadAction<string>){
            state.category = action.payload
        },
        setSort(state, action:PayloadAction<string>){
            state.sort = action.payload
        },
        setOrder(state, action: PayloadAction<string>) {
            state.order = action.payload
        },
        setFilters(state, action) {
            state.category = action.payload.category
            state.sort = action.payload.sort
            state.order = action.payload.order
        },
        setCheckBoxValue(state, action) {
            if (state.checkBoxValue.includes(action.payload)) {
                state.checkBoxValue = state.checkBoxValue.filter(elem => elem !== action.payload)
            } else {
                state.checkBoxValue.push(action.payload)
            }
        }
    }
})

export const {setCategory, setFilters, setSort, setOrder, setCheckBoxValue} = filterSlice.actions

export default filterSlice.reducer