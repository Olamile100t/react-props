import React from 'react';



const Player = ({imageUrl, name, team, nationality, jerseyNumber,age}) => {
  return (
    <div className='border-1 p-4 space-y-2 bg-gray-300 rounded-2xl text-2xl text-blue-200 drop-shadow-sm'>
 <img src={imageUrl} alt="" className='h-70 w-full  ' />
 <p className='bg-gray-600 text-3xl'>Name: {name} </p>
 <p className='bg-gray-600'>Team : {team} </p>
 <p className='bg-gray-600'>Nationality : {nationality} </p>
 <p className='bg-gray-600'>JerseyNumber : {jerseyNumber} </p>
 <p className='bg-gray-600'>Age : {age} </p>
    </div>
  )
};

export default Player;
