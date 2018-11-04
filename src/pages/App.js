import React, { Component } from 'react';
import {Switch,Router, Route, BrowserRouter} from "react-router-dom";
import Login from './Login/Login';
import HomePage from "./HomePage/HomePage";
import './App.css';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isLogin:false
    }
  }
  componentDidMount(){
      console.log(this.props);
  }
  render() {
    let {isLogin}=this.state;
    return (
      <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/index" component={HomePage}/>
      </Switch>
    )
  }
}