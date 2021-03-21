"use strict";

const express = require("express");
const router = express.Router();
const fs = require('fs');
const ctrlJson = require("./ctrl-json.js");

const ctrl = require("./home.ctrl.js");


router.get("/", (req, res) => {
    let qID = req.query.id;
    //쿼리스트링의 id값 유무에 따라 다르게 렌더하기
    if (qID === undefined) {
        res.render("index.ejs", {
            update: "",
            ddelete: "",
            list: ctrl.process.getList(),
            title: ctrl.process.getTitle(qID),
            contents: ctrl.process.getContents(qID)
            
        });
    //쿼리스트링에 id값을 가지고 있을 경우
    } else {
       res.render("index.ejs", {
        update: `<a href="/update/?id=${qID}" class="btn">UPDATE</a>`,
        ddelete: `<a href="/delete-process/?id=${qID}" class="btn">DELETE</a>`,
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
        hiddenInput: `<input type="hidden" value="${qID}" name="qID">`,
        input: `<input type="text" value=${title} name="title" id="update-title" >`,
        textarea: `<textarea name="textarea">${contents}</textarea>`
    });
})

router.post(("/update-process"), (req, res) => {
    const newTitle = req.body.title;
    const newContents = req.body.textarea;
    const qID = parseInt(req.body.qID);
    const oldTitle = ctrlJson.getTitle(qID);

    //새로운 제목으로 제이슨 파일 두개 수정하기
    ctrlJson.update(qID, newTitle);
    
    //메인파일 rename, 본문 수정하기
    fs.rename(`./database/articles/${oldTitle}`, `./database/articles/${newTitle}`, () => {
        fs.writeFile(`./database/articles/${newTitle}`, newContents, 'utf8', (err) => {
            if(err) console.log(err);
        })
    })   
    res.redirect('/');
})

router.get("/delete-process", (req, res) => {
    let qID = req.query.id;
    let title = ctrl.process.getTitle(qID);

    //두 개의 제이슨 파일에서 qID에 해당하는 정보를 삭제하자
    ctrlJson.delete(qID, title);

    //메인파일도 삭제하자
    fs.unlink(`./database/articles/${title}`, (err) => {
        //삭제 후 리다이렉션하기
        res.redirect('/');
    });

})

router.post("/create-process", (req, res) => {
    const title = req.body.title;
    const contents = req.body.contents;
    ctrl.process.writeFile(title, contents);

    res.redirect('/');
});







module.exports = router;