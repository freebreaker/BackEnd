var mysql = require("mysql")

function dbquery(sql,arg,callback){
     
    const config = mysql.createConnection({
        host: 'localhost', 
        user: 'root', 
        password: '123456', 
        port: 3306, 
        database: 'db_test'
    })

    config.connect()

    return new Promise((resolve,reject)=>{

        config.query(sql,arg,(err,data)=>{

            if(err){
                reject(err)
            }else{
                resolve(data)
            }

        })

    })

}


module.exports = dbquery;