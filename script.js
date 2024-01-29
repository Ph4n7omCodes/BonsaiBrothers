if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
  sessionStorage.clear();
}


let carts = document.querySelectorAll('.add-cart');
let products = [
  {
    name: 'Puppy Chow',
    tag: 'Puppychow',
    price: 100,
    inCart: 0,
  },
  {
    name: 'Tiramisu',
    tag: 'Tiramisucomingsoon',
    price: 130,
    inCart: 0
  },
  {
    name: 'Tropical Cherries',
    tag: 'Tropicanacherry',
    price: 130,
    inCart: 0
  },
  {
    name: 'Pure Michigan',
    tag: 'Puremichigan',
    price: 120,
    inCart: 0
  },
  {
    name: 'Zour Milk',
    tag: 'Zourmilk',
    price: 120,
    inCart: 0
  },
  {
    name: 'Strawberry Cheesecake',
    tag: 'Strawberrycheesecake',
    price: 120,
    inCart: 0
  },
  {
    name: 'Cherry Payton',
    tag: 'Cherrypayton',
    price: 120,
    inCart: 0
  },
  {
    name: 'Purple Octane',
    tag: 'Purpleoctane',
    price: 120,
    inCart: 0
  },
  {
    name: 'Zlushie',
    tag: 'Zlushies',
    price: 120,
    inCart: 0
  },
  {
    name: 'Strawberry Runtz',
    tag: 'Strawberryruntz',
    price: 120,
    inCart: 0
  },
  {
    name: 'Animal Mints',
    tag: 'Animalmints',
    price: 110,
    inCart: 0
  },
  {
    name: 'Oreos',
    tag: 'oreos',
    price: 110,
    inCart: 0
  },
  {
    name: 'Pop Rocks',
    tag: 'PopRocks',
    price: 110,
    inCart: 0
  },
  {
    name: 'Truffles',
    tag: 'Truffles',
    price: 110,
    inCart: 0
  },
  {
    name: 'Cheetah Piss',
    tag: 'CheetahPiss',
    price: 110,
    inCart: 0
  },
  {
    name: 'RZA',
    tag: 'RZA',
    price: 110,
    inCart: 0
  },
  {
    name: 'Lava Cake',
    tag: 'Lavacake',
    price: 100,
    inCart: 0
  },
  {
    name: 'Birthday Cake',
    tag: 'Birthdaycake',
    price: 100,
    inCart: 0
  },
  {
    name: 'Blue Diesel',
    tag: 'Bluedieselcomingsoon',
    price: 100,
    inCart: 0
  },
  {
    name: 'Jelly Belly',
    tag: 'jellybelly',
    price: 100,
    inCart: 0
  },
  {
    name: 'Blue Guava',
    tag: 'Blueguava',
    price: 100,
    inCart: 0
  },
  {
    name: 'Biscotti',
    tag: 'Biscotti',
    price: 100,
    inCart: 0
  },
  {
    name: 'Zpie',
    tag: 'Zpie',
    price: 100,
    inCart: 0
  },
  {
    name: 'Jellybean',
    tag: 'Jellybean',
    price: 90,
    inCart: 0
  },
  {
    name: 'Black Cherry Cake',
    tag: 'Blackcherrycake',
    price: 90,
    inCart: 0
  },
  {
    name: 'Gumbo',
    tag: 'Gumbo',
    price: 90,
    inCart: 0
  },
  {
    name: 'Dosilato',
    tag: 'Dosilato',
    price: 90,
    inCart: 0
  },
  {
    name: 'Cake Pop',
    tag: 'Cakepop',
    price: 90,
    inCart: 0
  },
  {
    name: 'Tarts',
    tag: 'Tarts',
    price: 90,
    inCart: 0
  },
  {
    name: 'Area 41',
    tag: 'Area41',
    price: 90,
    inCart: 0
  },
  {
    name: 'Sherbet Cake',
    tag: 'Sherbetcake',
    price: 90,
    inCart: 0
  },
  {
    name: 'Frosted FLakes',
    tag: 'Frostedflakescomingsoon',
    price: 80,
    inCart: 0
  },
  {
    name: 'Ghostface',
    tag: 'Ghostface',
    price: 80,
    inCart: 0
  },
  {
    name: 'Gelato',
    tag: 'Gelato',
    price: 80,
    inCart: 0
  },
  {
    name: 'Triangle Mintz',
    tag: 'Trianglemintzcomingsoon',
    price: 60,
    inCart: 0
  },
  {
    name: 'Hash Live Rosin',
    tag: 'Hashliverosincomingsoon',
    price: 40,
    inCart: 0
  },
  {
    name: 'Gold Line Rosin',
    tag: 'Goldline',
    price: 40,
    inCart: 0
  },
  {
    name: 'Tier 1 Rosin',
    tag: 'Tier1',
    price: 130,
    inCart: 0
  },
  {
    name: 'Sauced Diamond',
    tag: 'Sauceddiamondscomingsoon',
    price: 40,
    inCart: 0
  },
  {
    name: 'Papaya Delight',
    tag: 'Papayadelight',
    price: 250,
    inCart: 0
  },
  {
    name: 'Peach Cobbler 7g',
    tag: 'Peachcobbler',
    price: 100,
    inCart: 0
  },
  {
    name: 'Crumble',
    tag: 'Crumble',
    price: 200,
    inCart: 0
  },
  {
    name: 'Sugar Wax',
    tag: 'Sugarwax',
    price: 200,
    inCart: 0
  },
  {
    name: 'Hashhole Pre-roll',
    tag: 'Hashholepreroll',
    price: 100,
    inCart: 0
  },
  {
    name: 'Bonsai Disposable 1G',
    tag: 'Bonsaivape',
    price: 30,
    inCart: 0
  },
  {
    name: '200mg Live Rosin Gummies',
    tag: 'Gummies',
    price: 25,
    inCart: 0
  },
  {
    name: '100mg Live Resin Gummies',
    tag: '100mgcomingsoon',
    price: 20,
    inCart: 0
  },
  {
    name: 'Indigo Chocolate',
    tag: 'Mushroomchocolate',
    price: 20,
    inCart: 0
  },
  {
    name: 'Indigo Chocolate 2 pack',
    tag: 'Mushroomchocolate2',
    price: 40,
    inCart: 0
  },
  {
    name: 'Mushroom Bar',
    tag: 'Mushroomchocolatefull',
    price: 100,
    inCart: 0
  },
  {
    name: '2 Stain Premium Indoor Mix',
    tag: 'Mysterybag',
    price: 300,
    inCart: 0
  },
  {
    name: 'Hash Live Rosin 3.5g',
    tag: 'Hashliverosin3.5comingsoon',
    price: 140,
    inCart: 0
  },
  {
    name: 'Goldline Rosin 3.5g',
    tag: 'Goldline3.5',
    price: 140,
    inCart: 0
  },
  {
    name: 'Sauced Diamonds 3.5g',
    tag: 'Sauceddiamond3.5comingsoon',
    price: 100,
    inCart: 0
  },
  {
    name: 'Peach Cobbler 1/2oz',
    tag: 'Peachcobbler2',
    price: 150,
    inCart: 0
  },
  {
    name: '4 Bonsai Disposables 1G',
    tag: 'Bonsaivapedeal',
    price: 100,
    inCart: 0
  },
]

