import React from "react";
import Star from "../../../GG/star/star";
import "./PLitem.less";
export default class PLitem extends React.Component{
    constructor(){
        super();
    };
    render(){
        
        let data=this.props.data;
        console.log(data)
        return(
            <div>
               <div className="comment-item">
                <p>
                    <i className="icon-user"></i>
                    &nbsp;
                    {data.username}
                </p>
                <Star star={data.star} />
                <p>{data.comment}</p>
            </div>
           </div>
        )
    }
}