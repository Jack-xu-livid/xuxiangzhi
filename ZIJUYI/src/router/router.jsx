import React from "react";
import {Route,Switch,HashRouter} from "react-router-dom";
import Home from "../page/home/home";
import Shop from "../page/shop/shop";
import Service from "../page/service/service";
import My from "../page/my/my";
import City from "../city/ctiy";
import Search from "../page/Search/Search";
import Xiangqing from "../page/xiangqingye/xiangqingye";
import Login from "../page/login/login";
import Shopcar from "../page/shopCar/shopCar";
export default class Myroute extends React.Component{
    constructor(){
        super();

    };
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/service" component={Service} />
                    <Route exact path="/my" component={My} />
                    <Route exact path="/city" component={City} />
                    {/* skeyword后的问号是用户在input中写不写东西只要按了回车都要跳转页面 */}
                    <Route exact path="/search/:skeyword?" component={Search} />
                    <Route exact path="/xiangqing/:id" component={Xiangqing} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/shopcar" component={Shopcar} />



                </Switch>
            </HashRouter>
        )
    }
}