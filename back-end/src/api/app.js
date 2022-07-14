const express = require('express');
const cors = require('cors');
const loginRouter = require('../routes/login.route');
const { productRouter } = require('../routes/product.route');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/login', loginRouter);
app.use('/products', productRouter)

app.use((err, _req, res, _next) => {
  console.log(err);

  return res.status(500).json({
    error: 'internal server error',
  });
});

module.exports = app;
