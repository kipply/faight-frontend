
import React, { Component } from 'react';
import * as firebase from 'firebase';
import AceEditor from 'react-ace';
import brace from 'brace';
import Select from 'react-select';
import './Editor.css';
import 'react-select/dist/react-select.css';

import 'brace/mode/java';
import 'brace/theme/chrome';

export default class Documents extends Component {
	constructor(props){
		super(props);

		const uid = firebase.auth().currentUser.uid;
		let ctx = this;
		firebase.database().ref('/users/' + uid + '/ai/code').once('value').then(function(snapshot) {
			ctx.setState({ code: snapshot.val() });
			console.log(ctx.state.code);
		});	
		this.state = {	  	
			selectValue: null,
		}
	}

	state = {
		selectValue: "one"
		}; 
	
	onChange = (newValue) =>{

	   var updates = {};
	  updates["/code/"] = newValue;
		firebase.database().ref("users/"+firebase.auth().currentUser.uid + "/ai").update(updates)
	}; 
	
	logChange = (val) => {
	  this.setState({
	  	selectValue: val.value
	  });
	   var updates = {};
	  updates["/lang/"] = val.value;

	  firebase.database().ref("users/"+firebase.auth().currentUser.uid + "/ai").update(updates)
	}; 
	render() {

		const options = [
		  { value: 'python', label: 'Python 3' },
		  { value: 'javascript', label: 'JavaScript' },
		  { value: 'lua', label: 'Lua' },
		  { value: 'cpp', label: 'C++' }
		];
		
		const {load} = this.props;
		const {selectValue} = this.state;
		return (
			<div className="Editor">
				<AceEditor
				mode="java"
				theme="chrome"
				className="ace"
				onChange={this.onChange}
				value={this.state.code}
				height="500px"
				width="500px"
				/>
				<Select
				  name="form-field-name"
				  value={selectValue}
				  options={options}
				  onChange={this.logChange}
				/>

			</div>

		)
	}
}