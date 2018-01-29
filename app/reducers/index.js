import { combineReducers } from 'redux';
import HouseReducer from './House';
import SingleHouseReducer from './SingleHouse';
import BookReducer from './Book';
import CharacterReducer from './Character';
import SingleCharacterReducer from './SingleCharacter';
import CurrentLordReducer from './CurrentLord';
import SingleBookReducer from './SingleBook';


const rootReducer = combineReducers({
    houses: HouseReducer,
    books: BookReducer,
    book: SingleBookReducer,
    house: SingleHouseReducer,
    characters: CharacterReducer,
    character: SingleCharacterReducer,
    current_lord: CurrentLordReducer
});

export default rootReducer;