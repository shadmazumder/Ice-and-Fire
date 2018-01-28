import ConnectionManager from '../services/ConnectionManager';

export const ACTION_TYPES = {
    CHAR_LOADING_INITIALED: "CHAR_LOADING_INITIALED",
    CHAR_LOADING_COMPLETE: "CHAR_LOADING_COMPLETE",
    HOUSE_LOADING_INITIATED: "HOUSE_LOADING",
    HOUSE_LOADING_COMPLETE: 'HOUSE_LOADING_COMPLETE',
    BOOK_LOADING_INITIATED: "BOOK_LOADING_INITIATED",
    BOOK_LOADING_COMPLETED: "BOOK_LOADING_COMPLETED"
}

let updateItems = items => {

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

