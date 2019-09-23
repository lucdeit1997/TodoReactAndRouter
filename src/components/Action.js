import React, { Component } from 'react';

export class Action extends Component {
    render() {
        return (
            <div>
                { this.props.match.url }
            </div>
        );
    }
}

export default Action;
