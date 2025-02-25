var mysql = require('mysql');

////  ***** Localhost - Workbench ***** 
var con  = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: "Admin791mex*",
    database: 'fabiola'
})

////  *****  Produccion - SiteGround (antoniorm80) ***** 
// var con  = mysql.createConnection({
//     host: 'antoniorm80.com',
//     user: 'u9sqruhgxer6t',   
//     password: '3#C}cr#1bm>*', 
//     database: 'dbvv1j4zprhld7'
// })

con.connect(function(err){
    if(err){
        console.log(err)
    }else {
        con.query("SELECT * FROM `usuarios`", function(err, result){
            if(err) {
                console.log(err);
            } else {                
                for(var element of result) {
                    console.log(element)
                }               
            }
        });

    }
})


// config = {
//     "host": "127.0.0.1",
//     "port": "127.0.0.1",
//     "database": "sakila",
//     "host": "127.0.0.1",
// }