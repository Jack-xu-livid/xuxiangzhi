import React from "react";
import "./item.less";
import {Link} from "react-router-dom";
export default class Item extends React.Component{
    constructor(){
        super();
    };
    
    render(){
        let data = this.props.data
        
        return(
            <div className="list-item">
                <Link to={`/xiangqing/${data.id}`}>
                <img src={data.img} alt="" />
                    <div className="mask">
                        <div className="left">
                            <p>{data.title}</p>
                            <p>{data.houseType}</p>
                        </div>
                        <div className="right">
                            <div className="btn">
                                {data.rentType}
                            </div>
                            {/* <p>{ data.price }</p> */}
                            {/* 
                            dangerouslySetInnerHTML：能识别标签结构
                        */}
                            <p dangerouslySetInnerHTML={{ __html: data.price +" <span>/月</span>" }}></p>
                        </div>
                    </div>
                </Link>
                
            </div>
        )
    }
} 