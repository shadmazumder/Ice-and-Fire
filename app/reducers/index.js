import { combineReducers } from 'redux';
import HouseReducer from './House';
import BookReducer from './Book';


const rootReducer = combineReducers({
    houses: HouseReducer,
    books: BookReducer,
});

export default rootReducer;