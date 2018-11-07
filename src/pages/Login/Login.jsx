import React, {Component} from 'react';
import {
    Button,
    Input,
    Alert
} from 'antd';
import './Login_css.less';
import {isNull} from '../../platfroms/utils/GlobalUitls';
export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
            useName:"",
            usePin:"",
            isLogin:false,
            message:"请输入信息"
        };
        this.useNameRef=React.createRef();
        this.usePinRef=React.createRef();
    }

    render(){
        let {message}=this.state;
        return (
            <div className="main_login">
                <div className="login_box">
                    <h2>登录</h2>
                    <div className="input_box">
                        <div className="input_item">
                            <Input addonBefore={<label>登录</label>} size="large" type="text"
                                   defaultValue=""
                                   suffix="X"
                                   placeholder="请输入帐号"
                                   onKeyUp={ev=>this.setState({useName:ev.target.value})}
                                   onBlur={ev=>this.isUserInfo(ev.target.value, "useName")}
                                   ref={this.useNameRef}

                            />
                        </div>
                        <div className="input_item">
                            <Input size="large" addonBefore={<label>密码</label>} type="password"
                                   defaultValue=""
                                   onKeyUp={ev=>this.setState({usePin:ev.target.value})}
                                   onBlur={ev=>this.isUserInfo(ev.target.value, "usePin")}
                                   placeholder="请输入密码"
                                   ref={this.usePinRef}
                            />
                        </div>
                    </div>
                    <Button onClick={()=>this.loginClick()} className="btn_type" type="primary" block>登录</Button>
                    <div className={`warning_box ${this.state.isLogin?'warningUp':null}`}>
                        <Alert type="warning" message={message}/>
                    </div>
                </div>
            </div>
        )
    }
    isUserInfo(pass, any){
        if(isNull(pass)){
            this.setState({
                message:"请输入"+(any==="useName"?"用户名":"密码"),
                isLogin:true
            });
        }else{
            this.setState({
                isLogin:false
            });
        }
    }
    loginClick(){
        let {useName, usePin}=this.state;
        if(isNull(useName)){
            this.setState({
                message:"请输入用户名",
                isLogin:true
            });
            this.useNameRef.current.focus();
            return false;
        }else if(isNull(usePin)){
            this.setState({
                message:"请输入密码",
                isLogin:true
            });
            this.usePinRef.current.focus();
            return false;
        }
        console.log('aaaaaa');
        console.log(this.props.history);
        this.props.history.push('/home');
    }

}