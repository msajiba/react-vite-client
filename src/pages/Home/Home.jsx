import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {Container, Button} from 'react-bootstrap';
import UserShow from './UserShow';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(()=> {

        const getUsers = async ()=> {
            const url = 'http://localhost:5000/products';
            const {data} = await axios.get(url)
            setUsers(data);
        };

        getUsers();

    }, []);

    const handleDeleteUser = async(id) => {
        
        const proceed = window.confirm('Are you sure delete');

        if(proceed){
            const url = `http://localhost:5000/product/${id}`;
            const {data} = await axios.delete(url);
            console.log(data);

            const remaining = users.filter(user=> user._id !== id);
            setUsers(remaining);

            toast.success('Delete Successful');
        }
    }

    

    return (
        <>

            <Container>

             <h3 className='text-center text-info my-5'> Total user {users.length} </h3>

             <Button onClick={()=> navigate('/add')}> Add New User</Button>

                <Table striped hover size="sm">
                    <thead>
                        <tr>
                            
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th colSpan={2}>Custom </th>
                        </tr>
                    </thead>
                    <tbody className='shadow rounded'>
                        
                     
                            {
                                users.map(user =>  <UserShow 
                                                        key={user._id}
                                                        user={user}
                                                        handleDeleteUser={handleDeleteUser}
                                                        > 
                                                    </UserShow> )
                            }
                       
                    </tbody>
                </Table>
            </Container>


        </>
    );
};

export default Home;