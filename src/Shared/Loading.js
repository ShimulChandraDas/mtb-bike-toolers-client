import React from 'react';


const Loading = () => {
    return (
        <div style={{ height: '400px' }} className='w-100 flex content-center items-center'>
            <progress className="progress w-56"></progress>

        </div>
    );
};

export default Loading;