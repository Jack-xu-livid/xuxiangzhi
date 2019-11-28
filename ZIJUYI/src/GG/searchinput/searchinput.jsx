import React from "react";
import "./searchinput.less";
import {withRouter}  from "react-router"    
 class Searchinput extends React.Component{
    constructor(){
        super();
        this.state={
            searchvalue:""
        }
    };
    changevalue=(e)=>{
       this.setState({
           searchvalue:e.target.value
       })
    }
   async  componentDidUpdate(prevProps){
        console.log(prevProps)
        if(prevProps.kw === this.props.kw){
            // console.log('相等')
            return;
        }
        this.setState({
            searchvalue:this.props.kw
        })
    }
    gosearch=(e)=>{
      if(e.keyCode===13){
        this.props.history.push("/search/"+this.state.searchvalue);
      }
    }
    // componentDidUpdate(){
    //     console.log(this.props)
    // }
    // componentDidMount(){
    //     console.log(this.props)
    // }
    render(){
        return(
            
              <input type="text" placeholder="请输入您要搜索的内容" className="seachinput" value={this.state.searchvalue} onChange={this.changevalue}  onKeyUp={this.gosearch} />
            
             
            
        )
    }
};
export default withRouter(Searchinput)