import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import PropTypes from 'prop-types';
import './Menu.scss'

// rsfp
Menu.propTypes = {
    
};



function Menu(props) {
    return (
        <div className='Menu'>
            <div className="logo">
                <img src='/images/Spotify_Logo_CMYK_White.png'/>
            </div>
            <ul className='SidebarList'>
                {SidebarData.map((el,key) =>
                    <li key={key} 
                        className='row'>            
                        <Link to ={el.link}>{el.title}</Link>
                    </li>
                
                )
                }
            </ul>
        </div>
    );
}


export default Menu;