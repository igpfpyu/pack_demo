import React, { Component } from 'react';
import './App.css';
import {Router, Route} from 'react-router';
import Login from './Login/Login';
import HomePage from './HomePage/HomePage';
// const isLogin=false;
class App extends Component {
  render() {
    return (
        <Login/>
    )
  }
}

export default App;
