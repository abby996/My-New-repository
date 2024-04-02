
 addItem=document.getElementById('button')
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
  totalPrice = isNaN(totalPrice) ? 0 : totalPrice; // Check if totalPrice is NaN, set to 0 if so
  totalPrice += price;
  totalPriceElement.textContent = '$' + totalPrice.toFixed(2);
}

async function postJSON(data) {
  try {
    const response = await fetch("https://example.com/profile", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const data = { username: "example" };
postJSON(data);

