import React, { useEffect } from 'react'
import Filters from './Filters'
import VideosContainer from './VideosContainer'
import { openMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';

const MainContainer = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
  const showSearchResults = useSelector((store) => store.app.showSearchResults);
  useEffect(() => {
      !(window.innerWidth < 640) && dispatch(openMenu());
      console.log("first")
    }, []);
  return (
    <div className={`${isMenuOpen?"md:pl-[190px]":""} overflow-auto`}>
        {!showSearchResults &&<Filters/>}
        <VideosContainer/>
    </div>
  )
}

export default MainContainer