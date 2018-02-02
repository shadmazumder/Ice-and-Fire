import ConnectionManager from '../services/ConnectionManager';
import JsonStaticData from '../services/StaticJsonDataManager';
export const ACTION_TYPES = {
  CHAR_LOADING_INITIALED: 'CHAR_LOADING_INITIALED',
  CHAR_LOADING_COMPLETE: 'CHAR_LOADING_COMPLETE',
  HOUSE_LOADING_INITIATED: 'HOUSE_LOADING',
  HOUSE_LOADING_COMPLETE: 'HOUSE_LOADING_COMPLETE',
  BOOK_LOADING_INITIATED: 'BOOK_LOADING_INITIATED',
  BOOK_LOADING_COMPLETED: 'BOOK_LOADING_COMPLETED',
  SINGLE_HOUSE: 'SINGLE_HOUSE',
  CHARACTER_LIST_FETCHED: 'CHARACTER_LIST_FETCHED',
  CHARACTER_LIST_EMPTY: 'CHARACTER_LIST_EMPTY',
  SINGLE_CHARACTER: 'SINGLE_CHARACTER',
  CURRENT_LORD: 'CURRENT_LORD',
  CURRENT_LORD_NULL_FOUND: 'CURRENT_LORD_NULL_FOUND',
  CURRENT_LORD_EMPTY: 'CURRENT_LORD_EMPTY',
  SINGLE_BOOK: 'SINGLE_BOOK',
  SINGLE_BOOK_CHARACTER: 'SINGLE_BOOK_CHARACTER',
  SINGLE_BOOK_CHAR_LIST: 'SINGLE_BOOK_CHAR_LIST',
  SINGLE_BOOK_CHAR_LIST_EMPTY: 'SINGLE_BOOK_CHAR_LIST_EMPTY',
};

const jsonStatiData = new JsonStaticData ();

export function getAllHouses () {
  return dispatch => {
    dispatch ({
      type: ACTION_TYPES.HOUSE_LOADING_INITIATED,
    });
    try {
      // throw "error"
      let connectionManger = new ConnectionManager ();
      connectionManger.getAllHouses ().then (
        resp => {
          if (resp.status == 200) {
            dispatch ({
              type: ACTION_TYPES.HOUSE_LOADING_COMPLETE,
              payload: resp.data,
            });
          } else {
            dispatch ({
              type: ACTION_TYPES.HOUSE_LOADING_COMPLETE,
              payload: jsonStatiData.getHouses (),
            });
          }
        },
        error => {
          dispatch ({
            type: ACTION_TYPES.HOUSE_LOADING_COMPLETE,
            payload: jsonStatiData.getHouses (),
          });
        }
      );
    } catch (error) {
      dispatch ({
        type: ACTION_TYPES.HOUSE_LOADING_COMPLETE,
        payload: jsonStatiData.getHouses (),
      });
    }
  };
}

export function getAllBooks () {
  return dispatch => {
    dispatch ({
      type: ACTION_TYPES.BOOK_LOADING_INITIATED,
    });

    try {
      let connectionManger = new ConnectionManager ();
      connectionManger.getAllBooks ().then (
        resp => {
          if (resp.status == 200) {
            dispatch ({
              type: ACTION_TYPES.BOOK_LOADING_COMPLETED,
              payload: resp.data,
            });
          } else {
            dispatch ({
              type: ACTION_TYPES.BOOK_LOADING_COMPLETED,
              payload: jsonStatiData.getBooks (),
            });
          }
        },
        error => {
          dispatch ({
            type: ACTION_TYPES.BOOK_LOADING_COMPLETED,
            payload: jsonStatiData.getBooks (),
          });
        }
      );
    } catch (error) {
      let staticData = new JsonStaticData ();
      dispatch ({
        type: ACTION_TYPES.BOOK_LOADING_COMPLETED,
        payload: staticData.books,
      });
    }
  };
}

export function setHouse (item) {
  return {
    type: ACTION_TYPES.SINGLE_HOUSE,
    payload: item,
  };
}

export function getCharacterList (charUrlList) {
  return dispatch => {
    let characterList = [];
    charUrlList.map (characterUrl => {
      let connectionManger = new ConnectionManager ();
      connectionManger.getCharacterDetailsWith (characterUrl).then (
        resp => {
          if (resp.status == 200 && resp.data && resp.data != null) {
            characterList.push (resp.data);
            dispatch ({
              type: ACTION_TYPES.CHARACTER_LIST_FETCHED,
              payload: characterList,
            });
          } else {
            dispatch ({
              type: ACTION_TYPES.CHARACTER_LIST_FETCHED,
              payload: null,
            });
          }
        },
        error => {
          dispatch ({
            type: ACTION_TYPES.CHARACTER_LIST_FETCHED,
            payload: null,
          });
        }
      );
    });
  };
}

export function getCurrentLord (characterUrl) {
  return dispatch => {
    if (characterUrl && characterUrl.length > 0) {
      let connectionManger = new ConnectionManager ();
      connectionManger.getCharacterDetailsWith (characterUrl).then (resp => {
        if (resp.data && resp.data.name) {
          dispatch ({
            type: ACTION_TYPES.CURRENT_LORD,
            payload: resp.data.name,
          });
        }
      });
    }
  };
}

export function setCharacter (characterObject) {
  return {
    type: ACTION_TYPES.SINGLE_CHARACTER,
    payload: characterObject,
  };
}

export function resetCurrentLord () {
  return {
    type: ACTION_TYPES.CURRENT_LORD_EMPTY,
  };
}

export function resetSwornMembers () {
  return {
    type: ACTION_TYPES.CHARACTER_LIST_EMPTY,
  };
}

export function setBook (book) {
  return {
    type: ACTION_TYPES.SINGLE_BOOK,
    payload: book,
  };
}

export function setBookCharacter (characterObject) {
  return {
    type: ACTION_TYPES.SINGLE_BOOK_CHARACTER,
    payload: characterObject,
  };
}

export function resetBookCharacters () {
  return {
    type: ACTION_TYPES.SINGLE_BOOK_CHAR_LIST_EMPTY,
  };
}

export function getBookCharacterList (charUrlList) {
  return dispatch => {
    let characterList = [];
    charUrlList.map (characterUrl => {
      let connectionManger = new ConnectionManager ();
      connectionManger.getCharacterDetailsWith (characterUrl).then (
        resp => {
          if (resp.status == 200 && resp.data && resp.data != null) {
            characterList.push (resp.data);
            dispatch ({
              type: ACTION_TYPES.SINGLE_BOOK_CHAR_LIST,
              payload: characterList,
            });
          } else {
              dispatch ({
                  type: ACTION_TYPES.SINGLE_BOOK_CHAR_LIST,
                  payload: null,
              });
          }
        },
        error => {
          // pass
        }
      );
    });
  };
}
