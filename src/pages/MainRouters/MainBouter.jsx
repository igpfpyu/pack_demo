import React, {Component} from 'react';
import {Icon, Menu} from "antd";
import {Link, Route, Switch} from "react-router-dom";
import PubIndex from "../PubIndex/PubIndex";
import AboutPage from "../AboutPage/AboutPage";
const  SubMenu=Menu.SubMenu;
class MenuLink extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['6']}>
                <SubMenu key="sub1" title={<span><Icon type="home" /><span>员工管理</span></span>}>
                    <Menu.Item key="1">
                        <Link to="/">
                            <span className="nav-text">基本信息</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="schedule" /><span>周报管理</span></span>}>
                    <Menu.Item key="2">
                        <Link to="/about">
                            <span className="nav-text">我的周报</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="hourglass" /><span>考勤管理</span></span>}>
                    <Menu.Item key="3">
                        <Link to="/">
                            <span className="nav-text">我的假期</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/">
                            <span className="nav-text">我的加班</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to="/">
                            <span className="nav-text">原始考勤</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to="/">
                            <span className="nav-text">考勤汇总</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <Link to="/">
                            <span className="nav-text">考勤明细</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="project" /><span>项目管理</span></span>}>
                    <Menu.Item key="8">
                        <Link to="/">
                            <span className="nav-text">项目管理</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" title={<span><Icon type="dollar" /><span>财务管理</span></span>}>
                    <Menu.Item key="9">
                        <Link to="/">
                            <span className="nav-text">我的报销</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="10">
                        <Link to="/">
                            <span className="nav-text">付款申请</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub6" title={<span><Icon type="wallet" /><span>会议管理</span></span>}>
                    <Menu.Item key="11">
                        <Link to="/">
                            <span className="nav-text">会议记要</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}

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
