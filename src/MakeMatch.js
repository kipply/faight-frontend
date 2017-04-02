import React, {Component} from 'react';
import * as firebase from 'firebase';

class MakeMatch extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        const uid = firebase.auth().currentUser.uid;
        console.log(uid);
        firebase.database().ref("/users/" + uid + "/ai").once("value")
        .then(ai => {
            return new Promise((resolve, reject) => resolve(ai.val()));
        }).then(ai => {
            fetch('/api/match', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    uid: firebase.auth().currentUser.uid,
                    ai: ai,
                })
            }).then(res => res.text().then(res => this.props.setGame(JSON.parse(res).key)));
        });
    }
    
    render() {
        return (
            <a type="submit" onClick={this.handleClick} className="button">[Make Match]</a>
        );
    }
}1

export default MakeMatch;
