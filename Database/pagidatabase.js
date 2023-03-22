const mysql=require('mysql')

const connection1=mysql.createConnection(
{
    host:"localhost",
    user:"root",
    password:"root",
    database:"pagination"
})
connection1.connect((err,res)=>
{

    if(err){
        console.log("failed")
    }
    else{
        console.log("Pagination server succefully connected")
    }
})

module.exports=connection1;