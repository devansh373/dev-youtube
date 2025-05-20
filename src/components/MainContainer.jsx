import React, { useEffect } from 'react'
import Filters from './Filters'
import VideosContainer from './VideosContainer'
import { openMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(openMenu());
      console.log("first")
    }, []);
  return (
    <div>
        <Filters/>
        <VideosContainer/>
    </div>
  )
}

export default MainContainer