---
title: Get started
prev: /
next: /freshteam/
---

# Get started

This project is a Node.js SDK used to interact with [Freshworks public REST APIs](https://developers.freshworks.com/documentation/). Refer to below sections to get started with.

> **:warning: WARNING:**
> While accessing API references and Object references, kindly open the links in new tab to avoid unexpected site behaviour!

## Install

### Installing in a Node.js project

Installing in a Node.js project needs you to install the [`@freshworks/api-sdk`](https://github.com/freshworks/freshworks-api-sdk) package:

```sh
npm install --save @freshworks/api-sdk
```

### Installing in a Freshworks app

To use this library in a Freshworks app, add the following to the `"dependencies"` object in `manifest.json`:

```js
{
  // ...
  "dependencies": {
    "@freshworks/api-sdk": "0.2.1"
  }
}
```

Then, allow the app to communicate with the domain for the product's REST API that you would be using (currently, only Freshteam and Freshservice). To do this, update the `"whitelisted-domains"` array in `manifest.json`:

```js
{
  // ...
  "whitelisted-domains": ["https://*.freshteam.com", "https://*.freshservice.com"]
}
```

The Freshworks CLI (`fdk`) will fetch the dependency next time you run `fdk run`.

## Sample code

- [A sample Freshteam app](https://github.com/freshworks-developers/api-sdk-samples/tree/main/freshteam-app)
- [A sample Freshservice app](https://github.com/freshworks-developers/api-sdk-samples/tree/main/freshservice-app)

## Next step

- See how to use the [API SDK for Freshteam](freshteam).
- See how to use the [API SDK for Freshservice](freshservice).
