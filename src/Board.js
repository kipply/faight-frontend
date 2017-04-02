import React, { Component } from 'react';
import BoardRow from './BoardRow';
import MakeMatch from './MakeMatch';
import './Board.css';

class Board extends Component {
    render() {
        return (
            <div className="game-board">
                {
                    this.props.board.map((row, id) =>
                    <BoardRow key={id} id={id} columns={this.props.board[id]} />)
                }
            </div>
        );
    }
}

export default Board;

