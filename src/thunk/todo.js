import axios from 'axios';
import { gettodo } from '../actions';

export const requesttodo = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3000/todos/${userId}/todos`)
    dispatch(gettodo(res.data))
           
  }  
  
  catch (err) {
    console.log("request error",err);
  }
}