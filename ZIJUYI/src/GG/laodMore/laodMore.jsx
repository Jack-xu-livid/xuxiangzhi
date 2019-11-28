import React from "react";
export default class LoadMore extends React.Component{
   constructor(){
       super();
       this.MOREdiv= React.createRef()
   };
   componentDidMount(){
    console.log(this.MOREdiv.current)
       //监听滚动事件 当 视口的高度+上滚动的高度>=<div>加载更多</div>这个元素距离视口的高度 就让加载更多的数据
       //元素距离页面顶部的距离为 this.MOREdiv.current.offsetTop
       //视口高度  document.documentElement.clientHeight
       //滚动高度  document.documentElement.scrollTop
       let that=this;
       let timer = null;
        window.onscroll=function(){
          if(document.documentElement.clientHeight + document.documentElement.scrollTop >=that.MOREdiv.current.offsetTop){
              // 先清理定时器
              window.clearTimeout(timer)
              timer = window.setTimeout(function(){
                  console.log('到底了')
                  that.props.getMore()
              },200)
          }
           
       }
   }
   componentWillUnmount(){
       //清理事件
       window.onscroll=null;
   }
   render(){
       return(
           <div ref={this.MOREdiv}>加载更多</div>
       )
   }  
}