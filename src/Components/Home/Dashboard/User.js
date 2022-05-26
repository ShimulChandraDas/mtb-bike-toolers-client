import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading';
import UserRow from './UserRow';

const User = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2>All Users: {users.length}</h2>
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Email</th>
                        <th>Product</th>
                        <th>Order Quantity</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <UserRow
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                        ></UserRow>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default User;