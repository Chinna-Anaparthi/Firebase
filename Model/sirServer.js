var database = require("../Database/sirDatabase");

var getempBankData = (req, res) => {
  var query = "select * from empinfo ";
  database.query(query, (err, empbankdata) => {
    if (err) {
      res.send("Data Not Inserted");
    }
     else 
    {
      for(var i=0;i<empbankdata.length;i++)
      if(empbankdata[i].Sno== req.params.Sno)
        {
          res.send(empbankdata[i]);
        }
      // res.send(empbankdata)
    }
})
}
var getempData = (req, res) => {
  var query = "select * from empsalay ";
  database.query(query, (err, empdata) => {
    if (err) {
      res.send("Data Not Inserted");
    }
     else 
    {
      for(var i=0;i<empdata.length;i++)
      if(empdata[i].Sno== req.params.Sno)
        {
          res.send(empdata[i]);
        }    
        // res.send(empdata)
    }
})
}
module.exports={getempBankData,getempData};