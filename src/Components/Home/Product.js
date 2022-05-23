import React from 'react';

const Product = ({ tool, setPurchased }) => {
    const { name, img, description, price, minOrder, stock } = tool;
    //console.log(tool);


    return (

        <div className="card bg-slate-50 lg:max-w-lg pt-4 shadow-2xl">
            <figure><img style={{ height: '200px' }} src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold text-center">{name}</h2>
                <div className='flex justify-between '>
                    <small className='text-center'><strong>Price: $ {price}</strong></small>
                    <small className='text-center'><strong>Minimum Order: {minOrder}</strong></small>
                    <small className='text-center'>
                        {
                            stock > 0
                                ? <strong>Stocks: {stock}</strong>
                                : <strong className='text-red-600'>Stock Out</strong>
                            // <strong>Quantity: {stock}</strong>
                        }
                    </small>
                </div>
                <p>{description}</p>
                <div className="card-actions justify-between">
                    <label
                        htmlFor="purchased-modal"
                        disabled={stock <= 0}
                        onClick={() => setPurchased(tool)}
                        className="btn  btn-primary modal-button"> Purchased</label>

                </div>
            </div>
        </div>
    );
};

export default Product;