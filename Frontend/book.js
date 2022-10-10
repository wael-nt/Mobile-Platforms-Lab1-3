let basketShopping = []
let books = []
const getBooks = async () => {
    let html = ''
    const basketButton = document.getElementById('shopping-button');
    basketButton.addEventListener('click', () => {
        const basketCard = document.getElementById('collapseOne');
        console.log(basketCard);
        if (basketCard.classList.contains('show')) {
            basketCard.classList.remove('show');
        } else {
            basketCard.classList.add('show');
        }
    });

    const cards = document.getElementById('books')
    books = await (await fetch('https://mobile-platform-lab3-backend.herokuapp.com/books')).json();
    html += '<div class="row">'
    books.forEach(element => {
        html += '<div class="card col-12" style="width: 18rem;"><div class="card-body"><p class="card-title">'
        html += element.name + '</p><p class="card-text">'
        html += 'Author: ' + element.author + '</p><p>'
        html += 'Date: ' + element.date.substring(0, 10).toString() + '</p><div><p>'
        html += 'Genre: ' + element.genre + '</p></div><p>'
        html += 'Price: ' + element.price + ' KR</p></div>'
        html += '<div class = "card-footer"><button class="btn btn-warnin id="' + element._id + '" onclick="addItemToshoppingList(\'' + element._id + '\')">Buy</button></div></div>'
    });
    html += '</div>'
    cards.innerHTML = html;
}

const order = () => {
    if (basketShopping.length > 0) {
        alert("Great! your order will be sent to you as soon as we start selling books !")
        return;
    }
    alert("Nothing to buy! add some item first!")
}

const search = async () => {
    const searchSeaction = document.getElementById('searchSeaction')
    let name = document.getElementById('bookName').value;
    let target = await (await fetch('https://mobile-platform-lab3-backend.herokuapp.com/book/name/?name=' + name)).json();
    console.log(target)
    let newHtml = ''
    newHtml += '<div class="row"><div class="card col-12" style="width: 18rem;">'
    newHtml += '<div class="card-body">'
    newHtml += '<p class="card-title">' + target[0].name + '</p>'
    newHtml += '<p class="card-text"> Author: ' + target[0].author + '</p>'
    newHtml += '<p>Date: ' + target[0].date.substring(0, 10).toString() + '</p>'
    newHtml += '<p>Genre: ' + target[0].genre + '</p>'
    newHtml += '<p>Price: ' + target[0].price + ' KR</p>'
    newHtml += '</div><div class = "card-footer">'
    newHtml += '<button class="btn btn-warnin id="' + target[0]._id + '" onclick="addItemToshoppingList(\'' + target[0]._id + '\')">Buy</button>'
    newHtml += '</div></div>'
    searchSeaction.innerHTML = newHtml;
}

const addItemToshoppingList = async (id) => {
    console.log(id);
    let test = books.find((element) => element._id == id)
    console.log(test);
    let found = basketShopping.find((element) => element.id == id);
    if (found != null) {
        console.log(found.price);
        console.log(test.price);
        found.price += test.price;
        found.quantity += 1;
        refreshBasket()
        return;
    }
    let itemToPush = {
        'name': test.name,
        'price': test.price,
        'id': test._id,
        'quantity': 1
    }
    basketShopping.push(itemToPush)
    for (let index = 0; index < basketShopping.length; index++) {
        const element = basketShopping[index];
        console.log(element)
    }
    console.log("BASKET SHOPPING")
    refreshBasket()
}

const refreshBasket = () => {
    const basket = document.getElementById('accordion-body');
    let totalPrice = 0;
    basket.innerHTML = '';
    basketShopping.forEach(element => {
        console.log(element);
        basket.innerHTML += '<ul>';
        basket.innerHTML += '<div class="container col-4">';
        basket.innerHTML += '<li>';
        basket.innerHTML += '<p class="strong"> Book name: ' + element ?.name + '</p><p class="">';
        basket.innerHTML += '<p class="">  Price: ' + element ?.price + ' KR</p><p class="">';
        basket.innerHTML += '<p class="">  Quantity: ' + element ?.quantity + '</p><p class="">';
        basket.innerHTML += '</li>';
        basket.innerHTML += '</div>'
        basket.innerHTML += '</ul>'
        totalPrice += element.price;
    })
    basket.innerHTML += '<p class="card-text"> Total price = ' + totalPrice + ' KR</p><p class="card-text">';
}

const getWelcomeMsg = async () => {
    let welcome = await (await fetch('https://mobile-platform-lab3-backend.herokuapp.com/welcome')).json();
    let html = '<h1 class="center">'
    html += welcome + '</h1>'
    const welcomeMsg = document.getElementById('welcome')
    welcomeMsg.innerHTML = html
}
getBooks()
getWelcomeMsg()