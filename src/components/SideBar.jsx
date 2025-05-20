import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
const SideBar = () => {
  const  isMenuOpen  = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) {
    return;
  }
  return (<div className='flex flex-col gap-4 p-4 border-b-2 border-gray-200 shadow-lg'>
    <div>
      <ul className='font-medium'>
        <Link to={"/"}><li>Home</li></Link>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
    </div>
    <div>
      <h1 className='font-medium'>You</h1>
      <ul>
        <li>History</li>
        <li>Playlists</li>
        <li>Your Videos</li>
      </ul>
    </div>
  </div>
  )
}

export default SideBar