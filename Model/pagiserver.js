var database = require("../Database/pagidatabase");
var getpagidata = (req, res) => {
  var query = "select * from pagidata";
    database.query(query, (err, pagidata) => {
    if (err) {
      res.send("Data Not Inserted");
    }
     else 
    {
      const offset=req.query.offset
      const limit=req.query.limit 
      var a=[];
      var b=[];
      for (let i = offset; i <= limit ; i++) {
      a.push(pagidata[i])
      }
      for (let i = offset; i <= pagidata.length ; i++) {
      b.push(pagidata[i])
      }
      if(limit<=pagidata.length)
      {
      res.json(a)
      }
      else{
      var d = b.filter((c)=>{
      return c!=null;
      })
      res.json(d)
      }
      }
})
}
module.exports={getpagidata};
// var a=[];
// var b=[];
// for (let i = offset; i <= limit ; i++) {
// a.push(data[i])
// }
// for (let i = offset; i <= data.length ; i++) {
// b.push(data[i])
// }
// if(limit<=data.length)
// {
// res.json(a)
// }
// else{
// var d = b.filter((c)=>{
// return c!=null;
// })
// res.json(d)
// }
// }