import React from "react";
import BlueHD from "../../city/blueHD/blueHD";
import {connect} from "react-redux";
import "./shopCar.less";
import * as Fftch from "../../Ffetch/Ffetch";
import Iteam from "./iteam/iteam";

 class Shopcar extends React.Component{
    constructor(){
        super();
        this.state={
            pjdata :[]
        }
    };
    componentDidMount(){
        console.log(this.props)
        //请求评价数据
        Fftch.Fget("/pingjia")
        .then(data=>{
            console.log(data)
            this.setState({
                pjdata:data
            })
        })
    }
    render(){
        console.log(this.state.pjdata)
        return(
            <div className="shopcar">
               <BlueHD>
                   <h1>购物车</h1>
               </BlueHD>
               <div className="userinfo-container">
                    <p className="username">
                        <i className="icon-user"></i>&nbsp;
                        <span>欢迎回来,{this.props.username.user}</span>
                    </p>
                    <p className="didian">
                        <i className="icon-map-marker"></i>&nbsp;
                        <span>{this.props.cityname.city}</span>
                    </p>
                </div>
                <div className="commentList">
                    {this.state.pjdata.length>0 ? this.state.pjdata.map((ele,index)=>{
                    return <Iteam key={index} data={ele} /> 
                }): <div>数据正在加载中</div>}
                </div>
            </div>
        )
    }
};
function mapStateToProps(state){
    return {
        username:state.Userducers,
        cityname:state.cityreducers
    }
} ;
function mapDispatchToProps(dispatch){
    return{
        
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Shopcar)
