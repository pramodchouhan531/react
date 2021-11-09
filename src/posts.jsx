import axios from './axios';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


export default function Posts() {

    const [user, setuser] = useState(null)
    useEffect(() => {
        const loaduser = async () => {
            const res = await axios.get('/posts')
            setuser(res.data)
      
        }
        
     loaduser();
    
    },[])
    if(!user)return null;
    console.log('this post',user)

    return (
        <div>
            {user.map(ele=>{
                return (
                <div>
                  <li key={ele.id}>{ele.body}</li> 
                                   
                </div>
                 
            )})}
        </div>
    )
}