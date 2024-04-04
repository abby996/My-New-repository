<<<<<<< HEAD


//export default class ShoppingCart {
 // constructor(storage, listElement, cartItemTemplate) {
 //   this.storage = storage;
 //   this.listElement = listElement;
 //   this.cartItemTemplate = cartItemTemplate;
 // }

 // init() {
 //   const cartItems = getLocalStorage(this.storage) || [];
  //  renderListWithTemplate(this.cartItemTemplate, this.listElement, cartItems);
  //}
//}


import { getLocalStorage } from "./utils.mjs";

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

export default class ShoppingCart {
  constructor(key, parentSelector) {
    this.key = key;
    this.parentSelector = parentSelector;
  }
  renderCartContents() {
    const cartItems = getLocalStorage(this.key);
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");
=======
import { renderListWithTemplate, getLocalStorage } from "./utils.mjs";

export default class ShoppingCart {
  constructor(storage, listElement, cartItemTemplate) {
    this.storage = storage;
    this.listElement = listElement;
    this.cartItemTemplate = cartItemTemplate;
  }

  init() {
    const cartItems = getLocalStorage(this.storage) || [];

    console.log(cartItems)

    if(cartItems.length != 0){
      const cartTotal = document.querySelector(".cart-footer");
      cartTotal.classList.remove("hide")

      const cartCheckout = document.querySelector(".checkout");
      cartCheckout.classList.remove("hide")
    }

    renderListWithTemplate(this.cartItemTemplate, this.listElement, cartItems);

    const total = this.calculateTotal(cartItems)
    this.displayTotal(total)
  }

  calculateTotal(cartItems) {
    var total = 0
    cartItems.forEach(item => {
      total += item.FinalPrice *  item.Quantity
    });
    return total
  }
  displayTotal(total) {
    document.querySelector(".cart-total").innerHTML = `Total: $${total}`;
>>>>>>> 46e19e530c10488c7398d9467e5d80fe410e9b71
  }
}
