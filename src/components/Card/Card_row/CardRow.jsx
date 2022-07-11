import React from 'react';
import PropTypes from 'prop-types';
import './CardRow.scss'

CardRow.propTypes = {
    
};

function CardRow(props) {
    return (
        <div className='card-row rounded'>
            <div className='playlist-cover'>
                <img src='/images/playlist_cover.jpg' alt='playlist cover'/>
            </div>
            <div className='playlist-title flex items-center'>
                <a href='https://open.spotify.com/playlist/37i9dQZF1EVJSvZp5AOML2'>
                    Red Velvet Playlist
                </a>
            </div>
        </div>
    );
}

export default CardRow;