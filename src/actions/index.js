import * as types from "./actiontye"
import { GET_USERS } from "./actiontye";
export const getusers = (users)=>({
    type:GET_USERS,
    pyload:users,
});