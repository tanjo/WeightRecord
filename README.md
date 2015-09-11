# WeightRecord

## API

### /record/index

```
{
  "data" : [
    {  
      "weight" : 20,
      "fat" : 10,
      "date" : "2015-09-11",
      "id" : "55f1029ec14dfc9517203a80"
    },
    {
      "weight" : 100,
      "fat" : 50,
      "date" : "2015-09-10",
      "id" : "55f0ffbaf0b1d301177e81fd"
    },
    {
      "weight" : 100,
      "fat" : 30,
      "date" : "2015-09-09",
      "id" : "55ef9a0dd31751264d8c1cf2"
    },
    {
      "weight" : 90,
      "fat" : 20,
      "date" : "2015-09-08",
      "id" : "55ef9a12d31751264d8c1cf3"
    },
    {
      "weight" : 80,
      "fat" : 10,
      "date" : "2015-09-07",
      "id" : "55ef9a17d31751264d8c1cf4"
    }
  ]
}
```

## Heroku

### config

```
heroku config:set BASIC_AUTH_WEIGHTRECORD_USERNAME=hogehoge
heroku config:set BASIC_AUTH_WEIGHTRECORD_PASSWORD=fugafuga
heroku config:set WEIGHTRECORD_MONGODB_URL=???
```
