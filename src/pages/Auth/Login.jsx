import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.config';
import Loading from '../Shared/Loading';
import SocialLogin from './SocialLogin';
import { toast } from 'react-toastify';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.form?.pathname || '/';


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        signInWithEmailAndPassword(email, password)
    };


    if(user){
        navigate(from, {replace: true});
    };

    if(loading){
        return <Loading> </Loading>
    }
    if(sending){
        return <Loading />
    }

    return (
        <>
             <div className="w-50 mx-auto border shadow p-5 my-5">

                <h3 className='text-center text-primary'> Please Login</h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <input type='text' placeholder='Enter Name' {...register("displayName")} className='w-100 my-3 py-1' /> */}
                    <br />
                    <input type='email' placeholder='Enter Email' onBlur={(e)=>setEmail(e.target.value)} className='w-100 py-1 my-2' required />
                    <br />
                    <input type='password' placeholder='Enter Password' onBlur={(e)=>setPassword(e.target.value)} className='w-100 my-2 py-1' required />
                    <br />
                    <p className='text-danger'> {error?.message} </p>
                    <input type="submit" className='w-100 btn btn-primary' value='Login' />
                </form>
                <h6 className='mt-2'> You have don't account? 
                    <Link to='/register' className='text-decoration-none'> Create Account </Link> 
                </h6>
                <Button onClick={async()=> {
                                    await sendPasswordResetEmail(email);
                                    toast('Password reset link send your email')
                                } }> 
                    Password Reset 
                </Button>

                <div className="mt-3">
                    <SocialLogin> </SocialLogin>
                </div>
            </div>
        </>
    );
};

export default Login;