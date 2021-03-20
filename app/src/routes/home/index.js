"use strict";

const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.ejs", {list: getList()});
});

router.post("/create-process", (req, res) => {
    res.send("create하는중");
});

// html list 코드를 생성하자
function getList() {
    var files = fs.readdirSync('./database');

    let list = '';
    let i;
    for (i = 0; i < files.length; i++) {
        list += `<li>${files[i]}</li>`;
    }
    return list;
}


module.exports = router;