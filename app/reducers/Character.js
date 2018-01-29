import { ACTION_TYPES } from '../actions';


export default function (state = [], action) {
    switch (action.type) {
        case ACTION_TYPES.CHARACTER_LIST_FETCHED:
            return action.payload;
        case ACTION_TYPES.CHARACTER_LIST_EMPTY:
            return [];
    }
    return state
}