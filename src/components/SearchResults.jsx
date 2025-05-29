import React from 'react'
import useSearchVideos from '../hooks/useSearchVideos'
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard'

const SearchResults = () => {
    const searchResults = useSelector(store=>store.search.searchResults)
  return (
    <div>
        {searchResults && searchResults.map((result)=><VideoCard info={result} searchResult={true}/>)}
    </div>
  )
}

export default SearchResults