import { ACTION_TYPES } from '../actions';


export default function (state = [], action) {
    switch (action.type) {
        case ACTION_TYPES.SINGLE_BOOK_CHAR_LIST:
            return action.payload;
        case ACTION_TYPES.SINGLE_BOOK_CHAR_LIST_EMPTY:
            return [];
    }
    return state
}