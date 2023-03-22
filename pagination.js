var server=require('./Model/pagiserver')
var express=require('express');
var cacheService = require("express-api-cache");
var cache = cacheService.cache;
var app=express();
app.get('/get', cache("1 minutes"),(req,res)=>
{
   server.getpagidata(req,res,()=>
   {

   })
})
app.listen(8050,()=>
{
    console.log("This is Pagination Port...!");
})