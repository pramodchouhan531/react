import { GET_COMMENTS } from "../actions/actiontye";

const initialstate ={
    comments:[],
    
};
const comments = (state=initialstate,action)=>{
    switch (action.type) {
        case GET_COMMENTS:
            return {
              ...state,
              comments:action.payload,
              loading:false      
            }
          default: return state;
        }
};

export default comments;
