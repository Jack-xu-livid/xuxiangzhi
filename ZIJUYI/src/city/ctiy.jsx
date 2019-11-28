import React from "react";
import "./city.less";
import BlueHD from "./blueHD/blueHD";
import Hotcity from "./hotcity/hotcity";
import {connect} from "react-redux"


 class City extends React.Component{
    constructor(){
        super();
    };
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return(
            <div>
                <BlueHD>
                 <h1>城市选择</h1>
                </BlueHD>
                <div className="nowcity">
                    <h2>当前城市: {this.props.cityname.city}</h2>
                </div>
                <Hotcity history={this.props.history} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        cityname:state.cityreducers
    }
} 
export default connect(mapStateToProps)(City)