# React Components – Student Notes

## What is a Component in React?

A component is a reusable piece of UI in a React application.  
It allows you to split the user interface into independent, manageable parts.

In simple terms:
Component = A JavaScript function that returns HTML (JSX).

---

## Why Components Are Important?

- Code reusability
- Better project structure
- Easy maintenance
- Cleaner and organized code
- Scalable applications

---

# Types of Components in React

## 1. Functional Components (Modern & Recommended)

Functional components are JavaScript functions that return JSX.

Example:

```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}

export default Welcome;
```

Or using arrow function:

```jsx
const Welcome = () => {
  return <h1>Welcome to React</h1>;
};

export default Welcome;
```

---

## 2. Class Components (Older Method)

Class components use ES6 classes and extend React.Component.  
They are not commonly used in modern React projects.

Example:

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Welcome to React</h1>;
  }
}

export default Welcome;
```

---

# How to Use a Component

1. Create a component file (Example: Welcome.jsx)
2. Export the component
3. Import it inside App.jsx
4. Use it like an HTML tag

Example in App.jsx:

```jsx
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;
```

---

# Rules of Components

- Component names must start with a capital letter.
- A component must return a single parent element.
- Always export the component if you want to use it in another file.
- Components can be reused multiple times.

---

# Component Folder Structure (Recommended)

src/
 ├── components/
 │     ├── Header.jsx
 │     ├── Footer.jsx
 │     ├── Card.jsx
 ├── App.jsx
 ├── main.jsx

This structure keeps the project clean and organized.

---

# Real-Time Example

If you build a website:

- Header → One component
- Footer → One component
- Product Card → One component
- Navigation Bar → One component

Each section becomes reusable and independent.

---

# Key Points to Remember

- Components are the building blocks of React.
- Functional components are preferred in modern React.
- Components improve code readability and maintainability.
- Always start component names with uppercase letters.

---

# End Notes

Understanding components is the foundation of React development.  
Every React application is built using multiple reusable components.