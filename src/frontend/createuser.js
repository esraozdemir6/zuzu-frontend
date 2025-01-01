document.addEventListener('DOMContentLoaded', () => {
    const createForm = document.getElementById('createAccountForm');

    createForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get the values from the form fields
        const name = document.getElementById('create#name').value;
        const email = document.getElementById('create#email').value;
        const password = document.getElementById('create#password').value;
        const address = document.getElementById('create#address').value;
        const phoneNumber = document.getElementById('create#phoneNumber').value;

        // Call the loginUser function with the form data
        createUser(email, password, name, address, phoneNumber);
    });
});

async function createUser(email, password, name, address, phoneNumber) {
    const apiUrl = 'http://localhost:8080/api/users'; // API endpoint
    const redirectUrl = '/signin.html'; // Page to redirect after successful login

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, name, address, phoneNumber}), // Request body
        });

        if (!response.ok) {
            // Handle non-200 HTTP status codes
            const errorData = await response.json();
            throw new Error(errorData.message || 'Create failed');
        }

        const data = await response.json();
        console.log('Create successful:', data); // Optional: Log the response

        // Redirect to another page on success
        window.location.href = redirectUrl;
    } catch (error) {
        console.error('Error during creation:', error.message);
        alert('User creation failed: ' + error.message); // Show an error message to the user
    }
}
