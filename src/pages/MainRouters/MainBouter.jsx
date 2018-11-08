import React, {Component} from 'react';
import {Icon, Menu} from "antd";
import {Link, Route, Switch} from "react-router-dom";
import PubIndex from "../PubIndex/PubIndex";
import AboutPage from "../AboutPage/AboutPage";
class MenuLink extends Component{
    render(){
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">
                        <Icon type="user" />
                        <span className="nav-text">nav 1</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/about">
                        <Icon type="user" />
                        <span className="nav-text">nav 2</span>
                    </Link>
                </Menu.Item>
            </Menu>
        )
    }
};

class ContentRouter extends Component{
    render(){
        return (
            <Switch>
                <Route exact path="/" component={PubIndex} />
                <Route path={`/about`} component={AboutPage} />
            </Switch>
        );
    }
};
export {MenuLink, ContentRouter}