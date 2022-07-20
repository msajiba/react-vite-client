import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { toast } from 'react-toastify';
import {useParams, useNavigate} from 'react-router-dom';


const Update = () => {

    const navigate = useNavigate()
    const {updateId} = useParams();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState({});
    

    const handleUpdateFormSubmit = async(e) => {

        e.preventDefault();

        const updateUser = {firstName, lastName, email};

        const url = `https://gentle-river-60332.herokuapp.com/product/${updateId}`;

        const res = await axios.put(url, updateUser);
        e.target.reset();
        toast.success('User Update Successful');
        navigate('/home');
        console.log(res)
    };

    useEffect(()=> {

        const getUsers = async ()=> {
            const url = `https://gentle-river-60332.herokuapp.com/product/${updateId}`;
            const {data} = await axios.get(url)
            setUser(data);
        };
        getUsers();

    }, [user]);

    




    return (
        <>
              <div className="mx-auto w-75 border px-4 mt-5 py-5">
                    <h4 className='text-center text-primary'> User Update </h4>
                    <p className='text-center text-info'> {user.email} </p>

                <Form onSubmit={handleUpdateFormSubmit}>
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
                        Update
                    </Button>
                </Form>

            </div>
        </>
    );
};

export default Update;