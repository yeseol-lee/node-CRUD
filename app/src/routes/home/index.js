"use strict";

const express = require("express");
const router = express.Router();
const fs = require('fs');

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
        hiddenInput: `<input type="hidden" value="${qID}" name="qID">`,
        input: `<input type="text" value=${title} name="title">`,
        textarea: `<textarea name="textarea">${contents}</textarea>`
    });
})

router.post(("/update-process"), (req, res) => {
    const newTitle = req.body.title;
    const newContents = req.body.textarea;
    const qID = parseInt(req.body.qID);
    

    //새로운 제목으로 제이슨 파일 두개 수정하기
    
    // 1. number-article 파일을 열어서 예전제목을 받고, 새로운 제목으로 수정한다
    const data = fs.readFileSync('./database/number-article.json');
    const obj = JSON.parse(data);
    const q = qID.toString();
    const oldTitle = obj[q];

    obj[q] = newTitle;

    //2. article-number파일을 열어서 예전제목을 이용해서 key값 수정하기
    const data2 = fs.readFileSync('./database/article-number.json');
    const obj2 = JSON.parse(data2);
    const articles = obj2.articles;

    delete articles[oldTitle];
    articles[newTitle] = qID;

    //바꾼값을 파일에 저장하자
    obj2.articles = articles;
    fs.writeFile(`./database/article-number.json`, JSON.stringify(obj2), (err) => {
        console.log("hello");
    });

    //메인글 수정하기

    fs.rename(`./database/articles/${oldTitle}`, `./database/articles/${newTitle}`, () => {
        fs.writeFile(`./database/articles/${newTitle}`, newContents, 'utf8', () => {
            console.log("파일 수정 완료");
        })
    })   
    res.send("ppp");
})

router.post("/create-process", (req, res) => {
    const title = req.body.title;
    const contents = req.body.contents;
    ctrl.process.writeFile(title, contents);

    res.send("create 완료");
});







module.exports = router;