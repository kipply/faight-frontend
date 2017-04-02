import React, {Component} from 'react';
import * as firebase from 'firebase';

class MakeMatch extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        const bot = {
            elo: 123123,
            lang: "lua",
            code: 'while true do print(1) end'
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
        }).then(res => res.text().then(res => this.props.setGame(JSON.parse(res).key)));
    }
    
    render() {
        return (
            <a type="submit" onClick={this.handleClick} className="button">[Make Match]</a>
        );
    }
}1

export default MakeMatch;
