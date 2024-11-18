import React from 'react';
import React, { useState } from 'react';

function LoginForm() {
  // State variables to store the login ID and password entered by the user
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // For storing error message if login fails
  
  // Hardcoded login credentials (in a real application, this would be fetched from a database)
  const savedLoginId = 'user123';
  const savedPassword = 'password123';

  // Function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the page from reloading
    
    // Validate the entered credentials
    if (loginId === savedLoginId && password === savedPassword) {
      // Redirect to the next page or show success
      window.location.href = '/nextPage'; // This will redirect to '/nextPage'
    } else {
      // Show error message if credentials don't match
      setError('Invalid login ID or password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginId">Login ID:</label>
          <input
            type="text"
            id="loginId"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      
      {/* Display error message if login fails */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default LoginForm;
