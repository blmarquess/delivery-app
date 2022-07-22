# Contrato de troca de informações entre frontend e backend na rota Order Create

## Frontend request

```Javascript
// rota /order :: post

header: {
  authorization:"JWT.TOKEN.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpCJ9.exemple",
},
body: {
  {
    user: "email@exemple.com",
    sellerId: 1,
    address,
    number,
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
  }
}
```

## Backend response

```Javascript
// rota /order :: post

header: {
  statusCode: 201
  },
body: {
  {
    orderID: "0001"
  }
}
````
