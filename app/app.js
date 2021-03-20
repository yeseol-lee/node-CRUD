"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");


//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

//라우팅을 해보자
const home = require("./src/routes/home");

//정적 경로 추가
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/", home);

module.exports = app;

