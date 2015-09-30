import { combineReducers } from 'redux';

function message(state = 'Hello world!', action) {
    switch (action.type) {
        default:
            return state;
    }
}

const appState = combineReducers({
    message
});

export default appState;
