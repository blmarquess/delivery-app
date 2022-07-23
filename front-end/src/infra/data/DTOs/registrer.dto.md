# contrato de troca de informações entre frontend e backend na rota Register

## Frontend request

```Javascript
// rota /register :: post

header: {},
body: {
  {
    name: "fulano de tal",
    email: "email@exemple.com",
    password: "password
  }
}
```

## Backend response

```Javascript
// rota /register :: post

header: {
  statusCode: 201
  },
body: {
  {
    name: "fulano de tal",
    email: "email@exemple.com",
    token: "JWT.TOKEN.USER"
  }
}
```
