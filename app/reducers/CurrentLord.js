import { ACTION_TYPES } from '../actions';


export default function (state = '', action) {
    switch (action.type) {
        case ACTION_TYPES.CURRENT_LORD:
            return action.payload;
        case ACTION_TYPES.CURRENT_LORD_EMPTY:
            return "";
        case ACTION_TYPES.CURRENT_LORD_NULL_FOUND:
            return "";
    }
    return state
}