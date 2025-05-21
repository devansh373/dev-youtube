import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const LiveChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center gap-2 p-2 m-2 shadow-lg'>
        <FaUserCircle className=' text-2xl'/>
        <div className='flex flex-col'>
            <h1 className='font-medium'>{name}</h1>
            <p>{message}</p>
            </div>
    </div>
  )
}

export default LiveChatMessage