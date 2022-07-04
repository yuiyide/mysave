//引入数据库方法
const {db,db1} = require ('./db')
const test = {
    // gettest : async (data)=>{
    //     const sql = 'select content from mywork where text = ?';
    //     return await db(sql,[data])
    // },

    writetext : async (data)=>{
        const sql = `insert into content(username,item,id,text,content,titlecth1,titlecth2) values(?,?,?,?,?,?,?) `
        db(sql,[data.cooki,data.locationpath,data.id,data.text,data.content,data.titlecth1,data.titlecth2])
    },

    getcontent :async (data)=>{
        const sql = `select id,text,content,titlecth1,titlecth2 from content where item='${data.itemname}' and username='${data.cooki}'`;
        return await db(sql)
    },

    aside :async (data)=>{
        const sql = 'select item from aside where username=?';
        return await db(sql,[data.cooki])
    },

    asideitem :async (data)=>{
        const sql = `select item from asideitem where username = '${data.cooki}' AND aside = '${data.item}'`;
        
        return await db(sql)
    },

    addItem : async (data)=>{
        // const sql = `create table ${data.itemvalue}(id char(50),text longtext,content longtext,titlecth1 longtext,titlecth2 longtext) `
        const sql2 = `insert into asideitem(username,aside,item) values(?,?,?)`
        // db(sql)
        db(sql2,[data.cooki,data.sevalue,data.itemvalue])
        return 
    },

    delcontent : async (data)=>{
        const sql = `delete from content where id='${data.id}'`
        return db(sql)
    },

    delasideitem : async (data)=>{
        const sql = `delete from asideitem where item='${data.delitemvalue}' and username='${data.cooki}'`
        const sql2 = `delete from content where item='${data.delitemvalue}' and username='${data.cooki}'`
        db(sql)
        db(sql2)
    },

    Addaside : async(data)=>{
        const sql = `insert into aside(item,username) values(?,?)`
        // const sql2 = `create table ${data.Addasidevalue}(item char(50)) `
        db(sql,[data.Addasidevalue,data.cooki])
        // db(sql2)
    },

    Delaside : async(data)=>{
        const sql = `delete from aside where item='${data.Delasidevalue}'`
        const sql2 = `DELETE FROM content WHERE item IN (SELECT item FROM asideitem WHERE username='${data.cooki}' AND aside='${data.Delasidevalue}') `
        const sql3 = `delete from asideitem WHERE username='${data.cooki}' AND aside='${data.Delasidevalue}' `
        await db(sql)
        await db(sql2)
        db(sql3)
    },

    // Delasideitems : async(data)=>{
    //     const sql = `drop table ${data.asideitems}`
    //     db(sql)
    // },

    Updatecontent : async(data)=>{
        const sql = `UPDATE content SET text ='${data.text}',content ='${data.content}',titlecth1='${data.titlecth1}',titlecth2='${data.titlecth2}'  where id='${data.id}' `
        db(sql)
    },

    Loginc : async (data)=>{
        const sql = `select u,p from user where u=(?) and p=(?)`
        return db1(sql,[data.user,data.pass])
    },

    RegisterUser :async (data)=>{
        const sql = `select u from user where u='${data.username}'`
        return db1(sql)
    //    const re = db1(sql)
    //     if(re.length >0){
    //         return "yui"
    //     }else{
    //         return ""
    //     }

        //     const sql2 = `insert into user(u,p) values(?,?)`
        //     db1(sql2,[data.username,data.pass])
        //     return "yui"
        // }else{
        //     return ""
        // }

    },

    Registerend :async(data)=>{
        const sql2 = `insert into user(u,p) values(?,?)`
        db1(sql2,[data.username,data.pass])
    }

}



module.exports = test