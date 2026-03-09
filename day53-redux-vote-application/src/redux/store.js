import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import voteReducer from "./voteSlice";

export const store = configureStore({
    reducer: {
        votes: voteReducer,
        theme: themeReducer,
    }
});