import { client } from "./thunk/user";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import  {gettodo} from "./actions"
import axios from "axios";
import { requesttodo } from "./thunk/todo";
export default function Todos() {
  //const [user, setuser] = useState(null)
    const todo = useSelector(state=>state.todo.todo)
    const dispatch = useDispatch();
    const {userId}=useParams();
    useEffect(() => {
      
        dispatch(requesttodo(userId))
         
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