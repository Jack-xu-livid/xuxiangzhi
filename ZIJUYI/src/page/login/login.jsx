import React from "react";
import "./login.less";
import { connect} from "react-redux"
import { bindActionCreators } from "redux";
import * as useraction from "../../action/useraction.js"
 class Login extends React.Component{
    constructor(){
        super();
        this.state={
            loginValue:''
        }
    };
    changeLoginHandler =(e) =>{
        this.setState({
            loginValue:e.target.value
        })
    }

    loginHandler =()=>{
        // 把用户名存储到redux中
        console.log(this.props)
        this.props.useraction.changeuser(this.state.loginValue)
        // 页面返回到上一级
        window.history.back();
    }
    render(){
        return(
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input
                        placeholder="请输入手机号"
                        value={this.state.loginValue}
                        onChange={this.changeLoginHandler}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码" />
                </div>
                <button className="btn-login" onClick={this.loginHandler}>登 录</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        
    }
}

function mapDispatchToProps(dispatch){
    return{
        useraction:bindActionCreators(useraction,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login )