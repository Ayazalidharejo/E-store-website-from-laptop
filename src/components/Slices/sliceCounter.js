import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count:1,
    },
    reducers:{},  
} )


export const {} = counterSlice.actions;

export default counterSlice.reducer;

