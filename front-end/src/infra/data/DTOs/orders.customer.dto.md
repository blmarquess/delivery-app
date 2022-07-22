# Contrato de troca de informações entre frontend e backend na rota Order Customers List

## Frontend request

```Javascript
// rota /orders/customer/:id :: get

header: {
  authorization:"JWT.TOKEN.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpCJ9.exemple",
},
body: {}
```

## Backend response

```Javascript
// rota orders/customer/:id :: get

header: {
  statusCode: 200
  },
body: [
  {
    id: "00101",
    status,
    data,
    totalPrice,
    productsOrder:[
      {
        productID: "2",
        quantity: "10",
      },
      {
        productID: "3",
        quantity: "5",
      }
    ]
  },
  {
    id: "00121",
    productsOrder:[
      {
        productID: "1",
        quantity: "1",
      },
      {
        productID: "2",
        quantity: "10",
      },
      {
        productID: "3",
        quantity: "5",
      }
    ]
  },
  {
    id: "00122",
    productsOrder:[
      {
        productID: "2",
        quantity: "10",
      },
      {
        productID: "3",
        quantity: "5",
      }
    ]
  }
]
````
