# React Hooks – useState & useEffect – Student Notes

# What are React Hooks?

Hooks are special functions in React that allow functional components to use state and lifecycle features.

Hooks were introduced to avoid using class components.

Two most important hooks:
- useState → Manage state
- useEffect → Handle side effects

---

# useState Hook

## What is useState?

useState is used to store and manage data inside a component.

When the state changes, React re-renders the component.

---

## Syntax

```jsx
const [state, setState] = useState(initialValue);
```

- state → current value
- setState → function to update value
- initialValue → starting value

---

## Counter Example

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;
```

---

## Important Points About useState

- State updates cause re-render.
- Do not modify state directly.
- Always use the setter function.
- Multiple states can be used in one component.

Example:

```jsx
const [name, setName] = useState("");
const [age, setAge] = useState(0);
```

---

# useEffect Hook

## What is useEffect?

useEffect is used to handle side effects in React.

Side effects include:
- API calls
- Timers
- DOM updates
- Event listeners

---

## Basic Syntax

```jsx
useEffect(() => {
  // side effect code here
}, [dependency]);
```

- Runs after component renders.
- Dependency array controls when it runs.

---

## Types of useEffect Usage

1. Run only once (on mount)

```jsx
useEffect(() => {
  console.log("Component Mounted");
}, []);
```

2. Run when dependency changes

```jsx
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

3. Run on every render

```jsx
useEffect(() => {
  console.log("Rendered");
});
```

---

# API Example using useEffect

```jsx
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

# Real-Time Understanding

useState → Store data (counter, form input, toggle)  
useEffect → Fetch data, run logic after render  

Example:
- Button click → useState updates count
- Component loads → useEffect fetches API

---

# Key Differences

useState:
- Stores data
- Triggers re-render

useEffect:
- Handles side effects
- Runs after render
- Controlled using dependency array

---

# Important Rules

- Hooks must be used inside functional components.
- Hooks cannot be used inside loops or conditions.
- Always import hooks from React.

```jsx
import { useState, useEffect } from "react";
```

---

# End Notes

useState manages data.  
useEffect manages side effects.  

Both are fundamental hooks in modern React development.