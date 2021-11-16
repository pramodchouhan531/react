import axios from './axios';
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import  {gettodo} from "./actions"
export default function Todos() {
  //const [user, setuser] = useState(null)
    const todo = useSelector(state=>state.todo)
    const dispatch = useDispatch();
    const {userId}=useParams();
    useEffect(() => {
        const loaduser = async () => {
            const res = await axios.get(`/todos/${userId}/todos`)
            dispatch(gettodo(res.data))


      
        }
        
     loaduser();
    },[]);
   // if(!todo)return null;
    return (
        <div>
            {todo.map((user) => {
                return (
                    <div>
                        <li>{user.userId}</li>
                        <li>{user.id}</li>
                        <li>{user.title}</li>
                    </div>

                )
            })}
        </div>
    )
   
    
}