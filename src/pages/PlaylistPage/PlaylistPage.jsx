import React from 'react';
import './PlaylistPage.scss'

function PlaylistPage(props) {
    return (
        <div className='playlist'>
            <div className='playlist-detail flex items-end'>
                <img src='https://i.scdn.co/image/ab67616d00001e02ac1ad516c55b296be39f276f' alt='playlist_cover'/>
                <div className='playlist-detailText text-left'>
                    <strong>PLAYLIST</strong>
                    <h2 className='text-5xl mb-2.5 font-bold'>Discover Weekly</h2>
                    <p className='text-sm'>description...</p>
                </div>
            </div>
        </div>
    );
}

export default PlaylistPage;