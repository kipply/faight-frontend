import React, { Component } from 'react';
import Board from './Board';
import History from './History';
import MakeMatch from './MakeMatch';
import * as firebase from 'firebase';

class Game extends Component {
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
            game: {},
            bot1: {},
            bot2: {},
            history: [],
            board: state,
        };
    }

    addHistory(move) {
        let history = this.state.history.slice();
        history.push(move);
        console.log(history);
        this.setState({
            ...this.state,
            history: history
        });
        this.onAiMove(move);
    }

    setGame = (game) => {
        let gameref = firebase.database().ref("/games/" + game);
        gameref.on("value", snap => {
            if (snap.val() != null) {
                this.setState({
                    game: game,
                    bot1: snap.val().bot1,
                    bot2: snap.val().bot2,
                    history: [],
                });

                gameref.off("value");
                gameref.child("history").on("child_added", move => this.addHistory(move.val()));
            }
        });
    }

    onMove = (row, col, move) => {
        this.playMove(col, move);
    }

    onAiMove = (move) => {
        if (move.message.substring(0, 3) === "col") {
            this.playMove(move.message.substr(4), move.bot == 0 ? 'X' : 'O');
        } else if (move.message === "Winner") {
            alert("Winner");
        } else {
            console.log("WTF IS THIS", move);
        }
    }

    setTile(row, col, player) {
        let board = this.state.board.slice();
        board[row][col] = player;
        this.setState({ ...this.state, board: board });
    }
    
    playMove(col, player) {
        for (var i = 0; i < this.props.rows; i++) {
            const board = this.state.board;
            console.log(board[i][col]);
            if (board[i][col] !== ' ') {
                break;
            }
        }

        if (i - 1 < 0) return;
        this.setTile(i - 1, col, player);
    }

    render() {
        return (
            <div className="game">
                <Board rows={this.state.rows} columns={this.state.columns} board={this.state.board} />
                <MakeMatch setGame={this.setGame} />

                <History history={this.state.history} />

            </div>
        );
    }
}

export default Game;
