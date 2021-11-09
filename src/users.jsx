import axios from './axios';
import React, { useEffect, useState } from "react";
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom';

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
            {user.map(ele=>{
                return (
                <div>
                 <li>{ele.name}</li><Link to='/users/${ele.id}'>POST</Link><Link to="/user/${ele.id}">comment</Link>

                   
                   
                </div>
                 
            )})}
            
        </div>
    )
}