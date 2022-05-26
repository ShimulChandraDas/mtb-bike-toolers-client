import React from 'react';
import { Link } from 'react-router-dom';

const TopBanner = () => {
    return (
        <div>
            {/* <div className="hero min-h-screen" style="background-image: url(https://api.lorem.space/image/fashion?w=1000&h=800);"> */}

            <div className="hero m-4  min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Hgvnx41/parts.jpg)' }}>


                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Welcome To MTB Bike Toolers</h1>
                        <p className="mb-5 font-bold">We are the people who provide you all of mtb bike tools and servicing products .</p>
                        <Link to='/ourProducts'> <button className="btn btn-primary">Get Started</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;