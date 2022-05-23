import React from 'react';

const PurchasedModal = ({ purchased, setPurchased }) => {
    const { name, price, stock, description, img, payableAmount } = purchased;
    //console.log(price);

    const handelOrder = event => {
        event.preventDefault();
        const price = event.target.price.value;
        const orderQuantity = event.target.orderQuantity.value;
        const payableAmount = price * orderQuantity;
        console.log(payableAmount);
        //setPurchased(null)


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
                                <input type="text" name='price' placeholder="Type here" disabled value={price} className="input w-full max-w-xs" />
                            </label>

                            <label className="label">
                                <span className="label-text">Quantity: </span>
                                <input type="text" placeholder="" value={stock} disabled className="input w-full max-w-xs" />
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