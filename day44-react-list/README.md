# React Lists & Events – Student Notes

# React Lists

## What are Lists in React?

Lists are used to display multiple items dynamically in the UI.

In React, we use the JavaScript map() method to render lists.

---

## Why Use Lists?

- Display data from arrays
- Show products, users, comments
- Render dynamic API data
- Build reusable components

---

## Basic List Example

```jsx
function App() {
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

## What is key in React?

The key prop helps React identify which items changed, added, or removed.

Important:
- Keys must be unique.
- Avoid using index as key if list can change dynamically.
- Prefer unique IDs from data.

Better Example:

```jsx
const users = [
  { id: 1, name: "Narasimhan" },
  { id: 2, name: "React Learner" }
];

{users.map((user) => (
  <li key={user.id}>{user.name}</li>
))}
```

---

# React Events

## What are Events in React?

Events allow users to interact with the application.

Examples:
- Button click
- Form submit
- Input change
- Mouse hover

React uses camelCase for events.

Example:
onClick
onChange
onSubmit

---

## Basic Click Event Example

```jsx
function App() {
  function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
```

---

## Event with Arrow Function

```jsx
<button onClick={() => alert("Hello React")}>
  Click Me
</button>
```

---

## Event with Parameter

```jsx
function greet(name) {
  alert("Hello " + name);
}

<button onClick={() => greet("Narasimhan")}>
  Greet
</button>
```

---

## Input Change Event Example

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your Name: {name}</p>
    </div>
  );
}

export default App;
```

---

# Real-Time Example

- Product list → Use map() to display items
- Delete button → Use onClick event
- Search input → Use onChange event
- Form submission → Use onSubmit event

---

# Key Points to Remember

- Use map() to render lists.
- Always provide a unique key prop.
- React events use camelCase.
- Pass functions inside event handlers.
- Use useState with events for dynamic UI updates.

---

# End Notes

Lists help display dynamic data.  
Events make the application interactive.  

Both are essential concepts in React development.