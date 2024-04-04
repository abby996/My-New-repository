<<<<<<< HEAD

import { setLocalStorage, getLocalStorage } from "./utils.mjs";

function productDetailsTemplate(product) {
  return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Images.PrimaryLarge}"
      alt="${product.NameWithoutBrand}"
    />
    <p class="product-card__price">$${product.FinalPrice}</p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div></section>`;
}
=======
import { setLocalStorage, getLocalStorage, alertMessage, removeAllAlerts } from './utils.mjs';
>>>>>>> 46e19e530c10488c7398d9467e5d80fe410e9b71

export default class ProductDetails {
  constructor(productId, dataSource, productDetailsTemplate) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
    this.productDetailsTemplate = productDetailsTemplate;
  }
<<<<<<< HEAD
=======
  addToCart() {
    removeAllAlerts()
    cartIconAnimation()
    alertMessage("The product was added to the cart")
    
    // Retrieve the current cart from localStorage
    let cart = getLocalStorage("so-cart") || [];

    // Check if the product is already in the cart
    const existingItemIndex = cart.findIndex((item) => item.Id === this.product.Id);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].Quantity += 1;
    } else {
      const newItem = { ...this.product, Quantity: 1 };
      cart.push(newItem);
    }

    // Save the updated cart back to localStorage
    setLocalStorage("so-cart", cart);
  }

  renderProductDetails() {
    document.querySelector(".product-detail").innerHTML = this.productDetailsTemplate(this.product);
  }

>>>>>>> 46e19e530c10488c7398d9467e5d80fe410e9b71
  async init() {
    // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    this.product = await this.dataSource.findProductById(this.productId);
    // once we have the product details we can render out the HTML
    this.renderProductDetails("main");
    // once the HTML is rendered we can add a listener to Add to Cart button
    // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
  }
  addToCart() {
    let cartContents = getLocalStorage("so-cart");
    //check to see if there was anything there
    if (!cartContents) {
      cartContents = [];
    }
<<<<<<< HEAD
    // then add the current product to the list
    cartContents.push(this.product);
    setLocalStorage("so-cart", cartContents);
  }
  renderProductDetails(selector) {
    const element = document.querySelector(selector);
    element.insertAdjacentHTML(
      "afterBegin",
      productDetailsTemplate(this.product)
    );
  }
}
=======
}

function cartIconAnimation() {
  const cartIcon = document.querySelector('.cart');

  cartIcon.classList.add('cart-icon-animate');

  setTimeout(() => {
    cartIcon.classList.remove('cart-icon-animate');
  }, 500); // Match the duration of the animation
}
>>>>>>> 46e19e530c10488c7398d9467e5d80fe410e9b71
