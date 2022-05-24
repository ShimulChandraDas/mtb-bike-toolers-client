import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?customer=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setOrders(data);
                })
        }
    }, [user])
    return (
        <div>
            <h2> My Orders list {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Order Quantity</th>
                            <th>Payable Amount</th>
                            <th>Available Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{order.customerName}</td>
                                    <td>{order.purchased}</td>
                                    <td>{order.orderQuantity}</td>
                                    <td>{order.payableAmount}</td>
                                    <td>{order.stock}</td>

                                </tr>
                            )}




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;