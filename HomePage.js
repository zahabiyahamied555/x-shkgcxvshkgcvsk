import React from 'react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const validUserIds = ['user123', 'student456']; // Example valid IDs

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validUserIds.includes(loginId)) {
      history.push('/next');
    } else {
      alert('Invalid login ID!');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Login ID"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default HomePage;
