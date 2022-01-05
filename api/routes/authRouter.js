
const router = require("express").Router();
const authController = require("../controllers/authController");
const Authenticated = require("../middleware/Authenticated");

router.post("/register", authController.postRegister);
router.post("/login", authController.postLogin);
router.get("/user", Authenticated, authController.getUser);

module.exports = router;
