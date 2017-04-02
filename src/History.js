import React, { Component } from 'react';

class History extends Component {
    render() {
        return (
            <div className="history">
                <ul>
                    {this.props.history.map((move, i) => <li key={i}>{move.bot + ": " + move.message}</li>)}
                </ul>
            </div>
        );
    }
}

export default History;
