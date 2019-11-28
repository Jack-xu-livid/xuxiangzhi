import React from "react";
import SeachHD from "../../GG/SearchHD/SearchHD";
import SearchList from "./searchlist/searchlist";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as searchaction from "../../action/searchaction";
 class Search extends React.Component{
    constructor(){
        super();
    };
    componentDidMount(){
        console.log(this.props.match.params)
        console.log(this.props.kw.kw)
    };
    render(){
        return(
            <div>
               <SeachHD history={this.props.history} kw={this.props.kw.kw} />
                <SearchList keyword={this.props.match.params} changesearch={this.props.searchaction.changesearch} />
                
            </div>
                
        ) 
    }
}

// 读取
function mapStateToProps(state){
    return{
        kw:state.Searchreducer
    }
}

// 写入
function mapDispatchToProps(dispatch){
    return{
        searchaction:bindActionCreators(searchaction,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)