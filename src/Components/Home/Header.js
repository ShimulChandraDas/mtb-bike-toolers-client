import React from 'react';

const Header = () => {
    return (
        < div className=' m-9'>
            <h2 className='text-5xl font-bold text-center text-primary uppercase'>Something Up coming...............!</h2>

            <div className="hero card min-h-screen ">

                <div className="hero-content flex-col gap-9 -mt-96 lg:flex-row">
                    <img src="https://s14761.pcdn.co/wp-content/uploads/2019/05/Service-Tipps-Bike-Fruehling-Spring-3913.jpg" className="max-w-xl rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Our New Work</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary uppercase">Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;