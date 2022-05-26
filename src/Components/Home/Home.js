import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Banner from './Banner';
import ContactUs from './ContactUs';

import Header from './Header';
import Products from './Products';
import Reviews from './Reviews';
import Stat from './Stat';
import TopBanner from './TopBanner';

const Home = () => {
    // const [user] = useAuthState(auth);
    // console.log('google', user);
    return (
        <div className='px-12'>
            <TopBanner />
            <Products />
            <Reviews />
            <Header />
            <Banner />
            <Stat />
            <ContactUs />
        </div>
    );
};

export default Home;