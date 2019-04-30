import  React, {Component} from 'react';
import {
    Layout, Icon, Button
} from 'antd';
const {Content, Footer, Sider}=Layout;
const ButtonGroup=Button.Group;
import './App.less';
import {MenuLink, ContentRouter} from './MainRouters/MainBouter';
import BaseHeader from '../components/BaseHeader/BaseHeader';
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
        // this.setState({
        //     collapsed:!collapsed
        // });
        // console.log(type);
    }
    toggle(){
        this.setState({
            collapsed:!this.state.collapsed
        })
    }
    render(){
        let {collapsed}=this.state;
        return (
            <Layout>
                <Sider
                       breakpoint="xs"
                       collapsedWidth="0"
                       reverseArrow={false}
                       width="24vh"
                       collapsed={collapsed}
                       trigger={null}
                       collapsible
                       onBreakpoint={(broken) => { console.log(broken); }} //触发响应式布局断点时的回调
                       onCollapse={(collapsed, type) => this.collapse(collapsed, type) } //展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发
                >
                    <div className="leftNav">
                        <div className="logo">
                                <a href="javascript:;" title="logo">
                                    <img src={`${require('../images/logo.png')}`} />
                                </a>
                        </div>
                        <div className="left_nav_box"><MenuLink /></div>
                        <div className="user_info">
                            <ButtonGroup>
                                <Button size="small"><Icon type="user" /></Button>
                                <Button size="small"><Icon type="setting" /></Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </Sider>
                <Layout>
                    <BaseHeader className="header-height">
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={()=>this.toggle()}
                        />
                    </BaseHeader>
                    <Content style={{overflowY:"auto"}}>
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
//axios
