


// Navigation menu

const hamButton = document.querySelector('#menu');

const navigation = document.querySelector('.navigation');
const main = document.querySelector("main1");

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');

    
        if (modeButton.textContent.includes("☰")) {
            main.style.background = "#000";
            main.style.color = "#fff";
            modeButton.textContent = "❎";
        } else {
            main.style.background = "#eee";
            main.style.color = "#000";
            modeButton.textContent = "☰";
        }
    });
;


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


