import React, {Component} from 'react';
import * as firebase from 'firebase';

class MakeMatch extends Component {
    handleClick = () => {
        fetch('/api/match', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uid: firebase.auth().currentUser.uid,
                ai: {
                    elo: 123123,
                    lang: "lua",
                    code: 'while true do print(1) end'
                }
            })
        }).then(res => res.text().then(res => console.log(res)));
    }
    
    render() {
        return (
            <a type="submit" onClick={this.handleClick} className="button">[Make Match]</a>
        );
    }
}

export default MakeMatch;
