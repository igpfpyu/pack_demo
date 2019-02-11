import  React, {Component} from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import {
    Button,
    Layout,
    Menu,
    Icon,
    Row,
    Col
} from 'antd';
const {Header, Content, Footer, Sider}=Layout
const {Item}=Menu;
import './App.less';
import {MenuLink, ContentRouter} from './MainRouters/MainBouter';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            collapsed:true

        }
    }
    componentDidMount(){
        // this.props.history.push('/login')
    }
    componentWillUnmount(){

    }
    collapse(collapsed, type){
        console.log(collapsed);
        this.setState({
            collapsed:!collapsed
        });
        console.log(type);
    }
    render(){
        let {url}=this.props.match;
        console.log(url);
        let {collapsed}=this.state;
        return (
            <Layout>
                <Sider
                       breakpoint="xs"
                       collapsedWidth="0"
                       reverseArrow={true}
                       width="24vh"
                       collapsible={collapsed}
                       onBreakpoint={(broken) => { console.log(broken); }} //触发响应式布局断点时的回调
                       onCollapse={(collapsed, type) => this.collapse(collapsed, type) } //展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发
                >
                    <div className="logo">
                        <a href="javascript:;" title="logo">
                            <img src={`${require('../images/logo.png')}`} />
                        </a>
                    </div>
                    <MenuLink />
                </Sider>
                <Layout>
                    {/*<Header theme="light" className="header-height">*/}
                        {/*<Row >*/}
                            {/*<Col span={18}>*/}
                                {/*<a>没有帐号！！！</a>*/}
                            {/*</Col>*/}
                            {/*<Col span={6}>*/}
                                {/*<p style={{textAlign:"right"}}><a href="javascript:;" title="登录">登录</a> </p>*/}
                            {/*</Col>*/}
                        {/*</Row>*/}
                    {/*</Header>*/}
                    <Content style={{ margin: '24px 16px 0', overflowY:"auto" }}>
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