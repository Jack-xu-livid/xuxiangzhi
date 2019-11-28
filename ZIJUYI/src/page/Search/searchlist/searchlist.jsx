import React from  "react";
import * as  Ffecth from "../../../Ffetch/Ffetch.js";
import Item from "../item/item.jsx";
import LoadMore from "../../../GG/laodMore/laodMore.jsx";

export default class SearchList extends React.Component{
    constructor(){
        super();
        this.state={
            searchdata:[],
            hasMore:false,
            page:1
        }
    };
    componentDidMount(){
      this.http(this.props.keyword.skeyword,this.state.page)
      console.log(this.props)
      
      this.props.changesearch(this.props.keyword.skeyword)
    };
    http(keyword,page){
        Ffecth.Fpost("/search",{keyword:keyword,page:page})
      .then(data=>{
        this.setState({
            searchdata:this.state.searchdata.concat(data.data),
            hasMore:data.hasMore
        },function(){
            console.log(this.state)
        });
    });
    };
    //加载更多数据
   async getMore(){
     await this.setState({
            page:this.state.page + 1
        });
        this.http(this.props.keyword.skeyword,this.state.page)   
    };
    //用户再次搜索新内容 在组件更新中获取新数据
   async componentDidUpdate(prevProps,prevState){
        // 判断当前的关键字和上一次的关键字是否相同，如果相同不处理。
        console.log(prevProps,this.props.keyword)
        if(prevProps.keyword.skeyword === this.props.keyword.skeyword){
            // console.log('相等')
            return;
        };
        await  this.setState({
            page:1,
            searchdata:[]
        });
        this.http(this.props.keyword.skeyword,this.state.page)
        
        this.props.changesearch(this.props.keyword.skeyword)
    };
    componentWillUnmount(){
        this.setState = (state, callback) => {
            return
        }
    };
    render(){
        return(
            <div>
                {this.state.searchdata.map((ele,index)=>{
                    return <Item key={index} data={ele} />
                })}
                <LoadMore getMore={this.getMore.bind(this)} />
            </div>
        )
    }
}