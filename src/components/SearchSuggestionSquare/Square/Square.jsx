import React from 'react';
import PropTypes from 'prop-types';
import './Square.scss'

Square.propTypes = {
    
};

function Square(props) {
    
    return (
        <div className='square-container rounded relative'>
            <h1 className='text-white text-2xl font-bold text-left p-4'>Không gian lãng mạn</h1>
          
            <img src='/images/square.jpg'/>
 
        </div>
    );
}

export default Square;