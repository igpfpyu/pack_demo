import React, {Component} from 'react';
import {
    Layout,
    Icon
} from "antd";
const {Header}=Layout;
export default class BaseHeader extends Component{
    constructor(props){
        super(props);

    }
    render(){
        let {className, title}=this.props;
        return (
            <Header theme="light" className={className}>
                {this.props.children}
            </Header>
        )
    }
}