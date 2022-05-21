import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('tools.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
    }, [])

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                products.slice(0, 6).map((product) => <Product
                    key={product.id}
                    product={product}
                ></Product>)
            }

        </div>
    );
};

export default Products;