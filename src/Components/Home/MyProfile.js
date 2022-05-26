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
            <div className='m-10 min-h-screen'>
                <h1 className='font-bold text-3xl uppercase text-primary'>About</h1>
                <p className='py-6 font-bold'>Recently I have completed my MBA.I had completed a bachelor's degree in Accounting.  Highly detail-oriented individual, eager to contribute towards the building of a strong finance team. Skilled at handling Audit projects and Balance Sheets. Knowledge and understanding of various Accounting and Finance tools</p>

                <h1 className='font-bold text-3xl mt-10 uppercase text-primary'>Education</h1>
                <p className='py-6 text-2xl font-bold '><strong>Port City International University Bangladesh</strong> <br />
                    <li>Master of Business Administration - MBA, Accounting</li>
                </p>
                <p className='py-6 text-2xl font-bold '><strong>National University Bangladesh</strong> <br />
                    <li>Bachelor of Business Administration - MBA, Accounting</li>
                </p>




                <div className='text-white p-10 bg-slate-500'>
                    <h1 className='font-bold  text-3xl mt-10 uppercase text-primary'>Skills</h1>
                    <li>HTML: <progress className="progress mt-3 text-xl progress-secondary w-80" value="90" max="100"></progress> </li>
                    <li>CSS: <progress className="progress mt-3 text-xl progress-secondary w-80" value="90" max="100"></progress> </li>
                    <li>BootStrap: <progress className="progress mt-3 text-xl progress-secondary w-80" value="100" max="100"></progress> </li>
                    <li>Tailwind: <progress className="progress  mt-3 text-xl progress-secondary w-80" value="100" max="100"></progress> </li>
                    <li>JavaScript: <progress className="progress mt-3 text-xl progress-secondary w-80" value="80" max="100"></progress> </li>
                    <li>React: <progress className="progress mt-3 text-xl progress-secondary w-80" value="80" max="100"></progress> </li>
                    <li>NodeJs: <progress className="progress mt-3 text-xl progress-secondary w-80" value="80" max="100"></progress> </li>
                    <li>Mongodb: <progress className="progress progress-secondary w-80" value="80" max="100"></progress> </li>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;