import { combineReducers } from "redux";
import usersReducers from "./user";

const rootReducer = combineReducers({
   users:usersReducers
})
export default rootReducer;