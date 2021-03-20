"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl.js");

router.get("/", (req, res) => {
    
    //console.log(req.query.id);
    //let qID = req.query.id;
    res.render("index.ejs", {
        list: ctrl.process.getList(),
        title: ctrl.process.getTitle(),
        contents: ctrl.process.getContents()
    });
});

router.post("/create-process", (req, res) => {
    res.send("create하는중");
});





module.exports = router;