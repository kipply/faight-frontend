
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
		  { value: 'cpp', label: 'C++' },
		  { value: 'bf', label: 'BrainF**k' }
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
				height="200px"
				width="95%"
				/>
				<Select
					className="selector" 
				  value={selectValue}
				  options={options}
				  onChange={this.logChange}
				/>	
				<span>
				You need to write an AI to play the connect-4 game. At the beginning of the game, you are presented with a board with 6 rows an d 7 columns. Your program needs to determine the 1-indexed column IDs based on a given board. 
<br/>
<br/>

At the very beginning of the game, you will read one integer: either 1 or 2. This indicates the player-id of your bot. 
<br/>
Then, for each round, you are given the current board placement, with 6 lines, and 7 characters each. The character will either be 0, 1, or 2. <br/>
0 - Empty Spot
1 - Player 1
2 - Player 2
<br/>
<br/>
In each round, your program needs to output one single integer in the range of 1 to 7, indicating the column ID that your AI would like to place the puck. 
<br/>
<br/>
You must not: <br/>
- Output an invalid column ID<br/>
- Place puck into a column that is already full, or<br/>
- Output anything else other than the one integer required.
<br/><br/>
Violation of any of the above-mentioned protocols will result in immediate termination of your AI.		
				</span>

			</div>

		)
	}
}