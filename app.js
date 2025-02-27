import React, { useState } from 'react';

function App() {
  const [userId, setUserId] = useState(null);
  const [message, setMessage] = useState('');

  // Simulate Passage Flex/WebAuthn registration
  const register = async () => {
    try {
      // Mock WebAuthn call (in reality, Passage Flex handles this)
      const publicKey = {
        challenge: new Uint8Array(32), // Random challenge (simplified)
        rp: { name: 'PassKeyGuard', id: 'localhost' },
        user: { id: new Uint8Array(16), name: 'testuser', displayName: 'Test User' },
        pubKeyCredParams: [{ type: 'public-key', alg: -7 }],
      };
      const credential = await navigator.credentials.create({ publicKey });
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: credential.id,
          publicKey: btoa(String.fromCharCode(...new Uint8Array(credential.response.getPublicKey()))),
        }),
      });
      const data = await response.json();
      setUserId(data.userId);
      setMessage('Registered successfully!');
    } catch (error) {
      setMessage('Registration failed: ' + error.message);
    }
  };

  // Simulate login
  const login = async () => {
    try {
      const challenge = new Uint8Array(32); // Mock challenge
      const credential = await navigator.credentials.get({
        publicKey: { challenge, rpId: 'localhost' },
      });
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: credential.id }),
      });
      const data = await response.json();
      setMessage(data.success ? 'Logged in!' : 'Login failed.');
    } catch (error) {
      setMessage('Login failed: ' + error.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>PassKeyGuard</h1>
      <button onClick={register} disabled={userId}>Register</button>
      <button onClick={login} disabled={!userId}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
