import React, {Component} from 'react';
import {
    Link,
    Route, Switch
} from 'react-router-dom';
import MenuLink from "./MenuLink/MenuLink";
import {Layout} from "antd";
import PubIndex from "../pages/PubIndex/PubIndex";
import AboutPage from "../pages/AboutPage/AboutPage";
let {Sider, Header, Content, Footer}=Layout;
export default class MainRouter extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Layout>
                <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
                    <div className="logo">logo</div>
                    <MenuLink />
                </Sider>
                <Layout style={{"marginLeft":200}}>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <Switch>
                            <Route exact path="/home" component={PubIndex} />
                            <Route exact path="/about" component={AboutPage} />
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}