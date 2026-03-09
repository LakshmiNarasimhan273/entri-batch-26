import React from 'react'
import { useDispatch } from 'react-redux'
import { voteTech } from '../redux/voteSlice';

function TechCard({ tech, isWinner }) {
  const dispatch = useDispatch();
  return (
    <div className={`p-6 rounded-xl shadow-md ${isWinner ? "bg-green-100 border-2 border-green-500" : "bg-white dark:bg-gray-700"} text-black dark:text-white`}>

      <h2 className='text-xl font-bold mb-2'>{tech.name}</h2>
      <p className='text-gray-600 dark:text-gray-300 mb-4'>Votes: {tech.votes}</p>
      {isWinner && <p className='text-green-600 font-semibold mb-2'>Leading</p>}

      <button className='bg-blue-500 text-white px-4 py-2 rounded-lg' onClick={() => dispatch(voteTech(tech.id))}>Vote</button>

    </div>
  )
}

export default TechCard