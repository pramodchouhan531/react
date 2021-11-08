import axios from './axios';
import React, { useEffect, useState } from "react";



export default function Comments() {

    const [user, setuser] = useState(null)
    useEffect(() => {
        const loaduser = async () => {
            const res = await axios.get('/comments')
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
                   <li key={ele.id}>{ele.name}</li>
                </div>
                 
            )})}
        </div>
    )
}