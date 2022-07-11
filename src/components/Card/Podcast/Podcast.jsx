import React from 'react';
import PropTypes from 'prop-types';
import './Podcast.scss'


Podcast.propTypes = {
    
};

function Podcast(props) {
    return (
        <div className='Podcast-container p-4 rounded'>
            <div className='Podcast-img'>
                <img className='rounded' src='/images/sunhyun_podcast.jpg'/>
            </div>
            <div className='text-left mt-4'>
                <h2 className='text-base text-white font-bold'>Sunhyun Podcast</h2>
                <h5 className='text-sm'>Sunhyun</h5>
            </div>
        </div>
    );
}

export default Podcast;