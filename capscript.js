// Select the form and the response message container
const form = document.getElementById('registrationForm');
const responseMessage = document.getElementById('responseMessage');

// Add an event listener for form submission
form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior (page refresh)
    event.preventDefault();

    // Capture input values
    const eventName = document.getElementById('event').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Log the captured values (optional for debugging)
    console.log(`Event: ${eventName}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);

    // Display a success message to the user
    responseMessage.textContent = `Thank you for registering, ${name}! 
        You've signed up for "${eventName}". We’ll contact you at ${email}.`;

    // Clear the form fields
    form.reset();
});
