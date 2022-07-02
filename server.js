const express =require("express");
const app= express();
const cors = require("cors");
const mongoose=require("mongoose");


app.use(cors())
app.options('*',cors())
app.use(express.json())


//step 1
//connecting to mongoose

mongoose.connect("mongodb+srv://siddharth:mongoose@pettycash.uabgufe.mongodb.net/notesDB")

//step 2
// using route
app.get("/",(req,res)=>{
    res.send("server running")
})

app.use("/", require("./routes/noteRoute"));

app.listen(process.env.PORT || 5000)
