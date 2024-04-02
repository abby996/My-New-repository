
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import { loadHeaderFooter,getParam } from "./listitem.js";







loadHeaderFooter();
const productId = getParam("product");
const product = new ProductDetails(productId, dataSource);
// first create an instance of our ProductData class.
const dataSource = new ProductData("Laptop");
product.init();