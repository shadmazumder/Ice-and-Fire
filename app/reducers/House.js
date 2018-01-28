import { ACTION_TYPES } from '../actions';


export default function (state = [], action) {
    switch (action.type) {
        case ACTION_TYPES.HOUSE_LOADING_COMPLETE:
            return action.payload
    }
    return state
}