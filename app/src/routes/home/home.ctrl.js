"use strict";
const fs = require("fs");

const process = {

    // html list 코드를 생성하자
    getList: () => {
        //쿼리스트링 id값을 부여하기위해 id값 들어있는 파일 불러오기
        const data = fs.readFileSync('./database/article-number.json');
        const obj = JSON.parse(data);

        //글 불러오기
        var files = fs.readdirSync('./database/articles');

        let list = '';
        let i;
        for (i = 0; i < files.length; i++) {
            let title = files[i];
            let idNum = obj.articles[title];
            list += `<li class="list"><a href="/?id=${idNum}">${title}</a></li>`;
        }
        return list;
    },

    getTitle: () => {
        //쿼리스트링 분석하기
        return "나는 제목"
    },

    getContents: () => {
        return "나는 내용"
    }
}

module.exports = {
    process,
};