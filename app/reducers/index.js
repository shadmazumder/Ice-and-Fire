import { combineReducers } from 'redux';
import HouseReducer from './House';


const rootReducer = combineReducers({
    houses: HouseReducer
});

export default rootReducer;