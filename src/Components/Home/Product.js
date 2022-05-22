import React from 'react';

const Product = ({ tool }) => {
    const { name, img, description, price, minOrder, stock } = tool;
    console.log(tool);


    return (

        <div className="card bg-slate-50 lg:max-w-lg pt-4 shadow-2xl">
            <figure><img style={{ height: '200px' }} src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='flex justify-between '>
                    <small className='text-center'><strong>Price: $ {price}</strong></small>
                    <small className='text-center'><strong>Quantity: {stock}</strong></small>
                    <small className='text-center'><strong>Quantity: {minOrder}</strong></small>
                </div>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;