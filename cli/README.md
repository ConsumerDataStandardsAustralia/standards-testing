# CDR Test Documentation - CLI

## Overview

The testdocs CLI can be used to validate and render test case documentation documented in JSON that is compliant with the CDR test documentation JSON schema.

This tool has been created by the [Data Standards Body](https://consumerdatastandards.gov.au/) to support participants implementing of the [technical standards](https://github.com/ConsumerDataStandardsAustralia/standards) developed for the Australian Consumer Data Right regime.

The goal of the testdocs CLI is to provide tooling for the documentation of tests so that CDR participants can test their implementations with confidence that they are conformant with the standards.

## CLI Usage

To install the testdocs command line tool (`testdocs`) you need to have npm installed.  With npm installed run the following command:
`npm install @cds-au/testdocs -g`

This will make the CLI available globally.

### Schema Command Documentation

#### Command

`schema`
Print out either the testdocs or changelog schema currently in use to stdout.  This will be the full JSON schema file and allows for the schema to be reused in your own tools or workflow.

#### Arguments

|Argument|Description|
|-|-|
|`<type>`| The type of the output to generate. Can be `testdoc` or `changelog`.|

#### Options

None

#### Examples

`testdocs schema testdoc`
Outputs the current testdoc schema to stdout

`testdocs schema changelog`
Outputs the current changelog schema to stdout

### Validate Command Documentation

#### Command

`validate <filename>`
Validate that the JSON file specified is a valid JSON file and also fully compliant with the current test documentation schema.  Errors will be published to stderr and a non-zero response will be provided.

#### Arguments

|Argument|Description|
|-|-|
|`<type>`    | The type of the schema against which to validate the JSON file. Can be `testdoc` or `changelog`.|
|`<filename>`| The path to the file (expected to be a valid JSON file) to be validated.|

#### Options

|Options|Description|
|-|-|
|`--verbose`| For verbose output of the validation process.

#### Examples

`testdocs validate testdoc doc.json`
Validate `doc.json` and output any validation errors to stderr

### Document Generation Command Documentation

#### Command

`generate <type> <src> <dst>`
Read in the specified source and generate output according to the type specified.  Can be used to generate human readable versions of the test documentation data in various formats.

#### Arguments

|Argument|Description|
|-|-|
|`<type>`| The type of the output to generate.  Can be `html` or `markdown`.|
|`<src>`| The source file or path to read in and generate the output from.  For `html` and `markdown` the `<src>` is expected to be a single JSON file containing test documentation compliant with the current schema.|
|`<dst>`| The destination file for the generated output.  The type will align to the type specified in the `<type>` argument. |

#### Options

None

#### Examples

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