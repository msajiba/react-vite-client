import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.config';
import {Button} from 'react-bootstrap';
import { toast } from 'react-toastify';

const RequireAuth = ({children}) => {

    const [user] = useAuthState(auth);
    const location = useLocation();

    const [sendEmailVerification, sending] = useSendEmailVerification(auth);



    if(!user){
        return <Navigate to='/login' state={{from : location}} replace />
    }


    if(!user?.emailVerified){
        return <>
           <div className="w-75 mx-auto">
            <p> Your Email Account Not Verified </p>
                <h6> Please Verified your email address </h6>
                <Button variant='outline-info'
                        onClick={async()=> {
                                await sendEmailVerification()
                                toast.info('Send Verify link you email address');
                                } }
                    >
                    Verify Email
                </Button>
           </div>
        </>
    };

   
    return children;
};

export default RequireAuth;