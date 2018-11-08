import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route,Switch, Redirect} from 'react-router-dom';
import App from './pages/App';
import Login from "./pages/Login/Login";
import './index.css';
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route path="/" component={App} />
            {/*<Route exact path='noMatch' component={NoPage}/>*/}
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
