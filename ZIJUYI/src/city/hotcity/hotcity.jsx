import React from "react";
import "./hotcity.less";
import { connect} from "react-redux";
import { bindActionCreators}  from "redux";
import * as cityaction from "../../action/cityaction.js";
 class Hotcity extends React.Component{
    constructor(){
        super();
    };
    componentDidMount(){
        console.log(this.props)
    }
    changecity(cityname){
        console.log(cityname);
        //把数据传进redux 
        this.props.cityaction.changecity(cityname);
        //回到首页
        this.props.history.push("./");
        
    }
    render(){
        return(
            <div className="hotcity">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    <li><span onClick={this.changecity.bind(this,"北京")} >北京</span></li>
                    <li><span onClick={this.changecity.bind(this,"上海")}>上海</span></li>
                    <li><span onClick={this.changecity.bind(this,"南京")}>南京</span></li>
                    <li><span onClick={this.changecity.bind(this,"广州")}>广州</span></li>
                    <li><span onClick={this.changecity.bind(this,"昆明")}>昆明</span></li>
                    <li><span onClick={this.changecity.bind(this,"海口")}>海口</span></li>
                    <li><span onClick={this.changecity.bind(this,"陵水")}>陵水</span></li>
                </ul>
            </div>
        )
    }
};

function mapStateToProps(state){
    return {
        cityname:state.cityreducers
    }
} 

function mapDispatchToProps(dispatch){
    return{
        cityaction:bindActionCreators(cityaction,dispatch)
    }
}
export default connect (
   mapStateToProps,mapDispatchToProps
)(Hotcity)