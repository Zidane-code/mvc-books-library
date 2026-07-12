const Book = require("../models/book");

exports.postAddBook = (req, res, next) => {
  const book = new Book(req.body.title, req.body.author);
  book.save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/books");
  });
};

exports.getAddBook = (req, res, next) => {
  res.render("add-book", {
    pageTitle: "Add Book",
  });
};
