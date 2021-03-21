const fs = require("fs");

const process = {
    getTitle: (qID) => {
        const data = fs.readFileSync('./database/number-article.json');
        const obj = JSON.parse(data);
        const q = qID.toString();
        const title = obj[q];
        return title;
    },

    update: (qID, newTitle) => {
        //1. number-article파일  제목 변경, oldTitle 가져오기
        const data = fs.readFileSync('./database/number-article.json');
        const obj = JSON.parse(data);
        const q = qID.toString();
        oldTitle = obj[q];
        obj[q] = newTitle;
        fs.writeFile('./database/number-article.json', JSON.stringify(obj), (err) => {
            if(err) console.log(err);
        })
        
        //2. article-number파일 key값을 oldTitle -> newTitle로 변경
        const data2 = fs.readFileSync('./database/article-number.json');
        const obj2 = JSON.parse(data2);
        const articles = obj2.articles;
        delete articles[oldTitle];
        articles[newTitle] = qID;

        //바꾼 값을 저장
        obj2.articles = articles;
        fs.writeFile(`./database/article-number.json`, JSON.stringify(obj2), (err) => {
            if(err) console.log(err);
        });

    },

    delete: (qID, title) => {
        //1. article-number 파일
        fs.readFile('./database/article-number.json', (err, data) => {
            const obj = JSON.parse(data);
            const articles = obj.articles;
            delete articles[title];
            obj.articles = articles;

            //콜백없음
            fs.writeFile('./database/article-number.json', JSON.stringify(obj), (err) => {
                if(err) console.log(err);
            });
        })

        //2. number-article 파일
        fs.readFile('./database/number-article.json', (err, data) => {
            const obj = JSON.parse(data);
            const q = qID.toString();
            delete obj[q];

            fs.writeFile('./database/number-article.json', JSON.stringify(obj), (err) => {
                if(err) console.log(err);
            });
        })
    }

    

}

module.exports = process;