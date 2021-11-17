import { GET_POST } from "../actions/actiontye";

const initialstate ={
    post:[]
   };

const postuser = (state=initialstate,action)=>{
    switch (action.type) {
        case GET_POST:
          return {
            ...state,
            post:action.payload,
            loading:false      
          }
        default: return state;
      }
    };
export default postuser;