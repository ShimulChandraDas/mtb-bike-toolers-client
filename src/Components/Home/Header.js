import React from 'react';

const Header = () => {
    return (

        <div className="hero card min-h-screen ">
            <div className="hero-content flex-col  lg:flex-row">
                <img src="https://i.ibb.co/Hgvnx41/parts.jpg" className="max-w-xl rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary uppercase">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Header;