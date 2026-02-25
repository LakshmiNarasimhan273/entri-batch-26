import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 bg-teal-800 text-white'>
        <div>
            <h1 className='font-bold text-xl'>Shopyfy.</h1>
        </div>

        <div className='flex gap-3'>
           <Link to="/">Home</Link>
           <Link to="/products">Products</Link>
           <Link to="/profile">Profile</Link>
        </div>
    </div>
  )
}

export default Navbar