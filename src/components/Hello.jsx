import React from 'react/addons';


export default class Hello extends React.Component {
    render() {
        return (
            <h1>{ this.props.message }</h1>
        );
    }
}
