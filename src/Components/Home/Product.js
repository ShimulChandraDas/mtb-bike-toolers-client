import React from 'react';

const Product = ({ product }) => {
    //console.log(product);
    //const { id, img, quantity, name, price, description, supplier } = product;

    return (
        <div className="card lg:max-w-lg  shadow-xl">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;