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
        update: `<a href="/update/?id=${qID}">UPDATE</a>`,
        list: ctrl.process.getList(),
        title: ctrl.process.getTitle(qID),
        contents: ctrl.process.getContents(qID)
        
      });
    }
    
});

router.get("/update", (req, res) => {
    let qID = req.query.id;
    let title = ctrl.process.getTitle(qID);
    let contents = ctrl.process.getContents(qID);

    res.render("update.ejs", {
        input: `<input type="text" value=${title} name=${qID}>`,
        textarea: `<textarea>${contents}</textarea>`
    });
})

router.post("/create-process", (req, res) => {
    const title = req.body.title;
    const contents = req.body.contents;
    ctrl.process.writeFile(title, contents);

    res.send("create 완료");
});







module.exports = router;