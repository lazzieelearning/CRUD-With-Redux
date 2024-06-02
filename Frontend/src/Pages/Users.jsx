import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUser } from '../Redux/userSlice';
import { Link } from 'react-router-dom';
const Users = () => {
    const dispatch = useDispatch() // used for the actions to store the user
    const users = useSelector(state => state.users.users) // used to get the data for the users
    //first users is in the store and second is in the slice users array.  
    //console.log(useSelector(state => state.users.users));
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/get-user')
            dispatch(getUser(response.data.result))
        } catch (error) {
            console.log(error);
        }
    }

   const handleDelete = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/delete-user/${id}`)
        dispatch(deleteUser({id}))
    } catch (error) {
        console.log(error);
    }
   }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to='/create' className='btn btn-success btn-sm'>Add</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => {
                                return (
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td>
                                            <Link to={`/edit/${user.id}`} className='btn btn-success btn-sm me-2'>Edit</Link>
                                            <button onClick={()=>handleDelete(user.id)} className='btn btn-danger btn-sm'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Users;