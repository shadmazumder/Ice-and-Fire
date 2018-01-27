import { ACTION_TYPES } from '../actions';


export default function (state = [], action) {
    switch (action.type) {
        case ACTION_TYPES.SINGLE_HOUSE:
            return action.payload;
    }
    return state
}