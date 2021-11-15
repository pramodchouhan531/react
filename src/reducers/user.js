import { GET_USERS } from "../actions/actiontye";
const initialstate ={
   users:[],
   user:{},
   loading:false
  };


export default function usersReducers(state=initialstate,action){
    switch (action.type) {
        case GET_USERS:
          return {
            ...state,
            usres:action.payload,
            loading:false      
          };

        default:
          return state;
      }
    };