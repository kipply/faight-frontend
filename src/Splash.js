import React, { Component } from 'react';
import * as firebase from "firebase";
import Search from "./Search";
import ManageAI from "./ManageAI";
import Game from "./Game";
import Charts from "./Charts";
import Logout from "./Logout";
import './Components.css';
import './Splash.css';

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showManageAI: false, 
            showGame: false, 
            showCharts: true
        }
    }

    showManageAI = () => {
        this.setState({
            showGame: false, 
            showCharts: false,
            showManageAI: true, 
        }); 
    }
    showGame = () => {
        this.setState({
            showManageAI: false,
            showCharts: false,
            showGame: true, 
        }); 
    }
    returnSplash = () => {
        this.setState({
            showManageAI: false,
            showCharts: true,
            showGame: false, 
        }); 
    }

    render() {
		return (
            <div className="body">
                <div className="Splash">
                    <a className="button" onClick={this.returnSplash}>
                        [Home] 
                    </a>
                    <a className="button" onClick={this.showManageAI}>
                        [Manage AIs] 
                    </a>

                    <a className="button" onClick={this.showGame}>
                        [Play!] 
                    </a>
                    <Logout />
                       
                    {this.state.showCharts ?
                        <Charts /> :
                        null
                    }          
                    {this.state.showManageAI ?
                        <ManageAI /> :
                        null
                    }
                    {this.state.showGame ?
                        <Game rows="6" columns="7" /> :
                        null
                    }
                </div>
            </div>
        );
	}
}

export default Splash;
