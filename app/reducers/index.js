import { combineReducers } from 'redux';
import HouseReducer from './House';
import SingleHouseReducer from './SingleHouse';
import BookReducer from './Book';
import CharacterReducer from './Character';
import SingleCharacterReducer from './SingleCharacter';
import CurrentLordReducer from './CurrentLord';
import SingleBookReducer from './SingleBook';
import SingleBookCharacterReducer from './SingleBookCharacter';
import BookCharacterReducer from './BookCharacter';


const rootReducer = combineReducers({
    houses: HouseReducer,
    books: BookReducer,
    book: SingleBookReducer,
    book_character: SingleBookCharacterReducer,
    book_characters: BookCharacterReducer,
    house: SingleHouseReducer,
    characters: CharacterReducer,
    character: SingleCharacterReducer,
    current_lord: CurrentLordReducer
});

export default rootReducer;