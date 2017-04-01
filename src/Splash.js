import React, { Component } from 'react';
import * as firebase from "firebase";
import Search from "./Search";
import ManageAI from "./ManageAI";

class Splash extends Component {
	constructor(props){
		super(props);
		this.state = {
			aiList: [],
			showComponent: false
		}
		const uid = firebase.auth().currentUser.uid;
		let ctx = this;
		firebase.database().ref('/users/' + uid).once('value').then(function(snapshot) {
			ctx.setState({ aiList: snapshot.val() });
		});
	}


	search() {
		this.setState({
		  showComponent: true,
		});
	}
	handleClick() {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider)
			.then()
			.catch(function(error) {
			console.log(error.code);
			console.log(error.message);
		});
	}

	render () {

		const {load} = this.props;
		return (
			<div className="container login">
				<h1>FAIght</h1>
				<h5>Pokemon Showdown but with Connect Four but with user submitted AI and it's also kind of like DMOJ<sup>TM</sup></h5>				
				<button type="submit" onClick={this.search()} className="button"><span>Start Game!</span></button>
				        {this.state.showComponent ?
				           <Search /> :
				           null
				        }
				// <button type="submit" onClick={this.manageAI()} className="button"><span>Manage AIs</span></button>				       {this.state.showComponent ?
				//            <Search /> :
				//            null
				//         }


			</div>
		)
	}
}

export default Splash;