import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
import Loading from '../Shared/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if(loading){
        return <Loading> </Loading>
    };
    if(error){
        console.error(error.message)
    }
    if(user){
        console.log('hahahaha')
    }

    return (
        <div className='text-center w-100'>
            <Button className='w-50 btn-info text-white fs-5' onClick={()=>signInWithGoogle()}> Google Login </Button>
        </div>
    );
};

export default SocialLogin;