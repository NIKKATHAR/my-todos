const express = require("express")
const { addtodos, getAllToDo, getSingleToDo, deleteSingleToDo, deleteAllToDo, updateSingleToDo } = require("../controller/todoController")
// const { loginOnly } = require("../Middleware/authmiddleware")

const router = express.Router()

router
      .route("/")
      .post(addtodos)
      .get(getAllToDo)

router 
      .route("/:id")
      .get( getSingleToDo)
      .delete(deleteSingleToDo)
      .put(updateSingleToDo)

router
      .route("/delete/all")
      .delete(deleteAllToDo)

module.exports = router