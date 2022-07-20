import React from 'react';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const UserShow = ({user, handleDeleteUser}) => {
    const navigate = useNavigate();

    return (
        <>
             <tr> 
                    <td> {user.firstName} </td>
                    <td> {user.lastName} </td>
                    <td> {user.email} </td>
                    <td className='px-0'> 
                        <Button 
                            variant="outline-danger"
                            onClick={()=> handleDeleteUser(user._id)}> 
                            Delete 
                        </Button> 
                    </td>
                    <td className='px-0'> 
                        <Button 
                            variant="outline-warning"
                            onClick={()=> navigate(`/update/${user._id}`)}> 
                            Update 
                        </Button> 
                    </td>    
            </tr>
        </>
    );
};

export default UserShow;