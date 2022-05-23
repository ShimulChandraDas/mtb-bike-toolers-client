import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const PurchasedModal = ({ purchased, setPurchased }) => {
    const { _id, name, price, stock, description, img } = purchased;
    const [user] = useAuthState(auth)
    //console.log(price);

    const handelOrder = event => {
        event.preventDefault();
        const price = event.target.price.value;
        const orderQuantity = event.target.orderQuantity.value;
        const payableAmount = price * orderQuantity;

        console.log(stock);
        //setPurchased(null)
        const order = {
            purchasedId: _id,
            purchased: name,
            stock,
            price,
            orderQuantity,
            payableAmount,
            customer: user.email,
            customerName: user.displayName

        }
        //console.log(order);
        fetch('http://localhost:5000/order', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {

                if (data.success) {
                    toast.success(`Successfully order Placed ${name}`)
                } else {
                    toast.error(`You already ordered ${name} previously`)
                }
                setPurchased(null)
            })

        console.log(order);

    }
    return (
        <div>
            <input type="checkbox" id="purchased-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="purchased-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-lg">{name}</h3>
                    <form onSubmit={handelOrder} className=''>
                        <div className='flex gap-x-3 content-between text-left'>
                            <img src={img} style={{ height: '100px' }} alt="" />
                            <p>{description}</p>
                        </div>
                        <div className='flex gap-x-3 content-between text-left'>
                            <label className="label">
                                <span className="label-text"> Price: </span>
                                <input type="text" name='price' disabled value={price} className="input w-full max-w-xs" />
                            </label>

                            <label className="label">
                                <span className="label-text">Stock: </span>
                                <input type="text" value={stock} disabled className="input w-full max-w-xs" />
                            </label>
                        </div>
                        <label className="label">
                            <span className="label-text">Order Quantity </span>
                            <input type="text" name='orderQuantity' placeholder=" Input Order Quantity" className="input w-full max-w-xs" />
                        </label>
                        <input type="submit" value="Submit" placeholder="Type here" className="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchasedModal;