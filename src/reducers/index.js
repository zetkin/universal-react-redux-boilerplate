import { combineReducers } from 'redux';

import { SET_MESSAGE } from '../actions';


function message(state = 'Hello world!', action) {
    switch (action.type) {
        case SET_MESSAGE:
            return action.message;
        default:
            return state;
    }
}

const appState = combineReducers({
    message
});

export default appState;
