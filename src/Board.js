import React, { Component } from 'react';
import BoardRow from './BoardRow';

class Board extends Component {
    constructor(props) {
        super(props);

        let state = [];
        for (var i = 0; i < this.props.rows; i++) {
            let row = [];
            for (var j = 0; j < this.props.columns; j++) {
                row.push('X');
            }
            state.push(row);
        }
        this.state = {
            board: state
        };
    }

    onMove = (row, col, move) => {
        let board = this.state.board.slice();
        console.log(row + ", " + col);
        board[row][col] = move;
        this.setState({ board: board });
    }

    render() {
        return (
            <div className="game-board">
                {
                    this.state.board.map((row, id) =>
                    <BoardRow key={id} id={id} columns={this.state.board[id]} onMove={this.onMove} />)
                }
            </div>
        );
    }
}

export default Board;
