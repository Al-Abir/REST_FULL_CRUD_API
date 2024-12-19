const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.post("/create", userController.create);
router.get("/singleUserReadApi/:id",userController.singleUserReadApi);
router.put('/update/:id',userController.update);
router.delete('/deleteUser/:id',userController.deleteUser);
module.exports = router;
