import axios from './axios';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getusers } from './actions';
export default function Users() {
    const record = useSelector(state => state.usersReducers.records)
    const dispatch = useDispatch();


    // const [user, setuser] = useState([])
    // console.log(user)
    useEffect(() => {
      const loaduser = async () => {
          const res = await axios.get('/users')
            //  setuser(res.data)
          dispatch(getusers(res.data))



        }

        loaduser();

    }, [])
    

    return (
        <div>
            {record.map((user) => {
                return (
                    <div>
                        <li>{user.id}</li>
                        <li>{user.name}</li>
                        <li>{user.email}</li>
                        <button><Link to={`/posts/${user.id}`}>POST</Link></button><br />
                        <button><Link to={`/todos/${user.id}`}>Todos</Link></button><br />
                        <button> <Link to={`/users/edit/${user.id}`}>Edit</Link></button>
                    </div>

                )
            })}
 
        </div>
    )
}