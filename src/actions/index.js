import * as types from "./actiontye"
import axios from './axios';
const getusers = (users)=>({
    type:types.GET_USERS,
    pyload:users,
});
export const loadusers=()=>{
   return function(dispatch){
          const res = await axios.get('/users')
          console.log("pramod",res)
          dispatch(getusers(res.data))
   }

}