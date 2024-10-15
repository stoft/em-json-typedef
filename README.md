# Event Model JSON TypeDef

A [JSON Typedef](https://jsontypedef.com) schema of an [Event Model](https://eventmodeling.org).

Experimental.

The main development is done in [event-model.ts](src/event-model.ts) since that gives the best type support.

Big thanks to @dilgerma for sharing his example JSON.

## Development

### Run tests

```sh
deno task test
```

### Run tests in watch mode

```sh
deno test test-watch
```

### Generate the schema

```sh
deno task generate-schema
```