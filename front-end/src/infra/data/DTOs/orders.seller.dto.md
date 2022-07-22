# Contrato de troca de informações entre frontend e backend na rota Order Sellers List

## Frontend request

```Javascript
// rota /orders/seller/:id :: get

header: {
  authorization:"JWT.TOKEN.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpCJ9.exemple",
},
body: {}
```

## Backend response

```Javascript
// rota orders/seller/:id :: get

header: {
  statusCode: 200
  },
body: [
  {
    id: "00101",
    customer: {
      id: 2,
      name: "Zé Birita",
      address: 'Rua da pitaia',
      number: 51,
    },
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
    customer: {
      id: 2,
      name: "Zé Birita",
      address: {
        street:"Rua do bar",
        neighborhood: "Pinguços",
        number: 51
      },
    },
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
    customer: {
      id: 4,
      name: "Manoel",
      address: {
        street:"Rua do Frango",
        neighborhood: "Portugal",
        number: 51
        },
      address: " nº 6",
    },
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
