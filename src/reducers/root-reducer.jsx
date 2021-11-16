import { combineReducers } from "redux";
import usersReducers from "./user";

const rootReducer = combineReducers({
   data:usersReducers,
   todo:usersReducers,
   post:usersReducers,
   comments:usersReducers,
   items:usersReducers

})
export default rootReducer;