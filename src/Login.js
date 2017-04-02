import React, { Component } from 'react'
import * as firebase from "firebase";
import "./Components.css";
import "./Login.css";
import Google from "react-icons/lib/fa/google";

export default class Login extends Component {
	handleClick = () => {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider)
			.then()
			.catch(function(error) {
		});
	}

	render () {
		return (
			<div className="Login">
				<button type="submit" onClick={this.handleClick()} className="button"><Google /><span> LOGIN WITH GOOGLE</span></button>
			</div>
		)
	}
}
