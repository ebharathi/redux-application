import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'counter',
    initialState:{
        count:2,
        total:100
    },
    reducers:{
        increment:(state)=>{
            state.total++;
        }
    }
})

export const {increment}=counterSlice.actions;
export default counterSlice.reducer;