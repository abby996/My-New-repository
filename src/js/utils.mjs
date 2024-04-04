
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// helper to get parameter strings
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

// function to take a list of objects and a template and insert the objects as HTML into the DOM
export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  const htmlStrings = list.map(templateFn);
  // if clear is true we need to clear out the contents of the parent.
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

// function to take an optional object and a template and insert the objects as HTML into the DOM
export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.insertAdjacentHTML("afterbegin", template);
  //if there is a callback...call it and pass data
  if (callback) {
    callback(data);
  }
}
async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// function to dynamically load the header and footer into a page
export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("../partials/header.html");
  const headerElement = document.querySelector("#main-header");
  const footerTemplate = await loadTemplate("../partials/footer.html");
  const footerElement = document.querySelector("#main-footer");

  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

// get product from query string
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param)
  return product
}
// render html with a template function
export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {
  const targetElement = document.querySelector(parentElement);

  if (clear) {
    targetElement.innerHTML = ""; // Clear out the contents if clear is true
  }

  const htmlStrings = list.map(templateFn);
  targetElement.insertAdjacentHTML(position, htmlStrings.join(''));
}
// render html with a template function
export function renderWithTemplate(template, parentElement) {
  const targetElement = document.querySelector(parentElement);
  targetElement.insertAdjacentHTML("afterbegin", template);
}

// load the header and footer
export async function loadTemplate(path) {
  const html = await getTemplate(path)
  const template = document.createElement('template');
  template.innerHTML = html;
  return html;
}
// load the header and footer
export async function loadHeaderFooter(headerId,footerId,headerDom,footerDom) {
  const header = await loadTemplate(headerDom)
  const footer =  await loadTemplate(footerDom)

  renderWithTemplate(header, headerId)
  renderWithTemplate(footer, footerId)
}
// fetch DOM from partials
function getTemplate(path) {
  return fetch(path)
    .then(convertToText)
    .then((data) => data);
}
function convertToText(res) {
  if (res.ok) {
    return res.text();
  } else {
    throw new Error("Bad Response");
  }
}
// Custom Alert Message
export function alertMessage(message, scroll = true) {
  // Create element to hold our alert
  const alert = document.createElement('div');
  alert.classList.add('alert');
  // Set the contents. Include a message and an X for closing the alert
  alert.innerHTML = `${message} <span class="close-btn">&times;</span>`;
  alert.addEventListener('click', function(e) {
    if(e.target.classList.contains('close-btn')) { // Checks if the clicked element is our "X"
      this.remove(); // or use main.removeChild(this) if this does not work in your environment
    }
  });

  // Add the alert to the top of main
  const main = document.querySelector('main');
  main.prepend(alert);

  // Make sure they see the alert by scrolling to the top of the window
  if(scroll) {
    window.scrollTo(0,0);
  }
}

export function removeAllAlerts() {
  // Select all elements with the class 'alert'
  const alerts = document.querySelectorAll('.alert');

  // Loop through the NodeList of alerts and remove each from the DOM
  alerts.forEach(alert => alert.remove());
<<<<<<< HEAD
}





// Function to add item to the list
function addItem(name, price) {
  // Create a new list item
  var newItem = document.createElement('li');
  newItem.textContent = name + ': $' + price.toFixed(2);
  
  // Add the item to the selected items list
  var selectedItemsList = document.getElementById('selected-items-list');
  selectedItemsList.appendChild(newItem);
  
  // Update total price
  var totalPriceElement = document.getElementById('total-price');
  var totalPrice = parseFloat(totalPriceElement.textContent.substr(1)); // Remove '$' and convert to number
  totalPrice += price;
  totalPriceElement.textContent = '$' + totalPrice.toFixed(2);
=======
>>>>>>> 46e19e530c10488c7398d9467e5d80fe410e9b71
}