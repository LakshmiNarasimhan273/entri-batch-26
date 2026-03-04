import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
    const count = useSelector(state => state.counter.value);
  return (
    <div>
        <h4>{count}</h4>
    </div>
  )
}

export default Home