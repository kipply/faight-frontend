import React, { Component } from 'react';
import * as firebase from 'firebase';
import './Components.css';

export default class Documents extends Component {
	constructor(){
		super();
		this.state = {
			documentsList: []
		}
		const uid = firebase.auth().currentUser.uid;
		let ctx = this;
		firebase.database().ref('/users/' + uid).once('value').then(function(snapshot) {
			ctx.setState({ AIs: snapshot.val() });
		});
	}

	render() {
		const {load} = this.props;
		return (
			<div className="manageAI">
				<div id="editor">
					STUFF	 
				</div>
				    
				<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js" type="text/javascript" charset="utf-8">
				</script>
				<script>
				    var editor = ace.edit("editor");
				    editor.setTheme("ace/theme/monokai");
				    editor.getSession().setMode("ace/mode/javascript");
				</script>
			</div>
		)
	}

}