import counterReducers from "../components/Slices/sliceCounter"
import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "../components/Slices/Cart/Cart"

export const store = configureStore ({
    reducer :{ 
        counter: counterReducers,
        Cart:Cartreducer
    }
})