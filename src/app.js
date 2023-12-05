
const express = require('express');
const app = express();


const LoginRoutes = require('./routes/LoginRoutes');
const IDRoutes = require('./routes/IDRoutes');
const CompraRoutes = require('./routes/CompraRoutes');


app.use(express.json());


app.use('/api/Login', LoginRoutes);
app.use('/api/ID', IDRoutes);
app.use('/api/Compra', CompraRoutes);

module.exports = app;
