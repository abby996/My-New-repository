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
