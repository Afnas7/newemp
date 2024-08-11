const mongoose = require("mongoose");
//Write missing code 
mongoose.connect('mongodb+srv://afnasperingolanasharaf:appuappu1@cluster0.kvncbdx.mongodb.net/empdb?retryWrites=true&w=majority&appName=Cluster0')
  .then((res)=>{
  console.log('DB is connected')
}).catch((res)=>{
  console.log('DB not connected')
})
