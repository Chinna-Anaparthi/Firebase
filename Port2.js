var server=require('./Model/sirServer')
var express=require('express');
var unirest = require('unirest');
// var axios = require("axios");
var app=express();
app.get('/Empsal/:Sno',(req,res)=>
{
    server.getempData(req,res,function(getempData)
    {

    })
})
app.listen(8080,()=>
{
    console.log("This is Empsal Port...! ");
})

app.get('/Empdata/:Sno',(req,res)=>
{
    server.getempBankData(req,res,function(getempBankData)
    {

    })
})
app.listen(8090,()=>
{
    console.log("This is Empdata Port...! ");
})



const api1 = 'http://localhost:8080/Empsal/:Sno';

const api2 = 'http://localhost:8090/Empdata/:Sno';

app.get('/details/:Sno', (req, res) => {
const id1 = req.params.Sno;
const id2 = req.params.Sno;
var api1Request=unirest.get(api1.replace(':Sno',id1))
var api2Request=unirest.get(api2.replace(':Sno',id2))
Promise.all([api1Request, api2Request])
.then((responses) => {
const Data1 = responses[0].body;
const Data2 = responses[1].body;
const combinedData = { UserDetails: Data1, SalaryDetails: Data2 };
var a=Object.values(combinedData)[1];
var b=Object.values(combinedData)[0];
var result={
    ...a,
    ...b
}
var a=[];
a.push(result)
res.send(a);
})
.catch((error) => {
console.error(error);
res.status(500).send('Error combining data');
});
});