# React with Redux Toolkit – Notes CRUD (Complete Explanation)

This document explains how Redux Toolkit is used to manage a **Notes application state** using a slice.  
The slice handles **CRUD operations (Create, Read, Update, Delete)** for notes.

In this example we implement:

- Create → addNote
- Read → Display notes in UI
- Delete → deleteNote
- Update → Not implemented but possible using same pattern

Redux Toolkit simplifies Redux by reducing boilerplate and allowing direct state mutation safely using **Immer**.

------------------------------------------------------------

# Redux Toolkit Overview

Redux Toolkit is the official recommended way to use Redux.

Traditional Redux required:

- Action Types
- Action Creators
- Reducers
- Switch-case logic
- Immutable updates

Redux Toolkit simplifies everything by providing:

- createSlice()
- configureStore()
- Built-in Immer for immutability
- Automatic action creation

------------------------------------------------------------

# Code

```javascript
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
```

------------------------------------------------------------

# Step 1 – Import createSlice

```
import { createSlice } from "@reduxjs/toolkit";
```

createSlice is the core function in Redux Toolkit.

It automatically generates:

- Reducer
- Action creators
- Action types

This removes the need to manually write:

- actionTypes.js
- actions.js
- reducers.js

Everything is defined inside one slice.

------------------------------------------------------------

# Step 2 – Global State Initialization

```
const initialState = {
    notes: []
};
```

This defines the **initial global state**.

Here:

notes = empty array

This array will store all notes.

Example state structure inside Redux store:

```
{
  notes: {
      notes: []
  }
}
```

After adding notes:

```
{
  notes: {
      notes: [
        { id: 1, title: "Learn React" },
        { id: 2, title: "Learn Redux" }
      ]
  }
}
```

------------------------------------------------------------

# Step 3 – Creating the Slice

```
const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: { }
});
```

createSlice requires three main properties:

- name
- initialState
- reducers

------------------------------------------------------------

# Slice Name

```
name: "notes"
```

This defines the slice name.

Redux Toolkit automatically generates action types like:

```
notes/addNote
notes/deleteNote
```

------------------------------------------------------------

# Reducers Section

Reducers contain the **business logic** that updates the state.

Structure:

```
reducers: {
   functionName: (state, action) => {}
}
```

Each reducer automatically generates an **action creator**.

------------------------------------------------------------

# addNote Reducer

```
addNote: (state, action) => {
    state.notes.push(action.payload);
}
```

Purpose:

Add a new note into the notes array.

------------------------------------------------------------

# Understanding Parameters

state → current global state  
action → object containing data passed from component

Example action object:

```
{
  type: "notes/addNote",
  payload: {
      id: 1,
      title: "Learn Redux Toolkit"
  }
}
```

payload contains the actual note data.

------------------------------------------------------------

# addNote Example

Before:

```
notes = []
```

Dispatch:

```
dispatch(addNote({ id: 1, title: "Learn Redux Toolkit" }))
```

After:

```
notes = [
  { id: 1, title: "Learn Redux Toolkit" }
]
```

Adding multiple notes:

```
dispatch(addNote({ id: 1, title: "Learn React" }))
dispatch(addNote({ id: 2, title: "Learn Redux" }))
dispatch(addNote({ id: 3, title: "Build Projects" }))
```

State becomes:

```
notes = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Learn Redux" },
  { id: 3, title: "Build Projects" }
]
```

------------------------------------------------------------

# deleteNote Reducer

```
deleteNote: (state, action) => {
    state.notes = state.notes.filter(
        (data) => data.id !== action.payload
    );
}
```

Purpose:

Delete a note based on its ID.

------------------------------------------------------------

# deleteNote Logic

filter() creates a new array.

Condition used:

```
data.id !== action.payload
```

Meaning:

Keep all notes **except the note with the matching ID**.

------------------------------------------------------------

# deleteNote Example

Before:

```
notes = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Learn Redux" },
  { id: 3, title: "Build Projects" }
]
```

Dispatch:

```
dispatch(deleteNote(2))
```

Reducer runs:

```
state.notes = state.notes.filter(note => note.id !== 2)
```

Result:

```
notes = [
  { id: 1, title: "Learn React" },
  { id: 3, title: "Build Projects" }
]
```

Note with id=2 is removed.

------------------------------------------------------------

# Real Life Filter Example

Food categories:

```
idly - veg
chicken - non-veg
noodles - chinese
chapathi - veg
```

Filter example:

```
category !== veg
```

Result:

```
chicken - non-veg
noodles - chinese
```

Same concept is used in deleteNote.

------------------------------------------------------------

# Exporting Actions

```
export const { addNote, deleteNote } = notesSlice.actions;
```

Redux Toolkit automatically generates actions.

We export them so components can dispatch them.

Example usage:

```
dispatch(addNote(noteData))
dispatch(deleteNote(id))
```

------------------------------------------------------------

# Exporting Reducer

```
export default notesSlice.reducer;
```

This reducer is connected to the Redux store.

Example store configuration:

```
import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice";

const store = configureStore({
  reducer: {
    notes: notesReducer
  }
});
```

------------------------------------------------------------

# Component Usage

Reading notes from store:

```
const notes = useSelector((state) => state.notes.notes);
```

Adding note:

```
dispatch(addNote({
  id: Date.now(),
  title: "Learn Redux Toolkit"
}))
```

Deleting note:

```
dispatch(deleteNote(id))
```

------------------------------------------------------------

# Redux Data Flow

User Action (Add Note)
↓
dispatch(addNote(data))
↓
Redux Action Created
↓
Reducer addNote runs
↓
State Updated
↓
React Component Re-renders

------------------------------------------------------------

# Final Global State Example

```
{
  notes: {
      notes: [
        { id: 1, title: "Learn React" },
        { id: 2, title: "Learn Redux Toolkit" }
      ]
  }
}
```

------------------------------------------------------------

# Advantages of Redux Toolkit

- Less boilerplate
- Cleaner code structure
- Automatic action creators
- Built-in immutability with Immer
- Centralized state management
- Scalable architecture

------------------------------------------------------------

# Summary

This Redux Toolkit slice demonstrates:

- Global state initialization
- Creating a slice using createSlice()
- Implementing CRUD logic
- Adding notes using push()
- Deleting notes using filter()
- Automatic action generation
- Connecting reducer to Redux store

Redux Toolkit provides a **clean, scalable, and modern way** to manage global state in React applications.