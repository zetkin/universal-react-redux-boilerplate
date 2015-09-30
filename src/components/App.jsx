import React from 'react/addons';

import Hello from './Hello';


export default class App extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Hello</title>
                </head>
                <body>
                    <Hello />
                </body>
            </html>
        );
    }
}
