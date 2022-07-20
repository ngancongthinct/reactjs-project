import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square/Square';
import userApi from '../../api/user.js'
import { useEffect, useState } from 'react';

SearchSuggestionSquare.propTypes = {
    
};

function SearchSuggestionSquare(props) {
    const [playList, setPlaylist] = useState([])
  useEffect(()=>{
    const result = userApi.search({
      q: 'book',
      type: 'playlist',
      offset: 0,
      limit: 10
    })
    setPlaylist(result?.playlists?.items || [])
  },[])
    return (
        <div className='grid grid-rows-3 grid-flow-col gap-4'>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
        </div>
    );
}

export default SearchSuggestionSquare;