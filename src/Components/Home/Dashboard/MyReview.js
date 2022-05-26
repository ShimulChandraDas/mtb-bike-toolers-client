import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyReview = () => {
    const [user] = useAuthState(auth)
    console.log('feedback', user);
    const handleReview = e => {
        e.preventDefault();
        const img = user?.img;
        const rating = e.target.rating.value;
        const feedback = e.target.feedback.value;
        console.log(img, rating, feedback);

    }

    return (
        <div className="flex justify-center bg-slate-700  h-[60vh] items-center">
            <form className="shadow-2xl bg-white-300 w-96 p-5 rounded-lg" onSubmit={handleReview}>
                <input type="text" className="input w-full input-bordered" value={user?.displayName} disabled />
                <input type="email" className="input w-full input-bordered my-3" value={user?.email} disabled />
                <label htmlFor="rating" className="label text-white ">Select your rating </label>
                <select name="rating" className="input w-full input-bordered">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <textarea name="feedback" className="textarea textarea-bordered w-full my-3" placeholder="Write your feedback"></textarea>
                <input type="submit" className="uppercase w-full text-white btn btn-primary" value="Post Review" />
            </form>
        </div>
    );
};

export default MyReview;