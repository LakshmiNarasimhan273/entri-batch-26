import React from 'react'

function InfoItem(props) {
  return (
    <div>
      <p className='text-sm text-gray-500'>{props.label}</p>
      <p className='text-sm font-medium'>{props.value}</p>
    </div>
  )
}

export default InfoItem