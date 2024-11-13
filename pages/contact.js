// Initialize EmailJS with your User ID
(function() {
    emailjs.init('2bAmUgg9JRMSKxQhTlyGr');
})();

function sendEmail() {
    const templateParams = {
        to_name: 'Recipient Name',  // Update this if you want it to be dynamic
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        reply_to: document.getElementById('email').value
    };

    emailjs.send('service_eha3z9h', 'template_oohl12r', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully!');
        }, function(error) {
            console.error('FAILED...', error);
            alert('Failed to send email. Please check the console for details.');
        });
}

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
    sendEmail();
});
