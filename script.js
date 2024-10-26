document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you would typically send the form data to a server
    alert(`Thank you for your message, ${name}! We'll get back to you shortly.`);
    
    // Clear the form
    document.getElementById('contactForm').reset();
});
