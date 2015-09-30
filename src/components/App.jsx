import { connect } from 'react-redux';
import React from 'react/addons';

import Hello from './Hello';


@connect(state => state)
export default class App extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Hello</title>
                </head>
                <body>
                    <Hello message={ this.props.message }/>
                </body>
            </html>
        );
    }
}
