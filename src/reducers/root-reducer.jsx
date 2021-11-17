import { combineReducers } from "redux";
import  usersReducers from "../reducers/user"
import todo from "../reducers/todoreducer";
import postuser from "../reducers/postrducer";
import comments from "../reducers/commentsred";
import adduser from "../reducers/addreducer";
import edituser from "../reducers/edituserreducer";

const rootReducer = combineReducers({
   usersReducers,
   postuser,
   todo,
   comments,
   adduser,
   edituser

})
export default rootReducer;