# Freshworks API SDK for Node.js

A Node.js SDK to interact with [Freshworks public REST APIs](https://developers.freshworks.com/documentation/). This SDK can be used from a Node.js application hosted outside the Freshworks ecosystem, as well as from a serverless Freshworks app.

With the initial release, this SDK supports only the [Freshteam REST API](https://developers.freshteam.com/api/).

## API support

| Product        | Status |
| -------------- | ------ |
| Freshteam      | ✅     |
| Freshdesk      | -      |
| Freshworks CRM | -      |

## Getting Started

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
    "@freshworks/api-sdk": "0.1.0"
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
