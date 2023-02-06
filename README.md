# GraphQL Server Example

To regenerate the schema:

```
  npm run print-schema
```

To start the server:

```
  npm run server
```

Play

Open http://localhost:8080/graphql

Sample query
```
query {
  transactions {
    merchant
    description
  }
}
```

