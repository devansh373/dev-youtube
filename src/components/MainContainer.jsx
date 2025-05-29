import React, { useEffect } from 'react'
import Filters from './Filters'
import VideosContainer from './VideosContainer'
import { openMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';

const MainContainer = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
  useEffect(() => {
      dispatch(openMenu());
      console.log("first")
    }, []);
  return (
    <div className={`${isMenuOpen?"pl-[185px]":""}`}>
        <Filters/>
        <VideosContainer/>
    </div>
  )
}

export default MainContainer