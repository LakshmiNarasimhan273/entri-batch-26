import React from 'react';
import Avatar from './Avatar';
import StatusBadge from './StatusBadge';
import InfoItem from "./InfoItem";
import Button from "./Button";

function ProfileCard(props) {
  return (
    <div className='bg-white shadow-xl rounded-2xl p-6 w-96'>
      <div className='flex flex-col items-center'>
        {/* props drilling */}
        <Avatar image={props.user.image} online={props.user.isOnline} />
        <h2 className='text-xl font-bold mt-4'>{props.user.name}</h2>
        <StatusBadge role={props.user.role} />
      </div>

      <div className='mt-6 space-y-2'>
        {/* reusued component */}
        <InfoItem label="Email" value={props.user.email} />
        <InfoItem label="Location" value={props.user.location} />
        <InfoItem label="Skills" value={props.user.skills} />

{/* conditonal rending using ternary operator */}
        {
          props.user.bio ? (
            <InfoItem label="Bio" value={props.user.bio} />
          ) : (
            <p className='text-gray-400 text-sm'>No bio available</p>
          )
        }

      </div>
      
      <div className='flex justify-center gap-3 mt-6'>
        {/* reusued components */}
        <Button label="Follow" type="primary" />
        <Button label="Message" type="secondary" />
        {/* <Button label="Delete Account" type= "warning" /> */}
      </div>
    </div>
  )
}

export default ProfileCard