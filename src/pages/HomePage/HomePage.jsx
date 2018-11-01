import  React, {Component} from 'react';
import {
    Button,
    Layout,
    Menu,
    Icon
} from 'antd';
const {Header, Content, Footer, Sider}=Layout
const {Item}=Menu;
import './HomePage_css.less';
export default class HomePage extends Component {
   render(){
       return (
           <Layout>
               <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
                   <div className="logo"></div>
                   <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                       <Item key="1">
                           <Icon type="user" />
                           <span className="nav-text">nav 1</span>
                       </Item>
                       <Item key="2">
                           <Icon type="user" />
                           <span className="nav-text">nav 2</span>
                       </Item>
                       <Item key="3">
                           <Icon type="user" />
                           <span className="nav-text">nav 3</span>
                       </Item>
                       <Item key="4">
                           <Icon type="user" />
                           <span className="nav-text">nav 4</span>
                       </Item>
                       <Item key="5">
                           <Icon type="user" />
                           <span className="nav-text">nav 5</span>
                       </Item>
                   </Menu>
               </Sider>
               <Layout style={{"marginLeft":200}}>
                   <Header style={{ background: '#fff', padding: 0 }} />
                   <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                       <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                           <img src="../../images/photo01.jpg" alt="abc" height={200} />
                           ...
                           <br />
                           Really
                           <br />...<br />...<br />...<br />
                           long
                           <br />...<br />...<br />...<br />...<br />...<br />...
                           <br />...<br />...<br />...<br />...<br />...<br />...
                           <br />...<br />...<br />...<br />...<br />...<br />...
                           <br />...<br />...<br />...<br />...<br />...<br />...
                           <br />...<br />...<br />...<br />...<br />...<br />...
                           <br />...<br />...<br />...<br />...<br />...<br />...
                           <br />...<br />...<br />...<br />...<br />...<br />
                           content
                       </div>
                   </Content>
                   <Footer style={{ textAlign: 'center' }}>
                       Ant Design ©2018 Created by Ant UED
                   </Footer>
               </Layout>
           </Layout>
       );
   }
}