import { createStore } from "redux";
import usersReducers from "../reducers/user";

const store = createStore(usersReducers);

export default store;