document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get the values from the form fields
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Call the loginUser function with the form data
        loginUser(email, password);
    });
});

async function loginUser(email, password) {
    const apiUrl = 'http://localhost:8080/api/users/login'; // API endpoint
    const redirectUrl = '/menu.html'; // Page to redirect after successful login

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }), // Request body
        });

        if (!response.ok) {
            // Handle non-200 HTTP status codes
            const errorData = await response.json();
            throw new Error(errorData.message || 'Login failed');
        }

        const data = await response.json();
        console.log('Login successful:', data); // Optional: Log the response

        // Redirect to another page on success
        window.location.href = redirectUrl;
    } catch (error) {
        console.error('Error during login:', error.message);
        alert('Login failed: ' + error.message); // Show an error message to the user
    }
}
