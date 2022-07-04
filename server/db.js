const mysql = require('mysql')

const config ={
    database: 'mytest',
    user: 'root',
    password: ''
}
const config1={
    database: 'login',
    user: 'root',
    password: ''
}
// [], {}, [{}, id]
exports.db = (sql, sqlParams) => {
    sqlParams = sqlParams || []
    // sqlParams = sqlParams == null ? [] : sqlParams
    return new Promise((resolve, reject) => {
        const pool = mysql.createPool(config)
        pool.getConnection((err, conn) => {
            if (!err) {
                conn.query(sql, sqlParams, (e, results) => {
                    if (!e) {
                        // console.log(results)
                        resolve(results)
                        conn.destroy() 
                    } else {
                        console.log("sql:", e)
                        reject(e)
                    }
                })
            } else {
                console.log("conn err:", err)
                reject(err)
            }
           
        })
    })
}
exports.db1 = (sql, sqlParams) => {
    sqlParams = sqlParams || []
    // sqlParams = sqlParams == null ? [] : sqlParams
    return new Promise((resolve, reject) => {
        const pool1 = mysql.createPool(config1
        )
        pool1.getConnection((err, conn) => {
            if (!err) {
                conn.query(sql, sqlParams, (e, results) => {
                    if (!e) {
                        // console.log(results)
                        resolve(results)
                        conn.destroy() 
                    } else {
                        console.log("sql:", e)
                        reject(e)
                    }
                })
            } else {
                console.log("conn err:", err)
                reject(err)
            }
           
        })
    })
}