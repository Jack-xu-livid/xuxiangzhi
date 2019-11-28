const express=require("express");
const api=require("./config.js");
const Hotchanpin=require("../src/mock/beijing/hotchanpin.js");
const Hottuijian=require("../src/mock/beijing/hottuijian.js");
const SHotchanpin=require("../src/mock/shanghai/hotchanpin")
const SHottuijian=require("../src/mock/shanghai/hottuijian.js")
const SearchData=require("../src/mock/searchData.js");
const Xiangqing=require("../src/mock/xiangqingData.js");
const Pinglun=require("../src/mock/PLData.js");
const Pingjia=require("../src/mock/pingjia.js")
const bodyParser = require('body-parser');
const app=express();
// 允许post请求接收参数
app.use(bodyParser.urlencoded({ extended: true }))

//get请求
app.get(api.HotTJ,function(req,res){
  if(req.query.cityname==="北京"){
    res.send(Hottuijian);
    console.log(req.query)//可得出传进来的城市
  }else{
    res.send(SHottuijian);
  }
  
})
  

app.get(api.Hotchanpin,function(req,res){
  if(req.query.cityname==="北京"){
    res.send(Hotchanpin);
  }else{
    res.send(SHotchanpin);
  }
   
})

app.get(api.xiangqing,function(req,res){
  res.send(Xiangqing);
})
app.get(api.pinglun,function(req,res){
  res.send(Pinglun);
})
app.get(api.pingjia,function(req,res){
  res.send(Pingjia);
})

//搜索功能post请求
app.post(api.search,function(req,res){
  let keyword = req.body.keyword;
  let page=req.body.page;
  console.log(keyword,page)
  res.send(SearchData)
})


app.listen("4000",function(){
    console.log("4000端口");
    
})