const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const DB_USERS = JSON
  .parse(fs
    .readFileSync(path
      .resolve(__dirname, './mock/login.json'), 'utf8'));
const DB_PRODUCTS = require('./mock/products');
const DB_SELLERS = require('./mock/sellers');

const api = express();
const RES_OK = 200;
const RES_CREATED = 201;
const RES_BAD = 401;
const PORT_API = 3001;

api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use(cors());

api.get('/', (_req, res) => res.status(RES_OK).json({ message: 'API is running' }));

api.post('/login', (req, res) => {
  const { email, password } = req.body;
  const hasUserInDB = DB_USERS
    .find((user) => user.email === email && user.password === password);
  if (hasUserInDB) {
    return res.status(RES_OK).json(hasUserInDB);
  } return res.status(RES_BAD).json({ message: 'Invalid email or password' });
});

api.get('/products', (_req, res) => res.status(RES_OK).json(DB_PRODUCTS));

api.get('/customer/checkout', (_req, res) => res.status(RES_OK).json(DB_SELLERS));

api.post('/register', (req, res) => {
  const { email, password, name } = req.body;
  try {
    const newDBUsers = [
      ...DB_USERS,
      { email, password, name, token: `jwt-${name}-token`, role: 'customer' },
    ];

    fs
      .writeFileSync(path
        .resolve(__dirname, './mock/login.json'), JSON
        .stringify(newDBUsers), 'utf8');
    return res.status(RES_CREATED).end();
  } catch (error) {
    console.log(error.message);
    return res.status(RES_BAD).json({ message: 'Error on register' });
  }
});

api.use(express.static('public'));

api.listen(PORT_API, () => console.log('Fake API running on port ', PORT_API));
