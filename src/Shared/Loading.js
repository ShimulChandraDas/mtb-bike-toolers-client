import React from 'react';


const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <progress className="progress bg-blue-600 w-56"></progress>

        </div>
    );
};

export default Loading;