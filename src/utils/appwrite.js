import { Client, Account } from 'appwrite';

// Initialize the Appwrite client
const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
  .setProject('669a5b6f00373897d7fe'); // Your project ID

const account = new Account(client);

// Function to handle Google login
const loginWithGoogle = async () => {
  try {
    // Initiate the OAuth2 login with Google
    await account.createOAuth2Session(
      'google', // OAuth2 provider
      'http://localhost:5173/callback' // URL to redirect to after successful login
     
    );
  } catch (error) {
    console.error('Login error:', error);
  }
};

// Export the function for use in your app
export default loginWithGoogle;
