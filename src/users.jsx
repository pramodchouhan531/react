import axios from './axios';
import React, { useEffect, useState } from "react";


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
                   <p>{ele.id}</p><br />
                   <p>{ele.name}</p>
                   <p>{ele.usrname}</p><br />
                   <p>{ele.email}</p><br />
                   
                   
                </div>
                 
            )})}
        </div>
    )
}