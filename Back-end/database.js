const mongoose = require('mongoose');
const BookModel = require('./BookModel');

const Book = require("./BookModel");

const uri = process.env.uri || "mongodb+srv://wael:nkEDYLp4pW8p15l9@mobile-platofrms-lab1.hjhckdh.mongodb.net/BookStore?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});


// -----> Have been used to insert some sample books <------

// const BookStoreSchema = new mongoose.Schema({
//   name: String,
//   genre:String,
//   date : Date,
//   author:String
// });


// const BookStore = mongoose.model('BookStore', BookStoreSchema);

// const book1 = new Book({ name: "The Invisible Life of Addie LaRue", genre: "fantasy",date : new Date(2020,10,06) , author:"V.E. Schwab"});
// const book2 = new Book({ name: "The Seven Husbands of Evelyn Hugo", genre: "Family Life - General",date : new Date(2018,05,29) , author:"Taylor Jenkins Reid"});
// const book3 = new Book({ name: "Where the Crawdads Sing", genre: "Literary",date : new Date(2021,03,30) , author:"Delia Owens"});

//  let bookArray = [book1,book2,book3]
//  Book.insertMany(bookArray)

async function getAllBooks() {
  var books = []
  books = await Book.find({}).then(function (book) {
    return book;
  });
  console.log(books)
  return books
}

async function getBookByName(bookName) {
  console.log(bookName)
  var books = {}
  books = await Book.find({name:bookName}).then(function (book) {
    return book;
  });
  console.log(books)
  return books

}

async function getBookByAuthor(authorName) {
  console.log(authorName)
  var books = {}
  books = await Book.find({author:authorName}).then(function (book) {
    return book;
  });
  console.log(books)
  return books
}

async function getAllBooksWhithinCategory(category) {
  console.log("one book here")
  console.log(category)
  var books = {}
  books = await Book.find({genre:category}).then(function (book) {
    return book;
  });
  console.log(books)
  return books
}

module.exports = {
  getAllBooksWhithinCategory,
  getBookByAuthor,
  getBookByName,
  getAllBooks
};