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

// script.js

// Select the submit button element
const submitButton = document.getElementById('submitButton');

// Add an event listener to the submit button
submitButton.addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Select the email or phone input field
    const emailOrPhoneInput = document.getElementById('email_or_phone');

    // Get the value entered by the user
    const inputValue = emailOrPhoneInput.value;

    // Regular expressions for email and phone number validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number format

    // Check if the input value matches the email or phone number pattern
    if (emailRegex.test(inputValue) || phoneRegex.test(inputValue)) {
        // If the input is valid, you can submit the form or perform any other action
        alert('Form submitted successfully!');
        // Here, you can submit the form using AJAX or fetch API, or perform any other action
    } else {
        // If the input is invalid, display an error message to the user
        alert('Please enter a valid email address or phone number.');
        // You can also update the UI to indicate the error, e.g., by changing the input border color
        emailOrPhoneInput.style.borderColor = 'red';
    }
});




document.getElementById('submit').addEventListener('click', function() {
  // Show a confirmation message
  alert('Thank you for your message! a technician will text you back. ');
  
});


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
