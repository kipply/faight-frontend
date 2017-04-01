import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import Splash from "./Splash";
import * as firebase from "firebase";

class App extends Component {

  constructor(props){
    super(props);
    firebase.initializeApp({
      apiKey: "AIzaSyDQxCekxGbm0t9LdTwjGUD7PGJEYQYZ4pI",
      authDomain: "faight-d08d7.firebaseapp.com",
      databaseURL: "https://faight-d08d7.firebaseio.com/",
          projectId: "faight-d08d7",
    storageBucket: "faight-d08d7.appspot.com",
    messagingSenderId: "753989936035"
    });
    this.state = {
      signedIn: firebase.auth().currentUser,
      session: null
    }

  }
  componentDidMount(){
    const ctx = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        ctx.setState({signedIn: true});
      } else {
        ctx.setState({signedIn: false});
      }
    });
  }
  load(key) {
    this.setState({ session: key });
  }
  exit() {
    this.setState({ session: null });
  }
  render() {
    let view = null;
    switch(this.state.signedIn){
      case false:
        view = <Login/>;
        console.log("Login")
        break;
      case true:
        view = <Splash/>; 
        console.log("Splash")
        break;
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>FAIght</h2>
        </div>
        {view}
      </div>
    );
  }
}

export default App;
