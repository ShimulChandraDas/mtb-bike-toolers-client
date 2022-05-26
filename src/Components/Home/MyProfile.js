import React from 'react';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    return (
        <div >
            <div className="hero -mt-32 min-h-screen m-8 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/NNwQD5R/me.jpg" alt='shimul' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold ">Hi! This Is <span className='uppercase text-5xl text-violet-500'>Shimul Chandra Das</span></h1>
                        <p className="py-6">I am a junior Web Developer. I have expertice in Html, Css, Javascript, React, NodeJs, MongoDB. I started my web develper journey with Programming-Hero.</p>
                        <button className="btn btn-primary"><Link to={'https://www.linkedin.com/in/shimul-scd/'}>Visit My Linkedin Profile</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;