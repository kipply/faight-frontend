import React, {Component} from 'react';
import * as firebase from 'firebase';

class MakeMatch extends Component {
    handleClick = () => {
        fetch('/api/match', {
            method: 'post',
            body: JSON.stringify({
                uid: firebase.auth().currentUser.uid,
            })
        }).then(res => res.text().then(res => console.log(res)));
    }
    
    render() {
        return (
            <button type="submit" onClick={this.handleClick} className="button">Make Match</button>
        );
    }
}

export default MakeMatch;
