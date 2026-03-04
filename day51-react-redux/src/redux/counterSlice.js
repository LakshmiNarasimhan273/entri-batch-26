import { createSlice } from "@reduxjs/toolkit";
// createSlice is the root function for creating
// our reducer function and global data management

// Global state
const initialState = {
    value: 0
};

// initialState.value

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: { // it denotes the function
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
});

// this export is for component connection
export const { increment, decrement, reset } = counterSlice.actions;

// this export is for store connection
export default counterSlice.reducer;

// traditional method of slice
/* const counter = {
    key: "value",
    name: "counter",
    reducer: {
        increment: function(){

        },
        decrement: () => {
            
        }
    }
} */