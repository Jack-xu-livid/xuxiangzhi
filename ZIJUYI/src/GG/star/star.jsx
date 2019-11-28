import React from "react";
import "./star.less";
export default class Star extends React.Component{
    constructor(){
        super();
    };
    render(){
        return(
            <div className="star-container">
               {[1,2,3,4,5].map((ele,index)=>{
                   let glass=this.props.star > index ? "light":"";
                   return <i key={index} className={'icon-star '+glass}></i>
               })} 
            </div>
        )
    }
}