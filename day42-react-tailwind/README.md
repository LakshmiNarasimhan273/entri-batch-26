# React with Tailwind CSS (Vite Installation) – Student Notes

# What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework used to design modern, responsive user interfaces directly inside JSX using predefined classes.

It allows faster UI development without writing separate CSS files.

---

# Why Use Tailwind with React?

- Faster styling
- Clean and reusable UI
- Mobile responsive by default
- No need to write custom CSS
- Easy to maintain

---

# Install Tailwind CSS in React (Using Vite)

## Step 1: Create a React Project Using Vite

```bash
npm create vite@latest
```

Choose:
- Project name → your-project-name
- Framework → React
- Variant → JavaScript

Move into the project folder:

```bash
cd your-project-name
```

Install dependencies:

```bash
npm install
```

---

## Step 2: Install Tailwind CSS (Official Vite Method)

Install Tailwind and Vite plugin:

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## Step 3: Configure Vite for Tailwind

Open vite.config.js and update it like this:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

---

## Step 4: Add Tailwind Import

Open src/index.css and add:

```css
@import "tailwindcss";
```

Make sure index.css is imported inside main.jsx:

```jsx
import './index.css'
```

---

## Step 5: Start the Development Server

```bash
npm run dev
```

Open the local URL shown in terminal (usually http://localhost:5173)

---

# Example React Component with Tailwind

App.jsx

```jsx
function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-blue-600">
          React + Tailwind Setup Successful
        </h1>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Click Me
        </button>
      </div>
    </div>
  )
}

export default App
```

---

# Common Tailwind Utility Classes

Text:
- text-xl
- text-red-500
- font-bold

Spacing:
- p-4
- m-4
- mt-4

Flexbox:
- flex
- items-center
- justify-center

Background:
- bg-blue-500
- bg-gray-100

Border & Shadow:
- rounded
- rounded-xl
- shadow-lg

---

# Responsive Design Example

```jsx
<h1 className="text-lg md:text-3xl lg:text-4xl">
  Responsive Heading
</h1>
```

Breakpoints:
- sm:
- md:
- lg:
- xl:

---

# Important Points to Remember

- Always install dependencies before running the project.
- Use className instead of class in React.
- Tailwind classes are written directly inside JSX.
- Run npm run dev to start development server.

---

# End Notes

This is the official and modern way to install Tailwind CSS in a React project using Vite.