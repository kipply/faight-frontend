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
			<div className="login">
				<h1>FAIght</h1>
				<h5>Pokemon Showdown but with Connect Four but with user submitted AI and it's also kind of like DMOJ<sup>TM</sup></h5>	
				<button type="submit" onClick={this.handleClick()} className="button"><Google /><span> LOGIN WITH GOOGLE</span></button>
			</div>
		)
	}
}
