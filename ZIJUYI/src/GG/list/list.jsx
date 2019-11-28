import React from "react";
import "./list.less"
export default class List extends React.Component{
   constructor(){
       super();
   };
//    componentDidMount(){
//        console.log(this.props.data)
//    }
   render(){
    //console.log(this.props.data)
       return(
        
           <div className="list-box">
               <h3>{this.props.title}</h3>
               <div className="list-conter">
                   <ul className="clear-fix">
                       { this.props.data.length<=0 ? <li>....加载中稍后哟</li> :this.props.data.map((ele,index)=>{
                         return( <li key={ele.id}>
                             <a href="https://reactjs.org/">
                                 <img src={ele.img} alt=""/>
                                 <span>{ele.title}</span>
                             </a>
                         </li> )
                       })}
                   </ul>
               </div>
           </div>
       )
   }
}