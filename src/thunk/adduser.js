import axios from 'axios';
import { AddUser } from '../actions';
export const requestadduser = (items) => async (dispatch) => {
  try {
    await axios.post("http://localhost:3000/users",items);
    dispatch(AddUser)

           
  }  
  
  catch (err) {
    console.log("request error",err);
  }
}