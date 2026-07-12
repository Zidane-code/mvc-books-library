const express = require("express");

const addBookController = require("../controllers/admin");

const router = express.Router();

router.get("/add-book", addBookController.getAddBook);
router.post("/add-book", addBookController.postAddBook);

module.exports = router;
