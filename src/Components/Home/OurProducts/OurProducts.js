import React, { useEffect, useState } from 'react';
import Product from '../Product';
import PurchasedModal from '../PurchasedModal';

const OurProducts = () => {
    const [tools, setTools] = useState([]);
    const [purchased, setPurchased] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => {
                setTools(data);
            })
    }, []);
    return (
        <div >
            <h2 className='text-center text-3xl uppercase pt-10 text-primary font-bold'>Our Available Product: {tools.length}</h2>
            <div className='grid grid-cols-1 pt-10  md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools.map((tool) => <Product
                        key={tool._id}
                        tool={tool}
                        setPurchased={setPurchased}
                    ></Product>)
                }
            </div>
            {purchased && <PurchasedModal
                purchased={purchased}
                setPurchased={setPurchased}
            ></PurchasedModal>}
        </div>
    );
};

export default OurProducts;