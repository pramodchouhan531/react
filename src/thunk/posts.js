import axios from 'axios';
import { getpost } from '../actions';

export const requestpost = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3000/posts/${userId}/posts`)
     dispatch(getpost(res.data))
           
  }  
  
  catch (err) {
    console.log("request error",err);
  }
}