import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 ">
            <div className='flex justify-evenly  p-3 '>
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src={review.img} alt='img' />
                    </div>
                </div>
                <h2 className='text-xl font-bold'>{review.name}</h2>
                <p className='text-orange-500'> {review.Rating}</p>
            </div>
            <div className="card-body">
                <p>{review.review}</p>

            </div>

        </div>
    );
};

export default Review;