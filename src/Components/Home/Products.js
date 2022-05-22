import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PurchasedModal from './PurchasedModal';

import Product from './Product';


const Products = () => {
    const [tools, setTools] = useState([]);
    const [purchased, setPurchased] = useState(null)



    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => {
                setTools(data);
            })
    }, []);

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools.slice(0, 6).map((tool) => <Product
                        key={tool.id}
                        tool={tool}
                        setPurchased={setPurchased}
                    ></Product>)
                }

            </div>
            <div className='flex justify-end  pt-5'>
                <Link to='/ourProducts'> <button className=' btn-outline bg-sky-300 p-3  font-bold uppercase  rounded '>See More ----->  </button>
                </Link>
            </div>
            {purchased && <PurchasedModal purchased={purchased}></PurchasedModal>}
        </>
    );
};

export default Products;