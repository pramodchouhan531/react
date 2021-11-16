import axios from './axios';
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getcomments } from './actions';
export default function Comments() {

    const {postId} = useParams();
    const comment = useSelector(state=>state.comments)
    const dispatch = useDispatch() 
    useEffect(() => {
        const loaduser = async () => {
            const res = await axios.get(`/posts/${postId}/comments`)
            dispatch(getcomments(res.data))
           
      
        }
        
     loaduser();
    },[])
    
    
    return (
        <div>
            {comment.map(ele=>{
                return (
                <div>
                   <li key={ele.id}>{ele.name}</li>
                </div>
                 
            )})}
        </div>
    )
}