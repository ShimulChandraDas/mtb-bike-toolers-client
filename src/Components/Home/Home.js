import React from 'react';
import Banner from './Banner';
import Header from './Header';
import Products from './Products';

const Home = () => {
    return (
        <div className='px-12'>
            <Header />
            <Products />
            <Banner />



        </div>
    );
};

export default Home;