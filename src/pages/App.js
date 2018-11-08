import  React, {Component} from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import {
    Button,
    Layout,
    Menu,
    Icon,
} from 'antd';
const {Header, Content, Footer, Sider}=Layout
const {Item}=Menu;
import './App.css';
import PubIndex from "./PubIndex/PubIndex";
import AboutPage from "./AboutPage/AboutPage";
import {MenuLink, ContentRouter} from './MainRouters/MainBouter';
export default class App extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    componentDidMount(){
        // this.props.history.push('/login')
    }
    componentWillUnmount(){

    }
    render(){
        // let {url}=this.props.match;
        return (
            <Layout>
                <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
                    <div className="logo">logo</div>
                    <MenuLink />
                </Sider>
                <Layout style={{"marginLeft":200}}>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <ContentRouter />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}