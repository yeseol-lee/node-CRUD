"use strict";

const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.ejs", {
        list: getList(),
        title: getTitle(),
        contents: getContents()
    });
});

router.post("/create-process", (req, res) => {
    res.send("create하는중");
});

// html list 코드를 생성하자
function getList() {
    var files = fs.readdirSync('./database/articles');

    let list = '';
    let i;
    for (i = 0; i < files.length; i++) {
        list += `<li class="list">${files[i]}</li>`;
    }
    return list;
}

function getTitle() {
    return "나는 제목"
}

function getContents() {
    return "나는 내용"
}


module.exports = router;