const express = require("express");
const HelloController = require("../controllers/helloController");
const StudentsController = require("../controllers/StudentsController");


const router = express.Router();

//routing list
router.get("/hello-get", HelloController.HelloGet)
router.post("/hello-post", HelloController.HelloPost)

//Mongoose via routing list
router.post("/insert-student", StudentsController.InsertStudent)
router.get("/read-students", StudentsController.ReadStudents)
router.post("/update-student/:id", StudentsController.UpdateStudent)
router.get("/delete-student/:id", StudentsController.DeleteStudent)

module.exports = router;