import { renderListWithTemplate } from "./utils.mjs";

<<<<<<< HEAD
function productCardTemplate(product) {
  return `<li class="product-card">
  <a href="/product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Images.PrimaryMedium}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__price">$${product.FinalPrice}</p></a>
</li>`;
};

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

  //renderProductList() {
 //   renderListWithTemplate(this.productCardTemplate, this.listElement, this.products);
  //}

  async init() {
    // our dataSource will return a Promise...so we can use await to resolve it.
    const list = await this.dataSource.getData(this.category);
    // render the list
    this.renderList(list);
    //set the title to the current category
    document.querySelector(".title").innerHTML = this.category;
  }
  // render after doing the first stretch
  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }


  renderList(list) {
    const htmlStrings = list.map(productCardTemplate);
    this.listElement.insertAdjacentHTML('afterbegin', htmlStrings.join(''));
  }

  
}

// render before doing the stretch
  // renderList(list) {
  //   const htmlStrings = list.map(productCardTemplate);
  //   this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));
  // }


  
=======
export default class ProductList {
  constructor(category, dataSource, listElement, productCardTemplate, filter= true) {
    this.category = category;
    this.dataSource = dataSource;
    this.products = [];
    this.listElement = listElement;
    this.productCardTemplate = productCardTemplate;
    this.filter = filter;
  }

  filterProducts() {
    const uniqueProducts = [];
    const productNamesSet = new Set();
  
    this.products.forEach(product => {
      // Split the product name and take the first part to get the base product name
      const baseProductName = product.Name.split(' - ')[0];
      // Check if the base product name is already in our set
      if (!productNamesSet.has(baseProductName)) {
        uniqueProducts.push(product);
        productNamesSet.add(baseProductName);
      }
    });

    this.products = uniqueProducts;
  }

  renderProductList() {
    renderListWithTemplate(this.productCardTemplate, this.listElement, this.products);
  }

  async init() {
    this.products = await this.dataSource.getData(this.category);
    if (this.filter) {
      this.filterProducts()
    }
    this.renderProductList()
  }
}
>>>>>>> 46e19e530c10488c7398d9467e5d80fe410e9b71
