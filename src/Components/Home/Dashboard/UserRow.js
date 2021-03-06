import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://aqueous-shore-65518.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error(`You are not An Admin`)
                }
                return res.json()
            })
            .then(data => {

                if (data.modifiedCount > 0) {
                    console.log(data);
                    refetch();
                    toast.success(`Successfully made an Admin`);

                }

            })
    }

    return (

        <tr >
            <th>{index + 1}</th>
            <td>{email}</td>
            <td> {role !== 'admin' && <button className='btn btn-xs btn-primary' onClick={makeAdmin}>Make Admin</button>}</td>
            <td> <button className='btn btn-xs bg-red-600'>Remove User</button></td>


        </tr>

    );
};

export default UserRow;