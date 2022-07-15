const express = require('express');
const cors = require('cors');
const DB_USERS = require('./mock/login');
const DB_PRODUCTS = require('./mock/products');

const api = express();
const RES_OK = 200;
const RES_BAD = 401;
const PORT_API = 3001;
const fakeLoginResponseAdmin = {
  id: 42, name: 'Katia', token: 'sfhakjsdhfqwe123', role: 'admin',
};

const fakeLoginResponseCustomer = {
  id: 12, name: 'Kayla', token: 'gthsf234sdf2afst', role: 'costumer',
};
const fakeLoginResponseSeller = {
  id: 102, name: 'Camila', token: 'lopsfh09asd098sd', role: 'costumer',
};

api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use(cors());

api.get('/', (_req, res) => res.status(RES_OK).json({ message: 'API is running' }));

api.post('/loginAdmin', (_req, res) => {
  res.status(RES_OK).json(fakeLoginResponseAdmin);
});
api.post('/loginSeller', (_req, res) => {
  res.status(RES_OK).json(fakeLoginResponseSeller);
});
api.post('/loginCustomer', (_req, res) => {
  res.status(RES_OK).json(fakeLoginResponseCustomer);
});

api.post('/loginBAD', (_req, res) => {
  res.status(RES_BAD).json({ message: 'Invalid email or password' });
});

api.post('/validate', (req, res) => {
  const { token } = req.body;

  if (token) {
    res.status(RES_OK).json(fakeLoginResponseAdmin.role);
  } else {
    res.status(RES_BAD).json({ message: 'Invalid token' });
  }
});

api.post('/login', (req, res) => {
  const { username, password } = req.body;
  const hasUserInDB = DB_USERS
    .find((user) => user.username === username && user.password === password);
  if (hasUserInDB) {
    return res.status(RES_OK).json(hasUserInDB);
  } return res.status(RES_BAD).json({ message: 'Invalid email or password' });
});

api.get('/products', (_req, res) => res.status(RES_OK).json(DB_PRODUCTS));

api.listen(PORT_API, () => console.log('Fake API running on port ', PORT_API));
