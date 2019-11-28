import React from "react";
import "./blueHD.less";
export default class BlueHD extends React.Component{
    constructor(){
        super();
    };
    goback=()=>{
        // H5新特性中的history对象
        console.log(window.history)
        // window.history.back() 返回上一层页面
        window.history.back();
    }
    render(){
        return(
            <div className="header">
                <span className="icon" onClick={this.goback}>
                <i className="icon-chevron-left"></i>
                </span>
                {this.props.children}
            </div>
        )
    }
}