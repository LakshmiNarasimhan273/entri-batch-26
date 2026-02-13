import React from 'react'

function Avatar(props) {
  console.log(props);
  return (
    <div className='relative'>
      <img src={props.image} alt="profile_image" className='w-24 h-24 rounded-full object-cover' style={{ borderColor: "#5e558a" }} />

{/* conditional rendering using AND operator */}
    {
      props.online && (
        <span className='absolute w-4 h-4 bottom-1 right-1 bg-green-500 rounded-full border-2 border-white'></span>
      )
    }

    </div>
  )
}

export default Avatar