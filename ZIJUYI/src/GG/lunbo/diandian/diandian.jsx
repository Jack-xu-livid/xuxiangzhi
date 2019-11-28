import React from "react";
import "./diandian.less"
export default class Dian extends React.Component{
    constructor(){
        super();
    };
    render(){
       // console.log(this.props)
        return(
            <div className="dian-box">
                <ul>
                    {new Array(this.props.count).fill(1).map((ele,index)=>{
                      return <li className={this.props.cur === index ? 'selected' : ""} key={index}></li> 
                    })}
                </ul>
            </div>
        )
    }
}