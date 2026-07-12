const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "books.json",
);

const getBooksFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    const books = JSON.parse(fileContent);
    cb(books);
  });
};

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  save(cb) {
    getBooksFromFile((books) => {
      books.push(this);
      fs.writeFile(p, JSON.stringify(books), (err) => {
        cb(err);
      });
    });
  }
  static fetchAll(cb) {
    getBooksFromFile(cb);
  }
}

module.exports = Book;
