# Adding support for a new Freshworks product

This section details the list steps to be followed for making changes to the API-SDK project to add support for new Freshworks product

1. Add supported product entry to [README.md](../docs/README.md) and update content accordingly

2. Import [Swagger 2.0](https://swagger.io/specification/v2/) or [OpenAPI 3.X.X](https://swagger.io/specification/) from [Freshworks Stoplight](https://freshworks.stoplight.io/) workspace into [codegen](/codegen/) directory by creating a subdirectory with product name as in [freshteam](/codegen/freshteam/freshteam-v1.0.0.swagger.json)

3. Update [generate.sh](/codegen/generate.sh) to add SDK stub generation option

    - Add new function for generating client stub

        ```sh
        # function to add product specific client libraries generation option 
        function generate_{{prod_name}}_client()
        {
            rm -rf build/
            docker run --rm --network="host" \
                -v "${PWD}:/local" openapitools/
                ...
                -i /local/codegen/{{prod_name}}/{{spec.json}} \
                ...
                -c /local/codegen/{{prod_name}}/{{prod_name}}.config.json \
                -t /local/codegen/{{prod_name}}/templates;
            rm -f build/git_push.sh
            ...
            npm run format
            }
        ```

    - Add CLI option under switch case

        ```sh
        # Adding CLI option for client libraries generation
        --generate-{{prod_name}})
          generate_{{prod_name}}_client
          exit
          ;;

        ```

    - Add usage description under usage()

        ```sh
        # Adding help section
        function usage()
        {
            ...
            echo "--generate-{{prod_name}} -> Generates TypeScript Node SDK for {{prod_name}} APIs"
            ...
        }
        ```

4. Run generate.sh with --generate-{{prod_name}} option from terminal/CLI to generate API client stub classes

    ```sh
    # Generates product specific stub classes
    ./codegen/generate.sh --generate-{{prod_name}}
    ```

5. Add product subdirectory under [src](/src/) section such as [freshteam](/src/freshteam/). Update `entryPoints` to add product entry in [typedoc.json](../typedoc.json). Run below command from terminal to perform respective operations

    ```sh
    # Build entire project
    npm run-script build

    # Build client libraries alone
    npm run-script build:client
    ```

6. Add index.js as in [/freshteam/index.ts](/src/freshteam/index.js) to initiate product API instance, and models.ts to export models statically as in [/freshteam/models.ts](/src/freshteam/models.ts).

7. Add API endpoint specific JavaScript file as in [applicant.js](/src/freshteam/applicants.js) and add functions for supported API methods with appropriate comments.

8. Add product specific test directory as in [freshteam](/test/freshteam/). Add a product specific test suite such as [freshteam.test.js](/test/freshteam/freshteam.test.js). Use below command to perform specific operations

    ```sh
    # To run all unit test cases
    npm run-script test:unit

    # To run specific test case
    npm run-script test:unit
    ```

9. Add API specific test cases using nock as in [applicant.test.js](/test/freshteam/applicants.test.js).

10. Add product specific directory under [docs](/docs/) section as in [freshteam](/docs/freshteam/). Add README.md for same explaining usage of newly added product API usage. 

11. Update [config.js](/docs/.vuepress/config.js) to add navbar, references and sidebar options.

12. Add API specific markdown explaining each supported method with its example as in [applicant.md](/docs/freshteam/applicants.md). Run below commands to perform respective operations

    ```sh
    # Build typedoc documents
    npm run-script build:docs

    # Run Dev server to launch vuepress site
    npm run-script docs:dev
    ```

13. Add your untracked changes to Git and commit to your branch with appropriate comments. Once commited review and raise a PR