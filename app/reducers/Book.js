import { ACTION_TYPES } from '../actions';


export default function (state = [], action) {
    switch (action.type) {
        case ACTION_TYPES.BOOK_LOADING_COMPLETED:
            return action.payload
    }
    return state
}