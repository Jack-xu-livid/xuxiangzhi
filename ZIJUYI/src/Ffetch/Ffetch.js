//封装 fetch
let qs= require("querystring");
// get请求
export function Fget(url,data){
   let datastr = qs.stringify(data)
   let myFetch = fetch(url +'?'+datastr).then(res=>res.json())
   return myFetch;
}

// post请求
export function Fpost(url,data){
   let datastr = qs.stringify(data)
   let myFetch = fetch(url,{
       method:'post',
       headers:{
           'content-type':'application/x-www-form-urlencoded'
       },
       body:datastr
   })
   .then(res=>res.json())

   return myFetch;
}