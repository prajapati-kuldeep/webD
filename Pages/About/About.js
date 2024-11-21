// JavaScript for handling form submission (can be enhanced with validation, AJAX, etc.)
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you for contacting us, ${name}! We will respond to your message soon.`);
    document.getElementById('contact-form').reset();
});
