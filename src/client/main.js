import React from 'react/addons';
import { Provider } from 'react-redux';

import { appState, finalCreateStore } from '../reducers';
import App from '../components/App';


window.onload = function() {
    const store = finalCreateStore(appState);

    const app = (
        <Provider store={ store }>
            { () => <App /> }
        </Provider>
    );

    React.render(app, document);
}
