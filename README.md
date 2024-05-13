# CDR Test Documentation

## Overview

The CDR Test Documentation is a repository of Test Cases and Assertions that describe the way the Consumer Data Standards APIs can be tested. These are logically grouped into Suites and Scenarios, for each Sector's APIs, to validate an API against the Consumer Data Standards.

The Data Standards Body (DSB) maintains the CDR Test documentation to outline specific test scenarios that replicate real-world use cases, helping CDR Participants to verify the accuracy and compliance of their CDR API implementations.

The aim is to provide the CDR community with a resource they can use to create their own test suites to verify a CDR implementation aligns with the standards. It consolidates many references within the standards, including normative references, that apply to a single API, to help the community interpret and understand the standards.

### What it is not designed to do?

This repository:

- Cannot be used for test execution;
- Is not an automated testing framework;
- Does not replace the Standards. The obligation remains on CDR participants to apply the published standards; and
- Does not replace ACCC’s CTS or participant tooling capability.

## Accessing the CDR Test Documentation

The CDR API Test Documentation is available online in a user-friendly HTML format. You can easily access it here, search, and reference this essential testing documentation from anywhere. 

## Repository Structure

| Folder    | Description 
| --------- | ----------- 
| cli       | The cli is used to validate the JSON file and to convert it to generate html and markdown files, which are stored in the docs folder.  
| docs      | Contains the published html document available https://consumerdatastandardsaustralia.github.io/standards-testing/latest/ 
| json-docs | Contains the JSON files, including: <br/>- the Definitions JSON file (contains definitions for Suites, Scenarios, Test Case and Assertions which form the basis of the published documentation) and<br/>- the Changelog JSON file (contains the changelog detailing what has been changed in the definitions JSON across each release version)
| schemas   | The json schema definition against which the Suites, Scenarios, Test Cases and Assertions are validated 

## Using the CDR Test Documentation

This documentation can be used in many ways. You can follow the scenarios listed for each Suite that applies to your sector. You can search for key words to identify tests that clarify the standards.

A simple way to use it is to:

- identify the data or API to be tested;
- select the scenario for the data or API;
- follow the links to each test case and assertion to validate your own tests.

The references listed for each test case and assertion should be read in conjunction with this documentation.

### How it is structured?

- CDS sector specific APIs (Banking, Energy, Common and Admin) have been logically grouped into Suites. Each Suite is made up of a number of Scenarios where each API has a positive and negative scenario.
    - positive scenarios, e.g. 'Get Billing for Account v1', are intended to generate a response with a 200 ok status code and a valid schema.
    - negative scenarios, e.g. 'Get Billing for Account Negative v1' are intended to generate a response with an error status code.
- ‘Scenario’ in this context implies a group of test cases to validate a single API. A Scenario is not a complete end to end sequence of API calls that might be needed to test a single use case.
- Each Scenario has a series of Test Cases attached to it.
- Each Test Case links to a series of Assertions which are either specific to the Suite or are Global and apply to many Suites.

### Current Coverage

Resource APIs have been grouped into the following suites. 

| Sector  | ID  | Title                                         |
| ------- | --- | --------------------------------------------- |
| Common  | CAA | APIs - Common Admin                           |
| Common  | CAC | APIs - Common Customer                        |
| Energy  | EAA | APIs - Energy Accounts                        |
| Energy  | EAB | APIs - Energy Tariffs                         |
| Energy  | EAC | APIs - Energy Invoices and Billing            |
| Energy  | EAR | APIs - Energy Standing Data, Usage and DER    |
| Energy  | EAS | APIs - Energy Standing Data, Usage and DER SR |

