import { loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

<<<<<<< HEAD
function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}
=======
loadHeaderFooter(
  "#main-header",
  "#main-footer",
  "../partials/headerInternal.html",
  "../partials/footer.html",
);
>>>>>>> 46e19e530c10488c7398d9467e5d80fe410e9b71

const cartTemplate = function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img
        src="${item.Images.PrimaryMedium}"
        alt="${item.Name}"
      />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">Quantity:${item.Quantity}</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
  </li>`;

  return newItem;
};

const shoppingCart = new ShoppingCart("so-cart", ".product-list", cartTemplate);
shoppingCart.init();
