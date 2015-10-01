import { connect } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import React from 'react/addons';

import Hello from './Hello';
import { setMessage } from '../actions';


@connect(state => state)
export default class App extends React.Component {
    render() {
        var debugPanel = null;

        if (process.env.NODE_ENV !== 'production') {
            debugPanel = (
                <DebugPanel top right bottom>
                    <DevTools store={ this.context.store }
                        monitor={ LogMonitor }/>
                </DebugPanel>
            );
        }

        return (
            <html>
                <head>
                    <title>Hello</title>
                    <script src="/static/main.js"></script>
                </head>
                <body>
                    <Hello message={ this.props.message }/>
                    <button onClick={ this.onClick.bind(this) }>
                        Click to change message</button>

                    { debugPanel }
                </body>
            </html>
        );
    }

    onClick() {
        const dispatch = this.props.dispatch;
        const msg = (this.props.message == 'Hello world!')?
            'Goodbye world' : 'Hello world!';

        dispatch(setMessage(msg));
    }

    static contextTypes = {
        store: React.PropTypes.object.isRequired
    }
}
