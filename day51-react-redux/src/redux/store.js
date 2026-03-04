import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// named export
export const store = configureStore({
    reducer: { // it make the slice data as global
        counter: counterReducer
    }
});