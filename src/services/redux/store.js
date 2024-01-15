import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './counter'
import artistReducer from './artist'

export const store = configureStore({
    reducer:{
        page: pageReducer,
        artist: artistReducer
    }
})