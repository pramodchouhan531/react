import { ADD_USERS } from "../actions/actiontye";


const initialstate = {
    items: [{
        name: "",
        username: "",
        email: "",
        address: "",
    }]

};


const adduser = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_USERS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        default: return state;
    }
};
export default adduser;

