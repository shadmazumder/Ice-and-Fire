import { combineReducers } from 'redux';
import HouseReducer from './House';
import SingleHouseReducer from './SingleHouse';
import BookReducer from './Book';
import CharacterReducer from './Character';
import SingleCharacterReducer from './SingleCharacter';


const rootReducer = combineReducers({
    houses: HouseReducer,
    books: BookReducer,
    house: SingleHouseReducer,
    characters: CharacterReducer,
    character: SingleCharacterReducer
});

export default rootReducer;