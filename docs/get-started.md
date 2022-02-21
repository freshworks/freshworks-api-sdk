---
title: Get started
prev: /
next: /freshteam/
---

# Get started

## Install

### Installing in a Node.js project

Installing in a Node.js project needs you to install the `@freshworks/api-sdk` package:

```
npm install --save @freshworks/api-sdk
```

### Installing in a Freshworks app

To use this library in a Freshworks app, add the following to the `"dependencies"` object in `manifest.json`:

```js
{
  // ...
  "dependencies": {
    "@freshworks/api-sdk": "0.2.0"
  }
}
```

Then, allow the app to communicate with the domain for the product's REST API that you would be using (currently, only Freshteam). To do this, update the `"whitelisted-domains"` array in `manifest.json`:

```js
{
  // ...
  "whitelisted-domains": ["https://*.freshteam.com"]
}
```

The Freshworks CLI (`fdk`) will fetch the dependency next time you run `fdk run`.

## Sample code

- [A sample Freshteam app](https://github.com/freshworks-developers/api-sdk-samples/tree/main/freshteam-app)

## Next step

- See how to use the [API SDK for Freshteam](freshteam).
