// Simple Node.js server for the bookstore
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static('.'));

// Handle cart route
app.get('/cart.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'cart.html'));
});

// Handle product detail route
app.get('/product-detail.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'product-detail.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Tủ Sách Online server running at http://localhost:${port}`);
    console.log('Open your browser and go to: http://localhost:3000');
});
