"use strict";

const express = require("express");
const app = express();


//앱 세팅
app.engine("html", require("ejs").renderFile);
app.set("views", "./src/views");

//라우팅을 해보자
const home = require("./src/routes/home");

//정적 경로 추가
app.use(express.static(`${__dirname}/src/public`));


app.use("/", home);

module.exports = app;

