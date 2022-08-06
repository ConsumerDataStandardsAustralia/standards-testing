# CDR Test Documentation - CLI

## Overview

The testdocs CLI can be used to validate and render test case documentation documented in JSON that is compliant with the CDR test documentation JSON schema.

This tool has been created by the [Data Standards Body](https://consumerdatastandards.gov.au/) to support participants implementing of the [technical standards](https://github.com/ConsumerDataStandardsAustralia/standards) developed for the Australian Consumer Data Right regime.

The goal of the testdocs CLI is to provide tooling for the documentation of tests so that CDR participants can test their implementations with confidence that they are conformant with the standards.

## CLI Usage

To install the testdocs command line tool (`testdocs`) you need to have npm installed.  With npm installed run the following command:
`npm install @cds-au/testdocs -g`

This will make the CLI available globally.

### Documentation Schema Command

#### Command

`doc-schema`
Print out the testdocs schema currently in use to stdout.  This will be the full JSON schema file and allows for the schema to be reused in your own tools or workflow.

#### Arguments

None

#### Options

|Options|Description|
|-|-|
|`--vonly`| Output only the version of the schema that the CLI is currently using|

#### Examples

`testdocs doc-schema`
Output the current test doc schema to stdout

`testdocs doc-schema --vonly`
Output the version of test doc schema to stdout

### Validate Documentation Command

#### Command

`validate <filename>`
Validate that the JSON file specified is a valid JSON file and also fully compliant with the current test documentation schema.  Errors will be published to stderr and a non-zero response will be provided.

#### Arguments

|Argument|Description|
|-|-|
|`<filename>`| The path to the file (expected to be a valid JSON file) to be validated.|

#### Options

None

#### Examples

`testdocs validate doc.json`
Validate `doc.json` and output any validation errors to stderr


### Document Generation Command

#### Command

`generate <type> <src> <dst>`
Read in the specified source and generate output according to the type specified.  Can be used to generate human readable versions of the test documentation data in various formats.

#### Arguments

|Argument|Description|
|-|-|
|`<type>`| The type of the output to generate.  Can be `json`, `html` or `markdown`.  Note that the `json` mode converts a series of CSV files exported from Excel into JSON and is temporary until an editor capability is available.|
|`<src>`| The source file or path to read in and generate the output from.  For `html` and `markdown` the `<src>` is expected to be a single JSON file containing test documentation compliant with the current schema.  For `json` the `<src>` is expected to be a path containing a series of CSV files that represent an export of the the test documentation from an Excel workbook.|
|`<dst>`| The destination file for the generated output.  The type will align to the type specified in the `<type>` argument. |

#### Options
|Options|Description|
|-|-|
|`--cfg or -c`| For *json* file generation the path to a configuration file (json) should  be provided to capture a description, document version, and CDR version.

```json
{
    "description": "The CDR Test Documentation",
    "docVersion": "1.0.0",
    "cdrVersion": "1.16.0"
}
```

#### Examples

`testdocs gendocs -c /Users/dsb/config.json json ./csvfiles/ ./doc.json`
Convert a folder structure containing a series of CSV files each containing different aspects of the test documentation into a single JSON file containing test documentation aligned to the test doc schema.  Note that schema compliance for the output is dependent on the validity of the data in the CSV files.

`testdocs generate html ./doc.json ./doc.html`
Convert the documentation in `doc.json` into standalone HTML and output to `doc.html`.  All CSS and JS will be inline in the resulting HTML file.

`testdocs generate markdown ./doc.json ./doc.md`
Convert the documentation in `doc.json` into Markdown and output to `doc.md`.  Note that some HTML statements will be included in the markdown so a markdown renderer that supports inline HTML is expected to be used to view the resulting output.

## Maintenance

Enhancement and bug fix pull requests are welcome in accordance with the contribution policy for the repository.

For additional contribution please ensure that pull requests are fully tested and include updates to documentation.

### Building and Publishing

To build the repository run the following scripts from a bash compliant command prompt or terminal window:
1. Install libraries
`npm install`
2. Copy the latetst test documentation schema and build classes
`npm run sync-schema`
3. Build
`npm run build`

To publish the repository to npm (needs permission)
1. Build for release
`npm run build-prod`
2. Publish
`npm publish --access public`

## Outstanding Features

The following are a list of features that are intended but yet to be added to this capability (contributions welcome):

* Standalone browser based editor for modifying schema compliant Documentation
* Addition of test data generation (possibly a separate CLI)
* Refactor so that the core libraries are in a separate module for reuse
* Add additional options to output generation to allow for insertion of additional content (eg. CSS, JS)
* Unit testing to support contributions
