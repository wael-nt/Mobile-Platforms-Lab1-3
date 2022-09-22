const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let BookStoreSchema = new Schema(
    {
      name: {
        type: String 
      },
      genre: {
        type: String
      },
      date: {
        type: Date
      },
      author: {
        type: String
      }
    },
    { collection: "books" }
  );
  
  module.exports = mongoose.model("book-store", BookStoreSchema);