/*
 * @Description: 
 * @Author: ljl
 * @Date: 2025-06-12 14:42:32
 * @LastEditors: rendc
 * @LastEditTime: 2025-06-12 16:08:09
 */

// 1. 引入express
const { response } = require('express');
const express = require('express');

//2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/',(request, response)=>{
    //设置响应
    response.send("HELLO EXPRESS");

});
app.all('/delay',(request, response)=>{
    //设置响应
    response.setHeader("Access-Control-Allow-Origin", "*");
    setTimeout(() => {
        response.send("延时");
    }, 3000)

});
//4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动， 8000端口监听中....");
})