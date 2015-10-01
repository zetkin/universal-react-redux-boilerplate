import React from 'react/addons';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import appState from '../reducers';
import App from '../components/App';


window.onload = function() {
    const store = createStore(appState);

    const app = (
        <Provider store={ store }>
            { () => <App /> }
        </Provider>
    );

    React.render(app, document);
}
