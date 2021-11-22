import axios from 'axios';
import { AddUser } from '../actions';
export const requestadduser = (items) => async (dispatch) => {
  try {
    const data = await axios.post("http://localhost:3000/users",{items});
    dispatch(AddUser)
    console.log(data)
           
  }  
  
  catch (err) {
    console.log("request error",err);
  }
}