import { GET_USERS } from "../actions/actiontye";

const initialstate = {
  records: [],
};

const usersReducers = (state = initialstate, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        records: action.payload,
        loading: false
      }
    default: return state;
  }
};
export default usersReducers;


