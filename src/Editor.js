
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

		this.state = {	  	
			optionValue: null,
		}
	}

	state = {
		selectValue: "one"
		starCountRef = firebase.database().ref("users/"+firebase.auth().currentUser.uid + "/ai/");
		starCountRef.on('value', function(snapshot) {
		  updateStarCount(postElement, snapshot.val());
});
	};
  	console.log(this.oldCode);
	onChange = (newValue) =>{
		firebase.database().ref("users/"+firebase.auth().currentUser.uid + "/ai").set({
			code: newValue,
		})
	}
	
	logChange = (val) => {
	  console.log("Selected: " + val.value);
	  this.setState({
	  	selectValue: val.value
	  });
	}
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
				value={oldCode}
				theme="chrome"
				className="ace"
				onChange={this.onChange}
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
