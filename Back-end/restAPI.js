module.exports = function routs (app,db){
app.get('/books',async  function(req, res) {
    let books =  await db.getAllBooks()
    console.log(books)
    res.json(books).status(200);
  });

  app.get('/book/name/',async  function(req, res) {
    let bookName = req.query.name;
    console.log(bookName);
    let book =  await db.getBookByName(bookName)
    console.log(book)
    res.json(book).status(200);
  });

  app.get('/book/author/',async  function(req, res) {
    let authorName = req.query.author;
    let book =  await db.getBookByAuthor(authorName)
    console.log(book)
    res.json(book).status(200);
  });

  app.get('/book/category/',async  function(req, res) {
    let categoryName = req.query.category;
    let book =  await db.getAllBooksWhithinCategory(categoryName)
    console.log(book)
    res.json(book).status(200);
  });

  app.get('/welcome',async  function(req, res) {
    res.json("Welcome To BookStore").status(200);
  });
}
