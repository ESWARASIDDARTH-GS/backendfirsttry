const express =require("express");
const app= express();
const cors = require("cors");
const mongoose=require("mongoose");

app.use(cors());
app.use(express.json());

//step 1
//connecting to mongoose

mongoose.connect("mongodb+srv://siddharth:mongoose@pettycash.uabgufe.mongodb.net/notesDB")

//step 2
// using route
app.use("/", require("./routes/noteRoute"));

app.listen(3001,()=> {
    console.log("express running in 3001")
})