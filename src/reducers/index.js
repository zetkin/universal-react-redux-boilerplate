import { combineReducers, compose, createStore } from 'redux';
import { devTools } from 'redux-devtools';

import { SET_MESSAGE } from '../actions';


function message(state = 'Hello world!', action) {
    switch (action.type) {
        case SET_MESSAGE:
            return action.message;
        default:
            return state;
    }
}

export const appState = combineReducers({
    message
});

export const finalCreateStore = compose(
    devTools()
)(createStore);
