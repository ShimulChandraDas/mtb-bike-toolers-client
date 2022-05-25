import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../../Shared/Loading';

const Payment = () => {
    const { id } = useParams();
    // const url = `http://localhost:5000/order/${id}`

    // const { data, isLoading } = useQuery(['order', id], () => fetch(url,
    //     //     {
    //     //     method: 'GET',
    //     //     headers: {
    //     //         //problem
    //     //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     //     }
    //     // }
    // ).then(res => res.json()));

    // if (isLoading) {
    //     return <Loading />
    // }
    return (
        <div>
            <h2 className="text-2xl text-center text-green-500">Please Pay for:{id}</h2>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card  bg-base-100 shadow-xl">
                        <div class="card-body">
                            {/* <h2 class="card-title">Pay For {data.price}</h2> */}
                            <p>You order  pice.</p>
                            <p>You have to pay $   .</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;