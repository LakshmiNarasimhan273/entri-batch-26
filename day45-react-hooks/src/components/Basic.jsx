import React, { useState } from 'react'

function Basic() {
    // syntax for creating useState
    const[message, setMessage] = useState("Welcome User");

    // let message = "Welcome User";

    const updateMessage = () => {
        setMessage("Hello Narasimhan");
    }

  return (
    <div className='flex flex-col items-center justify-center h-[500px]'>
        <h1 className='text-3xl font-bold'>{message}</h1>
        <button onClick={updateMessage} className='bg-blue-600 px-3 py-1 rounded-lg text-white font-bold mt-2'>Change Message</button>
    </div>
  )
}

export default Basic