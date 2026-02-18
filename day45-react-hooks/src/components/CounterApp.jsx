import React, { useState } from 'react'

function CounterApp() {
    const[count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

  return (
    <div className='flex flex-col items-center justify-center h-[500px]'>
        <div>
            <p className='font-bold text-6xl bg-blue-500 px-6 rounded-lg text-white py-2'>{count}</p>
        </div>

        <div className='flex gap-4 mt-6'>
            <button onClick={increaseCount} className='px-4 py-1 rounded-lg bg-green-200 text-green-600 font-bold cursor-pointer'>Increase</button>
            <button disabled={count === 0} onClick={decreaseCount} className='px-4 py-1 rounded-lg bg-red-200 text-red-600 font-bold cursor-pointer'>Decrease</button>
            <button disabled={count === 0} onClick={resetCount} className='px-4 py-1 rounded-lg bg-gray-200 text-gray-600 font-bold cursor-pointer'>Reset</button>
        </div>
    </div>
  )
}

export default CounterApp