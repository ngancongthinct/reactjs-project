import React from 'react';
import PropTypes from 'prop-types';
import './CarouselItem.scss'

Rectangle.propTypes = {
    
};

function Rectangle(props) {
    return (
        <div className='rectangle-container rounded'>
            <h1 className='text-white text-4xl font-bold text-left p-4'>POP</h1>
          
            <img src='/images/rectangle-pop.jpg'/>
 
        </div>
    );
}

export default Rectangle;