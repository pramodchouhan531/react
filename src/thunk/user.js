import axios from 'axios';
import { getusers } from '../actions';


export const requestUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:3000/users')
    dispatch(getusers(res.data))

  }  
  
  catch (err) {
    console.log("request error",err);
  }
}