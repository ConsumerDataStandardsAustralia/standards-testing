# CDR Test Documentation

## About the CDR Test Documentation

The CDR Test Documentation is a repository of Test Cases and Assertions that describe the way the standards can be tested.  These are logically grouped into Suites and Scenarios for each Sector and API to validate an API against the Consumer Data Standards.

The Standards, and this Test Documentation, are maintained by the Data Standards Body (DSB), with the Data Standards Chair as the decision maker. The Data Standards Body is part of the [Treasury](https://www.directory.gov.au/portfolios/treasury/data-standards-body). The work of standards development is conducted in consultation with the [Australian Competition and Consumer Commission (ACCC)](https://www.accc.gov.au/focus-areas/consumer-data-right-cdr-0) as co-regulator of the Consumer Data Right, along with the [Office of the Australian Information Commissioner (OAIC)](https://www.oaic.gov.au/consumer-data-right/about-the-consumer-data-right/).

The repository is available here: [https://consumerdatastandardsaustralia.github.io/standards-testing/latest/ - introduction](https://consumerdatastandardsaustralia.github.io/standards-testing/latest/#introduction)

## What it is designed to do?

The aim is to provide the community with a resource they can use to create their own test suites to verify a CDR implementation aligns with the standards. It consolidates many references within the standards, including normative references, that apply to a single API, to help people interpret and understand the standards.

## What it is not designed to do?

This repository:

 - Cannot be used for test execution;
 - Is not an automated testing framework;
 - Does not replace the Standards, the obligation remains on CDR participants to apply the published standards; and
 - Does not replace ACCC’s CTS or participant tooling capability.

## Getting Started – How to use it?

This documentation can be used in many ways, either by following the scenarios as listed for each Suite that applies to your sector or by searching for key words to identify tests that clarify the standards.

A simple way to use it is to:

 1. identify the data or API that needs to be tested;
 2. select the scenario for the API, either positive or negative
 3. follow the links to each test case and assertion to validate your own tests.

The references listed for each test case and assertion are important and should be read in conjunction with this documentation for full comprehension.

## Getting Started – How it is structured?

-   CDS sector specific APIs (Banking, Energy, Common and Admin (resources)) have been logically grouped into Suites, each Suite is made up of a number of Scenarios where each API has a positive (happy path) and negative scenario.

	-  	‘Scenario’ in this context implies a group of tests to validate a single API, it does not infer a complete end to end sequence of API calls that might be needed to test a single use case.

-   Each Scenario has a series of Test Cases attached to it.

	-   The test cases both positive and negative, are expressed as Happy Path: TRUE (positive) or FALSE (negative)

-   Each Test Case links to a series of Assertions which are either specific to the Suite or Common to many Suites.

## Coverage

Our intention is to write test cases for all resource APIs for Banking and Energy in addition to Common and Admin.  Energy is the current priority given approaching obligation dates.

The resource APIs have been grouped into 11 suites, each of them comprises specific test cases for positive and negative scenarios, as shown below.

![image](https://user-images.githubusercontent.com/52149325/169204296-38994343-a47a-49d9-951a-ff938b649d4d.png)


Information Security and CDR Register behaviour is currently handled in the [FAPI Conformance Suite](https://openid.net/certification/fapi_op_testing/) and the Consumer Data Right Conformance Test Suite for [Data Holders](https://www.cdr.gov.au/for-providers/conformance-test-suite-data-holders) and [Data Recipients](https://www.cdr.gov.au/for-providers/conformance-test-suite-data-recipients).

The DSB anticipates this documentation, in time, will also reference DSBs postman collection to validate schemas.  Details of the postman collection are available here: [ConsumerDataStandardsAustralia/dsb-schema-tools (github.com)](https://github.com/ConsumerDataStandardsAustralia/dsb-schema-tools).

## Disclaimer

The artefacts in this repo are offered without warranty or liability, in accordance with the [MIT licence.](https://github.com/ConsumerDataStandardsAustralia/java-artefacts/blob/master/LICENSE)

[The Data Standards Body](https://www.csiro.au/en/News/News-releases/2018/Data61-appointed-to-Data-Standards-Body-role) (DSB) develops these artefacts in the course of its work, in order to perform quality assurance on the Australian Consumer Data Right Standards (Data Standards).

The DSB makes this repo, and its artefacts, public [on a non-commercial basis](https://github.com/ConsumerDataStandardsAustralia/java-artefacts/blob/master/LICENSE) in the interest of supporting the participants in the CDR eco-system.

The resources of the DSB are primarily directed towards assisting the [Data Standards Chair](https://consumerdatastandards.gov.au/about/) for [developing the Data Standards](https://github.com/ConsumerDataStandardsAustralia/standards).

Consequently, the development work provided on the artefacts in this repo is on a best-effort basis, and the DSB acknowledges the use of these tools alone is not sufficient for, nor should they be relied upon with respect to [accreditation](https://www.accc.gov.au/focus-areas/consumer-data-right-cdr-0/cdr-draft-accreditation-guidelines), conformance, or compliance purposes.

## Contributing and providing feedback

The CDR Test Documentation is a concept we’d like to test with the community and welcome your feedback.  We have developed this based on our interpretation of earlier feedback received from the community to clarify ambiguity in the standards and to assist with implementation.

To provide feedback you need to raise an ‘issue’ or a ‘pull request’ on this repository in the same way you would on the DSB standards. We welcome feedback on:

 1. a request to add tests to clarify aspects of the standards that are not covered in this document; or
 2. where test cases or assertions that appear to be incorrect; or
 3. suggested improvements to the user interface or instructions on how to use this repository.

The team at DSB will address issues as they are raised and add or correct test cases as needed.

## Rules of engagement for this repository

We're committed to undertaking conversations relating to the technical standards in the open. Questions or comments that participants might ask us via email or private message are likely to be questions or comments other participants have as well. Our answers will be of interest to everyone. There are likely to be experiences and lessons everybody working in this ecosystem can learn from. Having these conversations transparently helps us reduce duplication, resolve issues faster and keep everyone up to date with the conversation.

We ask that all contributors to the Consumer Data Standards repositories comply with the [GitHub Community Forum Code of Conduct](https://help.github.com/articles/github-community-forum-code-of-conduct/).

In addition, it would be appreciated if the following rules are adhered to when commenting or contributing:

-   Please provide a single, considered response to each proposal covering all feedback concerning the proposal.
-   For transparency, if you work at or are associated with an organisation with an interest in the standards, please indicate this in your response.
-   Please ensure you are aware of and compliant with any social media guidelines or internal processes for response set by your organisation before providing feedback.
