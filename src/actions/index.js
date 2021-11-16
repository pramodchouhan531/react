import { GET_COMMENTS, GET_USERS } from "./actiontye";
import {  ADD_USERS } from "./actiontye";
import {GET_TODO} from "./actiontye"
import {GET_POST} from "./actiontye"

export const getusers = (payload)=>({
    type:GET_USERS,
    payload
});

export const gettodo = (payload)=>({
    type:GET_TODO,
    payload
})

export const getpost = (payload)=>({
    type:GET_POST,
    payload
})
export const getcomments =(payload)=>({
    type:GET_COMMENTS,
    payload
})
export const AddUser = (payload)=>({
    type: ADD_USERS,
    payload
})