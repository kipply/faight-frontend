import React, { Component } from 'react';
import * as firebase from "firebase";
import Search from "./Search";
import ManageAI from "./ManageAI";

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false, 
        }
    }
    handleClick = () => {
        this.setState({
            showComponent: true, 

        }); 
    }

    render() {
		return (
            <div className="splash">
                <h1>FAIght</h1>
                <h5>Pokemon Showdown but with Connect Four but with user submitted AI and it's also kind of like DMOJ<sup>TM</sup></h5>		
                <button onClick={this.handleClick}>
                    Click me
                </button>
                {this.state.showComponent ?
                    <ManageAI /> :
                    null
                }
            </div>	
        );
	}
}

export default Splash;
