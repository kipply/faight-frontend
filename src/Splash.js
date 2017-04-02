import React, { Component } from 'react';
import * as firebase from "firebase";
import Search from "./Search";
import ManageAI from "./ManageAI";
import Game from "./Game";
import Logout from "./Logout";
import './Components.css';
import './Splash.css';

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showManageAI: false, 
        }
    }
    showManageAI = () => {
        this.setState({
            showManageAI: true, 
        }); 
    }

    render() {
		return (
            <div className="body">
                <div className="Splash">
                    <a className="button" onClick={this.showManageAI}>
                        [Manage AIs] 
                    </a>
                    <Logout />
                    
                    {this.state.showManageAI ?
                        <ManageAI /> :
                        null
                    }
                </div>
                <Game rows="6" columns="7" />
            </div>
        );
	}
}

export default Splash;
