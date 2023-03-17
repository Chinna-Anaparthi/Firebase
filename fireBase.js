const express=require('express')
const multer= require('multer')
const app=express()
const firebase=require('firebase/app')
const {getStorage, ref, uploadBytes}=require('firebase/storage')
const firebaseConfig = {
  apiKey: "AIzaSyCDGlwI7Xs4ip_Vh6EWWJsjcZP8_WuV6gg",
  authDomain: "chinnanodeproject.firebaseapp.com",
  projectId: "chinnanodeproject",
  storageBucket: "chinnanodeproject.appspot.com",
  messagingSenderId: "275651917110",
  appId: "1:275651917110:web:f3e55ff95d1ec45423ef97",
  measurementId: "G-VTKTXNP4XE"
};
firebase.initializeApp(firebaseConfig)
const storage= getStorage()
const upload= multer({storage: multer.memoryStorage()})
app.post("/",upload.single('filename'), (req,res)=>
{
const storageref= ref(storage, req.file.originalname)
uploadBytes(storageref, req.file.buffer).then(()=>
{
console.log("file upload");
res.send("file upload")
})
})
app.get('/download', async function(req, res) {
  try {
  const fileRef = ref(storage, req.query.path);
  const url = await getDownloadURL(fileRef);
  // res.redirect(url);
  res.send(url);
  // fs.writeFile('text3.txt',url,(err)=>{
  // if(err){
  // console.log(err);
  // }
  // else{
  // res.send("Download successfully.................")
  console.log("Download successfully on text3 file");
  // }
  // })
  } catch (error) {
  console.error(error);
  res.status(500).send('Error downloading file');
  }
  });
app.listen(8000,()=>
{
  console.log("FireBase upload server running sucessfully.......!");
})