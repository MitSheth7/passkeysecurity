const express = require('express');
const app = express();
app.use(express.json());

const users = {}; // Mock database

app.post('/register', (req, res) => {
  const { id, publicKey } = req.body;
  const userId = 'user_' + Math.random().toString(36).slice(2);
  users[userId] = { id, publicKey }; // Store public key
  res.json({ userId });
});

app.post('/login', (req, res) => {
  const { id } = req.body;
  const user = Object.values(users).find(u => u.id === id);
  if (user) {
    // Simulate WebAuthn challenge verification (simplified)
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
