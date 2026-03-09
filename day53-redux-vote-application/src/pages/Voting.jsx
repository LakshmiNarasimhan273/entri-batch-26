import React from 'react'
import TechCard from '../components/TechCard'
import { useSelector } from 'react-redux'


function Voting() {
  const technologies = useSelector(state => state.votes.technologies);
  const theme = useSelector(state => state.theme.mode);

  const maxVotes = Math.max(...technologies.map(data => data.votes));

  return (
    <div className={`min-h-screen p-10 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black "}`}>
      <h1 className='text-4xl font-bold text-center mb-10'>Vote your Favorite Tech</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {
          technologies.map(data => (
            <TechCard key={data.id} tech={data} isWinner={data.votes === maxVotes && maxVotes > 0}/>
          ))
        }
      </div>
    </div>
  )
}

export default Voting