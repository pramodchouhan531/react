import { client } from "./thunk/user";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Todos from './todo';
import { Link } from 'react-router-dom';
import {getpost} from "./actions"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from "axios";
import { requestpost } from "./thunk/posts";

export default function Posts() {

    
    const post = useSelector(state=>state.postuser.post)
    const dispatch = useDispatch();
    const { user_id } = useParams();


    useEffect(() => {
        // const loaduser = async () => {
        //     const res = await axios.get(`http://localhost:3000/posts/${user_id}/posts`)
        //     dispatch(getpost(res.data))
           
        
        //    setuser(res.data)

        dispatch(requestpost(user_id));     


    }, [])
    
    return (
        <div>
            {post.map((post) => {
                return (
                    <div>
                        <li key={post.id}>{post.title}</li><Link to={`/posts/${post.id}/comments`}>comment</Link>
                    </div>

                )
            })}
        </div>
       )
 
}