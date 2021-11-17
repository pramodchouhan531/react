import { EDIT_USERS } from "../actions/actiontye";


const initialstate ={
    data:[{ 
    name: "",
    username: "",
    email: "",
    address: "",}]
 
};
 

const edituser = (state=initialstate,action)=>{
    switch (action.type) {
        case EDIT_USERS:
            return {
              ...state,
              data:action.payload,
              loading:false      
            }
          default: return state;
        }
  };
export default edituser;
    