# MVC Books Library

A simple books library application built with Node.js, Express, EJS, and JSON file storage.

The project follows the MVC architecture and was created to practice asynchronous JavaScript, callbacks, file system operations, routing, controllers, and models.

## Features

* View all saved books
* Add a new book with its title and author
* Store books permanently in a JSON file
* Preserve previously saved books when adding new ones
* Display a message when no books are available
* Custom 404 page
* Basic responsive styling

## Technologies Used

* Node.js
* Express.js
* EJS
* JavaScript
* Node.js File System module
* HTML
* CSS
* JSON

## Concepts Practiced

This project was mainly built to practice:

* MVC architecture
* Express routes
* Controllers
* Models and classes
* Constructors and the `this` keyword
* Static methods
* JavaScript callbacks
* Asynchronous file operations
* `fs.readFile`
* `fs.writeFile`
* `JSON.parse`
* `JSON.stringify`
* Form submission with POST requests
* Redirecting after asynchronous operations
* Passing data from controllers to EJS views

## Project Structure

```text
mvc-books-library/
│
├── app.js
├── package.json
│
├── controllers/
│   ├── admin.js
│   ├── books.js
│   └── error.js
│
├── models/
│   └── book.js
│
├── routes/
│   ├── add-book.js
│   └── books.js
│
├── views/
│   ├── add-book.ejs
│   ├── books.ejs
│   └── 404.ejs
│
├── data/
│   └── books.json
│
└── public/
    ├── css/
    └── images/
```

## How the Application Works

When a user adds a new book, the application follows this sequence:

```text
Form submission
      ↓
POST route
      ↓
Controller
      ↓
Create a new Book instance
      ↓
Read the existing books from books.json
      ↓
Add the new book to the books array
      ↓
Write the updated array back to books.json
      ↓
Redirect the user to the books page
```

The redirect happens only after `fs.writeFile` finishes, using a callback.

When the books page is opened:

```text
GET request
      ↓
Controller
      ↓
Book.fetchAll()
      ↓
Read books.json
      ↓
Convert JSON into a JavaScript array
      ↓
Render the EJS view with the books
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Zidane-code/mvc-books-library.git
```

Move into the project directory:

```bash
cd mvc-books-library
```

Install the dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

Open the application in your browser:

```text
http://localhost:3001/books
```

## Available Routes

| Method | Route             | Description               |
| ------ | ----------------- | ------------------------- |
| GET    | `/books`          | Display all books         |
| GET    | `/admin/add-book` | Display the add-book form |
| POST   | `/admin/add-book` | Save a new book           |

## Example Book Data

Books are stored inside `data/books.json`.

```json
[
  {
    "title": "Clean Code",
    "author": "Robert C. Martin"
  },
  {
    "title": "Atomic Habits",
    "author": "James Clear"
  }
]
```

## Asynchronous File Handling

The application uses callbacks to make sure operations happen in the correct order.

For example, a new book is not written until the existing books have finished loading:

```js
getBooksFromFile((books) => {
  books.push(this);

  fs.writeFile(p, JSON.stringify(books), (err) => {
    cb(err);
  });
});
```

This prevents the application from writing the new data before reading the existing data.

## Important Note

This is a learning project that uses a JSON file instead of a database.

File-based storage is useful for understanding callbacks and asynchronous operations, but a real production application would normally use a database and stronger error handling.

## Future Improvements

* Add book validation
* Display validation errors
* Add edit and delete functionality
* Add individual book details pages
* Improve error handling
* Handle invalid JSON data safely
* Replace JSON file storage with a database
* Add automated tests

## Author

Developed by [Zidane-code](https://github.com/Zidane-code) while learning Node.js backend development.