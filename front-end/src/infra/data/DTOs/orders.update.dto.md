# Contrato de troca de informações entre frontend e backend na rota Order Update Status

## Frontend request

```Javascript
// rota /order/:id :: put
// Pendente - Preparando - Trânsito - Entregue

header: {
  authorization:"JWT.TOKEN.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpCJ9.exemple",
},
body: {
    orderStatus: "Trânsito",
  }
```

## Backend response

```Javascript
// rota /order/:id :: put

header: {
  statusCode: 200
  },
body: {}
````
