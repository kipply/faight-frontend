import React, { Component } from 'react';
import BoardCell from './BoardCell';

class BoardRow extends Component {
    render() {
        return (
            <div className="game-row">
                {this.props.columns.map((col, id) => <BoardCell key={id} id={id} content={col} />)}
            </div>
        );
    }
}

export default BoardRow;
