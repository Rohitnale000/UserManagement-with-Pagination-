const{addUserService,
  displayUserDataService,
  deleteAllUserService,
  updateSingleUserService,
  displaySingleUserDataService,
  deleteSingleUserService,
  displayPaginationDataService}=require("../Services/userService.js")

// display student data
 const displayUser = (req, res) => {
  if(JSON.stringify(req.params) !== "{}"){
    var serviceResponse = displaySingleUserDataService(req.params.id);
    if (serviceResponse === false) {
      res.status(400).send("Value doesn't exists");
    } else
    res.status(200).send(serviceResponse);
  }
  else{
    var displayData = displayUserDataService;
    res.status(200).send(displayData())
  }
};

// //DeleteAll users
const deleteAll =(req,res)=>{
  const deleteAllUser = deleteAllUserService
  res.send(deleteAllUser()).status(200);
   
}

//save data into the file
const addUser = (req, res) => {
 const InsertedUserData =  addUserService(req.body)
 if (InsertedUserData.success === true) {
  res.status(200).send(InsertedUserData.body);
} else {
  res.status(400).send(InsertedUserData.error);
}
};

//update user using id
 const updateUser = (req, res) => {
  var serviceResponse = updateSingleUserService(req.params.id, req.body);
  if (serviceResponse.success === true) {
    res.status(200).send(serviceResponse);
  } else {
    res.status(400).send(serviceResponse);
  }
};

// //delete specific record
const deleteUser = (req, res) => {
  var serviceResponse = deleteSingleUserService(req.params.id);
  if (serviceResponse.success === true) {
    res.status(200).send(serviceResponse);
  } else {
    res.status(400).send(serviceResponse);
  }
};

// //display single record
// const displaySingleUser = (req, res) => {
 

// };

//pagination api
 const displayPaginationData=(req,res)=>{
      let a = displayPaginationDataService(req.query.page,req.query.limit)
      res.send(a).status(200)
 }
module.exports = {
  deleteAll,
   displayUser,
 // displaySingleUser,
  addUser,
   updateUser,
  deleteUser,
  displayPaginationData
};