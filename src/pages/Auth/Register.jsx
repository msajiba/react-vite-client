import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';



const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {

                    // const {displayName} = data;
                    const {email} = data;
                    const {password} = data;
                    createUserWithEmailAndPassword(email, password); 
    };


    
    
    if(loading){
        return <Loading> </Loading>
    }


    return (
        <>
           

           <div className="w-50 mx-auto border shadow p-5 my-5">

                        <h3 className='text-center text-primary'> Please Register</h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <input type='text' placeholder='Enter Name' {...register("displayName")} className='w-100 my-3 py-1' /> */}
                    <br />
                    <input type='email' placeholder='Enter Email' {...register("email")} className='w-100 py-1 my-2' required />
                    <br />
                    <input type='password' placeholder='Enter Password' {...register("password", { required: true })} className='w-100 my-2 py-1' required/>
                    <br />
                    <p className='text-danger'> {error?.message} </p>
                    <input type="submit" className='w-100 btn btn-primary' value='Register' />
                </form>
                <h6 className='mt-2'> You have already account? 
                    <Link to='/login' className='text-decoration-none'> Please Login </Link> 
                </h6>
           </div>

        </>
    );
};

export default Register;