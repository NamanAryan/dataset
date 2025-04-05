const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const data = require('./data.json');

// Root route
app.get('/', (req, res) => {
  res.send('API is running. Visit /api/data to see the JSON.');
});

// JSON API route
app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
