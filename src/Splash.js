import React, { Component } from 'react';
import * as firebase from "firebase";
import Search from "./Search";
import ManageAI from "./ManageAI";
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
            showMangeAI: true, 

        }); 
    }

    render() {
		return (
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
        );
	}
}

export default Splash;
