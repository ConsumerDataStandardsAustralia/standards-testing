# CDR Test Documentation

## About the CDR Test Documentation

The CDR Test Documentation is a repository of Test Cases and Assertions that describe the way the standards can be tested. These are logically grouped into Suites and Scenarios, for each Sector's APIs, to validate an API against the Consumer Data Standards.

The Standards, and this Test Documentation, are maintained by the Data Standards Body (DSB), with the Data Standards Chair as the decision maker. The Data Standards Body is an independent body administered by the [Treasury](https://www.directory.gov.au/portfolios/treasury/data-standards-body). The work of standards development is conducted in consultation with the [Australian Competition and Consumer Commission (ACCC)](https://www.accc.gov.au/focus-areas/consumer-data-right-cdr-0) as co-regulator of the Consumer Data Right, along with the [Office of the Australian Information Commissioner (OAIC)](https://www.oaic.gov.au/consumer-data-right/about-the-consumer-data-right/).

The CDR Test Documentation is available at [https://consumerdatastandardsaustralia.github.io/standards-testing/latest/ - introduction](https://consumerdatastandardsaustralia.github.io/standards-testing/latest/#introduction)

## Repository Structure

| Folder    | Description                                                                                                                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| docs      | Contains the published html document available [here](https://consumerdatastandardsaustralia.github.io/standards-testing/latest/)                                                               |
| json-docs | The definitions for Suites, Scenarios, Test Case and Assertions which form the basis of the published documentation                                                                             |
| tools     | The toolset used to generate the published documentation html and markdown files. This toolset is published as an npm package available [here](https://www.npmjs.com/package/@cds-au/testdocs). |
| schema    | The json schema definition against which the Suites, Scenarios, Test Cases and Assertions are validated                                                                                         |

## What it is designed to do?

The aim is to provide the community with a resource they can use to create their own test suites to verify a CDR implementation aligns with the standards. It consolidates many references within the standards, including normative references, that apply to a single API, to help the community interpret and understand the standards.

## What it is not designed to do?

This repository:

- Cannot be used for test execution;
- Is not an automated testing framework;
- Does not replace the Standards. The obligation remains on CDR participants to apply the published standards; and
- Does not replace ACCC’s CTS or participant tooling capability.

## Getting Started – How to use it?

This documentation can be used in many ways. You can follow the scenarios listed for each Suite that applies to your sector. You can search for key words to identify tests that clarify the standards.

A simple way to use it is to:

- identify the data or API to be tested;
- select the scenario for the data or API;
- follow the links to each test case and assertion to validate your own tests.

The references listed for each test case and assertion should be read in conjunction with this documentation.

## Getting Started – How it is structured?

- CDS sector specific APIs (Banking, Energy, Common and Admin) have been logically grouped into Suites. Each Suite is made up of a number of Scenarios where each API has a positive and negative scenario.

  - positive scenarios, e.g. 'Get Billing for Account v1', are intended to generate a response with a 200 ok status code and a valid schema.
  - negative scenarios, e.g. 'Get Billing for Account Negative v1' are intended to generate a response with an error status code.

- ‘Scenario’ in this context implies a group of test cases to validate a single API. A Scenario is not a complete end to end sequence of API calls that might be needed to test a single use case.

- Each Scenario has a series of Test Cases attached to it.
- Each Test Case links to a series of Assertions which are either specific to the Suite or are Global and apply to many Suites.

## Current Coverage

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

## Numbering convention

The tests are organised by Suite, Scenario, Test Case and Assertion.

- One Suite can have many Scenarios
- One Scenario can have many Test Cases
- One Test Case can have many Assertions
- Scenarios, Test Cases and Assertions are scoped to the Suite to which they belong,
  except for Global Assertions which are globally scoped and can be present across many Suites.

Assertions are expressed using the Behaviour Driven Development (BDD) methodology, in the format 'GIVEN...WHEN...THEN...'

Each Suite has a unique identifier in the format: 'SUITE.aaa', where 'a' represents an alpha character.
Each Scenario, Test Case and Assertion scoped to that suite, inherits the alpha characters of that Suite.
Global Assertions have their own set of alpha characters in the format of 'Zaa', which begin with the letter 'Z' and remains constant.

Each Scenario has a unique identifier in the format 'S.aaa.nnnn', where 'aaa' represents the Suite designation to which the Scenario belongs, with 'nnnn' representing
an incremental numeric identifier for that Scenario within the Suite.
In a similiar fashion, 'T.aaa.nnnn' for Test Cases, and 'A.aaa.nnnn' for Suite specific Assertions.

For convenience, we have elected to assign - where possible - the first alpha character of the Suite designation to infer the logical grouping of that Suite, usually by sector.
For example, 'B' for Banking, 'E' for Energy, 'T' for Telecommunication, 'C' for Common APIs and so on.

Global Assertions - which can belong to any Suite - do not have a Suite designation and instead are identified as 'A.ZAA.nnnn', with 'nnnn' representing an incremental
identifier for that Global Assertion within the full set of Global Assertions.

## Contributing and providing feedback

We welcome your feedback on the CDR Test Documentation. It has been developed based on our interpretation of feedback received from the community to clarify ambiguity in the standards and to assist with implementation.

To provide feedback raise an ‘issue’ or a ‘pull request’ on this repository. We welcome feedback on:

1.  additional tests to clarify aspects of the standards that are not already covered 
2.  test cases or assertions that appear to be incorrect
3.  suggested improvements to the user interface or to the instructions on how to use this repository.

The team at DSB will address issues as they are raised and add or correct test cases as needed.

## Disclaimer

The artefacts in this repo are offered without warranty or liability, in accordance with the [MIT licence.](https://github.com/ConsumerDataStandardsAustralia/java-artefacts/blob/master/LICENSE)

[The Data Standards Body](https://www.csiro.au/en/News/News-releases/2018/Data61-appointed-to-Data-Standards-Body-role) (DSB) develops these artefacts in the course of its work, in order to perform quality assurance on the Australian Consumer Data Right Standards (Data Standards).

The DSB makes this repo, and its artefacts, public [on a non-commercial basis](https://github.com/ConsumerDataStandardsAustralia/java-artefacts/blob/master/LICENSE) in the interest of supporting the participants in the CDR eco-system.

The resources of the DSB are primarily directed towards assisting the [Data Standards Chair](https://consumerdatastandards.gov.au/about/) for [developing the Data Standards](https://github.com/ConsumerDataStandardsAustralia/standards).

Consequently, the development work provided on the artefacts in this repo is on a best-effort basis, and the DSB acknowledges the use of these tools alone is not sufficient for, nor should they be relied upon with respect to [accreditation](https://www.accc.gov.au/focus-areas/consumer-data-right-cdr-0/cdr-draft-accreditation-guidelines), conformance, or compliance purposes.

## Rules of engagement for this repository

We're committed to undertaking conversations relating to the technical standards in the open. Questions or comments that participants might ask us via email or private message are likely to be questions or comments other participants have as well. Our answers will be of interest to everyone. There are likely to be experiences and lessons everybody working in this ecosystem can learn from. Having these conversations transparently helps us reduce duplication, resolve issues faster and keep everyone up to date with the conversation.

We ask that all contributors to the Consumer Data Standards repositories comply with the [GitHub Community Forum Code of Conduct](https://help.github.com/articles/github-community-forum-code-of-conduct/).

In addition, it would be appreciated if the following rules are adhered to when commenting or contributing:

- Please provide a single, considered response to each proposal covering all feedback concerning the proposal.
- For transparency, if you work at or are associated with an organisation with an interest in the standards, please indicate this in your response.
- Please ensure you are aware of and compliant with any social media guidelines or internal processes for response set by your organisation before providing feedback.
