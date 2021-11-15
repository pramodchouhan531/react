import axios from './axios';
import React, { useEffect, useState } from "react";
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom';
import AddUser from './Adduser';
import { useSelector, useDispatch} from 'react-redux';
import { getusers } from './actions';
export default function Users(props) {
     const users = useSelector(state=>state.users)
     const dispatch = useDispatch();
 
//    const [user, setuser] = useState(null)
    useEffect(() => {
        const loaduser = async () => {
            const res = await axios.get('/users')
            dispatch(getusers(res.data))
            console.log("this",props.users)
      
        }
        
     loaduser();

    },[])
    const {users}=props
    return (
        <div>
            {users.map((user,index)=>{
                return (
                <div>   
                 <li>{user.id}</li>
                 <li>{user.name}</li>
                 <button><Link to={`/users/${user.id}`}>POST</Link></button><br />
                 <button><Link to={`/todos/${user.id}`}>Todos</Link></button><br />
               <button> <Link to={`/users/edit/${user.id}`}>Edit</Link></button>
         
                   
                   
                </div>
             
            )})}
            <AddUser/>  
        </div>
    )
}