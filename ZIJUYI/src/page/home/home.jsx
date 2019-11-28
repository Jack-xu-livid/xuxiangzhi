import React from "react";
import Footer from "../../GG/footer/footer";
import LBT from "../../GG/lunbo/lunbo";
import "./home.less"
import List from "../../GG/list/list";
import * as Ffetch from "../../Ffetch/Ffetch.js";
import { connect} from "react-redux"
import Searchinput from "../../GG/searchinput/searchinput";
//引入图片
import pic1 from "../../static/images/banner1.png"
import pic2 from "../../static/images/banner2.png"
import pic3 from "../../static/images/banner3.png"
 class Home extends React.Component{
    constructor(){
        super();
        this.state={
            hot1:[],
            hot2:[]
        }
    };
    //跳转city页面
    gocity=()=>{
        this.props.history.push("/city");
    }
    componentDidMount(){
        console.log(this.props)
        Ffetch.Fget("/hotTJ",{cityname:this.props.cityname.city})
        .then(data=>{
            console.log(data)
            this.setState({
                hot1:data.hot1
            })
        });
        Ffetch.Fget("/hotchanpin",{cityname:this.props.cityname.city})
        .then(data=>{
            console.log(data)
            this.setState({
                hot2:data.hot2
            })
        });
    };
    Shopcar(){
        if(this.props.username.user.length<=0){
            this.props.history.push("/login");
        }else{
            this.props.history.push("/shopcar");
        }
         
    }
    render(){
        return(
            <div>
              <div className="header">
                 <div className="site" onClick={this.gocity}>
                   <span>{this.props.cityname.city}</span>
                   <i className="icon-angle-down"></i>    
                 </div> 
                 <div className="search">
                     <div className="search-container">
                        <i className="icon-search"></i>
                        {/* <input type="text" placeholder="请输入您要搜索的内容"/> */}
                        <Searchinput history={this.props.history} />
                     </div>
                 </div> 
                 <div className="car" onClick={this.Shopcar.bind(this)}>
                     <i className="iconfont icon-car"></i>
                 </div> 
              </div>  
              <LBT banner={[pic1,pic2,pic3]} />
              <List title="热门推荐" data={this.state.hot1} />
              <List title="热门产品" data={this.state.hot2} />
             <Footer />
            </div>
        )
    }
};
function mapStateToProps(state){
    return {
        cityname:state.cityreducers,
        username:state.Userducers,
    }
}

export default connect(mapStateToProps)(Home) 