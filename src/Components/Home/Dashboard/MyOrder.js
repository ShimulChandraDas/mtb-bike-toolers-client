import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?customer=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log(res, 'response');
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()
                })
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