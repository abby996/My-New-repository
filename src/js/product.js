import ExternalServices from "./ExternalServices.mjs";
import ProductDetails from "./ProductDetails.mjs";
<<<<<<< HEAD
import { loadHeaderFooter,getParam } from "./utils.mjs";
=======
import { getParam, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter(
  "#main-header",
  "#main-footer",
  "../partials/headerInternal.html",
  "../partials/footer.html",
);

const productTemplate = function productDetailsTemplate(product) {
  const newProduct = `
      <h3>${product.Brand.Name}</h3>

      <h2 class="divider">${product.NameWithoutBrand}</h2>

      <img
        class="divider"
        src="${product.Images.PrimaryLarge}"
        alt="${product.Name}"
      />

      <p class="product-card__price">${product.FinalPrice}</p>

      <p class="product__color">${product.Colors[0].ColorName}</p>

      <p class="product__description">${product.DescriptionHtmlSimple}</p>

      <div class="product-detail__add">
        <button id="addToCart">Add to Cart</button>
      </div>
    `;
  return newProduct;
};
>>>>>>> 46e19e530c10488c7398d9467e5d80fe410e9b71







loadHeaderFooter();
const productId = getParam("product");
<<<<<<< HEAD
const product = new ProductDetails(productId, dataSource);
// first create an instance of our ProductData class.
const dataSource = new ProductData("tents");
product.init();
=======
const dataSource = new ExternalServices();

const productDetails = new ProductDetails(
  productId,
  dataSource,
  productTemplate,
);
productDetails.init();
>>>>>>> 46e19e530c10488c7398d9467e5d80fe410e9b71
