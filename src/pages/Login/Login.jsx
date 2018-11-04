import React, {Component} from 'react';
import {
    Button,
    Input,
    Alert
} from 'antd';
import './Login_css.less';
import {Link} from 'react-router-dom';
export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
            useName:"",
            usePin:"",
            isLogin:false
        }
    }

    render(){
        return (
            <div className="main_login">
                <div className="login_box">
                    <h2>登录</h2>
                    <div className="input_box">
                        <div className="input_item">
                            <Input addonBefore={<label>登录</label>} size="large" type="text"
                                   defaultValue=""
                                   placeholder="请输入帐号"

                            />
                        </div>
                        <div className="input_item">
                            <Input size="large" addonBefore={<label>密码</label>} type="password"
                                   defaultValue=""
                               placeholder="请输入密码"
                            />
                        </div>
                    </div>
                    <Button onClick={()=>this.loginClick()} className="btn_type" type="primary" block>登录</Button>
                    <div className={`warning_box ${this.state.isLogin?'warningUp':null}`}>
                        <Alert type="warning" message="你应该填写什么，才能登录哦。"/>
                    </div>
                </div>
            </div>
        )
    }
    loginClick(){
        this.setState({
            isLogin:true
        })
        // this.props.history.push('/index');

    }

}