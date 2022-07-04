
const express = require('express');
const test = require('./test');
// const { util } = require('vue/types/umd')
// const blog = require('./manage/blog')
// const crypto = require('crypto')
const app = express()
// const path = require('path')
// const util = require('./util')
// var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8'); //这里输入你的证书所在位置
// var certificate = fs.readFileSync('sslcert/server.crt', 'utf8'); //这里输入你的证书所在位置

// var credentials = {key: privateKey, cert: certificate};
// var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);
class rr {
    constructor(code, msg, data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
    static success(data) {
        return new rr(2000, "请求成功", data);
    }
    static error(msg) {
        msg = msg ? msg : "请求失败";
       return new rr(5000, msg, null); 
    }
    static nologin() {
        return new rr(5010, "用户未登录", null);
    }
}

// app.get('/test',async (res,resp)=>{
//     resp.setHeader('Access-Control-Allow-Origin','*');
//     const use = await test.gettest(res.query.data);
//     console.log("use"+use);
//     if(use.length > 0) {
//         // resp.send(rr.error("csacsa"))
//         // resp.send({code:2000,msg:"登录成功"})
//         resp.send(use)
//     } else {
//         resp.send(rr.success(null))
//     }
// })

app.get('/writetext', async (res,resp)=>{
    resp.setHeader('Access-Control-Allow-Origin','*');
    // console.log(res.query)
    // console.log("write"+res.query)
    const text = await test.writetext(res.query);
    // console.log(text)
})

app.get('/getcontent', async (res,resp)=>{
    resp.setHeader('Access-Control-Allow-Origin','*');
    // console.log(res.query)
    // console.log("res"+res.query.path)
    const text = await test.getcontent(res.query);
    // console.log(text)
    if(text.length>0){
        resp.send(text)
    }else{
        resp.send(null)
    }
})


app.get('/aside',async (res,resp)=>{
    resp.setHeader('Access-Control-Allow-Origin','*');
    const text = await test.aside(res.query);
    if(text.length>0){
        resp.send(text)
    }else{
        resp.send(null)
    }
})

app.get('/asideitem',async (res,resp)=>{
    resp.setHeader('Access-Control-Allow-Origin','*');
    const text = await test.asideitem(res.query);
    // console.log(text)
    if(text.length>0){
        resp.send(text)
    }else{
        resp.send(null)
    }
})


app.get('/additem', async (res,resp)=>{
    resp.setHeader('Access-Control-Allow-Origin','*');
    await test.addItem(res.query)
    // if(text.length>0){
    //     resp.send(text)
    // }else{
    //     resp.send(null)
    // }
})

app.get('/delcontent',async (res,resp)=>{
    resp.setHeader('Access-Control-Allow-Origin','*');
    await test.delcontent(res.query)
})

app.get('/delasideitem',async (res,resp)=>{
    resp.setHeader('Access-Control-Allow-Origin','*');
    await test.delasideitem(res.query)
})

app.get('/Addaside',async (res,resp)=>{
    resp.setHeader('Access-Control-Allow-Origin','*')
    await test.Addaside(res.query)
})

app.get('/Delaside',async (res,resp)=>{
    resp.setHeader('Access-Control-Allow-Origin','*')
    await test.Delaside(res.query)
    // console.log(res.query.delitem.length)
})

// app.get('/Delasideitems',async (res,resp)=>{
//     resp.setHeader('Access-Control-Allow-Origin','*')
//     await test.Delasideitems(res.query)
// })

app.get('/Updatecontent',async (res,resp)=>{
    resp.setHeader('Access-Control-Allow-Origin','*')
    await test.Updatecontent(res.query)

})

app.get('/Loginc',async (res,resp)=>{
    resp.setHeader('Access-Control-Allow-Origin','*')
    const log = await test.Loginc(res.query)
    // console.log("cc",log)
    if(log.length > 0){
        resp.send({code: 2000, msg: "登录成功", data: null})
    }else{
        // console.log(log)
        resp.send({code: 5000, msg: "用户名或密码错误", data: null})
    }
})

app.get('/RegisterUser',async (res,resp)=>{
    resp.setHeader('Access-Control-Allow-Origin','*')
    if(res.query.invite === 'yuiyide'){
        const reg = await test.RegisterUser(res.query)
        console.log(reg)
        if(reg.length >0){
            console.log("账号存在")
            resp.send({code: 5000, msg: "账号存在", data: null})
        }else{
            console.log("注册成功")
            await test.Registerend(res.query)
            resp.send({code: 2000, msg: "注册成功", data: null})
        }
    }else{
        console.log("邀请码错误")
        resp.send({code: 5000, msg: "邀请码错误", data: null})
    }
})

app.listen(3000,()=>{
    console.log("开启服务")
})

// httpServer.listen(8080);
// httpsServer.listen(8443);