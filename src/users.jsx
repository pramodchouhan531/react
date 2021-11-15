import axios from './axios';
import React, { useEffect, useState } from "react";
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom';
import AddUser from './Adduser';

export default function Users() {

    const [user, setuser] = useState(null)
    useEffect(() => {
        const loaduser = async () => {
            const res = await axios.get('/users')
            setuser(res.data)
      
        }
        
     loaduser();

    },[])
    if(!user)return null;

    return (
        <div>
            {user.map((user,index)=>{
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