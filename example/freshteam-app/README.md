# Sample Freshteam app using API SDK

This app showcases using the Freshteam API SDK on the Serverless component of the app.

## Functionality

* The app has multiple buttons on the UI that has respective actions done in the Serverless app through Server Method Invocation (SMI) feature in the platform.
* The SMI functions use the Freshteam API SDK to make API requests to Freshteam

### Steps to run app

1. Follow the steps in the documentation [here](https://developer.freshdesk.com/v2/docs/quick-start) to get started with the platform.
2. Execute the command, `fdk run` to run the app.
3. Go to your Freshteam account and open an employee page and attach "?dev=true" query parameter to the URL to render the locally running app within the product.
4. Click on any of the buttons in the app to see the necessary action being executed.

### Platform features used

1. [Data API](https://developer.freshdesk.com/v2/docs/data-api) - to fetch the logged in user and to get the domain name.
2. [Request API](https://developer.freshdesk.com/v2/docs/request-api) - to make API call to Twilio to make calls and to Freshdesk to create ticket.
3. [Interface API](https://developer.freshdesk.com/v2/docs/interface-api/#ticketshownotify) - to show notification to the user.
4. [Interface API](https://developer.freshdesk.com/v2/docs/interface-api/#cti_global) - to show and hide the app automatically in the CTI placeholder.
5. [Instance API](https://developer.freshdesk.com/v2/docs/instance-api) - to expand the size of the app.
