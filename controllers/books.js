const Book = require("../models/book");

exports.getBooks = (req, res, next) => {
  Book.fetchAll((books) => {
    res.render("books", {
      pageTitle: "Books",
      books: books,
      hasBooks: books.length > 0,
    });
  });
};
