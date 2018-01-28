import ConnectionManager from '../services/ConnectionManager';

export const ACTION_TYPES = {
    CHAR_LOADING_INITIALED: "CHAR_LOADING_INITIALED",
    CHAR_LOADING_COMPLETE: "CHAR_LOADING_COMPLETE",
    HOUSE_LOADING_INITIATED: "HOUSE_LOADING",
    HOUSE_LOADING_COMPLETE: 'HOUSE_LOADING_COMPLETE',
    BOOK_LOADING_INITIATED: "BOOK_LOADING_INITIATED",
    BOOK_LOADING_COMPLETED: "BOOK_LOADING_COMPLETED",
    SINGLE_HOUSE: "SINGLE_HOUSE",
    CHARACTER_LIST_FETCHED: "CHARACTER_LIST_FETCHED",
    SINGLE_CHARACTER: "SINGLE_CHARACTER"
}

export function getAllHouses() {
    return dispatch => {
        dispatch({
            type: ACTION_TYPES.HOUSE_LOADING_INITIATED,
        });
        let connectionManger = new ConnectionManager();
        connectionManger.getAllHouses().then(resp => {
            dispatch({
                type: ACTION_TYPES.HOUSE_LOADING_COMPLETE,
                payload: resp.data
            })
        })
    };
}

export function getAllBooks() {
    return dispatch => {
        dispatch({
            type: ACTION_TYPES.BOOK_LOADING_INITIATED,
        });
        let connectionManger = new ConnectionManager();
        connectionManger.getAllBooks().then(resp => {
            dispatch({
                type: ACTION_TYPES.BOOK_LOADING_COMPLETED,
                payload: resp.data
            })
        })
    };
}

export function setHouse(item) {
    return {
        type: ACTION_TYPES.SINGLE_HOUSE,
        payload: item
    }
};


export function getCharacterList(charUrlList) {
    return dispatch => {
        let characterList = [];
        charUrlList.map((characterUrl) => {
            let connectionManger = new ConnectionManager();
            connectionManger.getCharacterDetailsWith(characterUrl).then(resp => {
                characterList.push(resp.data);
                if (characterList.length == charUrlList.length) {
                    dispatch({
                        type: ACTION_TYPES.CHARACTER_LIST_FETCHED,
                        payload: characterList
                    })
                }
            })
        })
    }
}

export function getCharacter(characterUrl) {
    return dispatch => {
        if (characterUrl.length > 0) {
            let connectionManger = new ConnectionManager();
            connectionManger.getCharacterDetailsWith(characterUrl).then(resp => {
                dispatch({
                    type: ACTION_TYPES.SINGLE_CHARACTER,
                    payload: resp.data.name
                })
            }, error => {
                console.log(error)
            })
        }

    }
}