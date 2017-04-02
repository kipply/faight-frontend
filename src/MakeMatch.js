import React, {Component} from 'react';
import * as firebase from 'firebase';

class MakeMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {},
            bot1: {},
            bot2: {},
            history: [],
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
        this.props.onMove(move);
    }

    setGame(game) {
        let gameref = firebase.database().ref("/games/" + game);
        gameref.on("value", snap => {
            if (snap.val() != null) {
                console.log(snap.val());
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

    handleClick = () => {
        const bot = {
            elo: 123123,
            lang: "lua",
            code: 'while true do print(2) end'
        };
        fetch('/api/match', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uid: firebase.auth().currentUser.uid,
                ai: bot,
            })
        }).then(res => res.text().then(res => this.setGame(JSON.parse(res).key)));
    }
    
    render() {
        return (
            <a type="submit" onClick={this.handleClick} className="button">[Make Match]</a>
        );
    }
}1

export default MakeMatch;
