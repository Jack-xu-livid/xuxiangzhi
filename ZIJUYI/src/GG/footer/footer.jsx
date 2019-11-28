import React from "react";
import {NavLink} from "react-router-dom";


import "./footer.less";
export default class Footer extends React.Component{
    constructor(){
        super();

    };
    render(){
        return(
            <div className= "footer">
                <ul>
                    <li>
                       <NavLink exact to="/">
                       <i className="iconfont icon-home"></i>
                       首页   
                        </NavLink> 
                    </li>
                    <li>
                       <NavLink exact to="/shop">
                       <i className="iconfont icon-shop"></i>
                        商城   
                        </NavLink> 
                    </li>
                    <li>
                       <NavLink exact to="/service">
                       <i className="iconfont icon-trophy"></i>
                       服务  
                        </NavLink> 
                    </li>
                    <li>
                       <NavLink exact to="/my">
                       <i className="iconfont icon-team"></i>
                       我的  
                        </NavLink> 
                    </li>
                </ul>
            </div>
        )
    }
}