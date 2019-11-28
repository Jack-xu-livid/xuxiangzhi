import React from "react";
import "./tab.less";
export default class Tab extends React.Component{
    constructor(){
        super();
        this.state={
            num:0
        };
    };
    componentDidMount(){
        console.log(React.Children);
        React.Children.map(this.props.children,(ele,index)=>{
            console.log(ele)
        })
    };
    change(cs){
     this.setState({
         num:cs
     })
    }

    render(){
        return(
            <div>
               <div>
                    <ul  className='Tab_title_wrap'>
                        {React.Children.map(this.props.children,(ele,index)=>{
                            return <li onClick={this.change.bind(this,index)}  className={this.state.num===index ?"Tab_title bctive" :"Tab_title"}>
                                {ele.props.children[0].props.children}
                            </li>
                        })}
                    </ul>
                </div>
                <div className='tabContent'>
                    {React.Children.map(this.props.children,(ele,index)=>{
                            return <div key={index}className={this.state.num===index?"detail-info show":"detail-info hide"}>
                                    {ele.props.children[1].props.children}
                            </div>
                        })}
                </div>
            </div>
        )
    }
}