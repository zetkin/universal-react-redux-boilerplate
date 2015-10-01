import { connect } from 'react-redux';
import React from 'react/addons';

import Hello from './Hello';
import { setMessage } from '../actions';


@connect(state => state)
export default class App extends React.Component {
    render() {
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
}
