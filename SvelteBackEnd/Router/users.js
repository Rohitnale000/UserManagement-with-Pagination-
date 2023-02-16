const express = require("express");
const {deleteAll,displayUser,displaySingleUser,addUser,updateUser,deleteUser,displayPaginationData} = require("../Controller/usersController.js");
const router = express.Router();

//save student data into json file
router.post("/user",addUser);
  
  //student data display
 router.get("/user",displayUser);

  //get single student data 
router.get('/user/:id', displayUser)

  // student data update
router.put("/user/:id",updateUser );
  
  //deleting student
router.delete("/user/:id",deleteUser );

//deleting all elements from array
router.delete("/user",deleteAll)

//pagination
router.get("/user/page/limit",displayPaginationData)

module.exports = router  