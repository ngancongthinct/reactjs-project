import React from 'react';
import PropTypes from 'prop-types';
import './LoginPage.scss'
import { loginUrl } from '../../api/spotify';

LoginPage.propTypes = {
    
};

function LoginPage(props) {
    return (
        <div className='login'>
            <h1>I'm the login page</h1>
            <img src='/images/Spotify_Logo_CMYK_White.png' alt='logo' className='w-1/2'/>
            <a href = {loginUrl} className='text-white p-5 font-bold no-underline'>LOGIN WITH SPOTIFY</a>
        </div>

    );
}

export default LoginPage;