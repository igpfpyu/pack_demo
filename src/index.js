import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Login from "./pages/Login/Login";
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App}/>
            <Route path="/login" component={Login} />
            <Route path="/404" component={noPage} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
