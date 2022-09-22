app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });



  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
  })

