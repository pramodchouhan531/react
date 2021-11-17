import { GET_TODO } from "../actions/actiontye";

const initialstate = {
    todo: [],
};

const todo = (state = initialstate, action) => {
    switch (action.type) {
        case GET_TODO:
            return {
                ...state,
                todo: action.payload,
                loading: false
            }
        default: return state;
    }
};
export default todo;