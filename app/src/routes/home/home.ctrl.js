"use strict";
const fs = require("fs");
const ctrlJson = require("./ctrl-json.js");

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

    getTitle: (qID) => {
        if(qID === undefined) {
            return "Welcome";
        }

        //id번호 - 제목이 들어있는 number-article 파일에서
        //id번호로 제목을 가져옴
        const title = ctrlJson.getTitle(qID);
        return title;

    },

    getContents: (qID) => {
        if(qID === undefined) {
            return "Welcome-Contents";
        }
        //id번호로 제목을 가져옴
        const title = ctrlJson.getTitle(qID);
        
        //제목으로 컨텐츠를 가져옴
        const contents = fs.readFileSync(`./database/articles/${title}`);
        return contents;
    },

    writeFile: (title, contents) => {
        console.log(__dirname);
        fs.writeFile(`./database/articles/${title}`, contents, (err) => {
            if (err) return console.log(err);
            fs.readFile(`./database/article-number.json`, (err, data) => {
                let obj = JSON.parse(data);
                let num = obj['article-num'];
                num += 1;
                obj['article-num'] = num;
                obj['articles'][title] = num;
                fs.writeFile(`./database/article-number.json`, JSON.stringify(obj), (err) => {
                    if(err) console.log(err);
                });

                //number-article 파일에도 정보 기입하기
                fs.readFile(`./database/number-article.json`, (err, data) => {
                    let obj = JSON.parse(data);
                    obj[num] = title;
                    fs.writeFile(`./database/number-article.json`, JSON.stringify(obj), (err) => {
                        if(err) console.log(err);
                    })
                })
            })
        });
    }
}

module.exports = {
    process,
};