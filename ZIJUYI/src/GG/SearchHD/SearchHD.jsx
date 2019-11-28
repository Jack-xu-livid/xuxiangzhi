import React from "react";
import BlueHD from "../../city/blueHD/blueHD";
import Searchinput from "../searchinput/searchinput";
import "./SearchHD.less";
export default class SeachHD extends React.Component{
    constructor(){
        super();
    };
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return(
            <BlueHD>
                <div className="s-container">
                    <i className="icon-search"></i>
                    {/* <input type="text" placeholder="请输入您要搜索的内容"/> */}
                    <Searchinput history={this.props.history} kw={this.props.kw}/>
                </div>
            </BlueHD>
        )
    }
}