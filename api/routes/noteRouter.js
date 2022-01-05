
const router = require("express").Router();
const noteController = require("../controllers/noteController");
const Authenticated = require("../middleware/Authenticated");

router.post("/", Authenticated, noteController.create);
router.patch("/:id", Authenticated, noteController.update);
router.delete("/:id", Authenticated, noteController.destroy);

module.exports = router;
