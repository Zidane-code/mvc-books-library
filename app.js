const express = require("express");
const path = require("path");

const booksRouter = require("./routes/books");
const addBookRouter = require("./routes/add-book");
const errorController = require("./controllers/error");

const port = 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use(booksRouter);
app.use("/admin", addBookRouter);

app.use(errorController.get404);

app.listen(port);
