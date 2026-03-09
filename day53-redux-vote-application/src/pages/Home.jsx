import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Home() {

  const tech = useSelector(state => state.votes.technologies);
  const theme = useSelector(state => state.theme.mode);

  const maxVotes = Math.max(...tech.map(data => data.votes));
  const winner = tech.find(data => data.votes === maxVotes && maxVotes > 0);

  return (
    <div className={`min-h-screen p-10 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <h1 className='text-4xl font-bold text-center mb-10'>Current Leader</h1>
      {
        winner ? (
          <div className="text-center p-8 bg-yellow-100 dark:bg-yellow-800 rounded-xl shadow-md">
            <h2 className='text-3xl font-bold mb-2'>{winner.name}</h2>
            <p className='text-xl'>{winner.votes}</p>
          </div>
        ) : (
          <p className='text-center text-xl'>Note votes yet. Go vote now!</p>
        )
      }
      <div className='text-center mt-10'>
        <Link className='bg-blue-500 text-white px-6 py-3 rounded-lg' to="/voting">Go To Voting Page</Link>
      </div>

    </div>
  )
}

export default Home