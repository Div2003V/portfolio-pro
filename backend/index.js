// backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// A simple health-check route
app.get('/', (req, res) => {
  res.send('Divyansh Portfolio Backend is Running');
});

// Placeholder for your future "Contact Me" email API
app.get('/api/status', (req, res) => {
  res.json({ message: "System Online", version: "1.0.0" });
});

app.get('/api/projects', (req, res) => {
    res.json([
      { name: "RAG Project", status: "Deployed", version: "1.0.1" },
      { name: "Portfolio", status: "Live", version: "2.0.0" }
    ]);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});