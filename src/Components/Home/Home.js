import React from 'react';
import Banner from './Banner';
import Header from './Header';
import Products from './Products';
import Stat from './Stat';

const Home = () => {
    return (
        <div className='px-12'>
            <Header />
            <Products />
            <Banner />
            <Stat />



        </div>
    );
};

export default Home;