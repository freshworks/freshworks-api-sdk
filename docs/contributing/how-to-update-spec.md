# Adding a new API method or endpoint for an existing product we support

This section details the list steps to be followed for making changes to the API-SDK project to add additional support for an existing Freshworks product

1. Import updated [Swagger 2.0](https://swagger.io/specification/v2/) or [OpenAPI 3.X.X](https://swagger.io/specification/) from [Freshworks Stoplight](https://freshworks.stoplight.io/) workspace into [codegen](/codegen/) directory by creating a subdirectory with product name as in [freshteam](/codegen/freshteam/freshteam-v1.0.0.swagger.json)

2. Run generate.sh with --generate-{{prod_name}} option from terminal/CLI to generate API client stub classes

   ```sh
   # Generates product specific stub classes
   ./codegen/generate.sh --generate-{{prod_name}}
   ```

3. Run below command from terminal to perform respective operations

   ```sh
   # Build entire project
   npm run-script build

   # Build client libraries alone
   npm run-script build:client
   ```

4. Update index.js as in [/freshteam/index.ts](/src/freshteam/index.js), and models.ts to export models statically as in [/freshteam/models.ts](/src/freshteam/models.ts) to add respective changes.

5. Add API endpoint specific JavaScript file as in [applicant.js](/src/freshteam/applicants.js) and add functions for supported API methods with appropriate comments if applicable. If not then add specific method to existing API JS files.

6. Use below command to perform specific operations

   ```sh
   # To run all unit test cases
   npm run-script test:unit

   # To run specific test case
   npm run-script test:unit
   ```

7. Add/update API specific test cases using nock as in [applicant.test.js](/test/freshteam/applicants.test.js).

8. Update [config.js](/docs/.vuepress/config.js) to add navbar, references and sidebar options.

9. Add/update API specific markdown explaining each supported method with its example as in [applicant.md](/docs/freshteam/applicants.md). Run below commands to perform respective operations if applicable.

   ```sh
   # Build typedoc documents
   npm run-script build:docs

   # Run Dev server to launch vuepress site
   npm run-script docs:dev
   ```

10. Add your untracked changes to Git and commit to your branch with appropriate comments. Once commited review and raise a PR
