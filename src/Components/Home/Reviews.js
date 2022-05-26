import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review', {
            method: "GET",
            headers: {
                'authorization': `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])




    return (
        <div>
            <h2 className='text-5xl font-bold text-center text-primary m-9 uppercase'>What Our Customer Say's</h2>
            < div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    reviews.slice(0, 3).map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;