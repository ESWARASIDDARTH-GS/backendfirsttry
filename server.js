const express =require("express");
const app= express();
const cors = require("cors");
app.use(cors())
const mongoose=require("mongoose");
const PORT = process.env.port || 3001;


// app.options('*',cors())
app.use(express.json())


//step 1
//connecting to mongoose

mongoose.connect("mongodb+srv://siddharth:mongoose@pettycash.uabgufe.mongodb.net/notesDB")

//step 2
// using route
app.use("/", require("./routes/noteRoute"));

app.listen(PORT,()=> {
    console.log(`express running in ${PORT}`)
})