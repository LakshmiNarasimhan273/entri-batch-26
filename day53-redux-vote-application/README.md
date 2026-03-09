# React Redux Toolkit Voting Application (with Theme Toggle)

This document explains a **React Voting Application built using Redux Toolkit** with **Theme Switching (Light/Dark Mode)**.  
The application allows users to **vote for their favorite technology**, track the **current leader**, and **switch UI themes globally**.

The architecture demonstrates how **multiple Redux slices** manage different parts of the global state.

------------------------------------------------------------

# Application Features

• Technology voting system  
• Live vote counting  
• Leader detection  
• Global theme switching (Light / Dark)  
• Redux global state management  
• Component based architecture  
• Responsive UI with TailwindCSS  
• Routing between Home and Voting pages  

------------------------------------------------------------

# Technologies Used

React  
Redux Toolkit  
React Redux  
React Router  
Tailwind CSS  

------------------------------------------------------------

# Application Architecture

The application uses **two Redux slices**:

1️⃣ Theme Slice → Handles UI theme  
2️⃣ Vote Slice → Handles voting logic  

Both slices are combined inside the **Redux Store**.

```
Redux Store
│
├── themeSlice
│      mode: "light | dark"
│
└── voteSlice
       technologies[]
```

------------------------------------------------------------

# Application Flow (Visual Flowchart)

```
User Opens App
      │
      ▼
Redux Store Initialized
      │
      ▼
Navbar Loaded
      │
      ├──── Toggle Theme
      │         │
      │         ▼
      │   changeTheme() Dispatch
      │         │
      │         ▼
      │   Redux updates theme.mode
      │         │
      │         ▼
      │   UI Re-renders with new theme
      │
      ▼
Home Page
      │
      ▼
Find Current Leader
      │
      ▼
Display Winning Technology
      │
      ▼
Navigate to Voting Page
      │
      ▼
User Votes for Technology
      │
      ▼
voteTech() Dispatch
      │
      ▼
Redux Updates Votes
      │
      ▼
UI Re-renders
      │
      ▼
Leader Updates Automatically
```

------------------------------------------------------------

# Redux Slice 1 – Theme Management

## themeSlice.js

```javascript
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
```

------------------------------------------------------------

# Theme Slice Explanation

### Initial State

```
const initialState = {
  mode: "light"
}
```

This stores the **current UI theme**.

Possible values:

```
light
dark
```

------------------------------------------------------------

### Reducer Function

```
changeTheme
```

Logic:

```
state.mode = state.mode === "light" ? "dark" : "light"
```

Meaning:

If theme = light → switch to dark  
If theme = dark → switch to light  

This is called **theme toggling**.

------------------------------------------------------------

### Dispatch Example

```
dispatch(changeTheme())
```

Redux automatically updates:

```
state.theme.mode
```

------------------------------------------------------------

# Redux Slice 2 – Voting System

## voteSlice.js

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    technologies: [
        {id: 1, name: "React", votes: 0},
        {id: 2, name: "Angular", votes: 0},
        {id: 3, name: "Java", votes: 0},
        {id: 4, name: ".Net", votes: 0},
        {id: 5, name: "Node", votes: 0},
        {id: 6, name: "Salesforce", votes: 0},
    ]
};

const voteSlice = createSlice({
    name: "votes",
    initialState,
    reducers: {
        voteTech: (state, action) => {
            const tech = state.technologies.find(data => data.id === action.payload);
            if(tech) tech.votes += 1;
        }
    }
});

