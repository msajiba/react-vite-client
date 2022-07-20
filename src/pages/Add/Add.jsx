import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';


const Add = () => {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');


    const handleFormSubmit = async(e) => {
        e.preventDefault();

        const user = {firstName, lastName, email};

        const url = 'http://localhost:5000/product';

        const {data} = await axios.post(url, user);
        e.target.reset();
        toast.success('User add successful');
        navigate('/home');
        
    };


    return (
        <>
          
            <div className="mx-auto w-75 border px-4 mt-5 py-5">
                    <h4 className='text-center text-primary'> Add New User</h4>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control onBlur={(e)=> setFirstName(e.target.value)} type="text" placeholder="Enter First Name" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>last Name</Form.Label>
                        <Form.Control onBlur={(e)=> setLastName(e.target.value)} type="text" placeholder="Enter last Name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control onBlur={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter Email Address" required/>
                    </Form.Group>

                    <Button className='w-100' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>


        </>
    );
};

export default Add;