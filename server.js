// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (HTML and CSS)
app.use(express.static(path.join(__dirname, 'public')));

// REST endpoint returning JSON data
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello, world!', status: 'success' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
