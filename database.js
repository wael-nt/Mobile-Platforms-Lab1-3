const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.uri ||"mongodb+srv://wael:nkEDYLp4pW8p15l9@mobile-platofrms-lab1.hjhckdh.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  var book = { name: "The Silent Patient", genre: "Mystery",date : new Date(2019,01,5) , author:"Alex Michaelides"};

  const collection = client.db("book-store").collection("books");

  client.db("book-store").collection("books").insertOne(book, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  // perform actions on the collection object
  client.close();
  })
});
