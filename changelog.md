# Changelog

API SDK change log

## v2.0

**DEVREL-1930** - Modify Freshservice API Specs for generating client stub classes 

- Added mew API spec from Stoplight
- Performed required changes to generate client side libraries

**DEVREL-1931** - Modify build scripts and actions to auto-generate classes at runtime

- Updated generate.sh and other files to add CLI options
- Built and generated client side libraries

**DEVREL-1940** - Perform necessary changes to add Tickets endpoint from Freshservice to API SDK

- Updated `/docs/README.md` anf `/docs/get-started.md`
- Added new directory and files under `/src/freshservice`
- Updated `typedoc.json`

**DEVREL-1932** Typedoc based auto-generated markdown files addition to api-sdk documents site navigation

- Added new directory and files under `/docs/freshservice`
- Updated vuepress config file `/docs/.vuepress/config.js`

**DEVREL-1967** - Add Unit test cases for newly added SDK endpoints for Freshservice

- Added new test suite directory `/test/freshservice/`
- Added nock unit test suites under `/test/freshservice/`

**DEVREL-1968** - Add ReadMe and contributing documents for API-SDK with detailed instruction

- Added `Contributing.md` and `/contribution-docs/` directory to list detailed steps for contribution

**DEVREL-1985** - Add headings based headless search options for API-SDK to provide better site navigation

- Updated `package.json` and `package-lock.json` and fixed dependencies
- Added search plugin options and updated `/docs/.vuepress/config.js`
- Added Changelog file
