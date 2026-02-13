import React from 'react'

function StatusBadge(props) {
  return (
    <div className='text-white text-center text-xs px-3 py-1 rounded-full mt-2 bg-purple-600' >
      {props.role}
    </div>
  )
}

export default StatusBadge