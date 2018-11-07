import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
    Icon,
    Menu
} from 'antd';
import './MenuLink_css.less';
export default class MenuItem extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    render(){
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/home">
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
}