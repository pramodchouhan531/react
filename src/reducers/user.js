const initialstate ={
   usres:[],
   user:{},
   loading:false
  };


export default function usersReducers(state=initialstate,action){
    switch (action.type) {
        case types.GET_USERS:
          return {
            ...state,
            usres:action.payload,
            loading:false      
          };

        default:
          return state;
      }
    };