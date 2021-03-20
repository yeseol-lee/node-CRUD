"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.html");
});

router.get("/login", (req, res) => {
    res.send("여기는 로그인 경로입니다");
});

router.post("/create-process", (req, res) => {
    res.send("create하는중");
})
module.exports = router;