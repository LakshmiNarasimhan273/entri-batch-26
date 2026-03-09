import { createSlice } from "@reduxjs/toolkit";

// Global data - light, dark

const initialState = {
    mode: "light"
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        }
    }
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;