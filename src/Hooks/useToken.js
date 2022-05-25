import { useEffect, useState } from "react";


const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        console.log('from user', user);
        const email = user?.user?.email;
        console.log('email', email);
        const currentUser = { email: email }
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('inside use token', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken);
                })
        }
    }, [user])
    return [token]
};

export default useToken;