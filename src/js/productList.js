<<<<<<< HEAD
import ProductData from "./ProductData.js";
import { renderListWithTemplate } from "./utils.mjs";




export default class ProductList {
  constructor(category, listElement, productCardTemplate) {
    this.category = category;
    this.products = [];
    this.dataSource;
    this.listElement = listElement;
    this.productCardTemplate = productCardTemplate;
  }

  filterTents() {
    const uniqueTents = [];
    
    this.products.forEach(product => {
      const isUnique = !uniqueTents.some(uniqueProduct => uniqueProduct.Name === product.Name);
      if (isUnique) {
        uniqueTents.push(product);
      }
    });

    this.products = uniqueTents.slice(0, 4);
  }

  renderProductList() {
    renderListWithTemplate(this.productCardTemplate, this.listElement, this.products);
  }

  async init() {
    const list = await this.dataSource.getData(this.category);
    this.products = await this.dataSource.getData();
    this.filterTents()
    this.renderProductList()
  }

  renderList(list) {
    const htmlStrings = list.map(productCardTemplate);
    this.listElement.insertAdjacentHTML('afterbegin', htmlStrings.join(''));
  }

  
}

listElement(index.html)

function productCardTemplate(product) {
    return `<li class="product-card">
      <a href="product_pages/index.html?product=">
      <img
      src="${product.Image}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
        <h2 class="card__name">${product.Name}</h2>
        <p class="product-card__price">$${product.FinalPrice}</p>
      </a>
    </li>`
  }


  
=======
import { loadHeaderFooter, getParam } from "./utils.mjs";
import ProductList from "./ProductList.mjs";
import ExternalServices from "./ExternalServices.mjs";

loadHeaderFooter(
  "#main-header",
  "#main-footer",
  "../partials/headerInternal.html",
  "../partials/footer.html",
);

const productCardFunc = function (product) {
  return ` 
  <li class="product-card">
    <a href="../product_pages/index.html?product=${product.Id}">
      <img
        src=${product.Images.PrimaryMedium}
        alt=${product.Name}
      />
      <h3 class="card__brand">${product.Brand.Name}</h3>
      <h2 class="card__name">${product.NameWithoutBrand}</h2>
      <p class="product-card__price">${product.ListPrice}</p>
    </a>
  </li>
  `;
};

function formatCategory(category) {
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const productCategory = getParam("category");
const dataSource = new ExternalServices();
const productList = new ProductList(
  productCategory,
  dataSource,
  ".product-list",
  productCardFunc,
);

const categoryElement = document.querySelector(".product-category");
categoryElement.append(formatCategory(productCategory));
productList.init();
>>>>>>> 46e19e530c10488c7398d9467e5d80fe410e9b71
