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


  