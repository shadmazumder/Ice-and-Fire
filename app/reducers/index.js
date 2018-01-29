import { combineReducers } from 'redux';
import HouseReducer from './House';
import SingleHouseReducer from './SingleHouse';
import BookReducer from './Book';
import CharacterReducer from './Character';
import SingleCharacterReducer from './SingleCharacter';
import CurrentLordReducer from './CurrentLord';


const rootReducer = combineReducers({
    houses: HouseReducer,
    books: BookReducer,
    house: SingleHouseReducer,
    characters: CharacterReducer,
    character: SingleCharacterReducer,
    current_lord: CurrentLordReducer
});

export default rootReducer;