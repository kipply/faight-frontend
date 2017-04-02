import React, { Component } from 'react';
import BoardRow from './BoardRow';

class Board extends Component {
    constructor(props) {
        super(props);

        let state = [];
        for (var i = 0; i < this.props.rows; i++) {
            let row = [];
            for (var j = 0; j < this.props.columns; j++) {
                row.push(' ');
            }
            state.push(row);
        }
        this.state = {
            board: state
        };
    }

    onMove = (row, col, move) => {
        this.playMove(col, move);
    }

    setTile(row, col, player) {
        let board = this.state.board.slice();
        board[row][col] = player;
        this.setState({ board: board });
    }
    
    playMove(col, player) {
        for (var i = 0; i < this.props.rows; i++) {
            const board = this.state.board;
            if (board[i][col] !== ' ') {
                break;
            }
        }

        this.setTile(i - 1, col, player);
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

