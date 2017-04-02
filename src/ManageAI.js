import React, { Component } from 'react';
import * as firebase from 'firebase';
import './ManageAI.css';
import './Components.css';

export default class Documents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ais: []
		}
		const uid = firebase.auth().currentUser.uid;
		let ctx = this;
		firebase.database().ref('/users/' + uid).once('value').then(function(snapshot) {
			ctx.setState({ ais: snapshot.val() });
		});
    }

	newAI() {
  		firebase.database().ref("/users/" + firebase.auth().currentUser.uid + "/ai").push().set({
  			    username: "NTHTH"
  		});
	}
	render() {
		const {load} = this.props;
		return (
			<div className="manage">
				<h2> Select an AI</h2>
				{
					Object.keys(this.state.ais).map(function(key, index) {
						return <div key={key} onClick={() => load(key)} className="manageAI" ><span className="boop">Document {index + 1}</span></div>
					})
				}
				<a className="button" onClick={this.newAI}>
>New</a>

			</div>
		)
	}

}
