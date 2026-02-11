import React from 'react'
import { Menu, X } from "lucide-react";

function Navbar() {

  return (
    <nav className='bg-gray-100 shadow-lg p-4'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center relative'>
          <div className='text-blue-500 font-bold text-xl'>Entri</div>

          <div className='w-full md:w-1/3'>
          <input type="text" placeholder='Search Course' className='w-full bg-white border rounded-lg px-4 py-2' />
          </div>

          <div className='flex gap-4 text-gray-700 font-bold'>
            <a className='hover:text-blue-700' href="#">Home</a>
            <a className='hover:text-blue-700' href="#">Courses</a>
            <a className='hover:text-blue-700' href="#">My Profile</a>
          </div>
      </div>
    </nav>
  )
}

export default Navbar