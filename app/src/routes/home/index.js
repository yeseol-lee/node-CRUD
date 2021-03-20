"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.ejs", {list: "<li>this is list</li>"});
});

router.post("/create-process", (req, res) => {
    res.send("create하는중");
})
module.exports = router;