Information Security and CDR Register behaviour is currently handled in the [FAPI Conformance Suite](https://openid.net/certification/fapi_op_testing/) and the Consumer Data Right Conformance Test Suite for [Data Holders](https://www.cdr.gov.au/for-providers/conformance-test-suite-data-holders) and [Data Recipients](https://www.cdr.gov.au/for-providers/conformance-test-suite-data-recipients).

The DSB anticipates this documentation, in time, will also reference DSBs postman collection to validate schemas. Details of the postman collection are available here: [ConsumerDataStandardsAustralia/dsb-schema-tools (github.com)](https://github.com/ConsumerDataStandardsAustralia/dsb-schema-tools).

### Numbering convention

The tests are organised by Suite, Scenario, Test Case and Assertion.

- One Suite can have many Scenarios
- One Scenario can have many Test Cases
- One Test Case can have many Assertions
- Scenarios, Test Cases and Assertions are scoped to the Suite to which they belong, except for Global Assertions which are globally scoped and can be present across many Suites.

Assertions are expressed using the Behaviour Driven Development (BDD) methodology, in the format 'GIVEN...WHEN...THEN...'

Each Suite has a unique identifier in the format: 'SUITE.aaa', where 'a' represents an alpha character. Each Scenario, Test Case and Assertion scoped to that suite, inherits the alpha characters of that Suite. Global Assertions have their own set of alpha characters in the format of 'Zaa', which begin with the letter 'Z' and remains constant.

Each Scenario has a unique identifier in the format 'S.aaa.nnnn', where 'aaa' represents the Suite designation to which the Scenario belongs, with 'nnnn' representing an incremental numeric identifier for that Scenario within the Suite. In a similiar fashion, 'T.aaa.nnnn' for Test Cases, and 'A.aaa.nnnn' for Suite specific Assertions.

For convenience, we have elected to assign - where possible - the first alpha character of the Suite designation to infer the logical grouping of that Suite, usually by sector. For example, 'B' for Banking, 'E' for Energy, 'T' for Telecommunication, 'C' for Common APIs and so on.

Global Assertions - which can belong to any Suite - do not have a Suite designation and instead are identified as 'A.ZAA.nnnn', with 'nnnn' representing an incremental identifier for that Global Assertion within the full set of Global Assertions.

## Using Postman Collection and CDR Test Documentation for Testing

Our [Postman Collections](https://github.com/ConsumerDataStandardsAustralia/dsb-postman) are thoughtfully organised into folders, grouping related API requests together. Within our current [workspace](https://www.postman.com/winter-shadow-541400/workspace/dsb-schema-tests/overview), we have organised Postman Collections into three distinct categories: Banking, common, and energy. These folders contain numerous test scenarios and assertions as outlined in the CDR Test Documentation. Each collection serves as a blueprint, demonstrating one possible way to structure a test suite for a data holder. 

Some of the test cases in the Postman Collection links to the associated CDR Test Documentation scenario. For example, the test case [T.EAR.0002](https://www.postman.com/winter-shadow-541400/workspace/dsb-schema-tests/request/8286723-18506b40-742e-406b-8fce-2637515e03f9?ctx=documentation) shows a real-world implementation with code examples under the Test tab in Postman, with its [detailed documentation](https://consumerdatastandardsaustralia.github.io/standards-testing/latest/#testcase-t.ear.0002) accessible in the CDR Test Documentation. 

Please visit our Postman Collections to explore how you can benefit by integrating the CDR Test Documentation with the DSB Postman collections to conduct thorough, standards-compliant testing of your Mock Data Holder implementations.

## Reporting Issues

We welcome your feedback on the CDR Test Documentation. It has been developed based on our interpretation of feedback received from the community to clarify ambiguity in the standards and to assist with implementation.

To provide feedback, please raise an ‘issue’ on this repository. We welcome feedback on:

1. additional tests to clarify aspects of the standards that are not already covered
2. test cases or assertions that appear to be incorrect
3. suggested improvements to the user interface or to the instructions on how to use this repository.

Please visit our [issue reporting guidelines](https://www.notion.so/Issue-Reporting-Guidelines-71a329a0658c4b69a232eab95822509b?pvs=21) for submitting an issue.

## Stay Updated

Join our newsletter to receive the latest updates, release notes, and alerts. [Subscribe here](https://consumerdatastandards.us18.list-manage.com/subscribe?u=fb3bcb1ec5662d9767ab3c414&id=a4414b3906).

## License

The artefact is released under the [MIT License](https://github.com/ConsumerDataRight/mock-register/blob/main/LICENSE), which allows the community to use and modify it freely.

## Disclaimer

The artefacts in this repository are offered without warranty or liability, in accordance with the [MIT licence.](https://github.com/ConsumerDataStandardsAustralia/java-artefacts/blob/master/LICENSE)

[The Data Standards Body](https://www.csiro.au/en/News/News-releases/2018/Data61-appointed-to-Data-Standards-Body-role) (DSB) develops these artefacts in the course of its work, in order to perform quality assurance on the Australian Consumer Data Right Standards (Data Standards).

The DSB makes this repository, and its artefacts, public [on a non-commercial basis](https://github.com/ConsumerDataStandardsAustralia/java-artefacts/blob/master/LICENSE) in the interest of supporting the participants in the CDR ecosystem.

The resources of the DSB are primarily directed towards assisting the [Data Standards Chair](https://consumerdatastandards.gov.au/about/) for [developing the Data Standards](https://github.com/ConsumerDataStandardsAustralia/standards).

Consequently, the development work provided on the artefacts in this repository is on a best-effort basis, and the DSB acknowledges the use of these tools alone is not sufficient for, nor should they be relied upon with respect to [accreditation](https://www.accc.gov.au/focus-areas/consumer-data-right-cdr-0/cdr-draft-accreditation-guidelines), conformance, or compliance purposes.