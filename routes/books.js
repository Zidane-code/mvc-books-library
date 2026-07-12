const express = require("express");

const BooksController = require("../controllers/books");

const router = express.Router();

router.get("/books", BooksController.getBooks);

module.exports = router;
