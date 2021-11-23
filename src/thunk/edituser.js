import axios from 'axios';
import { edituser } from '../actions';
export const requestedituser = (data,id) => async (dispatch) => {
  try {
     const result=await axios.put(`/users/${id}`,data);
     dispatch(edituser(result.data));
                
  }  
  
  catch (err) {
    console.log("request error",err);
  }
};
export const getadd = (data,id)=> async (dispatch) => {
  try{
    const result = await  axios.get(`/users/${id}`,data);
     dispatch(edituser(result.data));
  }
  catch(err){
   alert('hii')
  }
}