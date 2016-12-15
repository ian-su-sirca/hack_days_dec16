import { REQUEST_STATE, RECEIVE_STATE } from '../actions/progress';

export default function progress(state = {
    isFetching: false,
    data: {}
}, action) {
    switch (action.type) {
        case REQUEST_STATE:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_STATE:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data
            });
        default:
            return state;
    }
};
