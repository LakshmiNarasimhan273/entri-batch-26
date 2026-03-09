import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Voting from "./pages/Voting";
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/voting' element={<Voting />} />
      </Routes>
    </div>
  )
}

export default App