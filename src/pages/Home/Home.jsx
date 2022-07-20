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
    const [searchUser, setSearchUser] = useState('');

    useEffect(()=> {

        const getUsers = async ()=> {
            const url = 'https://gentle-river-60332.herokuapp.com/products';
            const {data} = await axios.get(url)
            setUsers(data);
        };

        getUsers();

    }, []);

    const handleDeleteUser = async(id) => {
        
        const proceed = window.confirm('Are you sure delete');

        if(proceed){
            const url = `https://gentle-river-60332.herokuapp.com/product/${id}`;
            const {data} = await axios.delete(url);
            console.log(data);

            const remaining = users.filter(user=> user._id !== id);
            setUsers(remaining);

            toast.success('Delete Successful');
        }
    };

    const searchUserResult = users.filter(user => {
        
                                    if(setSearchUser == ''){
                                        return user;
                                    }
                                    if(user.firstName.toLowerCase().includes(searchUser)){
                                        return user;
                                    };
                            });

    

    return (
        <>

            <Container>

             <h3 className='text-center text-info my-5'> Total user {users.length} </h3>

             <div className="d-flex justify-content-between align-items-center">

                <Button onClick={()=> navigate('/add')}>
                     Add New User
                </Button>
                <input  
                        onChange={(e)=> setSearchUser(e.target.value.toLowerCase()) }
                        className='border' type="text" placeholder='Search user' />
             </div>

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
                                searchUserResult.map(user =>  <UserShow 
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