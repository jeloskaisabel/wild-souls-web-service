const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;
const host = '0.0.0.0';  // Escuchar en todas las interfaces de red

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Leer archivos JSON
let categories = [];
let products = [];

fs.readFile('categories.json', 'utf8', (err, data) => {
  if (err) throw err;
  categories = JSON.parse(data);
});

fs.readFile('products.json', 'utf8', (err, data) => {
  if (err) throw err;
  products = JSON.parse(data);
});

// Routes
app.get('/categories/getAll', (req, res) => {
  res.json({ categories });
});

app.get('/categories/products/:categoryId', (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const categoryProducts = products.filter(product => product.categoryId === categoryId);
  res.json({ products: categoryProducts });
});

app.get('/products/getAll', (req, res) => {
  res.json({ products });
});

app.get('/products/getProduct/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  if (product) {
    res.json({ product });
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});

// Ruta para buscar productos
app.get('/products/search', (req, res) => {
  const query = req.query.query.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.product_name.toLowerCase().includes(query)
  );
  res.json({ products: filteredProducts });
});

// Start server
app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});
