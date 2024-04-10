// Function to calculate total price
function calculateTotalPrice() {
  let totalPrice = 0;
  // Iterate over all product buttons
  document.querySelectorAll('.productButton').forEach(function(button) {
      // Get the price of the product from its data attribute
      const price = parseFloat(button.getAttribute('data-price'));
      // Get the quantity chosen by the customer
      const quantity = parseInt(button.dataset.quantity) || 0;
      // Add the product's price multiplied by its quantity to the total price
      totalPrice += price * quantity;
  });
  return totalPrice.toFixed(2);
}

// Function to update the list of selected items in the cart
function updateSelectedItems() {
  // Clear the existing list
  const selectedItemsList = document.getElementById('selected-items-list');
  selectedItemsList.innerHTML = '';

  let total = 0;

  // Iterate over all product buttons
  document.querySelectorAll('.productButton').forEach(function(button) {
      // Get the quantity chosen by the customer
      const quantity = parseInt(button.dataset.quantity) || 0;
      // If the quantity is greater than 0, add the product to the selected items list
      if (quantity > 0) {
          const productName = button.textContent.trim().split('   ')[0]; // Extracting product name
          const price = parseFloat(button.getAttribute('data-price'));
          const productTotal =  price * quantity;

          // Create list item for the product
          const listItem = document.createElement('li');
          listItem.textContent = `${productName} x ${quantity} ($${productTotal.toFixed(2)})`;
          selectedItemsList.appendChild(listItem);

          // Add to the total
          total += productTotal;
      }
  });

  // Update total price
  document.getElementById('totalPrice').textContent = `$${total.toFixed(2)}`;
}


// Event Listeners for each product button
document.querySelectorAll('.productButton').forEach(function(button) {
  button.addEventListener('click', function() {
      // Increment the quantity of the product each time the button is clicked
      button.dataset.quantity = parseInt(button.dataset.quantity) + 1 || 1;
      // Calculate and display the total price
      const totalPrice = calculateTotalPrice();
      document.getElementById('totalPrice').textContent = "$" + totalPrice;
      // Update the list of selected items in the cart
      updateSelectedItems();
  });
});

// Event listener for the checkout button
document.getElementById('checkoutButton').addEventListener('click', function() {
  // Show a confirmation message
  alert('Thank you for your order! Proceeding to checkout...');
  // Redirect to the checkout page
  window.location.href = "checkoutProduct.html";
});




document.getElementById('submit').addEventListener('click', function() {
  // Show a confirmation message
  alert('Thank you for your message! a technician will text you back. ');
  
});

/*
document.addEventListener('DOMContentLoaded', function() {
  const hamButton = document.querySelector('#menu');
  const navigation = document.querySelector('.navigation'); // Assuming this is correct in your HTML
  const main = document.querySelector('main'); // Assuming you have a <main> element

  hamButton.addEventListener('click', () => {
      navigation.classList.toggle('open');
      hamButton.classList.toggle('open');

      if (hamButton.textContent.includes("☰")) {
          main.style.background = "#000";
          main.style.color = "#fff";
          hamButton.textContent = "❎";
      } else {
          main.style.background = "#eee";
          main.style.color = "#000";
          hamButton.textContent = "☰";
      }
  });
});
*/





async function fetchJSONData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching JSON data:", error);
    throw error;
  }
}

// Example POST method implementation:
async function postData(url = "", data = {}) {
  try {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json(); // parses JSON response into native JavaScript objects
  } catch (error) {
    console.error('Error:', error);
    // Handle error here, e.g., display a message to the user
    alert('An error occurred while processing your request. Please try again later.');
  }
}

// Usage example:
fetchJSONData("https://example.com/information.json")
  .then((data) => {
    console.log('Success:', data);
    // Handle success response here
  })
  .catch((error) => {
    console.error('Error:', error);
    // Handle error here
  });

postData("https://innotechplus1@gmail.com/answer", { answer: 42 })
  .then((data) => {
    console.log('Success:', data);
    // Handle success response here
  })
  .catch((error) => {
    console.error('Error:', error);
    // Handle error here
  });


const express = require('express');
const app = express();

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Your other routes and middleware
// ...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




// Function to fetch products data from JSON file
async function fetchProducts() {
  try {
    const response = await fetch('products.json');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    // Handle error here, e.g., display a message to the user
    alert('An error occurred while fetching products. Please try again later.');
    return [];
  }
}

// Function to display products on the page
function displayProducts(products) {
  const productsContainer = document.getElementById('products');
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <img src="../images/${product.name.toLowerCase().replace(' ', '-')}.jfif" alt="${product.name}">
      <p>${product.name}: $${product.price}</p>
      <button class="productButton" data-price="${product.price}">Add to Cart</button>
    `;
    productsContainer.appendChild(productDiv);
  });
}

// Fetch products data and display them on page load
document.addEventListener('DOMContentLoaded', async () => {
  const products = await fetchProducts();
  displayProducts(products);
});

// Add event listener for product buttons (if needed)
document.addEventListener('click', event => {
  if (event.target.classList.contains('productButton')) {
    // Handle product button click here
  }
});





