# CDR Test Documentation - CLI

## Overview

The testdocs CLI can be used to validate and render test case documentation documented in JSON that is compliant with the CDR test documentation JSON schema.

This tool has been created by the [Data Standards Body](https://consumerdatastandards.gov.au/) to support participants implementing of the [technical standards](https://github.com/ConsumerDataStandardsAustralia/standards) developed for the Australian Consumer Data Right regime.

The goal of the testdocs CLI is to provide tooling for the documentation of tests so that CDR participants can test their implementations with confidence that they are conformant with the standards.

## Local Setup and Customisation

### Prerequisites

Before you begin, ensure you have the following installed:

- Git, for cloning the repository.
- [Node.js](https://nodejs.org/en/) (v10 or higher).
- npm (Node Package Manager) - **included with Node.js installation**.

### Installation

Run the following command: `npm install @cds-au/testdocs -g`

This will make the CLI available globally.

To install the testdocs command line tool (`testdocs`) you need to have npm installed.  With npm installed run the following command:
`npm install @cds-au/testdocs -g`

This will make the CLI available globally.

### Building and Publishing

To build the repository run the following scripts from a bash compliant command prompt or terminal window:

1. Install libraries `npm install`
2. Copy the latetst test documentation schema and build classes `npm run sync-schema`
3. Build `npm run build`

To publish the repository to npm (needs permission)

1. Build for release `npm run build-prod`
2. Publish `npm publish --access public`

## Using the CLI Commands

### Schema Command Documentation

#### Command

`schema` Print out either the testdocs or changelog schema currently in use to stdout.  This will be the full JSON schema file and allows for the schema to be reused in your own tools or workflow.

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

## Reporting Issues

Encountered an issue? We're here to help. Please visit our [issue reporting guidelines](https://d61cds.notion.site/Issue-Reporting-Guidelines-71a329a0658c4b69a232eab95822509b?pvs=4) for submitting an issue.

## Stay Updated

Join our newsletter to receive the latest updates, release notes, and alerts. [Subscribe here](https://consumerdatastandards.us18.list-manage.com/subscribe?u=fb3bcb1ec5662d9767ab3c414&id=a4414b3906).

## License

The artefact is released under the [MIT License](https://github.com/ConsumerDataRight/mock-register/blob/main/LICENSE), which allows the community to use and modify it freely.

## Disclaimer

The artefacts in this repository are offered without warranty or liability, in accordance with the [MIT licence.](https://github.com/ConsumerDataStandardsAustralia/java-artefacts/blob/master/LICENSE)

[The Data Standards Body](https://consumerdatastandards.gov.au/about) (DSB) develops these artefacts in the course of its work, in order to perform quality assurance on the Australian Consumer Data Right Standards (Data Standards).

The DSB makes this repository, and its artefacts, public [on a non-commercial basis](https://github.com/ConsumerDataStandardsAustralia/java-artefacts/blob/master/LICENSE) in the interest of supporting the participants in the CDR ecosystem.

The resources of the DSB are primarily directed towards assisting the [Data Standards Chair](https://consumerdatastandards.gov.au/about/) for [developing the Data Standards](https://github.com/ConsumerDataStandardsAustralia/standards).

Consequently, the development work provided on the artefacts in this repository is on a best-effort basis, and the DSB acknowledges the use of these tools alone is not sufficient for, nor should they be relied upon with respect to [accreditation](https://www.accc.gov.au/focus-areas/consumer-data-right-cdr-0/cdr-draft-accreditation-guidelines), conformance, or compliance purposes.