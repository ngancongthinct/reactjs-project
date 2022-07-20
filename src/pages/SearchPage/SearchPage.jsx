import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Square from '../../components/SearchSuggestionSquare/SearchSuggestionSquare.jsx'
import './SearchPage.scss'
import Carousel from '../../components/Carousel/Carousel.jsx';



SearchPage.propTypes = {
    
};

function SearchPage(props) {
    
    return (
        <div>
            <section>
            <h1 className='font-bold text-white text-2xl text-left'>Thể loại bạn nghe nhiều nhất</h1>
            <Carousel/>
            </section>

            <section>
                <h1 className='font-bold text-white text-2xl text-left'>Duyệt tìm tất cả</h1>
                <Square/>
            </section>
        </div>
    );
}

export default SearchPage;