export const { voteTech } = voteSlice.actions;
export default voteSlice.reducer;
```

------------------------------------------------------------

# Vote Slice Explanation

### Global State

```
technologies[]
```

Each technology contains:

```
id
name
votes
```

Example state:

```
[
 {id:1,name:"React",votes:3},
 {id:2,name:"Angular",votes:1}
]
```

------------------------------------------------------------

### Voting Logic

```
voteTech(state, action)
```

Step-by-step process:

1️⃣ Find technology using id

```
const tech = state.technologies.find(data => data.id === action.payload)
```

2️⃣ Increase vote count

```
tech.votes += 1
```

Redux Toolkit allows this because **Immer handles immutability internally**.

------------------------------------------------------------

### Dispatch Example

```
dispatch(voteTech(3))
```

This increases votes for **Java**.

------------------------------------------------------------

# Redux Store Configuration

```javascript
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import voteReducer from "./voteSlice";

export const store = configureStore({
    reducer: {
        votes: voteReducer,
        theme: themeReducer,
    }
});
```

------------------------------------------------------------

# Store Structure

Global Redux Store:

```
{
  votes:{
      technologies:[]
  },
  theme:{
      mode:"light"
  }
}
```

------------------------------------------------------------

# Home Page Logic

```javascript
const tech = useSelector(state => state.votes.technologies);
const theme = useSelector(state => state.theme.mode);
```

Home reads:

• technologies list  
• current theme  

------------------------------------------------------------

# Leader Detection Logic

```
const maxVotes = Math.max(...tech.map(data => data.votes));
const winner = tech.find(data => data.votes === maxVotes && maxVotes > 0);
```

Explanation:

1️⃣ Extract vote counts  
2️⃣ Find highest vote  
3️⃣ Find technology with that vote  

Example:

```
React: 5
Angular: 2
Node: 3
```

Winner = **React**

------------------------------------------------------------

# Voting Page Logic

Voting page displays **all technologies**.

```
technologies.map(data => (
   <TechCard key={data.id} tech={data} />
))
```

Each technology renders a **TechCard component**.

------------------------------------------------------------

# TechCard Component

Responsible for:

• Showing technology name  
• Showing vote count  
• Vote button  
• Highlighting leader  

Vote button:

```
onClick={() => dispatch(voteTech(tech.id))}
```

This dispatches vote action.

------------------------------------------------------------

# Leader Highlight Logic

```
isWinner={data.votes === maxVotes && maxVotes > 0}
```

If a technology has highest votes:

UI changes color.

------------------------------------------------------------

# Navbar Component

Navbar contains:

• Navigation links  
• Theme toggle button  

Theme detection:

```
const theme = useSelector(state => state.theme.mode)
```

Theme toggle:

```
dispatch(changeTheme())
```

------------------------------------------------------------

# Theme Based Styling

UI uses conditional TailwindCSS classes.

Example:

```
theme === "dark"
  ? "bg-gray-900 text-white"
  : "bg-white text-black"
```

This dynamically changes UI colors.

------------------------------------------------------------

# Complete Redux Data Flow

User clicks Vote
      │
      ▼
dispatch(voteTech(id))
      │
      ▼
Redux Reducer Updates State
      │
      ▼
State.votes.technologies updated
      │
      ▼
React Re-renders UI
      │
      ▼
Leader Recalculated
      │
      ▼
Winner Display Updated

------------------------------------------------------------

# Final Application Behavior

User opens app  
↓  
Home page shows current leader  
↓  
User navigates to voting page  
↓  
User votes for technology  
↓  
Vote count increases  
↓  
Leader updates dynamically  
↓  
User toggles theme  
↓  
Entire UI switches between Light / Dark  

------------------------------------------------------------

# Key Concepts Demonstrated

Redux Toolkit slices  
Global state management  
Multiple reducers in store  
Theme toggling logic  
Voting system logic  
Derived state (leader detection)  
React component interaction with Redux  

------------------------------------------------------------

# Summary

This project demonstrates a **real-world Redux Toolkit architecture** with multiple slices managing different features.

Theme Slice → UI behavior  
Vote Slice → Business logic  

Redux store acts as the **central source of truth**, allowing React components to stay synchronized with application state.

The result is a **clean, scalable, and maintainable React application architecture**.