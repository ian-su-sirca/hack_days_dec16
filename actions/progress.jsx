import fetch from 'isomorphic-fetch';

export const REQUEST_STATE = 'REQUEST_STATE'
export const RECEIVE_STATE = 'RECEIVE_STATE'

function requestState() {
    return { type: REQUEST_STATE };
}

function receiveState(json) {
    return {
        type: RECEIVE_STATE,
        data: json
    };
}

export function refresh() {
    return dispatch => {
        dispatch(requestState());
        return fetch('https://rrrm8vl8r3.execute-api.us-east-1.amazonaws.com/mock') // TODO
            .then(response => response.json())
            .then(json => dispatch(receiveState(json)));
    };
}
