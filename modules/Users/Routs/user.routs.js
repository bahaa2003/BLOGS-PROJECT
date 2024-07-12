const router = require("express").Router();
const { getAllUser, addUser, updateUser, deleteUser, getOneUser, seresh, leastAge, greatAge, greatOrEqualAge} = require("../Controller/user.controller");
const { addUserSchema, updateUserSchema, deleteUserSchema} = require("../../Users/joi/userValidation");
const validationRequest = require("../../../common/middelWeer/validationRequest")

router.get("/users",getAllUser)
router.post("/addUser",validationRequest(addUserSchema),addUser)
router.put("/updateUser/:id",validationRequest(updateUserSchema),updateUser)
router.delete("/deleteUser/:id",validationRequest(deleteUserSchema),deleteUser)
router.get("/oneUser/:id",getOneUser)
router.get("/seresh",seresh)
router.get("/leastAge",leastAge)
router.get("/greatAge",greatAge)
router.get("/greatOrEqualAge",greatOrEqualAge)

module.exports=router
