import axios from './axios';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


export default function Posts() {

   // const [user, setuser] = useState(null)
   
    const [post , setpost]=useState(null)
    const { user_id } = useParams();

    console.log(user_id)
    useEffect(() => {
        const loaduser = async () => {
            const res = await axios.get(`/posts/${user_id}/posts`)
            console.log(res.data)
            setpost(res.data);
            console.log(post)
        
        //    setuser(res.data)

        }

        loaduser();

    }, [])
 

    return (
       <div>
           
       </div>
    )
}