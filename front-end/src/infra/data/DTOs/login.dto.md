# Contrato de troca de informações entre frontend e backend na rota Login

## Frontend request

```Javascript
// rota /login :: post

header: {},
body: {
  {
    email: "email@exemple.com",
    password: "password"
  }
}
```

## Backend response

```Javascript
// rota /login :: post

header: {
  statusCode: 200
  },
body: {
  {
    name: "exemple user",
    email: "exemple@email.com",
    token:"JWT.TOKEN.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpCJ9.exemple",
    role: "admin"
  }
}
```
