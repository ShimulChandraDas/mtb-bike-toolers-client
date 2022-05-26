import React from 'react';

const Stat = () => {
    return (
        <>
            <h2 className='text-3xl font-bold text-center text-primary m-9 uppercase'> Customer feedback and company turnover </h2>

            <div className="stats w-full stats-vertical lg:stats-horizontal ">

                <div className="stat">
                    <div className="stat-title font-bold">Sale</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </>


    );
};

export default Stat;