EDIT Required

# CDR Test Documentation

## About the CDR Test Documentation

The CDR Test Documentation is a repository of Test Cases and Assertions that describe the way the standards can be tested.  These are logically grouped into Suites and Scenarios, for each Sector and API, to validate an API against the Consumer Data Standards.

The Standards, and this Test Documentation, are maintained by the Data Standards Body (DSB), with the Data Standards Chair as the decision maker. The Data Standards Body is an independent body administered by the [Treasury](https://www.directory.gov.au/portfolios/treasury/data-standards-body). The work of standards development is conducted in consultation with the [Australian Competition and Consumer Commission (ACCC)](https://www.accc.gov.au/focus-areas/consumer-data-right-cdr-0) as co-regulator of the Consumer Data Right, along with the [Office of the Australian Information Commissioner (OAIC)](https://www.oaic.gov.au/consumer-data-right/about-the-consumer-data-right/).

The CDR Test Documentation is available at [https://consumerdatastandardsaustralia.github.io/standards-testing/latest/ - introduction](https://consumerdatastandardsaustralia.github.io/standards-testing/latest/#introduction)

## Repository Structure

| Folder | Description |
| --- | ----------- |
| docs | Contains the published html document available [here](https://consumerdatastandardsaustralia.github.io/standards-testing/latest/) |
| json-docs | The definitions for Suites, Scenarios, Test Case and Assertions which form the basis of the published documentation |
| tools | The toolset used to generate the published documentation html and markdown files. This toolset is published as an npm package available [here](https://www.npmjs.com/package/@cds-au/testdocs). |
| schema | The json schema definition against which the Suites, Scenarios, Test Cases and Assertions are validated |

## What it is designed to do?

The aim is to provide the community with a resource they can use to create their own test suites to verify a CDR implementation aligns with the standards. It consolidates many references within the standards, including normative references, that apply to a single API, to help people interpret and understand the standards.

## What it is not designed to do?

This repository:

 - Cannot be used for test execution;
 - Is not an automated testing framework;
 - Does not replace the Standards. The obligation remains on CDR participants to apply the published standards; and
 - Does not replace ACCC’s CTS or participant tooling capability.

## Getting Started – How to use it?

This documentation can be used in many ways. You can follow the scenarios listed for each Suite that applies to your sector. You can search for key words to identify tests that clarify the standards.

A simple way to use it is to:

 1. identify the data or API that needs to be tested;
 2. select the scenario for the API, either positive or negative
 3. follow the links to each test case and assertion to validate your own tests.

The references listed for each test case and assertion should be read in conjunction with this documentation.

## Getting Started – How it is structured?

-   CDS sector specific APIs (Banking, Energy, Common and Admin (resources)) have been logically grouped into Suites.  Each Suite is made up of a number of Scenarios where each API has a positive (happy path) and negative scenario.

	-  	‘Scenario’ in this context implies a group of tests to validate a single API.  A Scenario is not a complete end to end sequence of API calls that might be needed to test a single use case.

-   Each Scenario has a series of Test Cases attached to it.

	-   The test cases both positive and negative, are expressed as Happy Path: TRUE (positive) or FALSE (negative)

-   Each Test Case links to a series of Assertions which are either specific to the Suite or Common to many Suites.

## Coverage

Our intention is to write test cases for all resource APIs for Banking and Energy in addition to Common and Admin.  Energy is the current priority given approaching obligation dates.

The resource APIs have been grouped into 11 suites.  Each comprises specific test cases for positive and negative scenarios, as shown below.

![image](https://user-images.githubusercontent.com/52149325/169204296-38994343-a47a-49d9-951a-ff938b649d4d.png)


Information Security and CDR Register behaviour is currently handled in the [FAPI Conformance Suite](https://openid.net/certification/fapi_op_testing/) and the Consumer Data Right Conformance Test Suite for [Data Holders](https://www.cdr.gov.au/for-providers/conformance-test-suite-data-holders) and [Data Recipients](https://www.cdr.gov.au/for-providers/conformance-test-suite-data-recipients).

The DSB anticipates this documentation, in time, will also reference DSBs postman collection to validate schemas.  Details of the postman collection are available here: [ConsumerDataStandardsAustralia/dsb-schema-tools (github.com)](https://github.com/ConsumerDataStandardsAustralia/dsb-schema-tools).

## Numbering convention

The tests are organised by Suite, Scenario, Case and Assertion.
-   One Suite can have many Scenarios
-   One Scenario can have many Test Cases
-   One Test Case can have many Assertions
-   Common Assertions can belong to many Test Cases

Assertions are expressed using the Behaviour Driven Development (BDD) methodology, in the format “GIVEN...WHEN...THEN...

Each Suite, Scenario, Test Case and Assertion has a unique identifier in the format a.aaa.nnn, where ‘a’ represents an alpha character and 'n' represents a numeric character.

Each **Scenario**, **Test Case** and **Assertion** in a **Suite** starts with the same initial three alpha combination. The numeric designation commences at 001.  New test cases and assertions are appended to the existing list and the number is incremented. Related test cases and assertions may not appear in numeric sequence.

The numbering convention is as follows.

**Suite**: SUITE-nnn[+ **Name** for written documentation when needed]
**Scenario**: S.aaa.nnn
**Test Case**: T.aaa.nnn
**Assertion**: A.aaa.nnn

<p dir="auto">Scenario, Test Case and Assertion alpha character codes</p>
<table>
<thead>
<tr>
<th>Alpha position</th>
<th>1: Sector</th>
<th>2: Type</th>
<th>3: Subtype</th>
</tr>
</thead>
<tbody>
<tr>
<td style="vertical-align:top;">Meaning of alpha character</td>
<td style="vertical-align:top;">A: Admin <br> B: Banking <br> C: Common <br> D: DCR <br>  E: Energy <br> R: Register <br> T: Telecommunication</td>
<td style="vertical-align:top;">A: API (A) <br> U: UX</td>
<td style="vertical-align:top;">Uses characters like B: Balance or <br> P: Product where the character <br> has not been used before</td>
</tr>
</tbody>
</table>

	
Example: T.EAR.002: Test Case for Energy API R number 2

For Common Assertions the three alpha characters are used as follows:
* Position 1 is always C for Common
* Position 2 and 3 are an abbreviation of the assertion subject, e.g. Page Size ‘CPS’


|Alpha code | Name | Field |
|---|---|---|
|CAI | Arrangement Id | cds-arrangement-id |
|CBD  | Body | body |
|CCH	|Client Headers	|x-cds-client-headers |
|CFA	|FAPI Authorisation Date 	|x-fapi-auth-date |
|CFC	|FAPI Customer IP Address	|x-fapi-customer-ip-address |
|CFI	|FAPI Interaction Identifier	|x-fapi-interaction-id |
|CND	|Newest Date	|newest-date |
|COD	|Oldest Date	|oldest-date |
|CPG	|Page	|page |
|CPS	|Page Size	|page-size |
|CSP	|Service Point	|servicePointId |
|CVM	|Minimum Version 	|x-min-v |
|CVN 	|Version Number	|x-v |

## Happy Path
The term ‘Happy Path’ describes a scenario that produces a successful result for a valid API call. 

Happy Path = TRUE indicates a 200 response with a valid schema is expected.

Happy Path = FALSE indicates the Scenario and Test Cases are intended to generate an error response.

## Contributing and providing feedback

The CDR Test Documentation is a concept we’d like to test with the community.  We welcome your feedback.  We have developed this based on our interpretation of earlier feedback received from the community to clarify ambiguity in the standards and to assist with implementation.

To provide feedback you need to raise an ‘issue’ or a ‘pull request’ on this repository in the same way you would on the DSB standards. We welcome feedback on:

 1. additional tests to clarify aspects of the standards that are not covered in this document
 2. test cases or assertions that appear to be incorrect
 3. suggested improvements to the user interface or to the instructions on how to use this repository.

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

-   Please provide a single, considered response to each proposal covering all feedback concerning the proposal.
-   For transparency, if you work at or are associated with an organisation with an interest in the standards, please indicate this in your response.
-   Please ensure you are aware of and compliant with any social media guidelines or internal processes for response set by your organisation before providing feedback.
