import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3Y9EBogagqon6E8UH8XoLkB0jySCBwBu3qRXNnp8Zq8tRxq1liF4Q6oMqTuG7JuSZ3PbB3WaEGJfSHARKRIWF4001nMmaxsZ');
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`

    const { data: booking, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            //problem
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    ).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    };
    return (
        <div>
            <h2 className="text-2xl text-center text-green-500 font-bold">Hello {booking.customerName}</h2>


            <div className=' '>
                <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                    <div className="card-body">
                        <h2 className="card-title">Pay For {booking.purchased}</h2>
                        <p>You ordered <span className='text-green-500 font-bold'>{booking.orderQuantity}</span>. </p>
                        <p>now you have to pay <span className='text-green-500 font-bold'> {booking.payableAmount}</span>. </p>


                    </div>
                </div>
                <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm booking={booking} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Payment;