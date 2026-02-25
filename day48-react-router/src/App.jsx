import React from 'react'
import Home from "./pages/Home";
import Products from "./pages/Products";
import Profile from "./pages/Profile";

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      
    </div>
  )
}

export default App