

// Select the submit button element
const submitBut = document.getElementById('submitBut');

// Add an event listener to the submit button
submitBut.addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Select the email or phone input field
    const emailOrPhoneInput = document.getElementById('email_or_Nphone');

    // Get the value entered by the user
    const inputValue = emailOrPhoneInput.value;

    // Regular expressions for email and phone number validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{8}$/; // Assuming a 8-digit phone number format

    // Check if the input value matches the email or phone number pattern
    if (emailRegex.test(inputValue) || phoneRegex.test(inputValue)) {
        // If the input is valid, you can submit the form or perform any other action
        alert('Form submitted successfully!');
        // Here, you can submit the form using AJAX or fetch API, or perform any other action
        window.location.href="success.html"

    } else {
        // If the input is invalid, display an error message to the user
        alert('Please enter a valid email address or phone number.');
        // You can also update the UI to indicate the error, e.g., by changing the input border color
        emailOrPhoneInput.style.borderColor = 'red';
    }
});








