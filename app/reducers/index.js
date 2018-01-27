import { combineReducers } from 'redux';
import HouseReducer from './House';
import SingleHouseReducer from './SingleHouse';
import BookReducer from './Book';


const rootReducer = combineReducers({
    houses: HouseReducer,
    books: BookReducer,
    house: SingleHouseReducer
});

export default rootReducer;