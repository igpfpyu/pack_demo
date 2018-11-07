import  React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {
    Button,
    Layout,
    Menu,
    Icon,
} from 'antd';
const {Header, Content, Footer, Sider}=Layout
const {Item}=Menu;
import './HomePage_css.less';
import MenuItem from './MenuItem/MenuItem';
import PubIndex from '../PubIndex/PubIndex';
import AboutPage from '../AboutPage/AboutPage';
export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }
    componentWillUnmount(){

    }
    render(){
       return (
           <Layout>
               <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
                   <div className="logo">logo</div>
                   <MenuItem />
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
       );
   }
}