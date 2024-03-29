//获取数据库信息并操作
import axios from "axios"
import Cookies from "js-cookie";
import request from './request'
// import https from 'https'
// const result = await axios.post(
//     `//${url}//apilogin`,
//     body,
//     {
//       httpssAgent: new httpss.Agent({
//         rejectUnauthorized: false
//       })
//     }
//   )


export async function writetext(nano,title,titlect,titlecth1,titlecth2,locationpath){
    try{
        await request({
            method:'POST',
            url:'/api/writetext',
            params:{id:nano,text:title,content:titlect,titlecth1:titlecth1,titlecth2:titlecth2,locationpath:locationpath,cooki:`${Cookies.get('username')}`}
        })
        // await axios.get('http://localhost:3000/writetext',{params:{id:nano,text:title,content:titlect,titlecth1:titlecth1,titlecth2:titlecth2,locationpath:locationpath,cooki:`${Cookies.get('username')}`}});
    }catch(error){
        console.error(error)
    }
};
export async function GetContent(itemname) {
    // console.log("path"+path)
    try {
        const response = await request({
            method:'GET',
            url:'/api/getcontent',
            params:{itemname:`${itemname}`,cooki:`${Cookies.get('username')}`}
        })
        // const response = await axios.get('http://localhost:3000/getcontent',{params:{itemname:`${itemname}`,cooki:`${Cookies.get('username')}`}});
        // const buffer =new Buffer(JSON.parse(response.data[0].content.data)).toString()
        return response.data
        // if(response.data !== ""){
        // const data = response.data
        //     data.forEach(item => {
        //         getcontent(item.id,item.text,item.content,item.titlecth1,item.titlecth2)
        //         // console.log(item.text,item.content,item.titlecth1,item.titlecth2)
        //     });
        // }else{
        //     alert("这里是空的")
        // }
    } catch (error) {
        console.error(error);
    }
};
export async function GetAside(){
    try{
        const response =  await request({
            method:'GET',
            url:'/api/aside',
            params:{cooki:`${Cookies.get('username')}`}
        })
        // const response = await axios.get('http://localhost:3000/aside',{params:{cooki:`${Cookies.get('username')}`}});
        const data = response.data
        // console.log("data"+data)
            //返回Aside数组
        return data
    }catch(error){
        console.error(error)
    }
}

export async function GetItem(item){
    const response = await request({
        method:'GET',
        url:'/api/asideitem',
        params:{item:`${item.item}`,cooki:`${Cookies.get('username')}`}
    })
        // addAside(AsideBox,AsideBoxItem,item.item)
        // console.log(item)
        // const response = await axios.get('http://localhost:3000/asideitem',{params:{item:`${item.item}`,cooki:`${Cookies.get('username')}`}});
        // console.log("resp"+response.data)
        // console.log(response.item+"respo")

        //返回子类数组
       return response
        // console.log(item)
    
}

export async function addItemto(itemvalue,sevalue){
    try{
        await request({
            method:'POST',
            url:'/api/additem',
            params:{itemvalue:`${itemvalue}`,sevalue:`${sevalue}`,cooki:`${Cookies.get('username')}`}
        })
        // const response = await axios.get('http://localhost:3000/additem',{params:{itemvalue:`${itemvalue}`,sevalue:`${sevalue}`,cooki:`${Cookies.get('username')}`}})
        // console.log('res'+response)
    }catch(error){
        console.error(error)
    }
}

//删除item下的内容
export async function delcontent(nano){
    try{
        await request({
            method:'POST',
            url:'/api/delcontent',
            params:{id:`${nano}`}
        })
        // const response = await axios.get('http://localhost:3000/delcontent',{params:{id:`${nano}`}})
    }catch(error){
        console.error(error)
    }
}

export async function DelAsideitem(delitemvalue,sevalue){
    try{
        await request({
            method:'POST',
            url:'/api/delasideitem',
            params:{sevalue:`${sevalue}`,delitemvalue:`${delitemvalue}`,cooki:`${Cookies.get('username')}`}
        })
        // const response = await axios.get('http://localhost:3000/delasideitem',{params:{sevalue:`${sevalue}`,delitemvalue:`${delitemvalue}`,cooki:`${Cookies.get('username')}`}})
    }catch(error){
        console.error(error)
    }
}

export async function Addaside(Addasidevalue){
    try{
        await request({
            method:'POST',
            url:'/api/Addaside',
            params:{Addasidevalue:`${Addasidevalue}`,cooki:`${Cookies.get('username')}`}
        })
        // const response = await axios.get('http://localhost:3000/Addaside',{params:{Addasidevalue:`${Addasidevalue}`,cooki:`${Cookies.get('username')}`}})
    }catch(error){
        console.error(error)
    }
}

export async function Delaside(Delasidevalue){
    try{
        await request({
            method:'POST',
            url:'/api/Delaside',
            params:{Delasidevalue:`${Delasidevalue}`,cooki:`${Cookies.get('username')}`}
        })
        // const response = await axios.get('http://localhost:3000/Delaside',{params:{Delasidevalue:`${Delasidevalue}`,cooki:`${Cookies.get('username')}`}})
    }catch(error){
        console.error(error)
    }
}

// export async function Delasideitems(asideitems){
//     try{
//         const response = await axios.get('http://localhost:3000/Delasideitems',{params:{asideitems:`${asideitems}`,cooki:`${Cookies.get('username')}`}})
//     }catch(error){
//         console.error(error)
//     } 
// }

export async function Updatecontent(nano,title,titlect,titlecth1,titlecth2,locationpath){
    try{
        await request({
            method:'POST',
            url:'/api/Updatecontent',
            params:{id:nano,text:title,content:titlect,titlecth1:titlecth1,titlecth2:titlecth2,locationpath:locationpath}
        })
        // const response = await axios.get('http://localhost:3000/Updatecontent',{params:{id:nano,text:title,content:titlect,titlecth1:titlecth1,titlecth2:titlecth2,locationpath:locationpath}});
    }catch(error){
        console.error(error)
    }
}

export async function Loginc(user,pass){
    try{
        const response = await request({
            method:'GET',
            url:'/api/Loginc',
            params:{user:`${user}`,pass:`${pass}`}
        })
        // const response = await axios.get('http://localhost:3000/Loginc',{params:{user:`${user}`,pass:`${pass}`}})
        // console.log("cc"+response.data.code)
        return response
    }catch(error){
        console.error(error)
    } 
}
// export async function Loginc(user,pass){
//     try{
//         const response = await axios.get('https://api.github.com/search/users',{params:{q:`${user}`}})
//         console.log("cc",response.data)
//         return response
//     }catch(error){
//         console.error(error)
//     } 
// }

export async function RegisterUser(username,pass,invite){
    try{
        const response = await request({
            method:'GET',
            url:'/api/RegisterUser',
            params:{username:`${username}`,pass:`${pass}`,invite:`${invite}`}
        })
        // const response = await axios.get('http://localhost:3000/RegisterUser',{params:{username:`${username}`,pass:`${pass}`,invite:`${invite}`}})
        console.log(response)
        return response
    }catch(error){
        console.error(error)
    } 
}