for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i])
  })
}

function onLoadCartNumbers() {
  let productNumbers = sessionStorage.getItem('cartNumbers');

  if(productNumbers) {
    document.querySelector('.cart-btn span').textContent = productNumbers;
  }
}

function cartNumbers(product){
  let productNumbers = sessionStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  if(productNumbers) {
    sessionStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart-btn span').textContent = productNumbers + 1;
  } else {
    sessionStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart-btn span').textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = sessionStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  if(cartItems != null) {
    if(cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1;
  }else{
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    }
  }
  sessionStorage.setItem("productsInCart", JSON.stringify (cartItems));
}

function totalCost(product){
  let cartCost = sessionStorage.getItem('totalCost');
  if(cartCost != null) {
    cartCost = parseInt(cartCost);
    sessionStorage.setItem("totalCost", cartCost +
    product.price);
  }else {
    sessionStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = sessionStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = sessionStorage.getItem('totalCost');

  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="cart-item">
      <div class="product">
        <ion-icon name="close-circle" class="remove-item" data-tag="${item.tag}"></ion-icon>
        <img src="./img/${item.tag}.JPG" alt="${item.name}">
        <span>${item.name}</span>
      </div>
      <div class="quantity">
        <ion-icon class="decrease" name="arrow-dropleft-circle" data-tag="${item.tag}"></ion-icon>
        <span>${item.inCart}</span>
        <ion-icon class="increase" name="arrow-dropright-circle" data-tag="${item.tag}"></ion-icon>
      </div>
      <div class="total">
        $${item.inCart * item.price},00
      </div>
    </div>
      `;
    });

    productContainer.innerHTML += `
      <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
          Basket Total
        </h4>
        <h4 class="basketTotal">
          $${cartCost},00
        </h4>
        <a href="mailto:bonsaibrothersadmin@proton.me?subject=My%20Cart&body=${prepareCartEmail()}">Send</a>
      </div>
    `;

    // Add event listeners to the remove and quantity icons
    const removeIcons = document.querySelectorAll('.remove-item');
    removeIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        removeItem(icon.dataset.tag);
      });
    });

    const decreaseIcons = document.querySelectorAll('.decrease');
    decreaseIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        updateQuantity(icon.dataset.tag, -1);
      });
    });

    const increaseIcons = document.querySelectorAll('.increase');
    increaseIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        updateQuantity(icon.dataset.tag, 1);
      });
    });
  }
}

function removeItem(tag) {
  let cartItems = sessionStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems && cartItems[tag]) {
    const item = cartItems[tag];
    const cartNumbers = parseInt(sessionStorage.getItem('cartNumbers'));
    const totalCost = parseInt(sessionStorage.getItem('totalCost'));
    sessionStorage.setItem('cartNumbers', cartNumbers - item.inCart);
    sessionStorage.setItem('totalCost', totalCost - (item.price * item.inCart));
    delete cartItems[tag];
    sessionStorage.setItem('productsInCart', JSON.stringify(cartItems));

    displayCart();
    onLoadCartNumbers();
  }
}

function updateQuantity(tag, amount) {
  let cartItems = sessionStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems && cartItems[tag]) {
    const item = cartItems[tag];
    const cartNumbers = parseInt(sessionStorage.getItem('cartNumbers'));
    const totalCost = parseInt(sessionStorage.getItem('totalCost'));
    item.inCart += amount;
    sessionStorage.setItem('cartNumbers', cartNumbers + amount);
    sessionStorage.setItem('totalCost', totalCost + (item.price * amount));
    if (item.inCart === 0) {
      delete cartItems[tag];
    }
    sessionStorage.setItem('productsInCart', JSON.stringify(cartItems));
    displayCart();
    onLoadCartNumbers();
  }
}

onLoadCartNumbers();
displayCart();

function prepareCartEmail() {
  let cartItems = sessionStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let emailContent = "Please Leave Your \nName:\nNumber:\nAddress:\nDelivery Instructions:\n\n";
  let totalCost = 0;

  Object.values(cartItems).forEach(item => {
    emailContent += `${item.name} - ${item.inCart} item(s) - $${item.price * item.inCart}\n`;
    totalCost += item.price * item.inCart;
  });

  emailContent += `\nTotal cost: $${totalCost}\n`;

  return encodeURIComponent(emailContent);
}

window.onload = function(){
  setTimeout(function(){
    document.getElementById("fadein").remove();
  },1000);
};

function showSection() {
  var i;
  for (i = 0; i < links.length; i += 1) {
      document.getElementById(links[i].href.split('#')[1]).className = 'hidden';
  }
  document.getElementById(this.href.split('#')[1]).className = '';
  return false;
}
function createShowSection(links) {
  return showSection;
}
var sections = document.getElementById('sections'),
  links = sections.getElementsByTagName('a'),
  showSection = createShowSection(links),
  i;
for (i = 0; i < links.length; i += 1) {
  links[i].onclick = showSection;
}
showSection();

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
};






// const card = document.querySelector(".card__inner");

// card.addEventListener("click", function (e) {
//   card.classList.toggle('is-flipped');
// });


// var topShelf = document.getElementById("topShelf");
// var flower = document.getElementById("flower");
// var concentrates = document.getElementById("concentrate");

// function myShelf () {
//  if (topShelf.style.display === "none") {
//   topShelf.style.display = "block";
//  } else {
//   flower.style.display ="none";
//   concentrates.style.display ="none";
//  }
  
// }
// function myFlower () {

  
// }
// function myConcentrate () {

  
// }

