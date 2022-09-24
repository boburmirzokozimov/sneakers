import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../app/api/apiSlice';
import counterReducer from '../features/CounterSlice'
import priceReducer from '../features/ProductPrice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        counter: counterReducer,
        price: priceReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})