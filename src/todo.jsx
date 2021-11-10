import axios from './axios';
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
export default function Todos() {
    const [user, setuser] = useState(null)
    const {id}=useParams();
    useEffect(() => {
        const loaduser = async () => {
            const res = await axios.get(`/todos/${id}`)
            setuser(res.data)
      
        }
        
     loaduser();
    },[])
    if(!user)return null;
   
    return (
        <div>
            <h1>{user.title}</h1>
    
        </div>
    )
}