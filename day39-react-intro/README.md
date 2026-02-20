# React Introduction – Student Notes

## What is React?

React is a JavaScript library used to build user interfaces (UI), especially for single-page applications (SPA).  
It helps developers create reusable components and build fast, interactive web applications.

React was developed by Facebook and is widely used in modern frontend development.

---

## Why Use React?

- Component-based architecture
- Reusable UI components
- Fast rendering using Virtual DOM
- Strong community support
- Easy integration with APIs

---

# Creating a React Project Using Vite

Vite is a modern and fast build tool for frontend development.  
It creates React projects quickly and provides faster development server startup.

---

## Step 1: Install Node.js

Make sure Node.js is installed on your system.

Check version:
```bash
node -v
```

If not installed, download from:
https://nodejs.org

---

## Step 2: Create React Project Using Vite

Run the following command in terminal:

```bash
npm create vite@latest
```

It will ask:
- Project name → (example: my-react-app)
- Select framework → React
- Select variant → JavaScript

---

## Step 3: Move into Project Folder

```bash
cd my-react-app
```

---

## Step 4: Install Dependencies

```bash
npm install
```

This installs all required packages.

---

## Step 5: Start the React Development Server

```bash
npm run dev
```

After running this command, Vite will provide a local URL like:

```
http://localhost:5173/
```

Open it in your browser to see your React app running.

---

# Project Structure (Basic Understanding)

- index.html → Main HTML file
- src/main.jsx → Entry point of React app
- src/App.jsx → Main component
- package.json → Project dependencies and scripts
- node_modules → Installed packages

---

# Basic React App Flow

1. main.jsx renders App component
2. App.jsx contains UI logic
3. Changes auto-refresh in browser (Hot Reload)

---

# Important Commands Summary

Create Project:
```bash
npm create vite@latest
```

Install Packages:
```bash
npm install
```

Start Project:
```bash
npm run dev
```

---

# Key Points to Remember

- React is a library for building UI.
- Vite is used to quickly create and run React projects.
- Always run `npm install` before starting the project.
- Use `npm run dev` to start the development server.

---

# End Notes

This is the standard method used in modern React development to create and start projects using Vite.