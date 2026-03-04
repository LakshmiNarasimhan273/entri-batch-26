# React with Redux Toolkit – Counter Example Explanation

This document explains how Redux Toolkit works using the provided counter slice code.

Redux Toolkit (RTK) is the official, recommended way to write Redux logic.  
It simplifies:

- Store configuration
- Reducer creation
- Action creation
- Immutable state updates

------------------------------------------------------------

# What is Redux?

Redux is a global state management library.

It stores application data in a centralized store.

Basic Redux flow:

Component → Dispatch Action → Reducer → Update State → UI Re-renders

Redux Toolkit simplifies this entire process.

------------------------------------------------------------

# What is createSlice?

createSlice is a function from Redux Toolkit that:

- Creates a reducer
- Automatically generates action creators
- Automatically generates action types
- Uses Immer internally (so we can write "mutating" logic safely)

Instead of writing:

- Action types
- Action creators
- Switch-case reducer

We write everything inside one object.

------------------------------------------------------------

# Code Breakdown

============================================================
1. Import createSlice
============================================================

import { createSlice } from "@reduxjs/toolkit";

createSlice is the core function used to define:

- State structure
- Reducer functions
- Actions

------------------------------------------------------------

============================================================
2. Global Initial State
============================================================

const initialState = {
    value: 0
};

This defines the initial state of the counter.

Global state shape:

{
  counter: {
    value: 0
  }
}

initialState.value represents the counter number.

------------------------------------------------------------

============================================================
3. Creating the Slice
============================================================

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
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

createSlice takes an object with three main properties:

------------------------------------------------------------

A) name

name: "counter"

- This defines the slice name.
- It prefixes action types automatically.

Example generated action type:
"counter/increment"

------------------------------------------------------------

B) initialState

initialState defines the starting value of this slice.

Here:

value = 0

------------------------------------------------------------

C) reducers

Reducers define how state changes in response to actions.

Each function inside reducers:

- Receives state
- Modifies state
- Automatically creates an action

Important:
Even though we are mutating state directly (state.value += 1),
Redux Toolkit uses Immer internally to maintain immutability safely.

So this:

state.value += 1;

Actually becomes:

return {
  ...state,
  value: state.value + 1
}

Behind the scenes.

------------------------------------------------------------

============================================================
4. Reducer Functions Explained
============================================================

increment:

state.value += 1;

Increases counter by 1.

------------------------------------------------------------

decrement:

state.value -= 1;

Decreases counter by 1.

------------------------------------------------------------

reset:

state.value = 0;

Resets counter back to zero.

------------------------------------------------------------

# How Actions Are Automatically Generated

Redux Toolkit automatically generates:

Action Creators:

increment()
decrement()
reset()

Action Types:

"counter/increment"
"counter/decrement"
"counter/reset"

Without writing them manually.

------------------------------------------------------------

============================================================
5. Exporting Actions
============================================================

export const { increment, decrement, reset } = counterSlice.actions;

counterSlice.actions contains all generated action creators.

This export allows React components to:

dispatch(increment())
dispatch(decrement())
dispatch(reset())

------------------------------------------------------------

============================================================
6. Exporting Reducer
============================================================

export default counterSlice.reducer;

This reducer is connected to the Redux store.

Example in store configuration:

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

Now the counter slice becomes part of global store.

------------------------------------------------------------

# Complete Redux Data Flow

User clicks button
      ↓
dispatch(increment())
      ↓
Action object created:
{ type: "counter/increment" }
      ↓
Reducer handles action
      ↓
State updated
      ↓
Component re-renders using updated state

------------------------------------------------------------

# How Component Uses It

Reading state:

const count = useSelector((state) => state.counter.value);

Dispatching action:

const dispatch = useDispatch();

dispatch(increment());

------------------------------------------------------------

# Why Redux Toolkit is Better than Traditional Redux

Traditional Redux required:

- Writing action types manually
- Writing action creators manually
- Writing switch-case reducers
- Handling immutable updates manually

Example traditional pattern:

const INCREMENT = "INCREMENT";

function increment() {
  return { type: INCREMENT };
}

function reducer(state, action) {
  switch(action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    default:
      return state;
  }
}

Redux Toolkit removes all of this boilerplate.

------------------------------------------------------------

# Advantages of Redux Toolkit

- Less code
- Cleaner structure
- Built-in Immer (safe mutation)
- Automatic action creation
- Recommended by Redux team
- Better developer experience

------------------------------------------------------------

# Important Concept – Immer

Redux normally requires immutable updates.

Instead of writing:

return { ...state, value: state.value + 1 };

RTK allows:

state.value += 1;

This works because Immer creates a copy behind the scenes.

------------------------------------------------------------

# Final Architecture

counterSlice.js
      ↓
Export reducer
      ↓
store.js
      ↓
Provider wraps App
      ↓
Components use:
  useSelector
  useDispatch

------------------------------------------------------------

# Summary

This counterSlice demonstrates:

- Global state creation
- Reducer logic definition
- Automatic action generation
- Safe state mutation using Immer
- Cleaner Redux architecture

Redux Toolkit simplifies state management while keeping Redux principles intact.

It is the modern standard way to use Redux in React applications.