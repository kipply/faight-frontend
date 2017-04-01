import React, { Component } from 'react';
import BoardCell from './BoardCell';

class BoardRow extends Component {
    onMove = (id, move) => {
        this.props.onMove(this.props.id, id, move);
    }

    render() {
        return (
            <div className="game-row">
                {this.props.columns.map((col, id) => <BoardCell key={id} id={id} content={col} onMove={this.onMove} />)}
            </div>
        );
    }
}

export default BoardRow;
