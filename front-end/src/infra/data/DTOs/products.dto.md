# contrato de troca de informações entre frontend e backend na rota Products

## Frontend request

```Javascript
// rota /products :: get

header: {},
body: {}
```

## Backend response

```Javascript
// rota /products :: get

header: {
  statusCode: 200
  },
body: {
  [
    {
      "id":1,
      "name":"Skol Lata 250ml",
      "price":"2.20","url_image":"../../images/skol_lata_350ml.jpg"
    },
    {
        "id":2,
        "name":"Heineken 600ml",
        "price":"7.50",
        "url_image":"../../images/heineken_600ml.jpg"
    },
    {
      "id":3,
      "name":"Antarctica Pilsen 300ml",
      "price":"2.49",
      "url_image":"../../../images/antarctica_pilsen_300ml.jpg"
    },
      ...more{},{},{},
  ]
}

```
