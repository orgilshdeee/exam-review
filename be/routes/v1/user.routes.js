const express = require("express")
const router = express.Router();
const userController = require("../../modules/users/user.controller")

router.post("/", userController.create)
router.get("/", userController.getAll)
router.get("/:id", userController.getUser)
router.put("/:id", userController.updateUser)
router.delete("/:id", userController.deleteUser)

module.exports = router;