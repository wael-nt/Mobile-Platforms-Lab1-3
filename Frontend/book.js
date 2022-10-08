let html = ''
const getBooks =async  () => {
    const cards = document.getElementById('books')
    let books = await(await fetch('http://localhost:3000/books')).json();
    console.log("Hello im here");
    console.log(books)
    books.forEach(element => {
    console.log(element.name) 
    html += '<div class="card col-4" style="width: 18rem;"><div class="card-body"><p class="card-title">'
    html += element.name + '</p><p class="card-text">' 
    html += 'Author: ' + element.author + '</p><p>'
    html += 'Date: ' + element.date.substring(0,10).toString() + '</p><p>'
    html += 'Genre: ' + element.genre + '</p></div></div>'
    });
    cards.innerHTML = html;
}
const getWelcomeMsg = async ()=>{
    let welcome = await(await fetch('http://localhost:3000/welcome')).json();
    let html = '<h1>' 
    html += welcome + '</h1>'
    const welcomeMsg = document.getElementById('welcome')
    welcomeMsg.innerHTML = html
}
getBooks();
getWelcomeMsg();