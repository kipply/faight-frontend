import React, { Component } from 'react';
import * as firebase from 'firebase';
import './ManageAI.css';
import './Components.css';
import Editor from "./Editor";

export default class Documents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ais: [],
			showEditor: false
		}
		const uid = firebase.auth().currentUser.uid;
		let ctx = this;
		firebase.database().ref('/users/' + uid).once('value').then(function(snapshot) {
			ctx.setState({ ais: snapshot.val() });
		});	
	}
  
	newAI = () => {
		this.setState({
            showEditor: true, 
        }); 
	}
	render() {
		const {load} = this.props;
		return (
			<div className="ManageAI">
				<h2>Your AI</h2>
				<a className="button" onClick={this.newAI}>
				Edit</a>

                {this.state.showEditor ?
                    <Editor/> :
                    null
                }
			</div>
		)
	}
}
