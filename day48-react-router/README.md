# React Router using react-router-dom – Student Notes

# What is React Router?

React Router is a library used to handle navigation in React applications.

It allows us to create multiple pages in a Single Page Application (SPA) without reloading the browser.

---

# Why Use React Router?

- Navigate between pages
- Build multi-page layouts
- Handle dynamic routes
- Create protected routes
- Improve user experience

---

# Step 1: Install React Router

Inside your React project:

```bash
npm install react-router-dom
```

---

# Step 2: Basic Setup

Wrap your application with BrowserRouter.

main.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

# Step 3: Define Routes

App.jsx

```jsx
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <div>

      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
```

---

# Important Components in react-router-dom

BrowserRouter → Wraps entire app  
Routes → Groups all routes  
Route → Defines path and component  
Link → Navigation without page reload  
useNavigate → Programmatic navigation  

---

# Programmatic Navigation Example

```jsx
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

---

# Dynamic Routing Example

```jsx
<Route path="/user/:id" element={<User />} />
```

Access parameter inside component:

```jsx
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}
```

---

# Nested Routes Example

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
</Route>
```

---

# Real-Time Use Cases

- Login → Dashboard navigation
- Admin & User role-based routing
- Product details page with ID
- Multi-page portfolio website

---

# Key Points to Remember

- Always wrap app with BrowserRouter.
- Use Link instead of anchor tag.
- Use Routes to group Route components.
- useNavigate is used for redirection.
- React Router enables SPA navigation.

---

# End Notes

React Router is essential for building multi-page React applications.  
It provides smooth navigation without reloading the browser.