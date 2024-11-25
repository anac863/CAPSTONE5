// Script for event registration form
const form = document.getElementById('registrationForm');
const responseMessage = document.getElementById('responseMessage');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Capture user input
    const event = document.getElementById('event').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Display a success message
    responseMessage.textContent = `Thank you for registering, ${name}! We'll reach out to you at ${email}.`;

    // Optionally log details (for development purposes)
    console.log(`Event Name: ${event}, Name: ${name}, Email: ${email}, Phone: ${phone}`);

    // Clear the form
    form.reset();
});
