"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl.js");

router.get("/", (req, res) => {
    let qID = req.query.id;
    //쿼리스트링의 id값 유무에 따라 다르게 렌더하기
    if (qID === undefined) {
        res.render("index.ejs", {
            update: "",
            list: ctrl.process.getList(),
            title: ctrl.process.getTitle(qID),
            contents: ctrl.process.getContents(qID)
            
        });
    //쿼리스트링에 id값을 가지고 있을 경우
    } else {
       res.render("index.ejs", {
        update: '<form action="./update-process" method="post"><input type="submit" value="UPDATE"></form>',
        list: ctrl.process.getList(),
        title: ctrl.process.getTitle(qID),
        contents: ctrl.process.getContents(qID)
        
        // update: '<form action="./update-process" method="post"><input type="submit" value="UPDATE"></form>',
        // delete: '<form action="./delete-process" method="post"><input type="submit" value="DELETE"></form>'
       });
    }
    
});

router.post("/create-process", (req, res) => {
    const title = req.body.title;
    const contents = req.body.contents;
    ctrl.process.writeFile(title, contents);

    res.send("create하는중");
});





module.exports = router;