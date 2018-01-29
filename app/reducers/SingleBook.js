import { ACTION_TYPES } from '../actions';


export default function (state = null, action) {
    switch (action.type) {
        case ACTION_TYPES.SINGLE_BOOK:
            return action.payload
    }
    return state
}