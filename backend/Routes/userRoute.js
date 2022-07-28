const express = require("express")
const { addUsers, getAllUsers, getSingleUser, updateSingleUser, deleteAllUser, deleteSingleUser } = require("../controller/userController")

const router = express.Router()


     // http://localhost:5000/user
router
     .route("/")
     .post(addUsers)
     .get(getAllUsers)

     // http://localhost:5000/user/id
router
     .route("/:id")
     .get(getSingleUser)
     .delete(deleteSingleUser)
     
     // http://localhost:5000/user/update/id
router
     .route("/update/:id")
     .put(updateSingleUser)
     
     // http://localhost:5000/user/delete/all
router
     .route("/delete/all")
     .delete(deleteAllUser)   



module.exports = router