import { client } from "./thunk/user";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getcomments } from './actions';
import axios from "axios";
import { requestcomment } from "./thunk/comments";


export default function Comments() {

    const {postId} = useParams();
    
    const comment = useSelector(state=>state.comments.comments)
    const dispatch = useDispatch() 
    useEffect(() => {
        const loaduser = async () => {
         
            dispatch(requestcomment(postId)); 
           
      
        }
        
     loaduser();
    },[])
    console.log(comment)
    
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