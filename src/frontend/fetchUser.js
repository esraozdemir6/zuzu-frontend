// Function to make a GET request to localhost:8080/api/user
async function getUser() {
 const apiUrl = 'http://localhost:8080/api/users/1';
 try {
      // Fetch data from the API
      const response = await fetch(apiUrl);

      // Check if the request was successful
      if (!response.ok) {
           throw new Error('HTTP error! status: ', response.status)
      }

      // Parse the JSON data from the response
      const data = await response.json();

      // Log the response data to the console
      console.log('User data:', data);
  } catch (error) {
      console.error('Error fetching user data:', error);
  }
}
