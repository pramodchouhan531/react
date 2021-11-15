import {combineReducers} from "react-redux";
import usersReducers from "./user";

const rootReducer = combineReducers({
    data:usersReducers
})
export default rootReducer;