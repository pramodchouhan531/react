import {  ADD_USERS, GET_TODO,GET_POST, GET_USERS, GET_COMMENTS } from "../actions/actiontye";

const initialstate ={
   comments:[],
   todo:[],
   post:[],
   records:[],
   items:[{ name: "",
   username: "",
   email: "",
   address: "",}]

  };

const usersReducers = (state=initialstate,action)=>{
    switch (action.type) {
        case GET_USERS:
          return {
            ...state,
            records:action.payload,
            loading:false      
          }
        case GET_TODO:
          return{
            ...state,
            todo:action.payload
          }
        case GET_POST:
          return{
              ...state,
              post:action.payload
            }
        case GET_COMMENTS:
          return{
            ...state,
            comments:action.payload
          }    
         case ADD_USERS:
           return{
             ...state,
             items:action.payload
           }
        
        default: return state;
      }
    };
export default usersReducers;