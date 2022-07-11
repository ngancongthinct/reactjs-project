import React from 'react';
import PropTypes from 'prop-types';
import CardRow from '../../components/Card/Card_row/CardRow';
import Podcast from '../../components/Card/Podcast/Podcast';
import './HomePage.scss'
import Playlist from '../../components/Card/Playlist/Playlist';

HomePage.propTypes = {
    
};

function HomePage(props) {
    return (
        <div className='homepage-container text-white '>
            <section className='good-afternoon'>
                <h1 className='good-afternoon-title font-medium text-3xl text-left'>Chào buổi chiều</h1>
                <div className='card-row-container flex justify-evenly flex-wrap'>
                    <CardRow/>
                    <CardRow/>
                    <CardRow/>
                    <CardRow/>
                    <CardRow/>
                    <CardRow/>
                </div>
            </section>

            <section className='show-worth-to-try'>
                <div className='flex justify-between items-end'>
                    <a className='text-2xl font-bold hover:underline text-left' href='#'>Chương trình đáng để thử</a>
                    <a className='see-all text-xs font-bold hover:underline' href='#'>XEM TẤT CẢ</a>
                </div>
                <div className='flex justify-evenly'>
                    <Podcast/>
                    <Podcast/>
                    <Podcast/>
                    <Podcast/>
                    <Podcast/>
                    <Podcast/>
                    <Podcast/>
                </div>
            </section>

            <section>
                <div className='flex justify-between items-end'>
                    <a className='text-2xl font-bold hover:underline text-left' href='#'>Tuyển tập hàng đầu của bạn</a>
                    <a className='see-all text-xs font-bold hover:underline' href='#'>XEM TẤT CẢ</a>
                </div>
                <div className='flex justify-evenly'>
                    <Playlist/>
                    <Playlist/>
                    <Playlist/>
                    <Playlist/>
                    <Playlist/>
                    <Playlist/>
                    <Playlist/>
                </div>
            </section>

        </div>
    );
}

export default HomePage;