import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Banner from './Banner';
import Header from './Header';
import Products from './Products';
import Stat from './Stat';

const Home = () => {
    const [user] = useAuthState(auth);
    console.log('google', user);
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