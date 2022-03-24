const express = require("express");
const HelloController = require("../controllers/helloController");


const router = express.Router();

//routing list
router.get("/hello-get", HelloController.HelloGet)
router.post("/hello-post", HelloController.HelloPost)

module.exports = router;