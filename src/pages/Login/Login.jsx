import React, {Component} from 'react';
import {
    Button,
    Input,
    Icon
} from 'antd';
import './Login_css.less';
import {Link,BrowserRouter} from 'react-router-dom';
import {} from 'react-router';
export default class Login extends Component{
    render(){
        return (
            <div className="login_box">
                <h2>登录</h2>
                <div className="input_box">
                    <div className="input_item">
                        <Input addonBefore={<label>登录</label>} size="large" type="text"
                               placeholder="请输入帐号"
                        />
                    </div>
                    <div className="input_item">
                        <Input size="large" addonBefore={<label>密码</label>} type="password"
                           placeholder="请输入密码"
                        />
                    </div>
                </div>
                <Button onClick={()=>this.loginClick()} className="btn_type" type="primary" block>登录</Button>
            </div>
        )
    }
    loginClick(){
        // console.log('aaaaaa');
        // console.log(this.props);
        // console.log(history.location);
        // console.log(location);
       // history.push('/HomePage');
       //  console.log(browsers);
        matchPart('/HomePage');
        // browsers.history.push('/HomePage')
    }

}