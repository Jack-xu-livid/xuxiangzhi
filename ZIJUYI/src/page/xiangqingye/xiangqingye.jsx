import React from "react";
import * as  Ffetch from "../../Ffetch/Ffetch.js";
import BlueHD from "../../city/blueHD/blueHD";
import LBT from "../../GG/lunbo/lunbo";
import "./xiangqing.less";
import Tab from "../../GG/Tab/tab";
import PLitem from "./PLitem/PLitem";
import LoadMore from "../../GG/laodMore/laodMore";
import { connect } from "react-redux";
import * as useraction from "../../action/useraction.js";
import * as SCaction from "../../action/SCaction.js";
import { bindActionCreators } from "redux";
 class Xiangqing extends React.Component{
    constructor(){
        super();
        this.state={
            xiangqingdata:{},
            PLData:[],
            hasMore:false,
            shoucang:"收藏"
        }
    };
    componentDidMount(){
        console.log(this.props)
        console.log(this.props.match.params);
        Ffetch.Fget("/xiangqing",{id:this.props.match.params})
        .then(data=>{
            this.setState({
                xiangqingdata:data,
                
            },function(){
                //console.log(this.state)
            });
        });
         // 请求评论数据
         Ffetch.Fget('/pinglun',{page:1})
         .then(data=>{
             this.setState({
                 PLData:data.data,
             },function(){
                //console.log(this.state)
            })
         });
         // 页面进来就要判断是否收藏
         if(this.isSC()){
               this.setState({
                   shoucang:"收藏"
               })
          }else{
                  this.setState({
                    shoucang:"已收藏"
                })
          }

    };
    //收藏
    shoucang=()=>{
        console.log(this.props)
      if(this.props.username.user.length<=0){
         //回到首页
        this.props.history.push("/login"); 
        console.log("未登录")
      }else{
          if(this.isSC()){
            this.props.SCaction.addshoucang({id:this.props.match.params.id})
               this.setState({
                   shoucang:"已收藏"
               })
          }else{
                 this.props.SCaction.delshoucang({id:this.props.match.params.id})
                  this.setState({
                    shoucang:"收藏"
                })
          }
      }
    }

    isSC(){
       // console.log("已登录 可以收藏")
          let flag=true;//true 代表未藏过    flase 代表收藏过
          for(let i=0;i<this.props.SCarr.length;i++){
              if(this.props.SCarr[i].id===this.props.match.params.id){
                  console.log("收藏过");
                //   this.props.SCaction.delshoucang({id:this.props.match.params.id})
                //   this.setState({
                //     shoucang:"收藏"
                // })
                  flag=false;
                  break
              }
          }
          if(flag){
            console.log("未收藏")
            return flag
            //   this.props.SCaction.addshoucang({id:this.props.match.params.id})
            //    this.setState({
            //        shoucang:"已收藏"
            //    })
          }else{
              return flag=false
          }

    }
    //购买
    buy=()=>{

    }
        getMore=()=>{
        Ffetch.Fget('/pinglun',{page:1})
        .then(data=>{
            this.setState({
                PLData:this.state.PLData.concat(data.data),
                hasMore:data.hasMore
            },function(){
               console.log(this.state)
           })
        })
    };
    render(){
        let data = this.state.xiangqingdata;
        //console.log(data)
        return(
        <div>
            {data.imgs?
                (<div className="details">
              <BlueHD>
                  <h1>详情页</h1>
              </BlueHD>
             {data.imgs ?  <LBT banner={data.imgs} /> : <div>正在加载中，请稍等</div>}
             {/* tab切换 */}
             <Tab>
                <div className='tabPanel'>
                    <div className='tabTitle'>房屋信息</div>
                    <div className="detail-info">
                            <h3>{data.title}</h3>
                            <div className="box">
                                <ul>
                                    <li>
                                        <span>{data.price}/月</span>
                                        <p>租金</p>
                                    </li>
                                    <li>
                                        <span>{data.info.type}/月</span>
                                        <p>房型</p>
                                    </li>
                                    <li>
                                        <span>{data.houseType}</span>
                                        <p>面积</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="info">
                                <div className="info-list">
                                    <p>楼层：{data.info.level}</p>
                                    <p>装修：{data.info.style}</p>
                                </div>
                                <div className="info-list">
                                    <p>类型：{data.info.type}</p>
                                    <p>朝向：{data.info.orientation}</p>
                                </div>
                                <div className="info-list">
                                    <p>年代：{data.info.years}</p>
                                </div>
                            </div>
                            <div className="btn">
                                <button onClick={this.shoucang}>{this.state.shoucang}</button>
                                <button onClick={this.buy}>购买</button>
                            </div>
                        </div>      
                </div>
                <div className="tabPanel">
                    <div className='tabTitle'>房屋评价</div>
                    <div className="tabContent">
                      {this.state.PLData.length>=0?this.state.PLData.map((ele,index)=>{
                                    return <PLitem key={index} data={ele} />
                                }):<div>数据正在加载中请稍后</div>}
                      {this.state.PLData.length>0 ? <LoadMore getMore={this.getMore} />:'我是有底线的！！!'}
                    </div>
                </div>
             </Tab>
            </div>) : <div>数据正在加载中请稍等</div> }
        </div>
        )
    }
};

function mapStateToProps(state){
    return {
        username:state.Userducers,
        SCarr:state.Shouredecers.SCarr
    }
} 

function mapDispatchToProps(dispatch){
    return{
        useraction:bindActionCreators(useraction,dispatch),
        SCaction:bindActionCreators(SCaction,dispatch)
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(Xiangqing)