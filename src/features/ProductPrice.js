import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalValue: 1,
    active: false,
    totalItems: 0
}

export const productPrice = createSlice({
    name: 'price',
    initialState,
    reducers: {
        multiply: (state, action) => {
            state.totalValue = action.payload
        },
        setActive: (state, action) => {
            state.active = action.payload
        },
        setTotalItems: (state, action) => {
            state.totalItems = action.payload
        }
    }
})

export const { multiply, setActive, setTotalItems } = productPrice.actions

export default productPrice.reducer