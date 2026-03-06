import { createSlice } from "@reduxjs/toolkit";

/* 3 step approach
global data initialization
name and state definition
reducers function
*/

// CRUD - Create, Read, Update & Delete

// Global Data
const initialState = {
    notes: []
};

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        // logic
        addNote: (state, action) => {
            state.notes.push(action.payload);
        },

        // editNote logic

        // core logic - it gets the more optimization
        deleteNote: (state, action) => {
            state.notes = state.notes.filter(
                (data) => data.id !== action.payload
            );
        }
    }
});

export const { addNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;

// notes 1

// notes.id !== 1
// 2, 3, 4, 5

// idly - veg
// chicken - non-veg
// noodles - chinese
// chapathi - veg

// filter category !== veg