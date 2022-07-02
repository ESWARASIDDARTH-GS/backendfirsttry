const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");

//after creating in home.js

router.route("/create").post((req,res)=>{
    const title = req.body.title;
    const content = req.body.content;
    const newNote =new Note({
        title,
        content
    });

    newNote.save();
    res.send('data added')
});

module.exports= router;
