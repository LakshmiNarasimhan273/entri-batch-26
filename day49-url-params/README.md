# React URL Params, useNavigate & useParams – Student Notes

# What are URL Parameters?

URL Parameters (also called Route Params) are dynamic values passed inside the URL.

Example:
```
/products/5
```

Here:
- products → route
- 5 → dynamic parameter (id)

This allows us to create dynamic pages like:
- Product details
- User profile
- Blog post
- Order details

---

# Dynamic Route Setup

In App.jsx:

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
```

:id means dynamic parameter.

---

# useNavigate Hook

## What is useNavigate?

useNavigate is used to navigate (redirect) programmatically between pages.

It works like JavaScript-based routing.

---

## Syntax

```jsx
const navigate = useNavigate();
navigate("/path");
```

---

# How It Works in Your Home Component

Inside Home.jsx:

```jsx
const navigate = useNavigate();
```

When button is clicked:

```jsx
<button onClick={() => navigate(`/products/${data.id}`)}>
  View Details
</button>
```

Explanation:
- When user clicks "View Details"
- It navigates to:
  /products/1
  /products/2
  /products/3
- Based on product id

This sends the product id through the URL.

---

# useParams Hook

## What is useParams?

useParams is used to read dynamic values from the URL.

It extracts the parameter from the route.

---

## Syntax

```jsx
const { id } = useParams();
```

It returns an object containing route parameters.

---

# How It Works in ProductDetails Component

Inside ProductDetails.jsx:

```jsx
const { id } = useParams();
```

If URL is:
```
/products/4
```

Then:
id = 4

---

# Fetching Data Using URL Param

Inside useEffect:

```jsx
useEffect(() => {
  axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      setProduct(res.data);
    });
}, [id]);
```

Explanation:
- useEffect runs when component loads.
- It uses id from URL.
- Fetches specific product.
- Displays product details.

Dependency:
[id] → ensures it runs again if URL id changes.

---

# Full Flow Explanation

1. Home page loads all products.
2. User clicks "View Details".
3. useNavigate sends user to:
   /products/{productId}
4. ProductDetails component loads.
5. useParams extracts id from URL.
6. Axios fetches product data using id.
7. Product details are displayed.

---

# Why useNavigate?

- Redirect after login
- Navigate on button click
- Move to dynamic pages
- Controlled navigation (without Link)

---

# Why useParams?

- Read dynamic route values
- Fetch specific data
- Build reusable detail pages

---

# Real-Time Example Use Cases

- E-commerce → Product details page
- Admin dashboard → Edit user by ID
- Blog → Open post by slug
- Order system → Track order by order ID

---

# Key Points to Remember

- :id in route makes it dynamic.
- useNavigate is used to redirect programmatically.
- useParams reads URL parameters.
- useEffect should depend on id when fetching dynamic data.
- This pattern is very common in real-world React applications.

---

# End Notes

URL Params allow dynamic routing.  
useNavigate handles navigation.  
useParams extracts route data.  

Together, they enable powerful and scalable React applications.