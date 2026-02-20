# React Props & Conditional Rendering – Student Notes

# React Props

## What are Props?

Props (short for Properties) are used to pass data from one component to another.

In simple terms:
Props allow a parent component to send data to a child component.

---

## Why Props Are Important?

- Make components reusable
- Allow dynamic data
- Enable parent-to-child communication
- Improve component flexibility

---

## Example of Props

### Step 1: Create Child Component

User.jsx

```jsx
const User = (props) => {
  return <h2>Welcome, {props.name}</h2>;
};

export default User;
```

---

### Step 2: Pass Props from Parent

App.jsx

```jsx
import User from "./User";

function App() {
  return (
    <div>
      <User name="Narasimhan" />
      <User name="React Learner" />
    </div>
  );
}

export default App;
```

Output:
Welcome, Narasimhan  
Welcome, React Learner

---

## Destructuring Props (Recommended Method)

Instead of writing props.name, we can destructure:

```jsx
const User = ({ name }) => {
  return <h2>Welcome, {name}</h2>;
};
```

---

## Important Points About Props

- Props are read-only (cannot be modified inside child component)
- Props help make reusable components
- Data flows from parent → child
- You can pass strings, numbers, arrays, objects, and functions

---

# Conditional Rendering

## What is Conditional Rendering?

Conditional rendering means showing or hiding UI elements based on a condition.

In simple terms:
Render different content based on state or logic.

---

## Why Use Conditional Rendering?

- Show login/logout button
- Show loading spinner
- Display success/error messages
- Hide or show components dynamically

---

## Method 1: Using if Statement

```jsx
function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome Back!</h1>;
  } else {
    return <h1>Please Login</h1>;
  }
}
```

---

## Method 2: Using Ternary Operator (Most Common)

```jsx
function App() {
  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Login</h1>}
    </div>
  );
}
```

---

## Method 3: Using Logical AND (&&)

Used when showing something only if condition is true.

```jsx
function App() {
  const isAdmin = true;

  return (
    <div>
      {isAdmin && <h2>Admin Panel Access</h2>}
    </div>
  );
}
```

---

# Real-Time Example

Login System Example:

- If user is logged in → Show Dashboard
- If not logged in → Show Login Page
- If loading → Show Loading Spinner

This is achieved using conditional rendering.

---

# Key Points to Remember

- Props are used to pass data between components.
- Props are read-only.
- Conditional rendering controls what appears on the screen.
- Ternary operator is commonly used in React.
- Logical AND (&&) is used for simple true conditions.

---

# End Notes

Props make components dynamic.  
Conditional rendering makes UI interactive.  

Both are fundamental concepts in React development.