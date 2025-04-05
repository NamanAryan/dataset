const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const data = require('./data.json'); 

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
