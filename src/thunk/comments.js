import axios from 'axios';
import { getcomments } from '../actions';

export const requestcomment = (postId) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3000/posts/${postId}/comments`)
    dispatch(getcomments(res.data))
           
  }  
  
  catch (err) {
    console.log("request error",err);
  }
}