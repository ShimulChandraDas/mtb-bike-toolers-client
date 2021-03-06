import React, { useEffect } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../Hooks/useToken';
import Loading from '../../../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    //const [user, loading, error] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    //const [sendPasswordResetEmail, sending, verificationError] = useSendPasswordResetEmail(auth);

    const [token] = useToken(user || gUser)
    console.log(gUser);

    //console.log(auth);


    let signInError;
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        console.log('called use effect');
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])


    if (loading || gLoading) {
        return <Loading />
    }

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }



    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)

    }

    return (
        <div className='flex h-screen justify-center items-center '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className=" text-center text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input

                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input

                                type="password"
                                placeholder="Enter Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 or longer password'
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value={"Login"} />

                    </form>
                    {/* <small><button
                        onClick={resetEmail}
                        className='text-red-500'>Forget password? </button></small> */}
                    <p><small>New to MTB Bike Toolers? <Link to="/signup" className='text-secondary'>Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with Google</button>

                </div>
            </div>
        </div>

    );
};

export default Login;