import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ booking }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");


    const { _id, payableAmount, customerName, customer } = booking;

    useEffect(() => {
        fetch(`http://localhost:5000/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ payableAmount })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            });
    }, [payableAmount])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        };

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        setCardError(error?.message || '');
        setSuccess('');
        setProcessing(true)

        //card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: customerName,
                        email: customer,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);

        } else {
            setCardError('');
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent);
            setSuccess('Congratulation! Your payment successful')


            //payment collection
            const payment = {
                order: _id,
                transactionId: paymentIntent.id
            }
            fetch(`http://localhost:5000/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }
            ).then(res => res.json())
                .then(data => {
                    setProcessing(false)
                    console.log(data);
                })
        }

    };



    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-xs mt-5' type="submit" disabled={!stripe || !clientSecret || success}>
                    Pay
                </button>
                {/* <button className='btn btn-success btn-xs mt-5' type="submit" disabled={!stripe}>
                    Pay
                </button> */}
            </form>
            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }
            {
                success && <div className='text-green-600'>
                    <p>{success}</p>
                    <p className='font-bold'>Your transaction: <span className='text-indigo-500'> {transactionId}</span>  </p>
                </div>
            }
        </>
    );
};


export default CheckoutForm;