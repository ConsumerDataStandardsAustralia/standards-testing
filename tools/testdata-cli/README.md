# Consumer Data Right Test Data CLI

## Overview

The CDR testdata CLI can be used to generate manufactured test data for the Consumer Data Right standards.  This CLI allows the configuration, through an option file, of a variety of data `factories` that can be used to generate test files with different characteristics.  This project is also designed to allow for additional `factories` to be added via Pull Request to accommodate different scenarios.

This tool has been created by the [Data Standards Body](https://consumerdatastandards.gov.au/) to support participants implementing of the [technical standards](https://github.com/ConsumerDataStandardsAustralia/standards) developed for the Australian Consumer Data Right regime.

The goal of the testdata CLI is to provide support for CDR participants seeking to test their implementations to ensure confidence that they have covered a wide range of possible scenarios liked to be encountered in production scenarios.

## CLI Usage

To install the testdata command line tool (`testdata`) you need to have npm installed.  With npm installed run the following command:
`npm install @cds-au/testdata -g`

This will make the CLI available globally.

### Test Data Schema Command

#### Command

`data-schema`
Print out the test data schema currently in use to stdout.  This will be the full JSON schema file and allows for the schema to be reused in your own tools or workflow.

#### Arguments

None

#### Options

|Options|Description|
|-|-|
|`--vonly`| Output only the version of the schema that the CLI is currently using|

#### Examples

`testdata data-schema`
Output the current test data schema to stdout

`testdata data-schema --vonly`
Output the version of test data schema to stdout

### List Factories Command

#### Command

`factories`
List the factories that are currently implemented with a short description of each factory describing its purpose.

#### Arguments

None

#### Options

None

#### Examples

`testdata factories`
List the factories implemented in this version of the CLI


### Factory Documentation Command

#### Command

`factory <factory-id>`
Give detailed documentation for a specific factory including the purpose of the factory, the data that it generates or modifies and the options that it consumes.

#### Arguments

|Argument|Description|
|-|-|
|`<factory-id>`| The ID of the factory that documentation is requested for. |

#### Options

None

#### Examples

`testdata factory load-static-data`
Output the detailed documentation for the `load-static-data` factory.


### Data Generation Command

#### Command

`generate <options> <dst>`
Read in the specified options file and generate a data file in the file specified as the destination.  The resulting file will contain JSON consistent with the test data schema supported by the CLI.

#### Arguments

|Argument|Description|
|-|-|
|`<options>`| The options indicating the factories to execute, in what order and with what options specified. |
|`<dst>`| The destination file for the generated output.  The contents will always be JSON consistent with the test data schema. |

#### Options

None

#### Examples

`testdata generate options.json data.json`
Generate test data using the options in the `options.json` file and output the resulting data to the `data.json` file.


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

* Basic factory framework implementation
* Document process for adding additional factories
* Detailed documentation on option file structure
* Additional basic factories:
 * Factory for reading in a static data file
 * Factory for updating dates to be relative to a specific time
 * Factory to generate a series of basic individual customers
 * Factory to generate a series of basic business customers
 * Factory to generate register data
* Additional factories specific to banking
 * Factory to generate basic retail bank account data
 * Factory to generate basic business bank account data
 * Factory to generate basic transaction data
 * Factory to generate basic data for other banking data clusters
* Additional factories specific to energy
 * Factory to generate basic retail energy account data
 * Factory to generate basic business energy account data
 * Factory to generate basic billing and invoice data
 * Factory to generate basic NMI standing data
 * Factory to generate basic DER data
 * Factory to generate basic usage data
 * Factory to generate basic data for other energy data clusters
