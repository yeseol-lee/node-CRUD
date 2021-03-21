const fs = require("fs");

const process = {
    getTitle: (qID) => {
        const data = fs.readFileSync('./database/number-article.json');
        const obj = JSON.parse(data);
        const q = qID.toString();
        const title = obj[q];
        return title;
    }
}

module.exports = process;