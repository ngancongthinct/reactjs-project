import React from 'react';
import PropTypes from 'prop-types';
import './Playlist.scss'

Playlist.propTypes = {
    
};

function Playlist(props) {
    return (
        <div className='playlist-container p-4 rounded'>
            <div className='playlist-img'>
                <img className='rounded' src='/images/playlist.jpg'/>
            </div>
            <div className='text-left mt-4'>
                <h2 className='text-base text-white font-bold truncate'>Tuyển tập nhạc thư giãn</h2>
                <h5 className='text-sm truncate'>Orange, Trúc Nhân, Da LAB, Mỹ Tâm và nhiều hơn nữa</h5>
            </div>
        </div>
    );
}

export default Playlist;