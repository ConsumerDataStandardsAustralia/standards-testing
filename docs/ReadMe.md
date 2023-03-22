
<a id="introduction"></a>
# The CDR Test Documentation

File version: 2.0.0

This documentation has been  created by the DSB to assist participants in the development of compliant APIs

For more details see the CDS <a href="https://github.com/ConsumerDataStandardsAustralia/standards-testing">standards-testing repository</a> for details

Last updated 21/03/2023 see the <a href="https://github.com/ConsumerDataStandardsAustralia/standards-testing/raw/v2.0.0/CDR%20Test%20Documentation%20CHANGE%20LOG.xlsx">change log</a> for details

<a id="suites"></a>
# Test Suites

<a id="suite-suite.caa"></a>
## SUITE.CAA: APIs - Common Admin

### Test Scenarios:

* [S.CAA.0035: Get status v1](#scenario-s.caa.0035)
* [S.CAA.0036: Get status Negative v1](#scenario-s.caa.0036)
* [S.CAA.0037: Get outages v1](#scenario-s.caa.0037)
* [S.CAA.0038: Get outages Negative v1](#scenario-s.caa.0038)


<a id="suite-suite.cac"></a>
## SUITE.CAC: APIs - Common Customer

### Test Scenarios:

* [S.CAC.0039: Get customer v1](#scenario-s.cac.0039)
* [S.CAC.0040: Get customer Negative v1](#scenario-s.cac.0040)
* [S.CAC.0041: Get customer detail v2](#scenario-s.cac.0041)
* [S.CAC.0042: Get customer detail Negative v2](#scenario-s.cac.0042)


<a id="suite-suite.eaa"></a>
## SUITE.EAA: APIs - Energy Accounts

### Test Scenarios:

* [S.EAA.0047: Get Energy Accounts v1](#scenario-s.eaa.0047)
* [S.EAA.0048: Get Energy Accounts Negative v1](#scenario-s.eaa.0048)
* [S.EAA.0049: Get Energy Account Detail v1](#scenario-s.eaa.0049)
* [S.EAA.0050: Get Energy Account Detail Negative v1](#scenario-s.eaa.0050)
* [S.EAA.0051: Get Agreed Payment Schedule v1](#scenario-s.eaa.0051)
* [S.EAA.0052: Get Agreed Payment Schedule Negative v1](#scenario-s.eaa.0052)
* [S.EAA.0053: Get Concessions v1](#scenario-s.eaa.0053)
* [S.EAA.0054: Get Concessions Negative v1](#scenario-s.eaa.0054)


<a id="suite-suite.ear"></a>
## SUITE.EAR: APIs - Energy Standing Data, Usage and DER

### Test Scenarios:

* [S.EAR.0073: Get Service Points v1](#scenario-s.ear.0073)
* [S.EAR.0074: Get Service Points Negative v1](#scenario-s.ear.0074)
* [S.EAR.0075: Get Service Point Detail v1](#scenario-s.ear.0075)
* [S.EAR.0076: Get Service Point Detail Negative v1](#scenario-s.ear.0076)
* [S.EAR.0077: Get Usage For Service Point v1](#scenario-s.ear.0077)
* [S.EAR.0078: Get Usage For Service Point Negative v1](#scenario-s.ear.0078)
* [S.EAR.0079: Get Bulk Usage v1](#scenario-s.ear.0079)
* [S.EAR.0080: Get Bulk Usage Negative v1](#scenario-s.ear.0080)
* [S.EAR.0081: Get Usage For Specific Service Points v1](#scenario-s.ear.0081)
* [S.EAR.0082: Get Usage For Specific Service Points Negative v1](#scenario-s.ear.0082)
* [S.EAR.0083: Get DER for Service Point v1](#scenario-s.ear.0083)
* [S.EAR.0084: Get DER for Service Point Negative v1](#scenario-s.ear.0084)
* [S.EAR.0085: Get Bulk DER v1](#scenario-s.ear.0085)
* [S.EAR.0086: Get Bulk DER Negative v1](#scenario-s.ear.0086)
* [S.EAR.0087: Get DER For Specific Service Points v1](#scenario-s.ear.0087)
* [S.EAR.0088: Get DER For Specific Service Points Negative v1](#scenario-s.ear.0088)


<a id="suite-suite.eas"></a>
## SUITE.EAS: APIs - Energy Standing Data, Usage and DER SR

### Test Scenarios:

* [S.EAS.0089: Get Service Points SR v1](#scenario-s.eas.0089)
* [S.EAS.0090: Get Service Points Negative SR v1](#scenario-s.eas.0090)
* [S.EAS.0091: Get Service Point Detail SR v1](#scenario-s.eas.0091)
* [S.EAS.0092: Get Service Point Detail Negative SR v1](#scenario-s.eas.0092)
* [S.EAS.0093: Get Usage For Service Point SR v1](#scenario-s.eas.0093)
* [S.EAS.0094: Get Usage For Service Point Negative SR v1](#scenario-s.eas.0094)
* [S.EAS.0095: Get Usage For Specific Service Points SR v1](#scenario-s.eas.0095)
* [S.EAS.0096: Get Usage For Specific Service Points Negative SR v1](#scenario-s.eas.0096)
* [S.EAS.0097: Get DER for Service Point SR v1](#scenario-s.eas.0097)
* [S.EAS.0098: Get DER for Service Point Negative SR v1](#scenario-s.eas.0098)
* [S.EAS.0099: Get DER For Specific Service Points SR v1](#scenario-s.eas.0099)
* [S.EAS.0100: Get DER For Specific Service Points Negative SR v1](#scenario-s.eas.0100)


<a id="scenarios"></a>
# Test Scenarios

<a id="scenario-s.caa.0035"></a>
## S.CAA.0035: Get status v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.CAA.0001: Get Status with a valid version](#testcase-t.caa.0001)|


<a id="scenario-s.caa.0036"></a>
## S.CAA.0036: Get status Negative v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.CAA.0002: Get Status - invalid version value](#testcase-t.caa.0002)|
|2|Execute Test|[T.CAA.0003: Get Status - invalid version format](#testcase-t.caa.0003)|
|3|Execute Test|[T.CAA.0004: Get Status - unsupported version without <x-min-v> included](#testcase-t.caa.0004)|
|4|Execute Test|[T.CAA.0005: Get Status - unsupported version when <x-min-v> is included](#testcase-t.caa.0005)|
|5|Execute Test|[T.CAA.0006: Get Status - invalid minimum version format](#testcase-t.caa.0006)|


<a id="scenario-s.caa.0037"></a>
## S.CAA.0037: Get outages v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.CAA.0007: Get Outages with a valid version](#testcase-t.caa.0007)|


<a id="scenario-s.caa.0038"></a>
## S.CAA.0038: Get outages Negative v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.CAA.0008: Get Outages - invalid version value](#testcase-t.caa.0008)|
|2|Execute Test|[T.CAA.0009: Get Outages - invalid version format](#testcase-t.caa.0009)|
|3|Execute Test|[T.CAA.0010: Get Outages - unsupported version without <x-min-v> included](#testcase-t.caa.0010)|
|4|Execute Test|[T.CAA.0011: Get Outages - unsupported version when <x-min-v> is included](#testcase-t.caa.0011)|
|5|Execute Test|[T.CAA.0012: Get Outages - invalid minimum version format](#testcase-t.caa.0012)|


<a id="scenario-s.cac.0039"></a>
## S.CAC.0039: Get customer v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.CAC.0001: Get Customer](#testcase-t.cac.0001)|


<a id="scenario-s.cac.0040"></a>
## S.CAC.0040: Get customer Negative v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.CAC.0002: Get Customer - invalid version value](#testcase-t.cac.0002)|
|2|Execute Test|[T.CAC.0003: Get Customer - invalid version format](#testcase-t.cac.0003)|
|3|Execute Test|[T.CAC.0004: Get Customer - unsupported version without x-min-v included](#testcase-t.cac.0004)|
|4|Execute Test|[T.CAC.0005: Get Customer - unsupported version when x-min-v is included](#testcase-t.cac.0005)|
|5|Execute Test|[T.CAC.0006: Get Customer - invalid minimum version value](#testcase-t.cac.0006)|
|6|Execute Test|[T.CAC.0007: Get Customer - invalid FAPI Interaction ID format ](#testcase-t.cac.0007)|
|7|Execute Test|[T.CAC.0008: Get Customer - missing FAPI Auth Date](#testcase-t.cac.0008)|
|8|Execute Test|[T.CAC.0009: Get Customer -  invalid FAPI Auth Date](#testcase-t.cac.0009)|
|9|Execute Test|[T.CAC.0010: Get Customer - missing FAPI Customer IP Address](#testcase-t.cac.0010)|
|10|Execute Test|[T.CAC.0011: Get Customer - invalid FAPI Customer IP Address](#testcase-t.cac.0011)|
|11|Execute Test|[T.CAC.0012: Get Customer - missing CDS Client Header](#testcase-t.cac.0012)|
|12|Execute Test|[T.CAC.0013: Get Customer - invalid CDS Client Header](#testcase-t.cac.0013)|


<a id="scenario-s.cac.0041"></a>
## S.CAC.0041: Get customer detail v2

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.CAC.0014: Get Customer Detail](#testcase-t.cac.0014)|


<a id="scenario-s.cac.0042"></a>
## S.CAC.0042: Get customer detail Negative v2

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.CAC.0015: Get Customer Detail - invalid version value](#testcase-t.cac.0015)|
|2|Execute Test|[T.CAC.0016: Get Customer Detail - invalid version format](#testcase-t.cac.0016)|
|3|Execute Test|[T.CAC.0017: Get Customer Detail - unsupported version without x-min-v included](#testcase-t.cac.0017)|
|4|Execute Test|[T.CAC.0018: Get Customer Detail - unsupported version when x-min-v is included](#testcase-t.cac.0018)|
|5|Execute Test|[T.CAC.0019: Get Customer Detail - invalid minimum version value](#testcase-t.cac.0019)|
|6|Execute Test|[T.CAC.0020: Get Customer Detail - invalid FAPI Interaction ID format ](#testcase-t.cac.0020)|
|7|Execute Test|[T.CAC.0021: Get Customer Detail - missing FAPI Auth Date](#testcase-t.cac.0021)|
|8|Execute Test|[T.CAC.0022: Get Customer Detail -  invalid FAPI Auth Date](#testcase-t.cac.0022)|
|9|Execute Test|[T.CAC.0023: Get Customer Detail - missing FAPI Customer IP Address](#testcase-t.cac.0023)|
|10|Execute Test|[T.CAC.0024: Get Customer Detail - invalid FAPI Customer IP Address](#testcase-t.cac.0024)|
|11|Execute Test|[T.CAC.0025: Get Customer Detail - missing CDS Client Header](#testcase-t.cac.0025)|
|12|Execute Test|[T.CAC.0026: Get Customer Detail - invalid CDS Client Header](#testcase-t.cac.0026)|


<a id="scenario-s.eaa.0047"></a>
## S.EAA.0047: Get Energy Accounts v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAA.0001: Get Energy Accounts - no pagination](#testcase-t.eaa.0001)|
|2|Execute Test|[T.EAA.0002: Get Energy Accounts - with pagination](#testcase-t.eaa.0002)|


<a id="scenario-s.eaa.0048"></a>
## S.EAA.0048: Get Energy Accounts Negative v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAA.0003: Get Energy Accounts - invalid page parameters](#testcase-t.eaa.0003)|
|2|Execute Test|[T.EAA.0004: Get Energy Accounts - unsupported version without x-min-v included](#testcase-t.eaa.0004)|
|3|Execute Test|[T.EAA.0005: Get Energy Accounts - invalid version value](#testcase-t.eaa.0005)|
|4|Execute Test|[T.EAA.0006: Get Energy Accounts - invalid version format](#testcase-t.eaa.0006)|
|5|Execute Test|[T.EAA.0007: Get Energy Accounts - unsupported version when x-min-v is included](#testcase-t.eaa.0007)|
|6|Execute Test|[T.EAA.0008: Get Energy Accounts - invalid FAPI Interaction ID format ](#testcase-t.eaa.0008)|
|7|Execute Test|[T.EAA.0009: Get Energy Accounts - missing FAPI Auth Date](#testcase-t.eaa.0009)|
|8|Execute Test|[T.EAA.0010: Get Energy Accounts -  invalid FAPI Auth Date](#testcase-t.eaa.0010)|
|9|Execute Test|[T.EAA.0011: Get Energy Accounts - missing FAPI Customer IP Address](#testcase-t.eaa.0011)|
|10|Execute Test|[T.EAA.0012: Get Energy Accounts - invalid FAPI Customer IP Address](#testcase-t.eaa.0012)|
|11|Execute Test|[T.EAA.0013: Get Energy Accounts - missing CDS Client Header](#testcase-t.eaa.0013)|
|12|Execute Test|[T.EAA.0014: Get Energy Accounts - invalid CDS Client Header](#testcase-t.eaa.0014)|
|13|Execute Test|[T.EAA.0057: Get Energy Accounts - invalid minimum version format](#testcase-t.eaa.0057)|


<a id="scenario-s.eaa.0049"></a>
## S.EAA.0049: Get Energy Account Detail v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAA.0015: Get Energy Account Detail ](#testcase-t.eaa.0015)|


<a id="scenario-s.eaa.0050"></a>
## S.EAA.0050: Get Energy Account Detail Negative v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAA.0016: Get Energy Account Detail - invalid account id format](#testcase-t.eaa.0016)|
|2|Execute Test|[T.EAA.0017: Get Energy Account Detail - unavailable account id ](#testcase-t.eaa.0017)|
|3|Execute Test|[T.EAA.0018: Get Energy Account Detail - unsupported version without x-min-v included](#testcase-t.eaa.0018)|
|4|Execute Test|[T.EAA.0019: Get Energy Account Detail - invalid version value](#testcase-t.eaa.0019)|
|5|Execute Test|[T.EAA.0020: Get Energy Account Detail - invalid version format](#testcase-t.eaa.0020)|
|6|Execute Test|[T.EAA.0021: Get Energy Account Detail - unsupported version when x-min-v is included](#testcase-t.eaa.0021)|
|7|Execute Test|[T.EAA.0022: Get Energy Account Detail - invalid FAPI Interaction ID format ](#testcase-t.eaa.0022)|
|8|Execute Test|[T.EAA.0023: Get Energy Account Detail - missing FAPI Auth Date](#testcase-t.eaa.0023)|
|9|Execute Test|[T.EAA.0024: Get Energy Account Detail -  invalid FAPI Auth Date](#testcase-t.eaa.0024)|
|10|Execute Test|[T.EAA.0025: Get Energy Account Detail - missing FAPI Customer IP Address](#testcase-t.eaa.0025)|
|11|Execute Test|[T.EAA.0026: Get Energy Account Detail - invalid FAPI Customer IP Address](#testcase-t.eaa.0026)|
|12|Execute Test|[T.EAA.0027: Get Energy Account Detail - missing CDS Client Header](#testcase-t.eaa.0027)|
|13|Execute Test|[T.EAA.0028: Get Energy Account Detail - invalid CDS Client Header](#testcase-t.eaa.0028)|
|14|Execute Test|[T.EAA.0058: Get Energy Account Detail - invalid minimum version format](#testcase-t.eaa.0058)|


<a id="scenario-s.eaa.0051"></a>
## S.EAA.0051: Get Agreed Payment Schedule v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAA.0029: Get Agreed Payment Schedule](#testcase-t.eaa.0029)|


<a id="scenario-s.eaa.0052"></a>
## S.EAA.0052: Get Agreed Payment Schedule Negative v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAA.0030: Get Agreed Payment Schedule - invalid account id format](#testcase-t.eaa.0030)|
|2|Execute Test|[T.EAA.0031: Get Agreed Payment Schedule - unavailable account id ](#testcase-t.eaa.0031)|
|3|Execute Test|[T.EAA.0032: Get Agreed Payment Schedule - unsupported version without x-min-v included](#testcase-t.eaa.0032)|
|4|Execute Test|[T.EAA.0033: Get Agreed Payment Schedule - invalid version value](#testcase-t.eaa.0033)|
|5|Execute Test|[T.EAA.0034: Get Agreed Payment Schedule - invalid version format](#testcase-t.eaa.0034)|
|6|Execute Test|[T.EAA.0035: Get Agreed Payment Schedule - unsupported version when x-min-v is included](#testcase-t.eaa.0035)|
|7|Execute Test|[T.EAA.0036: Get Agreed Payment Schedule - invalid FAPI Interaction ID format ](#testcase-t.eaa.0036)|
|8|Execute Test|[T.EAA.0037: Get Agreed Payment Schedule - missing FAPI Auth Date](#testcase-t.eaa.0037)|
|9|Execute Test|[T.EAA.0038: Get Agreed Payment Schedule -  invalid FAPI Auth Date](#testcase-t.eaa.0038)|
|10|Execute Test|[T.EAA.0039: Get Agreed Payment Schedule - missing FAPI Customer IP Address](#testcase-t.eaa.0039)|
|11|Execute Test|[T.EAA.0040: Get Agreed Payment Schedule - invalid FAPI Customer IP Address](#testcase-t.eaa.0040)|
|12|Execute Test|[T.EAA.0041: Get Agreed Payment Schedule - missing CDS Client Header](#testcase-t.eaa.0041)|
|13|Execute Test|[T.EAA.0042: Get Agreed Payment Schedule - invalid CDS Client Header](#testcase-t.eaa.0042)|
|14|Execute Test|[T.EAA.0059: Get Agreed Payment Schedule - invalid minimum version format](#testcase-t.eaa.0059)|


<a id="scenario-s.eaa.0053"></a>
## S.EAA.0053: Get Concessions v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAA.0043: Get Concessions ](#testcase-t.eaa.0043)|


<a id="scenario-s.eaa.0054"></a>
## S.EAA.0054: Get Concessions Negative v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAA.0044: Get Concessions - invalid account id format](#testcase-t.eaa.0044)|
|2|Execute Test|[T.EAA.0045: Get Concessions - unavailable account id ](#testcase-t.eaa.0045)|
|3|Execute Test|[T.EAA.0046: Get Concessions - unsupported version without x-min-v included](#testcase-t.eaa.0046)|
|4|Execute Test|[T.EAA.0047: Get Concessions - invalid version value](#testcase-t.eaa.0047)|
|5|Execute Test|[T.EAA.0048: Get Concessions - invalid version format](#testcase-t.eaa.0048)|
|6|Execute Test|[T.EAA.0049: Get Concessions - unsupported version when x-min-v is included](#testcase-t.eaa.0049)|
|7|Execute Test|[T.EAA.0050: Get Concessions - invalid FAPI Interaction ID format ](#testcase-t.eaa.0050)|
|8|Execute Test|[T.EAA.0051: Get Concessions - missing FAPI Auth Date](#testcase-t.eaa.0051)|
|9|Execute Test|[T.EAA.0052: Get Concessions - invalid FAPI Auth Date](#testcase-t.eaa.0052)|
|10|Execute Test|[T.EAA.0053: Get Concessions - missing FAPI Customer IP Address](#testcase-t.eaa.0053)|
|11|Execute Test|[T.EAA.0054: Get Concessions - invalid FAPI Customer IP Address](#testcase-t.eaa.0054)|
|12|Execute Test|[T.EAA.0055: Get Concessions - missing CDS Client Header](#testcase-t.eaa.0055)|
|13|Execute Test|[T.EAA.0056: Get Concessions - invalid CDS Client Header](#testcase-t.eaa.0056)|
|14|Execute Test|[T.EAA.0060: Get Concessions - invalid minimum version format](#testcase-t.eaa.0060)|


<a id="scenario-s.ear.0073"></a>
## S.EAR.0073: Get Service Points v1

### Purpose:

Test cases which will return a 2xx status code

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)


### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Setup|Authorise session</br>AND x-v is set in header|
|2|Execute Test|[T.EAR.0001: ADR call to DH: Get Service Points - no pagination](#testcase-t.ear.0001)|
|3|Execute Test|[T.EAR.0002: ADR call to DH: Get Service Points - with pagination](#testcase-t.ear.0002)|


<a id="scenario-s.ear.0074"></a>
## S.EAR.0074: Get Service Points Negative v1

### Purpose:

Test cases which will return codes other than 2xx

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)


### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Setup|Authorise session|
|2|Execute Test|[T.EAR.0003: ADR call to DH: Get Service Points - unsupported version without x-min-v included](#testcase-t.ear.0003)|
|3|Execute Test|[T.EAR.0004: ADR call to DH: Get Service Points - invalid page parameters](#testcase-t.ear.0004)|
|4|Execute Test|[T.EAR.0005: ADR call to DH: Get Service Points - invalid FAPI Interaction ID format ](#testcase-t.ear.0005)|
|5|Execute Test|[T.EAR.0073: ADR call to DH: Get Service Points - missing FAPI Auth Date](#testcase-t.ear.0073)|
|6|Execute Test|[T.EAR.0074: ADR call to DH: Get Service Points - invalid FAPI Auth Date](#testcase-t.ear.0074)|
|7|Execute Test|[T.EAR.0075: ADR call to DH: Get Service Points - missing FAPI Customer IP Address](#testcase-t.ear.0075)|
|8|Execute Test|[T.EAR.0076: ADR call to DH: Get Service Points - invalid FAPI Customer IP Address](#testcase-t.ear.0076)|
|9|Execute Test|[T.EAR.0077: ADR call to DH: Get Service Points - missing CDS Client Header](#testcase-t.ear.0077)|
|10|Execute Test|[T.EAR.0078: ADR call to DH: Get Service Points - invalid CDS Client Header](#testcase-t.ear.0078)|
|11|Execute Test|[T.EAR.0109: ADR call to DH: Get Service Points - invalid version value](#testcase-t.ear.0109)|
|12|Execute Test|[T.EAR.0110: ADR call to DH: Get Service Points - invalid version format](#testcase-t.ear.0110)|
|13|Execute Test|[T.EAR.0125: ADR call to DH: Get Service Points - unsupported version when x-min-v is included](#testcase-t.ear.0125)|
|14|Execute Test|[T.EAR.0133: ADR call to DH: Get Service Points - invalid minimum version format](#testcase-t.ear.0133)|


<a id="scenario-s.ear.0075"></a>
## S.EAR.0075: Get Service Point Detail v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.0006: ADR call to DH: Get Service Point Detail ](#testcase-t.ear.0006)|


<a id="scenario-s.ear.0076"></a>
## S.EAR.0076: Get Service Point Detail Negative v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.0007: ADR call to DH: Get Service Point Detail - unsupported version without x-min-v included](#testcase-t.ear.0007)|
|2|Execute Test|[T.EAR.0008: ADR call to DH: Get Service Point Detail - invalid format of Service Point ID](#testcase-t.ear.0008)|
|3|Execute Test|[T.EAR.0009: ADR call to DH: Get Service Point Detail - unavailable Service Point ID](#testcase-t.ear.0009)|
|4|Execute Test|[T.EAR.0010: ADR call to DH: Get Service Point Detail - invalid FAPI Interaction ID format ](#testcase-t.ear.0010)|
|5|Execute Test|[T.EAR.0079: ADR call to DH: Get Service Point - missing FAPI Auth Date](#testcase-t.ear.0079)|
|6|Execute Test|[T.EAR.0080: ADR call to DH: Get Service Point - invalid FAPI Auth Date](#testcase-t.ear.0080)|
|7|Execute Test|[T.EAR.0081: ADR call to DH: Get Service Point - missing FAPI Customer IP Address](#testcase-t.ear.0081)|
|8|Execute Test|[T.EAR.0082: ADR call to DH: Get Service Point - invalid FAPI Customer IP Address](#testcase-t.ear.0082)|
|9|Execute Test|[T.EAR.0083: ADR call to DH: Get Service Point - missing CDS Client Header](#testcase-t.ear.0083)|
|10|Execute Test|[T.EAR.0084: ADR call to DH: Get Service Point - invalid CDS Client Header](#testcase-t.ear.0084)|
|11|Execute Test|[T.EAR.0111: ADR call to DH: Get Service Point - invalid version value](#testcase-t.ear.0111)|
|12|Execute Test|[T.EAR.0112: ADR call to DH: Get Service Point - invalid version format](#testcase-t.ear.0112)|
|13|Execute Test|[T.EAR.0126: ADR call to DH: Get Service Point - unsupported version when x-min-v is included](#testcase-t.ear.0126)|
|14|Execute Test|[T.EAR.0134: ADR call to DH: Get Service Point Detail - invalid minimum version format](#testcase-t.ear.0134)|


<a id="scenario-s.ear.0077"></a>
## S.EAR.0077: Get Usage For Service Point v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.0011: ADR call to DH: Get Usage for Service Point Detail - no pagination](#testcase-t.ear.0011)|
|2|Execute Test|[T.EAR.0012: ADR call to DH: Get Usage for Service Points - with pagination](#testcase-t.ear.0012)|
|3|Execute Test|[T.EAR.0015: ADR call to DH: Get Usage for Service Points - oldest date](#testcase-t.ear.0015)|
|4|Execute Test|[T.EAR.0016: ADR call to DH: Get Usage for Service Points - newest date](#testcase-t.ear.0016)|


<a id="scenario-s.ear.0078"></a>
## S.EAR.0078: Get Usage For Service Point Negative v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.0013: ADR call to DH: Get Usage for Service Points - unsupported version without x-min-v included](#testcase-t.ear.0013)|
|2|Execute Test|[T.EAR.0014: ADR call to DH: Get Usage for Service Points - invalid page parameters](#testcase-t.ear.0014)|
|3|Execute Test|[T.EAR.0017: ADR call to DH: Get Usage for Service Points - invalid Service Point ID](#testcase-t.ear.0017)|
|4|Execute Test|[T.EAR.0018: ADR call to DH: Get Usage for Service Points - unavailable Service Point ID](#testcase-t.ear.0018)|
|5|Execute Test|[T.EAR.0019: ADR call to DH: Get Usage for Service Points - invalid format oldest date ](#testcase-t.ear.0019)|
|6|Execute Test|[T.EAR.0020: ADR call to DH: Get Usage for Service Points - invalid format newest date](#testcase-t.ear.0020)|
|7|Execute Test|[T.EAR.0021: ADR call to DH: Get Usage For Service Point - invalid FAPI Interaction ID format](#testcase-t.ear.0021)|
|8|Execute Test|[T.EAR.0085: ADR call to DH: Get Usage For Service Point - missing FAPI Auth Date](#testcase-t.ear.0085)|
|9|Execute Test|[T.EAR.0086: ADR call to DH: Get Usage For Service Point - invalid FAPI Auth Date](#testcase-t.ear.0086)|
|10|Execute Test|[T.EAR.0087: ADR call to DH: Get Usage For Service Point - missing FAPI Customer IP Address](#testcase-t.ear.0087)|
|11|Execute Test|[T.EAR.0088: ADR call to DH: Get Usage For Service Point - invalid FAPI Customer IP Address](#testcase-t.ear.0088)|
|12|Execute Test|[T.EAR.0089: ADR call to DH: Get Usage For Service Point - missing CDS Client Header](#testcase-t.ear.0089)|
|13|Execute Test|[T.EAR.0090: ADR call to DH: Get Usage For Service Point - invalid CDS Client Header](#testcase-t.ear.0090)|
|14|Execute Test|[T.EAR.0113: ADR call to DH: Get Usage For Service Point - invalid version value](#testcase-t.ear.0113)|
|15|Execute Test|[T.EAR.0114: ADR call to DH: Get Usage For Service Point - invalid version format](#testcase-t.ear.0114)|
|16|Execute Test|[T.EAR.0127: ADR call to DH: Get Usage For Service Point - unsupported version when x-min-v is included](#testcase-t.ear.0127)|
|17|Execute Test|[T.EAR.0135: ADR call to DH: Get Usage for Service Point - invalid minimum version format](#testcase-t.ear.0135)|


<a id="scenario-s.ear.0079"></a>
## S.EAR.0079: Get Bulk Usage v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.0045: ADR call to DH: Get Bulk Usage ](#testcase-t.ear.0045)|
|2|Execute Test|[T.EAR.0046: ADR call to DH: Get Bulk Usage - with pagination](#testcase-t.ear.0046)|
|3|Execute Test|[T.EAR.0049: ADR call to DH: Get Bulk Usage - oldest date](#testcase-t.ear.0049)|
|4|Execute Test|[T.EAR.0050: ADR call to DH: Get Bulk Usage - newest date](#testcase-t.ear.0050)|


<a id="scenario-s.ear.0080"></a>
## S.EAR.0080: Get Bulk Usage Negative v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.0047: ADR call to DH: Get Bulk Usage - unsupported version without x-min-v included](#testcase-t.ear.0047)|
|2|Execute Test|[T.EAR.0048: ADR call to DH: Get Bulk Usage - invalid page parameters](#testcase-t.ear.0048)|
|3|Execute Test|[T.EAR.0051: ADR call to DH: Get Bulk Usage - invalid format oldest date ](#testcase-t.ear.0051)|
|4|Execute Test|[T.EAR.0052: ADR call to DH: Get Bulk Usage - invalid format newest date](#testcase-t.ear.0052)|
|5|Execute Test|[T.EAR.0053: ADR call to DH: Get Bulk Usage - invalid FAPI Interaction ID format](#testcase-t.ear.0053)|
|6|Execute Test|[T.EAR.0054: ADR call to DH: Get Bulk Usage - missing FAPI Auth Date](#testcase-t.ear.0054)|
|7|Execute Test|[T.EAR.0055: ADR call to DH: Get Bulk Usage - invalid FAPI Auth Date](#testcase-t.ear.0055)|
|8|Execute Test|[T.EAR.0056: ADR call to DH: Get Bulk Usage - missing FAPI Customer IP Address](#testcase-t.ear.0056)|
|9|Execute Test|[T.EAR.0057: ADR call to DH: Get Bulk Usage - invalid FAPI Customer IP Address](#testcase-t.ear.0057)|
|10|Execute Test|[T.EAR.0058: ADR call to DH: Get Bulk Usage - missing CDS Client Header](#testcase-t.ear.0058)|
|11|Execute Test|[T.EAR.0059: ADR call to DH: Get Bulk Usage - invalid CDS Client Header](#testcase-t.ear.0059)|
|12|Execute Test|[T.EAR.0115: ADR call to DH: Get Bulk Usage - invalid version value](#testcase-t.ear.0115)|
|13|Execute Test|[T.EAR.0116: ADR call to DH: Get Bulk Usage - invalid version format](#testcase-t.ear.0116)|
|14|Execute Test|[T.EAR.0128: ADR call to DH: Get Bulk Usage - unsupported version when x-min-v is included](#testcase-t.ear.0128)|
|15|Execute Test|[T.EAR.0136: ADR call to DH: Get Bulk Usage - invalid minimum version format](#testcase-t.ear.0136)|


<a id="scenario-s.ear.0081"></a>
## S.EAR.0081: Get Usage For Specific Service Points v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.0022: ADR call to DH: Get Usage for Specific Service Points - no pagination](#testcase-t.ear.0022)|
|2|Execute Test|[T.EAR.0023: ADR call to DH: Get Usage for Specific Service Points - with pagination](#testcase-t.ear.0023)|
|3|Execute Test|[T.EAR.0026: ADR call to DH: Get Usage for Specific Service Points - oldest date](#testcase-t.ear.0026)|
|4|Execute Test|[T.EAR.0027: ADR call to DH: Get Usage for Specific Service Points - newest date](#testcase-t.ear.0027)|


<a id="scenario-s.ear.0082"></a>
## S.EAR.0082: Get Usage For Specific Service Points Negative v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.0024: ADR call to DH: Get Usage for Specific Service Points - unsupported version without x-min-v included](#testcase-t.ear.0024)|
|2|Execute Test|[T.EAR.0025: ADR call to DH: Get Usage for Specific Service Points - invalid page parameters](#testcase-t.ear.0025)|
|3|Execute Test|[T.EAR.0028: ADR call to DH: Get Usage for Specific Service Points - invalid format oldest date ](#testcase-t.ear.0028)|
|4|Execute Test|[T.EAR.0029: ADR call to DH: Get Usage for Specific Service Points - invalid format newest date](#testcase-t.ear.0029)|
|5|Execute Test|[T.EAR.0030: ADR call to DH: Get Usage For Specific Service Points - invalid FAPI Interaction ID format](#testcase-t.ear.0030)|
|6|Execute Test|[T.EAR.0031: ADR call to DH: Get Usage for Specific Service Points - invalid body values](#testcase-t.ear.0031)|
|7|Execute Test|[T.EAR.0032: ADR call to DH: Get Usage for Specific Service Points - invalid body format](#testcase-t.ear.0032)|
|8|Execute Test|[T.EAR.0091: ADR call to DH: Get Usage for Specific Service Points - missing FAPI Auth Date](#testcase-t.ear.0091)|
|9|Execute Test|[T.EAR.0092: ADR call to DH: Get Usage for Specific Service Points - invalid FAPI Auth Date](#testcase-t.ear.0092)|
|10|Execute Test|[T.EAR.0093: ADR call to DH: Get Usage for Specific Service Points - missing FAPI Customer IP Address](#testcase-t.ear.0093)|
|11|Execute Test|[T.EAR.0094: ADR call to DH: Get Usage for Specific Service Points - invalid FAPI Customer IP Address](#testcase-t.ear.0094)|
|12|Execute Test|[T.EAR.0095: ADR call to DH: Get Usage for Specific Service Points - missing CDS Client Header](#testcase-t.ear.0095)|
|13|Execute Test|[T.EAR.0096: ADR call to DH: Get Usage for Specific Service Points - invalid CDS Client Header](#testcase-t.ear.0096)|
|14|Execute Test|[T.EAR.0117: ADR call to DH: Get Usage for Specific Service Points - invalid version value](#testcase-t.ear.0117)|
|15|Execute Test|[T.EAR.0118: ADR call to DH: Get Usage for Specific Service Points - invalid version format](#testcase-t.ear.0118)|
|16|Execute Test|[T.EAR.0129: ADR call to DH: Get Usage for Specific Service Points - unsupported version when x-min-v is included](#testcase-t.ear.0129)|
|17|Execute Test|[T.EAR.0137: ADR call to DH: Get Usage For Specific Service Points - invalid minimum version format](#testcase-t.ear.0137)|


<a id="scenario-s.ear.0083"></a>
## S.EAR.0083: Get DER for Service Point v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.0033: ADR call to DH: Get DER for Service Point ](#testcase-t.ear.0033)|


<a id="scenario-s.ear.0084"></a>
## S.EAR.0084: Get DER for Service Point Negative v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.0034: ADR call to DH: Get Service Point Detail - unsupported version without x-min-v included](#testcase-t.ear.0034)|
|2|Execute Test|[T.EAR.0035: ADR call to DH: Get Service Point Detail - invalid format of Service Point ID](#testcase-t.ear.0035)|
|3|Execute Test|[T.EAR.0036: ADR call to DH: Get Service Point Detail - unavailable Service Point ID](#testcase-t.ear.0036)|
|4|Execute Test|[T.EAR.0037: ADR call to DH: Get DER for Service Point - invalid FAPI Interaction ID format](#testcase-t.ear.0037)|
|5|Execute Test|[T.EAR.0097: ADR call to DH: Get DER for Service Point - missing FAPI Auth Date](#testcase-t.ear.0097)|
|6|Execute Test|[T.EAR.0098: ADR call to DH: Get DER for Service Point - invalid FAPI Auth Date](#testcase-t.ear.0098)|
|7|Execute Test|[T.EAR.0099: ADR call to DH: Get DER for Service Point - missing FAPI Customer IP Address](#testcase-t.ear.0099)|
|8|Execute Test|[T.EAR.0100: ADR call to DH: Get DER for Service Point - invalid FAPI Customer IP Address](#testcase-t.ear.0100)|
|9|Execute Test|[T.EAR.0101: ADR call to DH: Get DER for Service Point - missing CDS Client Header](#testcase-t.ear.0101)|
|10|Execute Test|[T.EAR.0102: ADR call to DH: Get DER for Service Point - invalid CDS Client Header](#testcase-t.ear.0102)|
|11|Execute Test|[T.EAR.0119: ADR call to DH: Get DER for Service Point - invalid version value](#testcase-t.ear.0119)|
|12|Execute Test|[T.EAR.0120: ADR call to DH: Get DER for Service Point - invalid version format](#testcase-t.ear.0120)|
|13|Execute Test|[T.EAR.0130: ADR call to DH: Get DER for Service Point - unsupported version when x-min-v is included](#testcase-t.ear.0130)|
|14|Execute Test|[T.EAR.0138: ADR call to DH: Get DER For Service Point - invalid minimum version format](#testcase-t.ear.0138)|


<a id="scenario-s.ear.0085"></a>
## S.EAR.0085: Get Bulk DER v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.0060: ADR call to DH: Get Bulk DER ](#testcase-t.ear.0060)|
|2|Execute Test|[T.EAR.0061: ADR call to DH: Get Bulk DER - with pagination](#testcase-t.ear.0061)|


<a id="scenario-s.ear.0086"></a>
## S.EAR.0086: Get Bulk DER Negative v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.0062: ADR call to DH: Get Bulk DER - unsupported version without x-min-v included](#testcase-t.ear.0062)|
|2|Execute Test|[T.EAR.0063: ADR call to DH: Get Bulk DER - invalid page parameters](#testcase-t.ear.0063)|
|3|Execute Test|[T.EAR.0064: ADR call to DH: Get Bulk DER - missing FAPI Auth Date](#testcase-t.ear.0064)|
|4|Execute Test|[T.EAR.0065: ADR call to DH: DHGet Bulk DER - invalid FAPI Auth Date](#testcase-t.ear.0065)|
|5|Execute Test|[T.EAR.0066: ADR call to DH: Get Bulk DER - missing FAPI Customer IP Address](#testcase-t.ear.0066)|
|6|Execute Test|[T.EAR.0067: ADR call to DH: DH: Get Bulk DER - invalid FAPI Customer IP Address](#testcase-t.ear.0067)|
|7|Execute Test|[T.EAR.0068: ADR call to DH: Get Bulk DER - missing CDS Client Header](#testcase-t.ear.0068)|
|8|Execute Test|[T.EAR.0069: ADR call to DH: Get Bulk DER - invalid CDS Client Header](#testcase-t.ear.0069)|
|9|Execute Test|[T.EAR.0070: ADR call to DH: Get Bulk DER - invalid FAPI Auth Date](#testcase-t.ear.0070)|
|10|Execute Test|[T.EAR.0071: ADR call to DH: Get Bulk DER - missing FAPI Customer IP Address](#testcase-t.ear.0071)|
|11|Execute Test|[T.EAR.0072: ADR call to DH: Get Bulk DER - invalid FAPI Customer IP Address](#testcase-t.ear.0072)|
|12|Execute Test|[T.EAR.0121: ADR call to DH: Get Bulk DER - invalid version value](#testcase-t.ear.0121)|
|13|Execute Test|[T.EAR.0122: ADR call to DH: Get Bulk DER - invalid version format](#testcase-t.ear.0122)|
|14|Execute Test|[T.EAR.0131: ADR call to DH: Get Bulk DER - unsupported version when x-min-v is included](#testcase-t.ear.0131)|
|15|Execute Test|[T.EAR.0139: ADR call to DH: Get Bulk DER - invalid minimum version format](#testcase-t.ear.0139)|


<a id="scenario-s.ear.0087"></a>
## S.EAR.0087: Get DER For Specific Service Points v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.0038: ADR call to DH: Get DER for Specific Service Points - no pagination](#testcase-t.ear.0038)|
|2|Execute Test|[T.EAR.0039: ADR call to DH: Get DER for Specific Service Points - with pagination](#testcase-t.ear.0039)|


<a id="scenario-s.ear.0088"></a>
## S.EAR.0088: Get DER For Specific Service Points Negative v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.0040: ADR call to DH: Get DER for Specific Service Points - unsupported version without x-min-v included](#testcase-t.ear.0040)|
|2|Execute Test|[T.EAR.0041: ADR call to DH: Get DER for Specific Service Points - invalid page parameters](#testcase-t.ear.0041)|
|3|Execute Test|[T.EAR.0042: ADR call to DH: Get DER for Specific Service Points - invalid body values](#testcase-t.ear.0042)|
|4|Execute Test|[T.EAR.0043: ADR call to DH: Get DER for Specific Service Points - invalid body format](#testcase-t.ear.0043)|
|5|Execute Test|[T.EAR.0044: ADR call to DH: Get DER For Specific Service Points - invalid FAPI Interaction ID format](#testcase-t.ear.0044)|
|6|Execute Test|[T.EAR.0103: ADR call to DH: Get DER For Specific Service Points - missing FAPI Auth Date](#testcase-t.ear.0103)|
|7|Execute Test|[T.EAR.0104: ADR call to DH: Get DER For Specific Service Points - invalid FAPI Auth Date](#testcase-t.ear.0104)|
|8|Execute Test|[T.EAR.0105: ADR call to DH: Get DER For Specific Service Points - missing FAPI Customer IP Address](#testcase-t.ear.0105)|
|9|Execute Test|[T.EAR.0106: ADR call to DH: Get DER For Specific Service Points - invalid FAPI Customer IP Address](#testcase-t.ear.0106)|
|10|Execute Test|[T.EAR.0107: ADR call to DH: Get DER For Specific Service Points - missing CDS Client Header](#testcase-t.ear.0107)|
|11|Execute Test|[T.EAR.0108: ADR call to DH: Get DER For Specific Service Points - invalid CDS Client Header](#testcase-t.ear.0108)|
|12|Execute Test|[T.EAR.0123: ADR call to DH: Get DER For Specific Service Points - invalid version value](#testcase-t.ear.0123)|
|13|Execute Test|[T.EAR.0124: ADR call to DH: Get DER For Specific Service Points - invalid version format](#testcase-t.ear.0124)|
|14|Execute Test|[T.EAR.0132: ADR call to DH: Get DER For Specific Service Points - unsupported version when x-min-v is included](#testcase-t.ear.0132)|
|15|Execute Test|[T.EAR.0140: ADR call to DH: Get DER For Specific Service Points - invalid minimum version format](#testcase-t.ear.0140)|


<a id="scenario-s.eas.0089"></a>
## S.EAS.0089: Get Service Points SR v1

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr)


### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.0001: DH call to SDH: Get Service Points - no pagination](#testcase-t.eas.0001)|
|2|Execute Test|[T.EAS.0002: DH call to SDH: Get Service Points - with pagination](#testcase-t.eas.0002)|


<a id="scenario-s.eas.0090"></a>
## S.EAS.0090: Get Service Points Negative SR v1

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr)


### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.0003: DH call to SDH: Get Service Points - unsupported version without x-min-v included](#testcase-t.eas.0003)|
|2|Execute Test|[T.EAS.0004: DH call to SDH: Get Service Points - invalid page parameters](#testcase-t.eas.0004)|
|3|Execute Test|[T.EAS.0039: DH call to SDH: Get Service Points - invalid FAPI Interaction ID format ](#testcase-t.eas.0039)|
|4|Execute Test|[T.EAS.0045: DH call to SDH: Get Service Points - no arragement id ](#testcase-t.eas.0045)|
|5|Execute Test|[T.EAS.0046: DH call to SDH: Get Service Points - arrangement ID invalid](#testcase-t.eas.0046)|
|6|Execute Test|[T.EAS.0057: DH call to SDH: Get Service Points - invalid version value](#testcase-t.eas.0057)|
|7|Execute Test|[T.EAS.0058: DH call to SDH: Get Service Points - invalid version format](#testcase-t.eas.0058)|
|8|Execute Test|[T.EAS.0069: DH call to SDH: Get Service Points - unsupported version when x-min-v is included](#testcase-t.eas.0069)|
|9|Execute Test|[T.EAS.0075: DH call to SDH: Get Service Points - missing servicePointId in body](#testcase-t.eas.0075)|
|10|Execute Test|[T.EAS.0076: DH call to SDH: Get Service Points - invalid servicePointId in body](#testcase-t.eas.0076)|
|11|Execute Test|[T.EAS.0077: DH call to SDH: Get Service Points - unavailable servicePointId in body](#testcase-t.eas.0077)|
|12|Execute Test|[T.EAS.0078: DH call to SDH: Get Service Points - invalid minimum version format](#testcase-t.eas.0078)|


<a id="scenario-s.eas.0091"></a>
## S.EAS.0091: Get Service Point Detail SR v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.0005: DH call to SDH: Get Service Point Detail ](#testcase-t.eas.0005)|


<a id="scenario-s.eas.0092"></a>
## S.EAS.0092: Get Service Point Detail Negative SR v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.0006: DH call to SDH: Get Service Point Detail - unsupported version without x-min-v included](#testcase-t.eas.0006)|
|2|Execute Test|[T.EAS.0007: DH call to SDH: Get Service Point Detail - invalid format of Service Point ID](#testcase-t.eas.0007)|
|3|Execute Test|[T.EAS.0008: DH call to SDH: Get Service Point Detail - unavailable Service Point ID](#testcase-t.eas.0008)|
|4|Execute Test|[T.EAS.0040: DH call to SDH: Get Service Point Detail - invalid FAPI Interaction ID format ](#testcase-t.eas.0040)|
|5|Execute Test|[T.EAS.0047: DH call to SDH: Get Service Point Detail - no arragement id ](#testcase-t.eas.0047)|
|6|Execute Test|[T.EAS.0048: DH call to SDH: Get Service Point Detail - arrangement ID invalid](#testcase-t.eas.0048)|
|7|Execute Test|[T.EAS.0059: DH call to SDH: Get Service Point Detail - invalid version value](#testcase-t.eas.0059)|
|8|Execute Test|[T.EAS.0060: DH call to SDH: Get Service Point Detail - invalid version format](#testcase-t.eas.0060)|
|9|Execute Test|[T.EAS.0070: DH call to SDH: Get Service Point Detail - unsupported version when x-min-v is included](#testcase-t.eas.0070)|
|10|Execute Test|[T.EAS.0079: DH call to SDH: Get Service Point Detail - invalid minimum version format](#testcase-t.eas.0079)|


<a id="scenario-s.eas.0093"></a>
## S.EAS.0093: Get Usage For Service Point SR v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.0009: DH call to SDH: Get Usage for Service Point Detail - no pagination](#testcase-t.eas.0009)|
|2|Execute Test|[T.EAS.0010: DH call to SDH: Get Usage for Service Points - with pagination](#testcase-t.eas.0010)|
|3|Execute Test|[T.EAS.0014: DH call to SDH: Get Usage for Service Points - newest date](#testcase-t.eas.0014)|


<a id="scenario-s.eas.0094"></a>
## S.EAS.0094: Get Usage For Service Point Negative SR v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.0011: DH call to SDH: Get Usage for Service Points - unsupported version without x-min-v included](#testcase-t.eas.0011)|
|2|Execute Test|[T.EAS.0012: DH call to SDH: Get Usage for Service Points - invalid page parameters](#testcase-t.eas.0012)|
|3|Execute Test|[T.EAS.0013: DH call to SDH: Get Usage for Service Points - oldest date](#testcase-t.eas.0013)|
|4|Execute Test|[T.EAS.0015: DH call to SDH: Get Usage for Service Points - invalid Service Point ID](#testcase-t.eas.0015)|
|5|Execute Test|[T.EAS.0016: DH call to SDH: Get Usage for Service Points - unavailable Service Point ID](#testcase-t.eas.0016)|
|6|Execute Test|[T.EAS.0017: DH call to SDH: Get Usage for Service Points - invalid format oldest date ](#testcase-t.eas.0017)|
|7|Execute Test|[T.EAS.0018: DH call to SDH: Get Usage for Service Points - invalid format newest date](#testcase-t.eas.0018)|
|8|Execute Test|[T.EAS.0041: DH call to SDH: Get Usage For Service Point - invalid FAPI Interaction ID format](#testcase-t.eas.0041)|
|9|Execute Test|[T.EAS.0049: DH call to Get Usage For Service Point - no arragement id ](#testcase-t.eas.0049)|
|10|Execute Test|[T.EAS.0050: DH call to SDH: Get Usage For Service Point - arrangement ID invalid](#testcase-t.eas.0050)|
|11|Execute Test|[T.EAS.0061: DH call to SDH: Get Usage For Service Point - invalid version value](#testcase-t.eas.0061)|
|12|Execute Test|[T.EAS.0062: DH call to SDH: Get Usage For Service Point - invalid version format](#testcase-t.eas.0062)|
|13|Execute Test|[T.EAS.0071: DH call to SDH: Get Usage for Service Points - unsupported version when x-min-v is included](#testcase-t.eas.0071)|
|14|Execute Test|[T.EAS.0080: DH call to SDH: Get Usage for Service Point - invalid minimum version format](#testcase-t.eas.0080)|


<a id="scenario-s.eas.0095"></a>
## S.EAS.0095: Get Usage For Specific Service Points SR v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.0019: DH call to SDH: Get Usage for Specific Service Points - no pagination](#testcase-t.eas.0019)|
|2|Execute Test|[T.EAS.0020: DH call to SDH: Get Usage for Specific Service Points - with pagination](#testcase-t.eas.0020)|
|3|Execute Test|[T.EAS.0023: DH call to SDH: Get Usage for Specific Service Points - oldest date](#testcase-t.eas.0023)|
|4|Execute Test|[T.EAS.0024: DH call to SDH: Get Usage for Specific Service Points - newest date](#testcase-t.eas.0024)|


<a id="scenario-s.eas.0096"></a>
## S.EAS.0096: Get Usage For Specific Service Points Negative SR v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.0021: DH call to SDH: Get Usage for Specific Service Points - unsupported version without x-min-v included](#testcase-t.eas.0021)|
|2|Execute Test|[T.EAS.0022: DH call to SDH: Get Usage for Specific Service Points - invalid page parameters](#testcase-t.eas.0022)|
|3|Execute Test|[T.EAS.0025: DH call to SDH: Get Usage for Specific Service Points - invalid format oldest date ](#testcase-t.eas.0025)|
|4|Execute Test|[T.EAS.0026: DH call to SDH: Get Usage for Specific Service Points - invalid format newest date](#testcase-t.eas.0026)|
|5|Execute Test|[T.EAS.0037: DH call to SDH: Get Usage for Specific Service Points - invalid body values](#testcase-t.eas.0037)|
|6|Execute Test|[T.EAS.0038: DH call to SDH: Get Usage for Specific Service Points - invalid body format](#testcase-t.eas.0038)|
|7|Execute Test|[T.EAS.0042: DH call to SDH: Get Usage For Specific Service Points - invalid FAPI Interaction ID format](#testcase-t.eas.0042)|
|8|Execute Test|[T.EAS.0051: DH call to SDH: Get Usage For Specific Service Points - no arragement id ](#testcase-t.eas.0051)|
|9|Execute Test|[T.EAS.0052: DH call to SDH: Get Usage For Specific Service Points - arrangement ID invalid](#testcase-t.eas.0052)|
|10|Execute Test|[T.EAS.0063: DH call to SDH: Get Usage For Specific Service Points - invalid version value](#testcase-t.eas.0063)|
|11|Execute Test|[T.EAS.0064: DH call to SDH: Get Usage For Specific Service Points - invalid version format](#testcase-t.eas.0064)|
|12|Execute Test|[T.EAS.0072: DH call to SDH: Get Usage for Specific Service Points - unsupported version when x-min-v  is included](#testcase-t.eas.0072)|
|13|Execute Test|[T.EAS.0081: DH call to SDH: Get Usage For Specific Service Points - invalid minimum version format](#testcase-t.eas.0081)|


<a id="scenario-s.eas.0097"></a>
## S.EAS.0097: Get DER for Service Point SR v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.0027: DH call to SDH: Get DER for Service Point ](#testcase-t.eas.0027)|


<a id="scenario-s.eas.0098"></a>
## S.EAS.0098: Get DER for Service Point Negative SR v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.0028: DH call to SDH: Get Service Point Detail - unsupported version without x-min-v included](#testcase-t.eas.0028)|
|2|Execute Test|[T.EAS.0029: DH call to SDH: Get Service Point Detail - invalid format of Service Point ID](#testcase-t.eas.0029)|
|3|Execute Test|[T.EAS.0030: DH call to SDH: Get Service Point Detail - unavailable Service Point ID](#testcase-t.eas.0030)|
|4|Execute Test|[T.EAS.0043: DH call to SDH: Get DER for Service Point - invalid FAPI Interaction ID format](#testcase-t.eas.0043)|
|5|Execute Test|[T.EAS.0053: DH call to SDH: Get DER for Service Point - no arragement id ](#testcase-t.eas.0053)|
|6|Execute Test|[T.EAS.0054: DH call to SDH: Get DER for Service Point - arrangement ID invalid](#testcase-t.eas.0054)|
|7|Execute Test|[T.EAS.0065: DH call to SDH: Get DER for Service Point - invalid version value](#testcase-t.eas.0065)|
|8|Execute Test|[T.EAS.0066: DH call to SDH: Get DER for Service Point - invalid version format](#testcase-t.eas.0066)|
|9|Execute Test|[T.EAS.0073: DH call to SDH: Get Service Point Detail - unsupported version when x-min-v is included](#testcase-t.eas.0073)|
|10|Execute Test|[T.EAS.0082: DH call to SDH: Get DER For Service Point - invalid minimum version format](#testcase-t.eas.0082)|


<a id="scenario-s.eas.0099"></a>
## S.EAS.0099: Get DER For Specific Service Points SR v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.0031: DH call to SDH: Get DER for Specific Service Points - no pagination](#testcase-t.eas.0031)|
|2|Execute Test|[T.EAS.0032: DH call to SDH: Get DER for Specific Service Points - with pagination](#testcase-t.eas.0032)|


<a id="scenario-s.eas.0100"></a>
## S.EAS.0100: Get DER For Specific Service Points Negative SR v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.0033: DH call to SDH: Get DER for Specific Service Points - unsupported version without x-min-v included](#testcase-t.eas.0033)|
|2|Execute Test|[T.EAS.0034: DH call to SDH: Get DER for Specific Service Points - invalid page parameters](#testcase-t.eas.0034)|
|3|Execute Test|[T.EAS.0035: DH call to SDH: Get DER for Specific Service Points - invalid body values](#testcase-t.eas.0035)|
|4|Execute Test|[T.EAS.0036: DH call to SDH: Get DER for Specific Service Points - invalid body format](#testcase-t.eas.0036)|
|5|Execute Test|[T.EAS.0044: DH call to SDH: Get DER For Specific Service Points - invalid FAPI Interaction ID format](#testcase-t.eas.0044)|
|6|Execute Test|[T.EAS.0055: DH call to Get DER For Specific Service Points - no arragement id ](#testcase-t.eas.0055)|
|7|Execute Test|[T.EAS.0056: DH call to SDH: Get DER For Specific Service Points - arrangement ID invalid](#testcase-t.eas.0056)|
|8|Execute Test|[T.EAS.0067: DH call to SDH: Get DER For Specific Service Points - invalid version value](#testcase-t.eas.0067)|
|9|Execute Test|[T.EAS.0068: DH call to SDH: Get DER For Specific Service Points - invalid version format](#testcase-t.eas.0068)|
|10|Execute Test|[T.EAS.0074: DH call to SDH: Get DER for Specific Service Points - unsupported version when x-min-v is included](#testcase-t.eas.0074)|
|11|Execute Test|[T.EAS.0083: DH call to SDH: Get DER For Specific Service Points - invalid minimum version format](#testcase-t.eas.0083)|


<a id="testcases"></a>
# Test Cases

<a id="testcase-t.caa.0001"></a>
## T.CAA.0001: Get Status with a valid version

Negative test case

Obtain a health check status for the implementation

### Purpose:

Test API with a valid version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-status](https://consumerdatastandardsaustralia.github.io/standards/#get-status)


### Execution Pre-conditions:

* Value &lt;x-v&gt;  is set to a version supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /discovery/status|


### End State Assertions:

* [A.CAA.0001: Validate schema - GetStatus](#assertion-a.caa.0001)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)


<a id="testcase-t.caa.0002"></a>
## T.CAA.0002: Get Status - invalid version value

Positive test case

Ensure that the endpoint returns version compatibility errors 

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-status](https://consumerdatastandardsaustralia.github.io/standards/#get-status)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /discovery/status|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)


<a id="testcase-t.caa.0003"></a>
## T.CAA.0003: Get Status - invalid version format

Positive test case

Ensure that the endpoint returns version compatibility errors 

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-status](https://consumerdatastandardsaustralia.github.io/standards/#get-status)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /discovery/status|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)


<a id="testcase-t.caa.0004"></a>
## T.CAA.0004: Get Status - unsupported version without <x-min-v> included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-status](https://consumerdatastandardsaustralia.github.io/standards/#get-status)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version not supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /discovery/status|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)


<a id="testcase-t.caa.0005"></a>
## T.CAA.0005: Get Status - unsupported version when <x-min-v> is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-status](https://consumerdatastandardsaustralia.github.io/standards/#get-status)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /discovery/status|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)


<a id="testcase-t.caa.0006"></a>
## T.CAA.0006: Get Status - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-status](https://consumerdatastandardsaustralia.github.io/standards/#get-status)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /discovery/status|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)


<a id="testcase-t.caa.0007"></a>
## T.CAA.0007: Get Outages with a valid version

Negative test case

Obtain a list of scheduled outages for the implementation

### Purpose:

Test API with a valid version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-outages](https://consumerdatastandardsaustralia.github.io/standards/#get-outages)


### Execution Pre-conditions:

* Value &lt;x-v&gt; is set to a version supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /discovery/outages|


### End State Assertions:

* [A.CAA.0002: Validate schema - GetOutage](#assertion-a.caa.0002)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)


<a id="testcase-t.caa.0008"></a>
## T.CAA.0008: Get Outages - invalid version value

Positive test case

Ensure that the endpoint returns version compatibility errors 

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-outages](https://consumerdatastandardsaustralia.github.io/standards/#get-outages)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /discovery/outages|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)


<a id="testcase-t.caa.0009"></a>
## T.CAA.0009: Get Outages - invalid version format

Positive test case

Ensure that the endpoint returns version compatibility errors 

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-outages](https://consumerdatastandardsaustralia.github.io/standards/#get-outages)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /discovery/outages|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)


<a id="testcase-t.caa.0010"></a>
## T.CAA.0010: Get Outages - unsupported version without <x-min-v> included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-outages](https://consumerdatastandardsaustralia.github.io/standards/#get-outages)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version not supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /discovery/outages|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)


<a id="testcase-t.caa.0011"></a>
## T.CAA.0011: Get Outages - unsupported version when <x-min-v> is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-outages](https://consumerdatastandardsaustralia.github.io/standards/#get-outages)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /discovery/outages|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)


<a id="testcase-t.caa.0012"></a>
## T.CAA.0012: Get Outages - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-outages](https://consumerdatastandardsaustralia.github.io/standards/#get-outages)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /discovery/outages|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)


<a id="testcase-t.cac.0001"></a>
## T.CAC.0001: Get Customer

Negative test case

Obtain basic information on the customer that has authorised the current session

### Purpose:

Test API with valid version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer](https://consumerdatastandardsaustralia.github.io/standards/#get-customer)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer|


### End State Assertions:

* [A.CAC.0001: Validate schema - ResponseCommonCustomer](#assertion-a.cac.0001)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.cac.0002"></a>
## T.CAC.0002: Get Customer - invalid version value

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer](https://consumerdatastandardsaustralia.github.io/standards/#get-customer)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.cac.0003"></a>
## T.CAC.0003: Get Customer - invalid version format

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer](https://consumerdatastandardsaustralia.github.io/standards/#get-customer)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.cac.0004"></a>
## T.CAC.0004: Get Customer - unsupported version without x-min-v included

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer](https://consumerdatastandardsaustralia.github.io/standards/#get-customer)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version not supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.cac.0005"></a>
## T.CAC.0005: Get Customer - unsupported version when x-min-v is included

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer](https://consumerdatastandardsaustralia.github.io/standards/#get-customer)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.cac.0006"></a>
## T.CAC.0006: Get Customer - invalid minimum version value

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with invalid minimum version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer](https://consumerdatastandardsaustralia.github.io/standards/#get-customer)


### Execution Pre-conditions:

* The &lt;x-min-v&gt; is a not a positive integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.cac.0007"></a>
## T.CAC.0007: Get Customer - invalid FAPI Interaction ID format 

Positive test case

Ensure the endpoint returns FAPI Interaction ID errors

### Purpose:

Test API where FAPI Interaction ID format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer](https://consumerdatastandardsaustralia.github.io/standards/#get-customer)


### Execution Pre-conditions:

* The &lt;x-fapi-interaction-id&gt; format is invalid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer|


### End State Assertions:

* [A.ZAA.0015: Validate FAPI Interaction ID - invalid format](#assertion-a.zaa.0015)


<a id="testcase-t.cac.0008"></a>
## T.CAC.0008: Get Customer - missing FAPI Auth Date

Positive test case

Ensure the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer](https://consumerdatastandardsaustralia.github.io/standards/#get-customer)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0016: Validate FAPI Auth date - missing from header](#assertion-a.zaa.0016)


<a id="testcase-t.cac.0009"></a>
## T.CAC.0009: Get Customer -  invalid FAPI Auth Date

Positive test case

Ensure the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer](https://consumerdatastandardsaustralia.github.io/standards/#get-customer)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0017: Validate FAPI Auth date - invalid format](#assertion-a.zaa.0017)


<a id="testcase-t.cac.0010"></a>
## T.CAC.0010: Get Customer - missing FAPI Customer IP Address

Positive test case

Ensure the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer](https://consumerdatastandardsaustralia.github.io/standards/#get-customer)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0019: Validate FAPI Customer IP Address - missing from header](#assertion-a.zaa.0019)


<a id="testcase-t.cac.0011"></a>
## T.CAC.0011: Get Customer - invalid FAPI Customer IP Address

Positive test case

Ensure the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer](https://consumerdatastandardsaustralia.github.io/standards/#get-customer)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0020: Validate FAPI Customer IP Address - invalid format](#assertion-a.zaa.0020)


<a id="testcase-t.cac.0012"></a>
## T.CAC.0012: Get Customer - missing CDS Client Header

Positive test case

Ensure the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer](https://consumerdatastandardsaustralia.github.io/standards/#get-customer)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0022: Validate the client headers - missing from header](#assertion-a.zaa.0022)


<a id="testcase-t.cac.0013"></a>
## T.CAC.0013: Get Customer - invalid CDS Client Header

Positive test case

Ensure the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer](https://consumerdatastandardsaustralia.github.io/standards/#get-customer)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0023: Validate the client headers - invalid format](#assertion-a.zaa.0023)


<a id="testcase-t.cac.0014"></a>
## T.CAC.0014: Get Customer Detail

Negative test case

Obtain detailed information on the authorised customer within the current session

### Purpose:

Test API with valid version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer/detail|


### End State Assertions:

* [A.CAC.0002: Validate schema - ResponseCommonCustomerDetailV2](#assertion-a.cac.0002)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.cac.0015"></a>
## T.CAC.0015: Get Customer Detail - invalid version value

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer/detail|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.cac.0016"></a>
## T.CAC.0016: Get Customer Detail - invalid version format

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer/detail|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.cac.0017"></a>
## T.CAC.0017: Get Customer Detail - unsupported version without x-min-v included

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version not supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer/detail|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.cac.0018"></a>
## T.CAC.0018: Get Customer Detail - unsupported version when x-min-v is included

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer/detail|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.cac.0019"></a>
## T.CAC.0019: Get Customer Detail - invalid minimum version value

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with invalid minimum version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail)


### Execution Pre-conditions:

* The &lt;x-min-v&gt; is a not a positive integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer/detail|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.cac.0020"></a>
## T.CAC.0020: Get Customer Detail - invalid FAPI Interaction ID format 

Positive test case

Ensure the endpoint returns FAPI Interaction ID errors

### Purpose:

Test API where FAPI Interaction ID format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail)


### Execution Pre-conditions:

* The &lt;x-fapi-interaction-id&gt; format is invalid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer/detail|


### End State Assertions:

* [A.ZAA.0015: Validate FAPI Interaction ID - invalid format](#assertion-a.zaa.0015)


<a id="testcase-t.cac.0021"></a>
## T.CAC.0021: Get Customer Detail - missing FAPI Auth Date

Positive test case

Ensure the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer/detail|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0016: Validate FAPI Auth date - missing from header](#assertion-a.zaa.0016)


<a id="testcase-t.cac.0022"></a>
## T.CAC.0022: Get Customer Detail -  invalid FAPI Auth Date

Positive test case

Ensure the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer/detail|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0017: Validate FAPI Auth date - invalid format](#assertion-a.zaa.0017)


<a id="testcase-t.cac.0023"></a>
## T.CAC.0023: Get Customer Detail - missing FAPI Customer IP Address

Positive test case

Ensure the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer/detail|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0019: Validate FAPI Customer IP Address - missing from header](#assertion-a.zaa.0019)


<a id="testcase-t.cac.0024"></a>
## T.CAC.0024: Get Customer Detail - invalid FAPI Customer IP Address

Positive test case

Ensure the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer/detail|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0020: Validate FAPI Customer IP Address - invalid format](#assertion-a.zaa.0020)


<a id="testcase-t.cac.0025"></a>
## T.CAC.0025: Get Customer Detail - missing CDS Client Header

Positive test case

Ensure the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer/detail|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0022: Validate the client headers - missing from header](#assertion-a.zaa.0022)


<a id="testcase-t.cac.0026"></a>
## T.CAC.0026: Get Customer Detail - invalid CDS Client Header

Positive test case

Ensure the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-customer-detail)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /common/customer/detail|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0023: Validate the client headers - invalid format](#assertion-a.zaa.0023)


<a id="testcase-t.eaa.0001"></a>
## T.EAA.0001: Get Energy Accounts - no pagination

Negative test case

Obtain the list of energy accounts available under the authorised consent 

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts|


### End State Assertions:

* [A.EAA.0001: Validate schema - EnergyAccountListResponse](#assertion-a.eaa.0001)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0002"></a>
## T.EAA.0002: Get Energy Accounts - with pagination

Negative test case

Obtain the list of energy accounts available under the authorised con

### Purpose:

Test API with pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts)


### Execution Pre-conditions:

* &lt;page-size&gt; and &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts|


### End State Assertions:

* [A.EAA.0001: Validate schema - EnergyAccountListResponse](#assertion-a.eaa.0001)
* [A.ZAA.0001: Validate pagination - LinksPaginated ](#assertion-a.zaa.0001)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0003"></a>
## T.EAA.0003: Get Energy Accounts - invalid page parameters

Positive test case

Ensure the endpoint returns pagination errors

### Purpose:

Test API with invalid pagination parameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts)


### Execution Pre-conditions:

* &lt;page&gt; OR (&lt;page&gt; 
* AND &lt;page-size&gt;) query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts|


### End State Assertions:

* [A.ZAA.0002: Validate pagination - Invalid page size value](#assertion-a.zaa.0002)
* [A.ZAA.0003: Validate pagination - Non-numeric <page>](#assertion-a.zaa.0003)
* [A.ZAA.0004: Validate pagination - Max record limit exceeded](#assertion-a.zaa.0004)
* [A.ZAA.0005: Validate pagination - Non-numeric <page-size>](#assertion-a.zaa.0005)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0004"></a>
## T.EAA.0004: Get Energy Accounts - unsupported version without x-min-v included

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version not supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0005"></a>
## T.EAA.0005: Get Energy Accounts - invalid version value

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0006"></a>
## T.EAA.0006: Get Energy Accounts - invalid version format

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0007"></a>
## T.EAA.0007: Get Energy Accounts - unsupported version when x-min-v is included

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0008"></a>
## T.EAA.0008: Get Energy Accounts - invalid FAPI Interaction ID format 

Positive test case

Ensure the endpoint returns FAPI Interaction ID errors

### Purpose:

Test API where FAPI Interaction ID format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts)


### Execution Pre-conditions:

* The &lt;x-fapi-interaction-id&gt; format is invalid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts|


### End State Assertions:

* [A.ZAA.0015: Validate FAPI Interaction ID - invalid format](#assertion-a.zaa.0015)


<a id="testcase-t.eaa.0009"></a>
## T.EAA.0009: Get Energy Accounts - missing FAPI Auth Date

Positive test case

Ensure the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0016: Validate FAPI Auth date - missing from header](#assertion-a.zaa.0016)


<a id="testcase-t.eaa.0010"></a>
## T.EAA.0010: Get Energy Accounts -  invalid FAPI Auth Date

Positive test case

Ensure the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0017: Validate FAPI Auth date - invalid format](#assertion-a.zaa.0017)


<a id="testcase-t.eaa.0011"></a>
## T.EAA.0011: Get Energy Accounts - missing FAPI Customer IP Address

Positive test case

Ensure the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0019: Validate FAPI Customer IP Address - missing from header](#assertion-a.zaa.0019)


<a id="testcase-t.eaa.0012"></a>
## T.EAA.0012: Get Energy Accounts - invalid FAPI Customer IP Address

Positive test case

Ensure the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0020: Validate FAPI Customer IP Address - invalid format](#assertion-a.zaa.0020)


<a id="testcase-t.eaa.0013"></a>
## T.EAA.0013: Get Energy Accounts - missing CDS Client Header

Positive test case

Ensure the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0022: Validate the client headers - missing from header](#assertion-a.zaa.0022)


<a id="testcase-t.eaa.0014"></a>
## T.EAA.0014: Get Energy Accounts - invalid CDS Client Header

Positive test case

Ensure the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0023: Validate the client headers - invalid format](#assertion-a.zaa.0023)


<a id="testcase-t.eaa.0015"></a>
## T.EAA.0015: Get Energy Account Detail 

Negative test case

Obtain detailed information for a specific energy account

### Purpose:

Test API with valid account and version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail)


### Execution Pre-conditions:

* The {accountId} is set in the Path 
* AND value &lt;x-v&gt; is set in the request header to a version supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}|


### End State Assertions:

* [A.EAA.0002: Validate account and schema - EnergyAccountDetailResponse](#assertion-a.eaa.0002)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0016"></a>
## T.EAA.0016: Get Energy Account Detail - invalid account id format

Positive test case

Ensure the endpoint returns accountId compatible errors

### Purpose:

Test API with an invalid accountId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail)


### Execution Pre-conditions:

* The {accountId} is set in the Path to a value that is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}|


### End State Assertions:

* [A.EAA.0003: Validate account identifier - invalid value](#assertion-a.eaa.0003)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0017"></a>
## T.EAA.0017: Get Energy Account Detail - unavailable account id 

Positive test case

Ensure the endpoint returns accountId compatible errors

### Purpose:

Test API with an unavailable accountId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail)


### Execution Pre-conditions:

* The {accountID} is set in the Path to a value that is unavailable


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}|


### End State Assertions:

* [A.EAA.0004: Validate account identifier - unavailable account](#assertion-a.eaa.0004)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0018"></a>
## T.EAA.0018: Get Energy Account Detail - unsupported version without x-min-v included

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version not supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0019"></a>
## T.EAA.0019: Get Energy Account Detail - invalid version value

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0020"></a>
## T.EAA.0020: Get Energy Account Detail - invalid version format

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0021"></a>
## T.EAA.0021: Get Energy Account Detail - unsupported version when x-min-v is included

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0022"></a>
## T.EAA.0022: Get Energy Account Detail - invalid FAPI Interaction ID format 

Positive test case

Ensure the endpoint returns FAPI Interaction ID errors

### Purpose:

Test API where FAPI Interaction ID format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail)


### Execution Pre-conditions:

* The &lt;x-fapi-interaction-id&gt; format is invalid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}|


### End State Assertions:

* [A.ZAA.0015: Validate FAPI Interaction ID - invalid format](#assertion-a.zaa.0015)


<a id="testcase-t.eaa.0023"></a>
## T.EAA.0023: Get Energy Account Detail - missing FAPI Auth Date

Positive test case

Ensure the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0016: Validate FAPI Auth date - missing from header](#assertion-a.zaa.0016)


<a id="testcase-t.eaa.0024"></a>
## T.EAA.0024: Get Energy Account Detail -  invalid FAPI Auth Date

Positive test case

Ensure the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0017: Validate FAPI Auth date - invalid format](#assertion-a.zaa.0017)


<a id="testcase-t.eaa.0025"></a>
## T.EAA.0025: Get Energy Account Detail - missing FAPI Customer IP Address

Positive test case

Ensure the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0019: Validate FAPI Customer IP Address - missing from header](#assertion-a.zaa.0019)


<a id="testcase-t.eaa.0026"></a>
## T.EAA.0026: Get Energy Account Detail - invalid FAPI Customer IP Address

Positive test case

Ensure the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0020: Validate FAPI Customer IP Address - invalid format](#assertion-a.zaa.0020)


<a id="testcase-t.eaa.0027"></a>
## T.EAA.0027: Get Energy Account Detail - missing CDS Client Header

Positive test case

Ensure the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0022: Validate the client headers - missing from header](#assertion-a.zaa.0022)


<a id="testcase-t.eaa.0028"></a>
## T.EAA.0028: Get Energy Account Detail - invalid CDS Client Header

Positive test case

Ensure the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0023: Validate the client headers - invalid format](#assertion-a.zaa.0023)


<a id="testcase-t.eaa.0029"></a>
## T.EAA.0029: Get Agreed Payment Schedule

Negative test case

Obtain the agreed payment schedule and details, if any, for a specific energy account

### Purpose:

Test API with valid account and version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule](https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule)


### Execution Pre-conditions:

* The {accountId} is set in the Path 
* AND value &lt;x-v&gt; is set in the request header to a version supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/payment-schedule|


### End State Assertions:

* [A.EAA.0005: validate account and schema - EnergyPaymentScheduleResponse](#assertion-a.eaa.0005)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0030"></a>
## T.EAA.0030: Get Agreed Payment Schedule - invalid account id format

Positive test case

Ensure the endpoint returns accountId compatible errors

### Purpose:

Test API with an invalid accountId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule](https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule)


### Execution Pre-conditions:

* The {accountId} is set in the Path to a value that is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/payment-schedule|


### End State Assertions:

* [A.EAA.0003: Validate account identifier - invalid value](#assertion-a.eaa.0003)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0031"></a>
## T.EAA.0031: Get Agreed Payment Schedule - unavailable account id 

Positive test case

Ensure the endpoint returns accountId compatible errors

### Purpose:

Test API with an unavailable accountId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule](https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule)


### Execution Pre-conditions:

* The {accountID} is set in the Path to a value that is unavailable


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/payment-schedule|


### End State Assertions:

* [A.EAA.0004: Validate account identifier - unavailable account](#assertion-a.eaa.0004)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0032"></a>
## T.EAA.0032: Get Agreed Payment Schedule - unsupported version without x-min-v included

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule](https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version not supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/payment-schedule|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0033"></a>
## T.EAA.0033: Get Agreed Payment Schedule - invalid version value

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule](https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/payment-schedule|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0034"></a>
## T.EAA.0034: Get Agreed Payment Schedule - invalid version format

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule](https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/payment-schedule|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0035"></a>
## T.EAA.0035: Get Agreed Payment Schedule - unsupported version when x-min-v is included

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule](https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/payment-schedule|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0036"></a>
## T.EAA.0036: Get Agreed Payment Schedule - invalid FAPI Interaction ID format 

Positive test case

Ensure the endpoint returns FAPI Interaction ID errors

### Purpose:

Test API where FAPI Interaction ID format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule](https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule)


### Execution Pre-conditions:

* The &lt;x-fapi-interaction-id&gt; format is invalid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/payment-schedule|


### End State Assertions:

* [A.ZAA.0015: Validate FAPI Interaction ID - invalid format](#assertion-a.zaa.0015)


<a id="testcase-t.eaa.0037"></a>
## T.EAA.0037: Get Agreed Payment Schedule - missing FAPI Auth Date

Positive test case

Ensure the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule](https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/payment-schedule|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0016: Validate FAPI Auth date - missing from header](#assertion-a.zaa.0016)


<a id="testcase-t.eaa.0038"></a>
## T.EAA.0038: Get Agreed Payment Schedule -  invalid FAPI Auth Date

Positive test case

Ensure the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule](https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/payment-schedule|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0017: Validate FAPI Auth date - invalid format](#assertion-a.zaa.0017)


<a id="testcase-t.eaa.0039"></a>
## T.EAA.0039: Get Agreed Payment Schedule - missing FAPI Customer IP Address

Positive test case

Ensure the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule](https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/payment-schedule|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0019: Validate FAPI Customer IP Address - missing from header](#assertion-a.zaa.0019)


<a id="testcase-t.eaa.0040"></a>
## T.EAA.0040: Get Agreed Payment Schedule - invalid FAPI Customer IP Address

Positive test case

Ensure the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule](https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/payment-schedule|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0020: Validate FAPI Customer IP Address - invalid format](#assertion-a.zaa.0020)


<a id="testcase-t.eaa.0041"></a>
## T.EAA.0041: Get Agreed Payment Schedule - missing CDS Client Header

Positive test case

Ensure the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule](https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/payment-schedule|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0022: Validate the client headers - missing from header](#assertion-a.zaa.0022)


<a id="testcase-t.eaa.0042"></a>
## T.EAA.0042: Get Agreed Payment Schedule - invalid CDS Client Header

Positive test case

Ensure the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule](https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/payment-schedule|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0023: Validate the client headers - invalid format](#assertion-a.zaa.0023)


<a id="testcase-t.eaa.0043"></a>
## T.EAA.0043: Get Concessions 

Negative test case

Obtain the details of any concessions or arrangements applied to a specific energy account

### Purpose:

Test API with valid account and version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-concessions](https://consumerdatastandardsaustralia.github.io/standards/#get-concessions)


### Execution Pre-conditions:

* The {accountId} is set in the Path 
* AND value &lt;x-v&gt; is set in the request header to a version supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/concessions|


### End State Assertions:

* [A.EAA.0006: validate account and schema -EnergyConcessionsResponse](#assertion-a.eaa.0006)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0044"></a>
## T.EAA.0044: Get Concessions - invalid account id format

Positive test case

Ensure the endpoint returns accountId compatible errors

### Purpose:

Test API with an invalid accountId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-concessions](https://consumerdatastandardsaustralia.github.io/standards/#get-concessions)


### Execution Pre-conditions:

* The {accountId} is set in the Path to a value that is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/concessions|


### End State Assertions:

* [A.EAA.0003: Validate account identifier - invalid value](#assertion-a.eaa.0003)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0045"></a>
## T.EAA.0045: Get Concessions - unavailable account id 

Positive test case

Ensure the endpoint returns accountId compatible errors

### Purpose:

Test API with an unavailable accountId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-concessions](https://consumerdatastandardsaustralia.github.io/standards/#get-concessions)


### Execution Pre-conditions:

* The {accountID} is set in the Path to a value that is unavailable


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/concessions|


### End State Assertions:

* [A.EAA.0004: Validate account identifier - unavailable account](#assertion-a.eaa.0004)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0046"></a>
## T.EAA.0046: Get Concessions - unsupported version without x-min-v included

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-concessions](https://consumerdatastandardsaustralia.github.io/standards/#get-concessions)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version not supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/concessions|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0047"></a>
## T.EAA.0047: Get Concessions - invalid version value

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-concessions](https://consumerdatastandardsaustralia.github.io/standards/#get-concessions)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/concessions|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0048"></a>
## T.EAA.0048: Get Concessions - invalid version format

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-concessions](https://consumerdatastandardsaustralia.github.io/standards/#get-concessions)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/concessions|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0049"></a>
## T.EAA.0049: Get Concessions - unsupported version when x-min-v is included

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-concessions](https://consumerdatastandardsaustralia.github.io/standards/#get-concessions)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/concessions|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0050"></a>
## T.EAA.0050: Get Concessions - invalid FAPI Interaction ID format 

Positive test case

Ensure the endpoint returns FAPI Interaction ID errors

### Purpose:

Test API where FAPI Interaction ID format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-concessions](https://consumerdatastandardsaustralia.github.io/standards/#get-concessions)


### Execution Pre-conditions:

* The &lt;x-fapi-interaction-id&gt; format is invalid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/concessions|


### End State Assertions:

* [A.ZAA.0015: Validate FAPI Interaction ID - invalid format](#assertion-a.zaa.0015)


<a id="testcase-t.eaa.0051"></a>
## T.EAA.0051: Get Concessions - missing FAPI Auth Date

Positive test case

Ensure the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-concessions](https://consumerdatastandardsaustralia.github.io/standards/#get-concessions)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/concessions|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0016: Validate FAPI Auth date - missing from header](#assertion-a.zaa.0016)


<a id="testcase-t.eaa.0052"></a>
## T.EAA.0052: Get Concessions - invalid FAPI Auth Date

Positive test case

Ensure the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-concessions](https://consumerdatastandardsaustralia.github.io/standards/#get-concessions)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/concessions|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0017: Validate FAPI Auth date - invalid format](#assertion-a.zaa.0017)


<a id="testcase-t.eaa.0053"></a>
## T.EAA.0053: Get Concessions - missing FAPI Customer IP Address

Positive test case

Ensure the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-concessions](https://consumerdatastandardsaustralia.github.io/standards/#get-concessions)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/concessions|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0019: Validate FAPI Customer IP Address - missing from header](#assertion-a.zaa.0019)


<a id="testcase-t.eaa.0054"></a>
## T.EAA.0054: Get Concessions - invalid FAPI Customer IP Address

Positive test case

Ensure the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-concessions](https://consumerdatastandardsaustralia.github.io/standards/#get-concessions)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/concessions|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0020: Validate FAPI Customer IP Address - invalid format](#assertion-a.zaa.0020)


<a id="testcase-t.eaa.0055"></a>
## T.EAA.0055: Get Concessions - missing CDS Client Header

Positive test case

Ensure the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-concessions](https://consumerdatastandardsaustralia.github.io/standards/#get-concessions)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/concessions|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0022: Validate the client headers - missing from header](#assertion-a.zaa.0022)


<a id="testcase-t.eaa.0056"></a>
## T.EAA.0056: Get Concessions - invalid CDS Client Header

Positive test case

Ensure the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-concessions](https://consumerdatastandardsaustralia.github.io/standards/#get-concessions)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/concessions|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0023: Validate the client headers - invalid format](#assertion-a.zaa.0023)


<a id="testcase-t.eaa.0057"></a>
## T.EAA.0057: Get Energy Accounts - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-accounts)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0058"></a>
## T.EAA.0058: Get Energy Account Detail - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-energy-account-detail)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0059"></a>
## T.EAA.0059: Get Agreed Payment Schedule - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule](https://consumerdatastandardsaustralia.github.io/standards/#get-agreed-payment-schedule)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/payment-schedule|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eaa.0060"></a>
## T.EAA.0060: Get Concessions - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-concessions](https://consumerdatastandardsaustralia.github.io/standards/#get-concessions)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/concessions|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eab.0002"></a>
## T.EAB.0002: Get Balance for Energy Account - invalid account id format

Positive test case

Ensure the endpoint returns accountId compatible errors

### Purpose:

Test API with an invalid accountId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account](https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account)


### Execution Pre-conditions:

* The {accountId} is set in the Path to a value that is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/balance|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eab.0003"></a>
## T.EAB.0003: Get Balance for Energy Account - unavailable account id 

Positive test case

Ensure the endpoint returns accountId compatible errors

### Purpose:

Test API with an unavailable accountId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account](https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account)


### Execution Pre-conditions:

* The {accountID} is set in the Path to a value that is unavailable


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/balance|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eab.0004"></a>
## T.EAB.0004: Get Balance for Energy Account - unsupported version without x-min-v included

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account](https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version not supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/balance|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eab.0005"></a>
## T.EAB.0005: Get Balance for Energy Account - invalid version value

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account](https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/balance|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eab.0006"></a>
## T.EAB.0006: Get Balance for Energy Account - invalid version format

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account](https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/balance|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eab.0007"></a>
## T.EAB.0007: Get Balance for Energy Account - unsupported version when x-min-v is included

Positive test case

Ensure the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account](https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/balance|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eab.0008"></a>
## T.EAB.0008: Get Energy Account Detail - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account](https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/balance|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eab.0009"></a>
## T.EAB.0009: Get Balance for Energy Account - invalid FAPI Interaction ID format 

Positive test case

Ensure the endpoint returns FAPI Interaction ID errors

### Purpose:

Test API where FAPI Interaction ID format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account](https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account)


### Execution Pre-conditions:

* The &lt;x-fapi-interaction-id&gt; format is invalid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/balance|


### End State Assertions:

* [A.ZAA.0015: Validate FAPI Interaction ID - invalid format](#assertion-a.zaa.0015)


<a id="testcase-t.eab.0010"></a>
## T.EAB.0010: Get Balance for Energy Account - missing FAPI Auth Date

Positive test case

Ensure the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account](https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/balance|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0016: Validate FAPI Auth date - missing from header](#assertion-a.zaa.0016)


<a id="testcase-t.eab.0011"></a>
## T.EAB.0011: Get Balance for Energy Account -  invalid FAPI Auth Date

Positive test case

Ensure the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account](https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/balance|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0017: Validate FAPI Auth date - invalid format](#assertion-a.zaa.0017)


<a id="testcase-t.eab.0012"></a>
## T.EAB.0012: Get Balance for Energy Account - missing FAPI Customer IP Address

Positive test case

Ensure the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account](https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/balance|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0019: Validate FAPI Customer IP Address - missing from header](#assertion-a.zaa.0019)


<a id="testcase-t.eab.0013"></a>
## T.EAB.0013: Get Balance for Energy Account - invalid FAPI Customer IP Address

Positive test case

Ensure the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account](https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/balance|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0020: Validate FAPI Customer IP Address - invalid format](#assertion-a.zaa.0020)


<a id="testcase-t.eab.0014"></a>
## T.EAB.0014: Get Balance for Energy Account - missing CDS Client Header

Positive test case

Ensure the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account](https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/balance|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0022: Validate the client headers - missing from header](#assertion-a.zaa.0022)


<a id="testcase-t.eab.0015"></a>
## T.EAB.0015: Get Balance for Energy Account - invalid CDS Client Header

Positive test case

Ensure the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account](https://consumerdatastandardsaustralia.github.io/standards/#get-balance-for-energy-account)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/{accountId}/balance|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0023: Validate the client headers - invalid format](#assertion-a.zaa.0023)


<a id="testcase-t.eab.0016"></a>
## T.EAB.0016: with pagination

Negative test case

### Purpose:

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-balances-for-energy](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-balances-for-energy)


### Execution Pre-conditions:

No pre-conditions for this test case

### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/balances|


### End State Assertions:

No end state ssertions defined for this test case

<a id="testcase-t.eab.0017"></a>
## T.EAB.0017: without pagination 

Negative test case

### Purpose:

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-balances-for-energy](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-balances-for-energy)


### Execution Pre-conditions:

No pre-conditions for this test case

### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/accounts/balances|


### End State Assertions:

No end state ssertions defined for this test case

<a id="testcase-t.ear.0001"></a>
## T.EAR.0001: ADR call to DH: Get Service Points - no pagination

Negative test case

Obtain a list of service points owned by the consumer that has authorised the current session

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)
* [Postman Example](https://www.postman.com/winter-shadow-541400/workspace/dsb-schema-tests/request/8286723-a8d4f7d2-e72e-4eb1-9d83-28ea616a2c62)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints|


### End State Assertions:

* [A.EAR.0004: Validate schema - EnergyServicePointListReponse](#assertion-a.ear.0004)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0002"></a>
## T.EAR.0002: ADR call to DH: Get Service Points - with pagination

Negative test case

Obtain a paginated list of service points owned by the consumer that has authorised the current session

### Purpose:

Test API with pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)
* [Postman Example](https://www.postman.com/winter-shadow-541400/workspace/dsb-schema-tests/request/8286723-a8d4f7d2-e72e-4eb1-9d83-28ea616a2c62)


### Execution Pre-conditions:

* &lt;page-size&gt; and&lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints|


### End State Assertions:

* [A.EAR.0004: Validate schema - EnergyServicePointListReponse](#assertion-a.ear.0004)
* [A.ZAA.0001: Validate pagination - LinksPaginated ](#assertion-a.zaa.0001)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0003"></a>
## T.EAR.0003: ADR call to DH: Get Service Points - unsupported version without x-min-v included

Positive test case

DH call to SDH: Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version not supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0004"></a>
## T.EAR.0004: ADR call to DH: Get Service Points - invalid page parameters

Positive test case

Ensure that the endpoint returns pagination errors

### Purpose:

Test API with invalid pagination parameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)


### Execution Pre-conditions:

* &lt;page&gt; OR (&lt;page&gt; 
* AND &lt;page-size&gt;) query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0002: Validate pagination - Invalid page size value](#assertion-a.zaa.0002)
* [A.ZAA.0003: Validate pagination - Non-numeric <page>](#assertion-a.zaa.0003)
* [A.ZAA.0004: Validate pagination - Max record limit exceeded](#assertion-a.zaa.0004)
* [A.ZAA.0005: Validate pagination - Non-numeric <page-size>](#assertion-a.zaa.0005)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0005"></a>
## T.EAR.0005: ADR call to DH: Get Service Points - invalid FAPI Interaction ID format 

Positive test case

Ensure that the endpoint returns FAPI Interaction ID errors

### Purpose:

Test API where FAPI Interaction ID format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)


### Execution Pre-conditions:

* The &lt;x-fapi-interaction-id&gt; format is invalid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0015: Validate FAPI Interaction ID - invalid format](#assertion-a.zaa.0015)


<a id="testcase-t.ear.0006"></a>
## T.EAR.0006: ADR call to DH: Get Service Point Detail 

Negative test case

Obtain the details of a service point owned by the consumer that has authorised the current session

### Purpose:

Test API with a vaild service point and version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail)
* [Postman Example](https://www.postman.com/winter-shadow-541400/workspace/dsb-schema-tests/request/8286723-f9fc2c7c-db2b-444d-9340-a317884f3bdc)


### Execution Pre-conditions:

* The {servicePointId} is set in the Path 
* AND value &lt;x-v&gt; is set in the request header to a version supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.EAR.0001: Validate service point and schema - EnergyServicePointDetailResponse](#assertion-a.ear.0001)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0007"></a>
## T.EAR.0007: ADR call to DH: Get Service Point Detail - unsupported version without x-min-v included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the value for &lt;x-v&gt; is in a valid  format


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0008"></a>
## T.EAR.0008: ADR call to DH: Get Service Point Detail - invalid format of Service Point ID

Positive test case

Ensure the endpoint returns servicePointId compatible errors

### Purpose:

Test API with an invalid servicePointId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail)


### Execution Pre-conditions:

* The {servicePointId} is set in the Path to a value that is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.EAR.0002: Validate service point - invalid value](#assertion-a.ear.0002)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0009"></a>
## T.EAR.0009: ADR call to DH: Get Service Point Detail - unavailable Service Point ID

Positive test case

Ensure the endpoint returns servicePointId compatible errors

### Purpose:

Test API with an unavailable servicePointId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail)


### Execution Pre-conditions:

* The {servicePointId} is set in the Path to a value that is unavailable


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.EAR.0003: Validate service point - unavailable](#assertion-a.ear.0003)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0010"></a>
## T.EAR.0010: ADR call to DH: Get Service Point Detail - invalid FAPI Interaction ID format 

Positive test case

Ensure that the endpoint returns FAPI Interaction ID errors

### Purpose:

Test API where FAPI Interaction ID fomat is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail)


### Execution Pre-conditions:

* The &lt;x-fapi-interaction-id&gt; format is invalid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.ZAA.0015: Validate FAPI Interaction ID - invalid format](#assertion-a.zaa.0015)


<a id="testcase-t.ear.0011"></a>
## T.EAR.0011: ADR call to DH: Get Usage for Service Point Detail - no pagination

Negative test case

Obtain a list of electricity usage data from a particular service point owned by the consumer that has authorised the current session

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.EAR.0005: Validate service point and schema - EnergyUsageListResponse](#assertion-a.ear.0005)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0012"></a>
## T.EAR.0012: ADR call to DH: Get Usage for Service Points - with pagination

Negative test case

Obtain a paginated list of electricity usage data from a particular service point owned by the consumer that has authorised the current session

### Purpose:

Test API with pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)
* [Postman Example](https://www.postman.com/winter-shadow-541400/workspace/dsb-schema-tests/request/8286723-8365f6ba-ed9b-4e43-87a1-a54d9d49b8e1)


### Execution Pre-conditions:

*  &lt;page-size&gt; and&lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.EAR.0005: Validate service point and schema - EnergyUsageListResponse](#assertion-a.ear.0005)
* [A.ZAA.0001: Validate pagination - LinksPaginated ](#assertion-a.zaa.0001)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0013"></a>
## T.EAR.0013: ADR call to DH: Get Usage for Service Points - unsupported version without x-min-v included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version not supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0014"></a>
## T.EAR.0014: ADR call to DH: Get Usage for Service Points - invalid page parameters

Positive test case

Ensure that the endpoint returns pagination errors

### Purpose:

Test API with invalid pagination parameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* &lt;page&gt; OR (&lt;page&gt; 
* AND &lt;page-size&gt;) query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0002: Validate pagination - Invalid page size value](#assertion-a.zaa.0002)
* [A.ZAA.0003: Validate pagination - Non-numeric <page>](#assertion-a.zaa.0003)
* [A.ZAA.0004: Validate pagination - Max record limit exceeded](#assertion-a.zaa.0004)
* [A.ZAA.0005: Validate pagination - Non-numeric <page-size>](#assertion-a.zaa.0005)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0015"></a>
## T.EAR.0015: ADR call to DH: Get Usage for Service Points - oldest date

Negative test case

Obtain a list of electricity usage data constrained by oldest date from a particular service point owned by the consumer that has authorised the current session

### Purpose:

Test API with &lt;oldest date&gt; parameter

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)
* [https://consumerdatastandardsaustralia.github.io/standards/#common-field-types](https://consumerdatastandardsaustralia.github.io/standards/#common-field-types)


### Execution Pre-conditions:

*  &lt;oldest-date&gt; query parameters is provided
* AND &lt;oldest-date&gt; is a valid DateTime string


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.EAR.0005: Validate service point and schema - EnergyUsageListResponse](#assertion-a.ear.0005)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0027: Validate the Oldest Date parameter - valid format](#assertion-a.zaa.0027)


<a id="testcase-t.ear.0016"></a>
## T.EAR.0016: ADR call to DH: Get Usage for Service Points - newest date

Negative test case

Obtain a list of service points owned by the consumer that has authorised the current session

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* &lt;newest-date&gt; query parameter is provided
* AND &lt;newest-date&gt; is a valid DateTime string


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.EAR.0005: Validate service point and schema - EnergyUsageListResponse](#assertion-a.ear.0005)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0029: Validate the Newest Date parameter - valid format](#assertion-a.zaa.0029)


<a id="testcase-t.ear.0017"></a>
## T.EAR.0017: ADR call to DH: Get Usage for Service Points - invalid Service Point ID

Positive test case

Ensure the endpoint returns servicePointId compatible errors

### Purpose:

Test API with an invalid servicePointId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* The {servicePointId} is set in the Path to a value that is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.EAR.0002: Validate service point - invalid value](#assertion-a.ear.0002)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0018"></a>
## T.EAR.0018: ADR call to DH: Get Usage for Service Points - unavailable Service Point ID

Positive test case

Ensure the endpoint returns servicePointId compatible errors

### Purpose:

Test API with an unavailable servicePointId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* The {servicePointId} is set in the Path to a value that is unavailable


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.EAR.0003: Validate service point - unavailable](#assertion-a.ear.0003)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0019"></a>
## T.EAR.0019: ADR call to DH: Get Usage for Service Points - invalid format oldest date 

Positive test case

Ensure the endpoint returns servicePointId compatible errors

### Purpose:

Test API with &lt;oldest date&gt;  parameter

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0028: Validation the Oldest Date parameter - invalid format](#assertion-a.zaa.0028)


<a id="testcase-t.ear.0020"></a>
## T.EAR.0020: ADR call to DH: Get Usage for Service Points - invalid format newest date

Positive test case

Ensure the endpoint returns servicePointId compatible errors

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0030: Validation the Newest Date parameter - invalid format](#assertion-a.zaa.0030)


<a id="testcase-t.ear.0021"></a>
## T.EAR.0021: ADR call to DH: Get Usage For Service Point - invalid FAPI Interaction ID format

Positive test case

Ensure that the endpoint returns FAPI Interaction ID errors

### Purpose:

Test API where FAPI Interaction ID fomat is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* The &lt;x-fapi-interaction-id&gt; format is invalid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0015: Validate FAPI Interaction ID - invalid format](#assertion-a.zaa.0015)


<a id="testcase-t.ear.0022"></a>
## T.EAR.0022: ADR call to DH: Get Usage for Specific Service Points - no pagination

Negative test case

Obtain the electricity usage data for a specific set of service points owned by the consumer that has authorised the current session

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.EAR.0006: Validate servicePointIdList body and schema - EnergyUsageListResponse](#assertion-a.ear.0006)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0023"></a>
## T.EAR.0023: ADR call to DH: Get Usage for Specific Service Points - with pagination

Negative test case

Obtain the electricity usage data for a specific set of service points owned by the consumer that has authorised the current session

### Purpose:

Test API with pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)
* [Postman Example](https://www.postman.com/winter-shadow-541400/workspace/dsb-schema-tests/request/8286723-e9c11ed2-1fe4-448b-b474-b233c27d5767)


### Execution Pre-conditions:

*  &lt;page-size&gt; and&lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.EAR.0006: Validate servicePointIdList body and schema - EnergyUsageListResponse](#assertion-a.ear.0006)
* [A.ZAA.0001: Validate pagination - LinksPaginated ](#assertion-a.zaa.0001)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0024"></a>
## T.EAR.0024: ADR call to DH: Get Usage for Specific Service Points - unsupported version without x-min-v included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version not supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0025"></a>
## T.EAR.0025: ADR call to DH: Get Usage for Specific Service Points - invalid page parameters

Positive test case

Ensure that the endpoint returns pagination errors

### Purpose:

Test API with invalid pagination parameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

* &lt;page&gt; OR (&lt;page&gt; 
* AND &lt;page-size&gt;) query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0002: Validate pagination - Invalid page size value](#assertion-a.zaa.0002)
* [A.ZAA.0003: Validate pagination - Non-numeric <page>](#assertion-a.zaa.0003)
* [A.ZAA.0004: Validate pagination - Max record limit exceeded](#assertion-a.zaa.0004)
* [A.ZAA.0005: Validate pagination - Non-numeric <page-size>](#assertion-a.zaa.0005)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0026"></a>
## T.EAR.0026: ADR call to DH: Get Usage for Specific Service Points - oldest date

Negative test case

Obtain the electricity usage data for a specific set of service points owned by the consumer that has authorised the current session

### Purpose:

Test API with oldest date parameter

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

*  &lt;oldest-date&gt; query parameters is provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.EAR.0006: Validate servicePointIdList body and schema - EnergyUsageListResponse](#assertion-a.ear.0006)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0027: Validate the Oldest Date parameter - valid format](#assertion-a.zaa.0027)


<a id="testcase-t.ear.0027"></a>
## T.EAR.0027: ADR call to DH: Get Usage for Specific Service Points - newest date

Negative test case

Obtain the electricity usage data for a specific set of service points owned by the consumer that has authorised the current session

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

* &lt;newest-date&gt; query parameter is provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.EAR.0006: Validate servicePointIdList body and schema - EnergyUsageListResponse](#assertion-a.ear.0006)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0029: Validate the Newest Date parameter - valid format](#assertion-a.zaa.0029)


<a id="testcase-t.ear.0028"></a>
## T.EAR.0028: ADR call to DH: Get Usage for Specific Service Points - invalid format oldest date 

Positive test case

Ensure the endpoint returns oldest-date compatible errors

### Purpose:

Test API with oldest date parameter

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0028: Validation the Oldest Date parameter - invalid format](#assertion-a.zaa.0028)


<a id="testcase-t.ear.0029"></a>
## T.EAR.0029: ADR call to DH: Get Usage for Specific Service Points - invalid format newest date

Positive test case

Ensure the endpoint returns newest-date compatible errors

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0030: Validation the Newest Date parameter - invalid format](#assertion-a.zaa.0030)


<a id="testcase-t.ear.0030"></a>
## T.EAR.0030: ADR call to DH: Get Usage For Specific Service Points - invalid FAPI Interaction ID format

Positive test case

Ensure that the endpoint returns FAPI Interaction ID errors

### Purpose:

Test API where FAPI Interaction ID fomat is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

* The &lt;x-fapi-interaction-id&gt; format is invalid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0015: Validate FAPI Interaction ID - invalid format](#assertion-a.zaa.0015)


<a id="testcase-t.ear.0031"></a>
## T.EAR.0031: ADR call to DH: Get Usage for Specific Service Points - invalid body values

Positive test case

Ensure that the endpoint returns body compatibility errors

### Purpose:

Test API with invalid body values

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

* The request body is correctly formatted
* AND request payload has missing or invalid values


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.EAR.0009: Validate servicePointIdList - invalid body values](#assertion-a.ear.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0032"></a>
## T.EAR.0032: ADR call to DH: Get Usage for Specific Service Points - invalid body format

Positive test case

Ensure that the endpoint returns body compatibility errors

### Purpose:

Test API with a malformed body

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

* The body is incorrectly formatted


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0031: Validation of the POST body - malformed body](#assertion-a.zaa.0031)


<a id="testcase-t.ear.0033"></a>
## T.EAR.0033: ADR call to DH: Get DER for Service Point 

Negative test case

Obtain a list of DER data from a particular service point owned by the consumer that has authorised the current session

### Purpose:

Test API with a vaild service point and version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)
* [Postman Example](https://www.postman.com/winter-shadow-541400/workspace/dsb-schema-tests/request/8286723-c008a5a9-00a7-4144-85a0-6832e23f837a)


### Execution Pre-conditions:

* The {servicePointId} is set in the Path 
* AND value &lt;x-v&gt; is set in the request header to a version supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.EAR.0007: Validate service point and schema - EnergyDerDetailResponse](#assertion-a.ear.0007)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0034"></a>
## T.EAR.0034: ADR call to DH: Get Service Point Detail - unsupported version without x-min-v included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the value for &lt;x-v&gt; is in a valid  format


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0035"></a>
## T.EAR.0035: ADR call to DH: Get Service Point Detail - invalid format of Service Point ID

Positive test case

Ensure the endpoint returns servicePointId compatible errors

### Purpose:

Test API with an invalid servicePointId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)


### Execution Pre-conditions:

* The &lt;{servicePointId}&gt; is set in the Path to a value that is 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.EAR.0002: Validate service point - invalid value](#assertion-a.ear.0002)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0036"></a>
## T.EAR.0036: ADR call to DH: Get Service Point Detail - unavailable Service Point ID

Positive test case

Ensure the endpoint returns servicePointId compatible errors

### Purpose:

Test API with an unavailable servicePointId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)


### Execution Pre-conditions:

* The {servicePointId} is set in the Path to a value that is unavailable


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.EAR.0003: Validate service point - unavailable](#assertion-a.ear.0003)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0037"></a>
## T.EAR.0037: ADR call to DH: Get DER for Service Point - invalid FAPI Interaction ID format

Positive test case

Ensure that the endpoint returns FAPI Interaction ID errors

### Purpose:

Test API where FAPI Interaction ID fomat is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)


### Execution Pre-conditions:

* The &lt;x-fapi-interaction-id&gt; format is invalid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.ZAA.0015: Validate FAPI Interaction ID - invalid format](#assertion-a.zaa.0015)


<a id="testcase-t.ear.0038"></a>
## T.EAR.0038: ADR call to DH: Get DER for Specific Service Points - no pagination

Negative test case

Obtain DER data for a specific set of service points owned by the consumer that has authorised the current session

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.EAR.0008: Validate servicePointIdList body and schema - EnergyDerListResponse](#assertion-a.ear.0008)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0039"></a>
## T.EAR.0039: ADR call to DH: Get DER for Specific Service Points - with pagination

Negative test case

Obtain DER data for a specific set of service points owned by the consumer that has authorised the current session

### Purpose:

Test API with pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points)
* [Postman Example](https://www.postman.com/winter-shadow-541400/workspace/dsb-schema-tests/request/8286723-3d96d13a-360d-4930-a46c-6cb0c2450a86)


### Execution Pre-conditions:

*  &lt;page-size&gt; and&lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.EAR.0008: Validate servicePointIdList body and schema - EnergyDerListResponse](#assertion-a.ear.0008)
* [A.ZAA.0001: Validate pagination - LinksPaginated ](#assertion-a.zaa.0001)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0040"></a>
## T.EAR.0040: ADR call to DH: Get DER for Specific Service Points - unsupported version without x-min-v included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the value for &lt;x-v&gt; is in a valid  format


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0041"></a>
## T.EAR.0041: ADR call to DH: Get DER for Specific Service Points - invalid page parameters

Positive test case

Ensure that the endpoint returns pagination errors

### Purpose:

Test API with invalid pagination parameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points)


### Execution Pre-conditions:

* &lt;page&gt; OR (&lt;page&gt; 
* AND &lt;page-size&gt;) query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0002: Validate pagination - Invalid page size value](#assertion-a.zaa.0002)
* [A.ZAA.0003: Validate pagination - Non-numeric <page>](#assertion-a.zaa.0003)
* [A.ZAA.0004: Validate pagination - Max record limit exceeded](#assertion-a.zaa.0004)
* [A.ZAA.0005: Validate pagination - Non-numeric <page-size>](#assertion-a.zaa.0005)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0042"></a>
## T.EAR.0042: ADR call to DH: Get DER for Specific Service Points - invalid body values

Positive test case

Ensure that the endpoint returns body compatibility errors

### Purpose:

Test API with invalid body values

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points)


### Execution Pre-conditions:

* The request body is correctly formatted
* AND request payload has missing or invalid values


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.EAR.0009: Validate servicePointIdList - invalid body values](#assertion-a.ear.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0043"></a>
## T.EAR.0043: ADR call to DH: Get DER for Specific Service Points - invalid body format

Positive test case

Ensure that the endpoint returns body compatibility errors

### Purpose:

Test API with a malformed body

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points)


### Execution Pre-conditions:

* The body is incorrectly formatted


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0031: Validation of the POST body - malformed body](#assertion-a.zaa.0031)


<a id="testcase-t.ear.0044"></a>
## T.EAR.0044: ADR call to DH: Get DER For Specific Service Points - invalid FAPI Interaction ID format

Positive test case

Ensure that the endpoint returns FAPI Interaction ID errors

### Purpose:

Test API where FAPI Interaction ID fomat is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points)


### Execution Pre-conditions:

* The &lt;x-fapi-interaction-id&gt; format is invalid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0015: Validate FAPI Interaction ID - invalid format](#assertion-a.zaa.0015)


<a id="testcase-t.ear.0045"></a>
## T.EAR.0045: ADR call to DH: Get Bulk Usage 

Negative test case

Obtain the electricity usage data for all service points owned by the consumer that has authorised the current session

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)
* [Postman Example](https://www.postman.com/winter-shadow-541400/workspace/dsb-schema-tests/request/8286723-c4624ec7-7ef3-4dbd-b1a1-c1d63a020346)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.EAR.0010: Validate schema - 	EnergyUsageListResponse](#assertion-a.ear.0010)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0046"></a>
## T.EAR.0046: ADR call to DH: Get Bulk Usage - with pagination

Negative test case

Obtain the electricity usage data for all service points owned by the consumer that has authorised the current session

### Purpose:

Test API with pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)


### Execution Pre-conditions:

*  &lt;page-size&gt; and&lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.EAR.0010: Validate schema - 	EnergyUsageListResponse](#assertion-a.ear.0010)
* [A.ZAA.0001: Validate pagination - LinksPaginated ](#assertion-a.zaa.0001)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0047"></a>
## T.EAR.0047: ADR call to DH: Get Bulk Usage - unsupported version without x-min-v included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version not supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0048"></a>
## T.EAR.0048: ADR call to DH: Get Bulk Usage - invalid page parameters

Positive test case

Ensure that the endpoint returns pagination errors

### Purpose:

Test API with invalid pagination parameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)


### Execution Pre-conditions:

* &lt;page&gt; OR (&lt;page&gt; 
* AND &lt;page-size&gt;) query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0002: Validate pagination - Invalid page size value](#assertion-a.zaa.0002)
* [A.ZAA.0003: Validate pagination - Non-numeric <page>](#assertion-a.zaa.0003)
* [A.ZAA.0004: Validate pagination - Max record limit exceeded](#assertion-a.zaa.0004)
* [A.ZAA.0005: Validate pagination - Non-numeric <page-size>](#assertion-a.zaa.0005)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0049"></a>
## T.EAR.0049: ADR call to DH: Get Bulk Usage - oldest date

Negative test case

Obtain the electricity usage data for all service points owned by the consumer that has authorised the current session

### Purpose:

Test API with oldest date parameter

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)


### Execution Pre-conditions:

*  &lt;oldest-date&gt; query parameters is provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.EAR.0010: Validate schema - 	EnergyUsageListResponse](#assertion-a.ear.0010)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0027: Validate the Oldest Date parameter - valid format](#assertion-a.zaa.0027)


<a id="testcase-t.ear.0050"></a>
## T.EAR.0050: ADR call to DH: Get Bulk Usage - newest date

Negative test case

Obtain the electricity usage data for all service points owned by the consumer that has authorised the current session

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)


### Execution Pre-conditions:

* &lt;newest-date&gt; query parameter is provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.EAR.0010: Validate schema - 	EnergyUsageListResponse](#assertion-a.ear.0010)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0029: Validate the Newest Date parameter - valid format](#assertion-a.zaa.0029)


<a id="testcase-t.ear.0051"></a>
## T.EAR.0051: ADR call to DH: Get Bulk Usage - invalid format oldest date 

Positive test case

Ensure the endpoint returns oldest-date compatible errors

### Purpose:

Test API with an invalid oldest date parameter

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0028: Validation the Oldest Date parameter - invalid format](#assertion-a.zaa.0028)


<a id="testcase-t.ear.0052"></a>
## T.EAR.0052: ADR call to DH: Get Bulk Usage - invalid format newest date

Positive test case

Ensure the endpoint returns newest-date compatible errors

### Purpose:

Test API with an invalid newest date parameter

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0030: Validation the Newest Date parameter - invalid format](#assertion-a.zaa.0030)


<a id="testcase-t.ear.0053"></a>
## T.EAR.0053: ADR call to DH: Get Bulk Usage - invalid FAPI Interaction ID format

Positive test case

Ensure that the endpoint returns FAPI Interaction ID errors

### Purpose:

Test API where FAPI Interaction ID fomat is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)


### Execution Pre-conditions:

* The &lt;x-fapi-interaction-id&gt; format is invalid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0015: Validate FAPI Interaction ID - invalid format](#assertion-a.zaa.0015)


<a id="testcase-t.ear.0054"></a>
## T.EAR.0054: ADR call to DH: Get Bulk Usage - missing FAPI Auth Date

Positive test case

Ensure that the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0016: Validate FAPI Auth date - missing from header](#assertion-a.zaa.0016)


<a id="testcase-t.ear.0055"></a>
## T.EAR.0055: ADR call to DH: Get Bulk Usage - invalid FAPI Auth Date

Positive test case

Ensure that the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0017: Validate FAPI Auth date - invalid format](#assertion-a.zaa.0017)


<a id="testcase-t.ear.0056"></a>
## T.EAR.0056: ADR call to DH: Get Bulk Usage - missing FAPI Customer IP Address

Positive test case

Ensure that the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0019: Validate FAPI Customer IP Address - missing from header](#assertion-a.zaa.0019)


<a id="testcase-t.ear.0057"></a>
## T.EAR.0057: ADR call to DH: Get Bulk Usage - invalid FAPI Customer IP Address

Positive test case

Ensure that the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0020: Validate FAPI Customer IP Address - invalid format](#assertion-a.zaa.0020)


<a id="testcase-t.ear.0058"></a>
## T.EAR.0058: ADR call to DH: Get Bulk Usage - missing CDS Client Header

Positive test case

Ensure that the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0022: Validate the client headers - missing from header](#assertion-a.zaa.0022)


<a id="testcase-t.ear.0059"></a>
## T.EAR.0059: ADR call to DH: Get Bulk Usage - invalid CDS Client Header

Positive test case

Ensure that the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0023: Validate the client headers - invalid format](#assertion-a.zaa.0023)


<a id="testcase-t.ear.0060"></a>
## T.EAR.0060: ADR call to DH: Get Bulk DER 

Negative test case

Obtain the electricity usage data for all service points owned by the consumer that has authorised the current session

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.EAR.0011: Validate schema - EnergyDerListResponse](#assertion-a.ear.0011)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0061"></a>
## T.EAR.0061: ADR call to DH: Get Bulk DER - with pagination

Negative test case

Obtain the electricity usage data for all service points owned by the consumer that has authorised the current session

### Purpose:

Test API with pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der)
* [Postman Example](https://www.postman.com/winter-shadow-541400/workspace/dsb-schema-tests/request/8286723-1aee91c2-9186-47d1-b15c-1996c49b3259)


### Execution Pre-conditions:

*  &lt;page-size&gt; and&lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.EAR.0011: Validate schema - EnergyDerListResponse](#assertion-a.ear.0011)
* [A.ZAA.0001: Validate pagination - LinksPaginated ](#assertion-a.zaa.0001)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0062"></a>
## T.EAR.0062: ADR call to DH: Get Bulk DER - unsupported version without x-min-v included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version not supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0063"></a>
## T.EAR.0063: ADR call to DH: Get Bulk DER - invalid page parameters

Positive test case

Ensure that the endpoint returns pagination errors

### Purpose:

Test API with invalid pagination parameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der)


### Execution Pre-conditions:

* &lt;page&gt; OR (&lt;page&gt; 
* AND &lt;page-size&gt;) query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0002: Validate pagination - Invalid page size value](#assertion-a.zaa.0002)
* [A.ZAA.0003: Validate pagination - Non-numeric <page>](#assertion-a.zaa.0003)
* [A.ZAA.0004: Validate pagination - Max record limit exceeded](#assertion-a.zaa.0004)
* [A.ZAA.0005: Validate pagination - Non-numeric <page-size>](#assertion-a.zaa.0005)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0064"></a>
## T.EAR.0064: ADR call to DH: Get Bulk DER - missing FAPI Auth Date

Positive test case

Ensure that the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0016: Validate FAPI Auth date - missing from header](#assertion-a.zaa.0016)


<a id="testcase-t.ear.0065"></a>
## T.EAR.0065: ADR call to DH: DHGet Bulk DER - invalid FAPI Auth Date

Positive test case

Ensure that the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0017: Validate FAPI Auth date - invalid format](#assertion-a.zaa.0017)


<a id="testcase-t.ear.0066"></a>
## T.EAR.0066: ADR call to DH: Get Bulk DER - missing FAPI Customer IP Address

Positive test case

Ensure that the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0019: Validate FAPI Customer IP Address - missing from header](#assertion-a.zaa.0019)


<a id="testcase-t.ear.0067"></a>
## T.EAR.0067: ADR call to DH: DH: Get Bulk DER - invalid FAPI Customer IP Address

Positive test case

Ensure that the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0020: Validate FAPI Customer IP Address - invalid format](#assertion-a.zaa.0020)


<a id="testcase-t.ear.0068"></a>
## T.EAR.0068: ADR call to DH: Get Bulk DER - missing CDS Client Header

Positive test case

Ensure that the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0022: Validate the client headers - missing from header](#assertion-a.zaa.0022)


<a id="testcase-t.ear.0069"></a>
## T.EAR.0069: ADR call to DH: Get Bulk DER - invalid CDS Client Header

Positive test case

Ensure that the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0023: Validate the client headers - invalid format](#assertion-a.zaa.0023)


<a id="testcase-t.ear.0070"></a>
## T.EAR.0070: ADR call to DH: Get Bulk DER - invalid FAPI Auth Date

Positive test case

Ensure that the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0017: Validate FAPI Auth date - invalid format](#assertion-a.zaa.0017)


<a id="testcase-t.ear.0071"></a>
## T.EAR.0071: ADR call to DH: Get Bulk DER - missing FAPI Customer IP Address

Positive test case

Ensure that the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0019: Validate FAPI Customer IP Address - missing from header](#assertion-a.zaa.0019)


<a id="testcase-t.ear.0072"></a>
## T.EAR.0072: ADR call to DH: Get Bulk DER - invalid FAPI Customer IP Address

Positive test case

Ensure that the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0020: Validate FAPI Customer IP Address - invalid format](#assertion-a.zaa.0020)


<a id="testcase-t.ear.0073"></a>
## T.EAR.0073: ADR call to DH: Get Service Points - missing FAPI Auth Date

Positive test case

Ensure that the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0016: Validate FAPI Auth date - missing from header](#assertion-a.zaa.0016)


<a id="testcase-t.ear.0074"></a>
## T.EAR.0074: ADR call to DH: Get Service Points - invalid FAPI Auth Date

Positive test case

Ensure that the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0017: Validate FAPI Auth date - invalid format](#assertion-a.zaa.0017)


<a id="testcase-t.ear.0075"></a>
## T.EAR.0075: ADR call to DH: Get Service Points - missing FAPI Customer IP Address

Positive test case

Ensure that the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0019: Validate FAPI Customer IP Address - missing from header](#assertion-a.zaa.0019)


<a id="testcase-t.ear.0076"></a>
## T.EAR.0076: ADR call to DH: Get Service Points - invalid FAPI Customer IP Address

Positive test case

Ensure that the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0020: Validate FAPI Customer IP Address - invalid format](#assertion-a.zaa.0020)


<a id="testcase-t.ear.0077"></a>
## T.EAR.0077: ADR call to DH: Get Service Points - missing CDS Client Header

Positive test case

Ensure that the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0022: Validate the client headers - missing from header](#assertion-a.zaa.0022)


<a id="testcase-t.ear.0078"></a>
## T.EAR.0078: ADR call to DH: Get Service Points - invalid CDS Client Header

Positive test case

Ensure that the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0023: Validate the client headers - invalid format](#assertion-a.zaa.0023)


<a id="testcase-t.ear.0079"></a>
## T.EAR.0079: ADR call to DH: Get Service Point - missing FAPI Auth Date

Positive test case

Ensure that the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0016: Validate FAPI Auth date - missing from header](#assertion-a.zaa.0016)


<a id="testcase-t.ear.0080"></a>
## T.EAR.0080: ADR call to DH: Get Service Point - invalid FAPI Auth Date

Positive test case

Ensure that the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0017: Validate FAPI Auth date - invalid format](#assertion-a.zaa.0017)


<a id="testcase-t.ear.0081"></a>
## T.EAR.0081: ADR call to DH: Get Service Point - missing FAPI Customer IP Address

Positive test case

Ensure that the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0019: Validate FAPI Customer IP Address - missing from header](#assertion-a.zaa.0019)


<a id="testcase-t.ear.0082"></a>
## T.EAR.0082: ADR call to DH: Get Service Point - invalid FAPI Customer IP Address

Positive test case

Ensure that the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0020: Validate FAPI Customer IP Address - invalid format](#assertion-a.zaa.0020)


<a id="testcase-t.ear.0083"></a>
## T.EAR.0083: ADR call to DH: Get Service Point - missing CDS Client Header

Positive test case

Ensure that the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0022: Validate the client headers - missing from header](#assertion-a.zaa.0022)


<a id="testcase-t.ear.0084"></a>
## T.EAR.0084: ADR call to DH: Get Service Point - invalid CDS Client Header

Positive test case

Ensure that the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0023: Validate the client headers - invalid format](#assertion-a.zaa.0023)


<a id="testcase-t.ear.0085"></a>
## T.EAR.0085: ADR call to DH: Get Usage For Service Point - missing FAPI Auth Date

Positive test case

Ensure that the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0016: Validate FAPI Auth date - missing from header](#assertion-a.zaa.0016)


<a id="testcase-t.ear.0086"></a>
## T.EAR.0086: ADR call to DH: Get Usage For Service Point - invalid FAPI Auth Date

Positive test case

Ensure that the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0017: Validate FAPI Auth date - invalid format](#assertion-a.zaa.0017)


<a id="testcase-t.ear.0087"></a>
## T.EAR.0087: ADR call to DH: Get Usage For Service Point - missing FAPI Customer IP Address

Positive test case

Ensure that the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0019: Validate FAPI Customer IP Address - missing from header](#assertion-a.zaa.0019)


<a id="testcase-t.ear.0088"></a>
## T.EAR.0088: ADR call to DH: Get Usage For Service Point - invalid FAPI Customer IP Address

Positive test case

Ensure that the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0020: Validate FAPI Customer IP Address - invalid format](#assertion-a.zaa.0020)


<a id="testcase-t.ear.0089"></a>
## T.EAR.0089: ADR call to DH: Get Usage For Service Point - missing CDS Client Header

Positive test case

Ensure that the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0022: Validate the client headers - missing from header](#assertion-a.zaa.0022)


<a id="testcase-t.ear.0090"></a>
## T.EAR.0090: ADR call to DH: Get Usage For Service Point - invalid CDS Client Header

Positive test case

Ensure that the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0023: Validate the client headers - invalid format](#assertion-a.zaa.0023)


<a id="testcase-t.ear.0091"></a>
## T.EAR.0091: ADR call to DH: Get Usage for Specific Service Points - missing FAPI Auth Date

Positive test case

Ensure that the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0016: Validate FAPI Auth date - missing from header](#assertion-a.zaa.0016)


<a id="testcase-t.ear.0092"></a>
## T.EAR.0092: ADR call to DH: Get Usage for Specific Service Points - invalid FAPI Auth Date

Positive test case

Ensure that the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0017: Validate FAPI Auth date - invalid format](#assertion-a.zaa.0017)


<a id="testcase-t.ear.0093"></a>
## T.EAR.0093: ADR call to DH: Get Usage for Specific Service Points - missing FAPI Customer IP Address

Positive test case

Ensure that the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0019: Validate FAPI Customer IP Address - missing from header](#assertion-a.zaa.0019)


<a id="testcase-t.ear.0094"></a>
## T.EAR.0094: ADR call to DH: Get Usage for Specific Service Points - invalid FAPI Customer IP Address

Positive test case

Ensure that the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0020: Validate FAPI Customer IP Address - invalid format](#assertion-a.zaa.0020)


<a id="testcase-t.ear.0095"></a>
## T.EAR.0095: ADR call to DH: Get Usage for Specific Service Points - missing CDS Client Header

Positive test case

Ensure that the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0022: Validate the client headers - missing from header](#assertion-a.zaa.0022)


<a id="testcase-t.ear.0096"></a>
## T.EAR.0096: ADR call to DH: Get Usage for Specific Service Points - invalid CDS Client Header

Positive test case

Ensure that the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0023: Validate the client headers - invalid format](#assertion-a.zaa.0023)


<a id="testcase-t.ear.0097"></a>
## T.EAR.0097: ADR call to DH: Get DER for Service Point - missing FAPI Auth Date

Positive test case

Ensure that the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0016: Validate FAPI Auth date - missing from header](#assertion-a.zaa.0016)


<a id="testcase-t.ear.0098"></a>
## T.EAR.0098: ADR call to DH: Get DER for Service Point - invalid FAPI Auth Date

Positive test case

Ensure that the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0017: Validate FAPI Auth date - invalid format](#assertion-a.zaa.0017)


<a id="testcase-t.ear.0099"></a>
## T.EAR.0099: ADR call to DH: Get DER for Service Point - missing FAPI Customer IP Address

Positive test case

Ensure that the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0019: Validate FAPI Customer IP Address - missing from header](#assertion-a.zaa.0019)


<a id="testcase-t.ear.0100"></a>
## T.EAR.0100: ADR call to DH: Get DER for Service Point - invalid FAPI Customer IP Address

Positive test case

Ensure that the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0020: Validate FAPI Customer IP Address - invalid format](#assertion-a.zaa.0020)


<a id="testcase-t.ear.0101"></a>
## T.EAR.0101: ADR call to DH: Get DER for Service Point - missing CDS Client Header

Positive test case

Ensure that the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0022: Validate the client headers - missing from header](#assertion-a.zaa.0022)


<a id="testcase-t.ear.0102"></a>
## T.EAR.0102: ADR call to DH: Get DER for Service Point - invalid CDS Client Header

Positive test case

Ensure that the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0023: Validate the client headers - invalid format](#assertion-a.zaa.0023)


<a id="testcase-t.ear.0103"></a>
## T.EAR.0103: ADR call to DH: Get DER For Specific Service Points - missing FAPI Auth Date

Positive test case

Ensure that the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0016: Validate FAPI Auth date - missing from header](#assertion-a.zaa.0016)


<a id="testcase-t.ear.0104"></a>
## T.EAR.0104: ADR call to DH: Get DER For Specific Service Points - invalid FAPI Auth Date

Positive test case

Ensure that the endpoint returns FAPI Auth date errors 

### Purpose:

Test API when FAPI Auth date is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points)


### Execution Pre-conditions:

* The &lt;x-fapi-auth-date&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0017: Validate FAPI Auth date - invalid format](#assertion-a.zaa.0017)


<a id="testcase-t.ear.0105"></a>
## T.EAR.0105: ADR call to DH: Get DER For Specific Service Points - missing FAPI Customer IP Address

Positive test case

Ensure that the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0019: Validate FAPI Customer IP Address - missing from header](#assertion-a.zaa.0019)


<a id="testcase-t.ear.0106"></a>
## T.EAR.0106: ADR call to DH: Get DER For Specific Service Points - invalid FAPI Customer IP Address

Positive test case

Ensure that the endpoint returns FAPI Customer IP address errors 

### Purpose:

Test API when FAPI Customer IP Address is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points)


### Execution Pre-conditions:

* The &lt;x-fapi-customer-ip-address&gt;  format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0020: Validate FAPI Customer IP Address - invalid format](#assertion-a.zaa.0020)


<a id="testcase-t.ear.0107"></a>
## T.EAR.0107: ADR call to DH: Get DER For Specific Service Points - missing CDS Client Header

Positive test case

Ensure that the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is missing from the header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; is not present in the header


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0022: Validate the client headers - missing from header](#assertion-a.zaa.0022)


<a id="testcase-t.ear.0108"></a>
## T.EAR.0108: ADR call to DH: Get DER For Specific Service Points - invalid CDS Client Header

Positive test case

Ensure that the endpoint returns CDS Client Header errors 

### Purpose:

Test API when CDS Client Header is present but the format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points)


### Execution Pre-conditions:

* The &lt;x-cds-client-header&gt; format is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)
* [A.ZAA.0023: Validate the client headers - invalid format](#assertion-a.zaa.0023)


<a id="testcase-t.ear.0109"></a>
## T.EAR.0109: ADR call to DH: Get Service Points - invalid version value

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)
* [Postman Example](https://www.postman.com/winter-shadow-541400/workspace/dsb-schema-tests/request/8286723-7db0a312-af47-452a-8a44-d4002b3c71e8)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0110"></a>
## T.EAR.0110: ADR call to DH: Get Service Points - invalid version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0111"></a>
## T.EAR.0111: ADR call to DH: Get Service Point - invalid version value

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0112"></a>
## T.EAR.0112: ADR call to DH: Get Service Point - invalid version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0113"></a>
## T.EAR.0113: ADR call to DH: Get Usage For Service Point - invalid version value

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0114"></a>
## T.EAR.0114: ADR call to DH: Get Usage For Service Point - invalid version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0115"></a>
## T.EAR.0115: ADR call to DH: Get Bulk Usage - invalid version value

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0116"></a>
## T.EAR.0116: ADR call to DH: Get Bulk Usage - invalid version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0117"></a>
## T.EAR.0117: ADR call to DH: Get Usage for Specific Service Points - invalid version value

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0118"></a>
## T.EAR.0118: ADR call to DH: Get Usage for Specific Service Points - invalid version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0119"></a>
## T.EAR.0119: ADR call to DH: Get DER for Service Point - invalid version value

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0120"></a>
## T.EAR.0120: ADR call to DH: Get DER for Service Point - invalid version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0121"></a>
## T.EAR.0121: ADR call to DH: Get Bulk DER - invalid version value

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0122"></a>
## T.EAR.0122: ADR call to DH: Get Bulk DER - invalid version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0123"></a>
## T.EAR.0123: ADR call to DH: Get DER For Specific Service Points - invalid version value

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0124"></a>
## T.EAR.0124: ADR call to DH: Get DER For Specific Service Points - invalid version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0125"></a>
## T.EAR.0125: ADR call to DH: Get Service Points - unsupported version when x-min-v is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0126"></a>
## T.EAR.0126: ADR call to DH: Get Service Point - unsupported version when x-min-v is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0127"></a>
## T.EAR.0127: ADR call to DH: Get Usage For Service Point - unsupported version when x-min-v is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0128"></a>
## T.EAR.0128: ADR call to DH: Get Bulk Usage - unsupported version when x-min-v is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0129"></a>
## T.EAR.0129: ADR call to DH: Get Usage for Specific Service Points - unsupported version when x-min-v is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0130"></a>
## T.EAR.0130: ADR call to DH: Get DER for Service Point - unsupported version when x-min-v is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0131"></a>
## T.EAR.0131: ADR call to DH: Get Bulk DER - unsupported version when x-min-v is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0132"></a>
## T.EAR.0132: ADR call to DH: Get DER For Specific Service Points - unsupported version when x-min-v is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0133"></a>
## T.EAR.0133: ADR call to DH: Get Service Points - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0134"></a>
## T.EAR.0134: ADR call to DH: Get Service Point Detail - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0135"></a>
## T.EAR.0135: ADR call to DH: Get Usage for Service Point - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0136"></a>
## T.EAR.0136: ADR call to DH: Get Bulk Usage - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0137"></a>
## T.EAR.0137: ADR call to DH: Get Usage For Specific Service Points - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0138"></a>
## T.EAR.0138: ADR call to DH: Get DER For Service Point - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0139"></a>
## T.EAR.0139: ADR call to DH: Get Bulk DER - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.ear.0140"></a>
## T.EAR.0140: ADR call to DH: Get DER For Specific Service Points - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eas.0001"></a>
## T.EAS.0001: DH call to SDH: Get Service Points - no pagination

Negative test case

Obtain a list of service points requested by the DH

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints|


### End State Assertions:

* [A.EAS.0004: Validate schema - EnergyServicePointListReponse](#assertion-a.eas.0004)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0018: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.zaa.0018)
* [A.ZAA.0021: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.zaa.0021)
* [A.ZAA.0024: No <x-cds-client-header> in header (SR specific)](#assertion-a.zaa.0024)


<a id="testcase-t.eas.0002"></a>
## T.EAS.0002: DH call to SDH: Get Service Points - with pagination

Negative test case

Obtain a paginated list of service points requested by the DH

### Purpose:

Test API with pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr)


### Execution Pre-conditions:

*  &lt;page-size&gt; and&lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints|


### End State Assertions:

* [A.EAS.0004: Validate schema - EnergyServicePointListReponse](#assertion-a.eas.0004)
* [A.ZAA.0001: Validate pagination - LinksPaginated ](#assertion-a.zaa.0001)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0018: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.zaa.0018)
* [A.ZAA.0021: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.zaa.0021)
* [A.ZAA.0024: No <x-cds-client-header> in header (SR specific)](#assertion-a.zaa.0024)


<a id="testcase-t.eas.0003"></a>
## T.EAS.0003: DH call to SDH: Get Service Points - unsupported version without x-min-v included

Positive test case

DH call to SDH: Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH 

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version
* AND the value for &lt;x-v&gt; is in a valid  format not supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0004"></a>
## T.EAS.0004: DH call to SDH: Get Service Points - invalid page parameters

Positive test case

Ensure that the endpoint returns pagination errors

### Purpose:

Test API with invalid pagination parameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr)


### Execution Pre-conditions:

* &lt;page&gt; OR (&lt;page&gt; 
* AND &lt;page-size&gt;) query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0002: Validate pagination - Invalid page size value](#assertion-a.zaa.0002)
* [A.ZAA.0003: Validate pagination - Non-numeric <page>](#assertion-a.zaa.0003)
* [A.ZAA.0004: Validate pagination - Max record limit exceeded](#assertion-a.zaa.0004)
* [A.ZAA.0005: Validate pagination - Non-numeric <page-size>](#assertion-a.zaa.0005)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0005"></a>
## T.EAS.0005: DH call to SDH: Get Service Point Detail 

Negative test case

Obtain the details of a service point requested by the DH

### Purpose:

Test API with a vaild service point and version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr)


### Execution Pre-conditions:

* The {servicePointId} is set in the Path 
* AND value &lt;x-v&gt; is set in the request header to a version supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.EAS.0001: Validate service point and schema - EnergyServicePointDetailResponse](#assertion-a.eas.0001)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0018: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.zaa.0018)
* [A.ZAA.0021: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.zaa.0021)
* [A.ZAA.0024: No <x-cds-client-header> in header (SR specific)](#assertion-a.zaa.0024)


<a id="testcase-t.eas.0006"></a>
## T.EAS.0006: DH call to SDH: Get Service Point Detail - unsupported version without x-min-v included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the value for &lt;x-v&gt; is in a valid  format


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0007"></a>
## T.EAS.0007: DH call to SDH: Get Service Point Detail - invalid format of Service Point ID

Positive test case

Ensure the endpoint returns servicePointId compatible errors

### Purpose:

Test API with an invalid servicePointId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr)


### Execution Pre-conditions:

* The &lt;{servicePointId}&gt; is set in the Path to a value that is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.EAS.0002: Validate service point - invalid NMI value](#assertion-a.eas.0002)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0008"></a>
## T.EAS.0008: DH call to SDH: Get Service Point Detail - unavailable Service Point ID

Positive test case

Ensure the endpoint returns servicePointId compatible errors

### Purpose:

Test API with an unavailable servicePointId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr)


### Execution Pre-conditions:

* The {servicePointId} is set in the Path to a value that is unavailable


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.EAS.0003: Validate service point - unavailable NMI](#assertion-a.eas.0003)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0009"></a>
## T.EAS.0009: DH call to SDH: Get Usage for Service Point Detail - no pagination

Negative test case

Obtain a list of electricity usage data from a particular service point requested by the DH

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.EAS.0005: Validate service point and schema - EnergyUsageListResponse](#assertion-a.eas.0005)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0018: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.zaa.0018)
* [A.ZAA.0021: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.zaa.0021)
* [A.ZAA.0024: No <x-cds-client-header> in header (SR specific)](#assertion-a.zaa.0024)


<a id="testcase-t.eas.0010"></a>
## T.EAS.0010: DH call to SDH: Get Usage for Service Points - with pagination

Negative test case

Obtain a paginated list of electricity usage data from a particular service requested by the DH

### Purpose:

Test API with pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr)


### Execution Pre-conditions:

*  &lt;page-size&gt; and&lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.EAS.0005: Validate service point and schema - EnergyUsageListResponse](#assertion-a.eas.0005)
* [A.ZAA.0001: Validate pagination - LinksPaginated ](#assertion-a.zaa.0001)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0018: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.zaa.0018)
* [A.ZAA.0021: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.zaa.0021)
* [A.ZAA.0024: No <x-cds-client-header> in header (SR specific)](#assertion-a.zaa.0024)


<a id="testcase-t.eas.0011"></a>
## T.EAS.0011: DH call to SDH: Get Usage for Service Points - unsupported version without x-min-v included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the value for &lt;x-v&gt; is in a valid  format


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0012"></a>
## T.EAS.0012: DH call to SDH: Get Usage for Service Points - invalid page parameters

Positive test case

Ensure that the endpoint returns pagination errors

### Purpose:

Test API with invalid pagination parameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr)


### Execution Pre-conditions:

* &lt;page&gt; OR (&lt;page&gt; 
* AND &lt;page-size&gt;) query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0002: Validate pagination - Invalid page size value](#assertion-a.zaa.0002)
* [A.ZAA.0003: Validate pagination - Non-numeric <page>](#assertion-a.zaa.0003)
* [A.ZAA.0004: Validate pagination - Max record limit exceeded](#assertion-a.zaa.0004)
* [A.ZAA.0005: Validate pagination - Non-numeric <page-size>](#assertion-a.zaa.0005)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0013"></a>
## T.EAS.0013: DH call to SDH: Get Usage for Service Points - oldest date

Negative test case

Obtain a list of electricity usage data constrained by oldest date from a particular service point requested by the DH

### Purpose:

Test API with &lt;oldest date&gt; parameter

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr)
* [https://consumerdatastandardsaustralia.github.io/standards/#common-field-types](https://consumerdatastandardsaustralia.github.io/standards/#common-field-types)


### Execution Pre-conditions:

*  &lt;oldest-date&gt; query parameters is provided
* AND &lt;oldest-date&gt; is a valid DateTime string


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.EAS.0005: Validate service point and schema - EnergyUsageListResponse](#assertion-a.eas.0005)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0018: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.zaa.0018)
* [A.ZAA.0021: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.zaa.0021)
* [A.ZAA.0024: No <x-cds-client-header> in header (SR specific)](#assertion-a.zaa.0024)
* [A.ZAA.0027: Validate the Oldest Date parameter - valid format](#assertion-a.zaa.0027)


<a id="testcase-t.eas.0014"></a>
## T.EAS.0014: DH call to SDH: Get Usage for Service Points - newest date

Negative test case

Obtain a list of service points requested by the DH

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr)


### Execution Pre-conditions:

* &lt;newest-date&gt; query parameter is provided
* AND &lt;newest-date&gt; is a valid DateTime string


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.EAS.0005: Validate service point and schema - EnergyUsageListResponse](#assertion-a.eas.0005)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0018: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.zaa.0018)
* [A.ZAA.0021: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.zaa.0021)
* [A.ZAA.0024: No <x-cds-client-header> in header (SR specific)](#assertion-a.zaa.0024)
* [A.ZAA.0029: Validate the Newest Date parameter - valid format](#assertion-a.zaa.0029)


<a id="testcase-t.eas.0015"></a>
## T.EAS.0015: DH call to SDH: Get Usage for Service Points - invalid Service Point ID

Positive test case

Ensure the endpoint returns servicePointId compatible errors

### Purpose:

Test API with an invalid servicePointId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr)


### Execution Pre-conditions:

* The {servicePointId} is set in the Path to a value that is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.EAS.0002: Validate service point - invalid NMI value](#assertion-a.eas.0002)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0016"></a>
## T.EAS.0016: DH call to SDH: Get Usage for Service Points - unavailable Service Point ID

Positive test case

Ensure the endpoint returns servicePointId compatible errors

### Purpose:

Test API with an unavailable servicePointId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr)


### Execution Pre-conditions:

* The {servicePointId} is set in the Path to a value that is unavailable


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.EAS.0003: Validate service point - unavailable NMI](#assertion-a.eas.0003)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0017"></a>
## T.EAS.0017: DH call to SDH: Get Usage for Service Points - invalid format oldest date 

Positive test case

Ensure the endpoint returns servicePointId compatible errors

### Purpose:

Test API with &lt;oldest date&gt;  parameter

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0028: Validation the Oldest Date parameter - invalid format](#assertion-a.zaa.0028)


<a id="testcase-t.eas.0018"></a>
## T.EAS.0018: DH call to SDH: Get Usage for Service Points - invalid format newest date

Positive test case

Ensure the endpoint returns servicePointId compatible errors

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0030: Validation the Newest Date parameter - invalid format](#assertion-a.zaa.0030)


<a id="testcase-t.eas.0019"></a>
## T.EAS.0019: DH call to SDH: Get Usage for Specific Service Points - no pagination

Negative test case

Obtain the electricity usage data for a specific set of service points requested by the DH

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.EAS.0006: Validate servicePointIdList body and schema - EnergyUsageListResponse](#assertion-a.eas.0006)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0018: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.zaa.0018)
* [A.ZAA.0021: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.zaa.0021)
* [A.ZAA.0024: No <x-cds-client-header> in header (SR specific)](#assertion-a.zaa.0024)


<a id="testcase-t.eas.0020"></a>
## T.EAS.0020: DH call to SDH: Get Usage for Specific Service Points - with pagination

Negative test case

Obtain the electricity usage data for a specific set of service points requested by the DH

### Purpose:

Test API with pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr)


### Execution Pre-conditions:

*  &lt;page-size&gt; and&lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.EAS.0006: Validate servicePointIdList body and schema - EnergyUsageListResponse](#assertion-a.eas.0006)
* [A.ZAA.0001: Validate pagination - LinksPaginated ](#assertion-a.zaa.0001)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0018: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.zaa.0018)
* [A.ZAA.0021: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.zaa.0021)
* [A.ZAA.0024: No <x-cds-client-header> in header (SR specific)](#assertion-a.zaa.0024)


<a id="testcase-t.eas.0021"></a>
## T.EAS.0021: DH call to SDH: Get Usage for Specific Service Points - unsupported version without x-min-v included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr)


### Execution Pre-conditions:

* The value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the value for &lt;x-v&gt; is in a valid  format


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0022"></a>
## T.EAS.0022: DH call to SDH: Get Usage for Specific Service Points - invalid page parameters

Positive test case

Ensure that the endpoint returns pagination errors

### Purpose:

Test API with invalid pagination parameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr)


### Execution Pre-conditions:

* &lt;page&gt; OR (&lt;page&gt; 
* AND &lt;page-size&gt;) query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0002: Validate pagination - Invalid page size value](#assertion-a.zaa.0002)
* [A.ZAA.0003: Validate pagination - Non-numeric <page>](#assertion-a.zaa.0003)
* [A.ZAA.0004: Validate pagination - Max record limit exceeded](#assertion-a.zaa.0004)
* [A.ZAA.0005: Validate pagination - Non-numeric <page-size>](#assertion-a.zaa.0005)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0023"></a>
## T.EAS.0023: DH call to SDH: Get Usage for Specific Service Points - oldest date

Positive test case

Obtain the electricity usage data for a specific set of service points requested by the DH

### Purpose:

Test API with oldest date parameter

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr)


### Execution Pre-conditions:

*  &lt;oldest-date&gt; query parameters is provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.EAS.0006: Validate servicePointIdList body and schema - EnergyUsageListResponse](#assertion-a.eas.0006)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0018: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.zaa.0018)
* [A.ZAA.0021: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.zaa.0021)
* [A.ZAA.0024: No <x-cds-client-header> in header (SR specific)](#assertion-a.zaa.0024)
* [A.ZAA.0027: Validate the Oldest Date parameter - valid format](#assertion-a.zaa.0027)


<a id="testcase-t.eas.0024"></a>
## T.EAS.0024: DH call to SDH: Get Usage for Specific Service Points - newest date

Negative test case

Obtain the electricity usage data for a specific set of service points requested by the DH

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr)


### Execution Pre-conditions:

* &lt;newest-date&gt; query parameter is provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.EAS.0006: Validate servicePointIdList body and schema - EnergyUsageListResponse](#assertion-a.eas.0006)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0018: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.zaa.0018)
* [A.ZAA.0021: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.zaa.0021)
* [A.ZAA.0024: No <x-cds-client-header> in header (SR specific)](#assertion-a.zaa.0024)
* [A.ZAA.0029: Validate the Newest Date parameter - valid format](#assertion-a.zaa.0029)


<a id="testcase-t.eas.0025"></a>
## T.EAS.0025: DH call to SDH: Get Usage for Specific Service Points - invalid format oldest date 

Positive test case

Ensure the endpoint returns oldest-date compatible errors

### Purpose:

Test API with oldest date parameter

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0028: Validation the Oldest Date parameter - invalid format](#assertion-a.zaa.0028)


<a id="testcase-t.eas.0026"></a>
## T.EAS.0026: DH call to SDH: Get Usage for Specific Service Points - invalid format newest date

Positive test case

Ensure the endpoint returns newest-date compatible errors

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0030: Validation the Newest Date parameter - invalid format](#assertion-a.zaa.0030)


<a id="testcase-t.eas.0027"></a>
## T.EAS.0027: DH call to SDH: Get DER for Service Point 

Negative test case

Obtain a list of DER data from a particular service point requested by the DH

### Purpose:

Test API with a vaild service point and version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr)


### Execution Pre-conditions:

* The {servicePointId} is set in the Path 
* AND value &lt;x-v&gt; is set in the request header to a version supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.EAS.0007: Validate service point and schema - EnergyDerDetailResponse](#assertion-a.eas.0007)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0018: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.zaa.0018)
* [A.ZAA.0021: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.zaa.0021)
* [A.ZAA.0024: No <x-cds-client-header> in header (SR specific)](#assertion-a.zaa.0024)


<a id="testcase-t.eas.0028"></a>
## T.EAS.0028: DH call to SDH: Get Service Point Detail - unsupported version without x-min-v included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the value for &lt;x-v&gt; is in a valid  format


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0029"></a>
## T.EAS.0029: DH call to SDH: Get Service Point Detail - invalid format of Service Point ID

Positive test case

Ensure the endpoint returns servicePointId compatible errors

### Purpose:

Test API with an invalid servicePointId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr)


### Execution Pre-conditions:

* The &lt;{servicePointId}&gt; is set in the Path to a value that is 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.EAS.0002: Validate service point - invalid NMI value](#assertion-a.eas.0002)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0030"></a>
## T.EAS.0030: DH call to SDH: Get Service Point Detail - unavailable Service Point ID

Positive test case

Ensure the endpoint returns servicePointId compatible errors

### Purpose:

Test API with an unavailable servicePointId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr)


### Execution Pre-conditions:

* The {servicePointId} is set in the Path to a value that is unavailable


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.EAS.0003: Validate service point - unavailable NMI](#assertion-a.eas.0003)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0031"></a>
## T.EAS.0031: DH call to SDH: Get DER for Specific Service Points - no pagination

Negative test case

Obtain DER data for a specific set of service points requested by the DH

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/der|


### End State Assertions:

* [A.EAS.0008: Validate servicePointIdList body and schema - EnergyDerListResponse](#assertion-a.eas.0008)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0018: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.zaa.0018)
* [A.ZAA.0021: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.zaa.0021)
* [A.ZAA.0024: No <x-cds-client-header> in header (SR specific)](#assertion-a.zaa.0024)


<a id="testcase-t.eas.0032"></a>
## T.EAS.0032: DH call to SDH: Get DER for Specific Service Points - with pagination

Negative test case

Obtain DER data for a specific set of service points requested by the DH

### Purpose:

Test API with pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr)


### Execution Pre-conditions:

*  &lt;page-size&gt; and&lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/der|


### End State Assertions:

* [A.EAS.0008: Validate servicePointIdList body and schema - EnergyDerListResponse](#assertion-a.eas.0008)
* [A.ZAA.0001: Validate pagination - LinksPaginated ](#assertion-a.zaa.0001)
* [A.ZAA.0006: Validate version - valid version number [x-v]](#assertion-a.zaa.0006)
* [A.ZAA.0011: Validate version - <x-min-v> is provided](#assertion-a.zaa.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0018: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.zaa.0018)
* [A.ZAA.0021: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.zaa.0021)
* [A.ZAA.0024: No <x-cds-client-header> in header (SR specific)](#assertion-a.zaa.0024)


<a id="testcase-t.eas.0033"></a>
## T.EAS.0033: DH call to SDH: Get DER for Specific Service Points - unsupported version without x-min-v included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the value for &lt;x-v&gt; is in a valid  format


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0009: Validate version - unsupported version without <x-min-v>](#assertion-a.zaa.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0034"></a>
## T.EAS.0034: DH call to SDH: Get DER for Specific Service Points - invalid page parameters

Positive test case

Ensure that the endpoint returns pagination errors

### Purpose:

Test API with invalid pagination parameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr)


### Execution Pre-conditions:

* &lt;page&gt; OR (&lt;page&gt; 
* AND &lt;page-size&gt;) query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0002: Validate pagination - Invalid page size value](#assertion-a.zaa.0002)
* [A.ZAA.0003: Validate pagination - Non-numeric <page>](#assertion-a.zaa.0003)
* [A.ZAA.0004: Validate pagination - Max record limit exceeded](#assertion-a.zaa.0004)
* [A.ZAA.0005: Validate pagination - Non-numeric <page-size>](#assertion-a.zaa.0005)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0035"></a>
## T.EAS.0035: DH call to SDH: Get DER for Specific Service Points - invalid body values

Positive test case

Ensure that the endpoint returns body compatibility errors

### Purpose:

Test API with invalid body values

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr)


### Execution Pre-conditions:

* The request body is correctly formatted
* AND request payload has missing or invalid values


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/der|


### End State Assertions:

* [A.EAS.0009: Validate servicePointIdList - invalid body values](#assertion-a.eas.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0036"></a>
## T.EAS.0036: DH call to SDH: Get DER for Specific Service Points - invalid body format

Positive test case

Ensure that the endpoint returns body compatibility errors

### Purpose:

Test API with a malformed body

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr)


### Execution Pre-conditions:

* The body is incorrectly formatted


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0031: Validation of the POST body - malformed body](#assertion-a.zaa.0031)


<a id="testcase-t.eas.0037"></a>
## T.EAS.0037: DH call to SDH: Get Usage for Specific Service Points - invalid body values

Positive test case

Ensure that the endpoint returns body compatibility errors

### Purpose:

Test API with invalid body values

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr)


### Execution Pre-conditions:

* The request body is correctly formatted
* AND request payload has missing or invalid values


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.EAS.0009: Validate servicePointIdList - invalid body values](#assertion-a.eas.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0038"></a>
## T.EAS.0038: DH call to SDH: Get Usage for Specific Service Points - invalid body format

Positive test case

Ensure that the endpoint returns body compatibility errors

### Purpose:

Test API with a malformed body

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr)


### Execution Pre-conditions:

* The body is incorrectly formatted


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0031: Validation of the POST body - malformed body](#assertion-a.zaa.0031)


<a id="testcase-t.eas.0039"></a>
## T.EAS.0039: DH call to SDH: Get Service Points - invalid FAPI Interaction ID format 

Positive test case

Ensure that the endpoint returns FAPI Interaction ID errors

### Purpose:

Test API where FAPI Interaction ID format is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr)


### Execution Pre-conditions:

* The &lt;x-fapi-interaction-id&gt; format is invalid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0015: Validate FAPI Interaction ID - invalid format](#assertion-a.zaa.0015)


<a id="testcase-t.eas.0040"></a>
## T.EAS.0040: DH call to SDH: Get Service Point Detail - invalid FAPI Interaction ID format 

Positive test case

Ensure that the endpoint returns FAPI Interaction ID errors

### Purpose:

Test API where FAPI Interaction ID fomat is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr)


### Execution Pre-conditions:

* The &lt;x-fapi-interaction-id&gt; format is invalid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.ZAA.0015: Validate FAPI Interaction ID - invalid format](#assertion-a.zaa.0015)


<a id="testcase-t.eas.0041"></a>
## T.EAS.0041: DH call to SDH: Get Usage For Service Point - invalid FAPI Interaction ID format

Positive test case

Ensure that the endpoint returns FAPI Interaction ID errors

### Purpose:

Test API where FAPI Interaction ID fomat is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr)


### Execution Pre-conditions:

* The &lt;x-fapi-interaction-id&gt; format is invalid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0015: Validate FAPI Interaction ID - invalid format](#assertion-a.zaa.0015)


<a id="testcase-t.eas.0042"></a>
## T.EAS.0042: DH call to SDH: Get Usage For Specific Service Points - invalid FAPI Interaction ID format

Positive test case

Ensure that the endpoint returns FAPI Interaction ID errors

### Purpose:

Test API where FAPI Interaction ID fomat is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr)


### Execution Pre-conditions:

* The &lt;x-fapi-interaction-id&gt; format is invalid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0015: Validate FAPI Interaction ID - invalid format](#assertion-a.zaa.0015)


<a id="testcase-t.eas.0043"></a>
## T.EAS.0043: DH call to SDH: Get DER for Service Point - invalid FAPI Interaction ID format

Positive test case

Ensure that the endpoint returns FAPI Interaction ID errors

### Purpose:

Test API where FAPI Interaction ID fomat is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr)


### Execution Pre-conditions:

* The &lt;x-fapi-interaction-id&gt; format is invalid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.ZAA.0015: Validate FAPI Interaction ID - invalid format](#assertion-a.zaa.0015)


<a id="testcase-t.eas.0044"></a>
## T.EAS.0044: DH call to SDH: Get DER For Specific Service Points - invalid FAPI Interaction ID format

Positive test case

Ensure that the endpoint returns FAPI Interaction ID errors

### Purpose:

Test API where FAPI Interaction ID fomat is invalid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr)


### Execution Pre-conditions:

* The &lt;x-fapi-interaction-id&gt; format is invalid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0015: Validate FAPI Interaction ID - invalid format](#assertion-a.zaa.0015)


<a id="testcase-t.eas.0045"></a>
## T.EAS.0045: DH call to SDH: Get Service Points - no arragement id 

Positive test case

Ensure that the endpoint returns arrangement id errors

### Purpose:

Test API to ensure the arrangement ID is included 

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr)


### Execution Pre-conditions:

* The &lt;x-cds-arrangement&gt; is missing 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0025: CDS arrangement id - missing from header (SR specific)](#assertion-a.zaa.0025)


<a id="testcase-t.eas.0046"></a>
## T.EAS.0046: DH call to SDH: Get Service Points - arrangement ID invalid

Positive test case

Ensure that the endpoint returns arrangement id errors

### Purpose:

Test API to ensure the arrangement ID is valid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr)


### Execution Pre-conditions:

* The &lt;x-cds-arrangement&gt; is present but invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0026: CDS arrangement id - present but invalid (SR specific)](#assertion-a.zaa.0026)


<a id="testcase-t.eas.0047"></a>
## T.EAS.0047: DH call to SDH: Get Service Point Detail - no arragement id 

Positive test case

Ensure that the endpoint returns arrangement id errors

### Purpose:

Test API to ensure the arrangement ID is included 

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr)


### Execution Pre-conditions:

* The &lt;x-cds-arrangement&gt; is missing 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0025: CDS arrangement id - missing from header (SR specific)](#assertion-a.zaa.0025)


<a id="testcase-t.eas.0048"></a>
## T.EAS.0048: DH call to SDH: Get Service Point Detail - arrangement ID invalid

Positive test case

Ensure that the endpoint returns arrangement id errors

### Purpose:

Test API to ensure the arrangement ID is valid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr)


### Execution Pre-conditions:

* The &lt;x-cds-arrangement&gt; is present but invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0026: CDS arrangement id - present but invalid (SR specific)](#assertion-a.zaa.0026)


<a id="testcase-t.eas.0049"></a>
## T.EAS.0049: DH call to Get Usage For Service Point - no arragement id 

Positive test case

Ensure that the endpoint returns arrangement id errors

### Purpose:

Test API to ensure the arrangement ID is included 

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr)


### Execution Pre-conditions:

* The &lt;x-cds-arrangement&gt; is missing 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0025: CDS arrangement id - missing from header (SR specific)](#assertion-a.zaa.0025)


<a id="testcase-t.eas.0050"></a>
## T.EAS.0050: DH call to SDH: Get Usage For Service Point - arrangement ID invalid

Positive test case

Ensure that the endpoint returns arrangement id errors

### Purpose:

Test API to ensure the arrangement ID is valid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr)


### Execution Pre-conditions:

* The &lt;x-cds-arrangement&gt; is present but invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0026: CDS arrangement id - present but invalid (SR specific)](#assertion-a.zaa.0026)


<a id="testcase-t.eas.0051"></a>
## T.EAS.0051: DH call to SDH: Get Usage For Specific Service Points - no arragement id 

Positive test case

Ensure that the endpoint returns arrangement id errors

### Purpose:

Test API to ensure the arrangement ID is included 

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr)


### Execution Pre-conditions:

* The &lt;x-cds-arrangement&gt; is missing 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0025: CDS arrangement id - missing from header (SR specific)](#assertion-a.zaa.0025)


<a id="testcase-t.eas.0052"></a>
## T.EAS.0052: DH call to SDH: Get Usage For Specific Service Points - arrangement ID invalid

Positive test case

Ensure that the endpoint returns arrangement id errors

### Purpose:

Test API to ensure the arrangement ID is valid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr)


### Execution Pre-conditions:

* The &lt;x-cds-arrangement&gt; is present but invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0026: CDS arrangement id - present but invalid (SR specific)](#assertion-a.zaa.0026)


<a id="testcase-t.eas.0053"></a>
## T.EAS.0053: DH call to SDH: Get DER for Service Point - no arragement id 

Positive test case

Ensure that the endpoint returns arrangement id errors

### Purpose:

Test API to ensure the arrangement ID is included 

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr)


### Execution Pre-conditions:

* The &lt;x-cds-arrangement&gt; is missing 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0025: CDS arrangement id - missing from header (SR specific)](#assertion-a.zaa.0025)


<a id="testcase-t.eas.0054"></a>
## T.EAS.0054: DH call to SDH: Get DER for Service Point - arrangement ID invalid

Positive test case

Ensure that the endpoint returns arrangement id errors

### Purpose:

Test API to ensure the arrangement ID is valid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr)


### Execution Pre-conditions:

* The &lt;x-cds-arrangement&gt; is present but invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0026: CDS arrangement id - present but invalid (SR specific)](#assertion-a.zaa.0026)


<a id="testcase-t.eas.0055"></a>
## T.EAS.0055: DH call to Get DER For Specific Service Points - no arragement id 

Positive test case

Ensure that the endpoint returns arrangement id errors

### Purpose:

Test API to ensure the arrangement ID is included 

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr)


### Execution Pre-conditions:

* The &lt;x-cds-arrangement&gt; is missing 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0025: CDS arrangement id - missing from header (SR specific)](#assertion-a.zaa.0025)


<a id="testcase-t.eas.0056"></a>
## T.EAS.0056: DH call to SDH: Get DER For Specific Service Points - arrangement ID invalid

Positive test case

Ensure that the endpoint returns arrangement id errors

### Purpose:

Test API to ensure the arrangement ID is valid

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr)


### Execution Pre-conditions:

* The &lt;x-cds-arrangement&gt; is present but invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0026: CDS arrangement id - present but invalid (SR specific)](#assertion-a.zaa.0026)


<a id="testcase-t.eas.0057"></a>
## T.EAS.0057: DH call to SDH: Get Service Points - invalid version value

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0058"></a>
## T.EAS.0058: DH call to SDH: Get Service Points - invalid version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0059"></a>
## T.EAS.0059: DH call to SDH: Get Service Point Detail - invalid version value

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0060"></a>
## T.EAS.0060: DH call to SDH: Get Service Point Detail - invalid version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0061"></a>
## T.EAS.0061: DH call to SDH: Get Usage For Service Point - invalid version value

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0062"></a>
## T.EAS.0062: DH call to SDH: Get Usage For Service Point - invalid version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0063"></a>
## T.EAS.0063: DH call to SDH: Get Usage For Specific Service Points - invalid version value

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0064"></a>
## T.EAS.0064: DH call to SDH: Get Usage For Specific Service Points - invalid version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0065"></a>
## T.EAS.0065: DH call to SDH: Get DER for Service Point - invalid version value

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0066"></a>
## T.EAS.0066: DH call to SDH: Get DER for Service Point - invalid version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0067"></a>
## T.EAS.0067: DH call to SDH: Get DER For Specific Service Points - invalid version value

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0007: Validate version - invalid version value [x-v]](#assertion-a.zaa.0007)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0068"></a>
## T.EAS.0068: DH call to SDH: Get DER For Specific Service Points - invalid version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr)


### Execution Pre-conditions:

* The &lt;x-v&gt; format is not valid 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0008: Validate version - invalid [x-v] format](#assertion-a.zaa.0008)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0069"></a>
## T.EAS.0069: DH call to SDH: Get Service Points - unsupported version when x-min-v is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0070"></a>
## T.EAS.0070: DH call to SDH: Get Service Point Detail - unsupported version when x-min-v is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0071"></a>
## T.EAS.0071: DH call to SDH: Get Usage for Service Points - unsupported version when x-min-v is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0072"></a>
## T.EAS.0072: DH call to SDH: Get Usage for Specific Service Points - unsupported version when x-min-v  is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0073"></a>
## T.EAS.0073: DH call to SDH: Get Service Point Detail - unsupported version when x-min-v is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0074"></a>
## T.EAS.0074: DH call to SDH: Get DER for Specific Service Points - unsupported version when x-min-v is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-min-v&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0010: Validate version - unsupported version with <x-min-v>](#assertion-a.zaa.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0075"></a>
## T.EAS.0075: DH call to SDH: Get Service Points - missing servicePointId in body

Negative test case

Ensure the endpoint returns servicePointId compatible errors

### Purpose:

Test API with a missing servicePointId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr)


### Execution Pre-conditions:

* The {servicePointId} in the body is missing


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints|


### End State Assertions:

* [A.EAS.0009: Validate servicePointIdList - invalid body values](#assertion-a.eas.0009)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0076"></a>
## T.EAS.0076: DH call to SDH: Get Service Points - invalid servicePointId in body

Negative test case

Ensure the endpoint returns servicePointId compatible errors

### Purpose:

Test API with an invalid servicePointId 

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr)


### Execution Pre-conditions:

* The {servicePointId} in the body is invalid


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints|


### End State Assertions:

* [A.EAS.0010: Validate servicePointIdList - invalid servicePointId in body ](#assertion-a.eas.0010)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0077"></a>
## T.EAS.0077: DH call to SDH: Get Service Points - unavailable servicePointId in body

Negative test case

Ensure the endpoint returns servicePointId compatible errors

### Purpose:

Test API with an unavailable servicePointId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr)


### Execution Pre-conditions:

* The {servicePointId} in the body is unavailable


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints|


### End State Assertions:

* [A.EAS.0011: Validate servicePointIdList - unavailable servicePointId in body ](#assertion-a.eas.0011)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)


<a id="testcase-t.eas.0078"></a>
## T.EAS.0078: DH call to SDH: Get Service Points - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eas.0079"></a>
## T.EAS.0079: DH call to SDH: Get Service Point Detail - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail-sr)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eas.0080"></a>
## T.EAS.0080: DH call to SDH: Get Usage for Service Point - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point-sr)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eas.0081"></a>
## T.EAS.0081: DH call to SDH: Get Usage For Specific Service Points - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points-sr)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eas.0082"></a>
## T.EAS.0082: DH call to SDH: Get DER For Service Point - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point-sr)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /secondary/energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


<a id="testcase-t.eas.0083"></a>
## T.EAS.0083: DH call to SDH: Get DER For Specific Service Points - invalid minimum version format

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test invalid format for minimum version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points-sr)


### Execution Pre-conditions:

* &lt;x-min-v&gt; is included
* AND &lt;x-min-v&gt; is not an integer


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /secondary/energy/electricity/servicepoints/der|


### End State Assertions:

* [A.ZAA.0012: Validate minimum version - invalid <x-min-v> format](#assertion-a.zaa.0012)
* [A.ZAA.0013: Validate FAPI Interaction ID - included in request](#assertion-a.zaa.0013)
* [A.ZAA.0014: Validate FAPI Interaction ID - not in request](#assertion-a.zaa.0014)


No test cases defined

<a id="assertions"></a>
# Assertions

<a id="assertion-a.caa.0001"></a>
## A.CAA.0001: Validate schema - GetStatus

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSresponsecommondiscoverystatus](https://consumerdatastandardsaustralia.github.io/standards/#tocSresponsecommondiscoverystatus)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|a request is made to obtain a health check status for the implementation |
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 200</br> the response body complies with the ResponseCommonDiscoveryStatus schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.caa.0002"></a>
## A.CAA.0002: Validate schema - GetOutage

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSresponsediscoveryoutageslist](https://consumerdatastandardsaustralia.github.io/standards/#tocSresponsediscoveryoutageslist)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|a request is made to obtain a list of scheduled outages|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 200</br> the response body complies with the ResponseDiscoveryOutageList schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cac.0001"></a>
## A.CAC.0001: Validate schema - ResponseCommonCustomer

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSresponsecommoncustomer](https://consumerdatastandardsaustralia.github.io/standards/#tocSresponsecommoncustomer)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request to call the API is formatted correctly|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 200</br> the response body complies with the ResponseCommonCustomer schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cac.0002"></a>
## A.CAC.0002: Validate schema - ResponseCommonCustomerDetailV2

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSresponsecommoncustomerdetailv2](https://consumerdatastandardsaustralia.github.io/standards/#tocSresponsecommoncustomerdetailv2)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request to call the API is formatted correctly|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 200</br> the response body complies with the ResponseCommonCustomerDetailV2 schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eaa.0001"></a>
## A.EAA.0001: Validate schema - EnergyAccountListResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyaccountlistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyaccountlistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request to call the API is formatted correctly by the ADR|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 200</br> the response body complies with the EnergyAccountListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eaa.0002"></a>
## A.EAA.0002: Validate account and schema - EnergyAccountDetailResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyaccountdetailresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyaccountdetailresponse)
* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {accountID} is included </br>AND the {accountId} value is valid |
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 200</br> the response body complies with the EnergyAccountDetailResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eaa.0003"></a>
## A.EAA.0003: Validate account identifier - invalid value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#error-404-invalid-energy-account](https://consumerdatastandardsaustralia.github.io/standards/#error-404-invalid-energy-account)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {accountId} is included </br>AND the requested account is permanently unavailable. (No subsequent request for the account will be successful.)|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 404</br> the response body has ErrorListReponse object</br> error code is "Authorisation/InvalidEnergyAccount"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eaa.0004"></a>
## A.EAA.0004: Validate account identifier - unavailable account

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#error-404-unavailable-energy-account](https://consumerdatastandardsaustralia.github.io/standards/#error-404-unavailable-energy-account)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {accoundId} is included</br>AND the requested account is temporarily unavailable. (Subsequent requests for the account may be successful.)|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 404</br> the response body has ErrorListReponse object</br> error code is "Authorisation/UnavailableEnergyAccount"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eaa.0005"></a>
## A.EAA.0005: validate account and schema - EnergyPaymentScheduleResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergypaymentscheduleresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergypaymentscheduleresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {accountID} is included </br>AND the {accountId} value is valid |
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 200</br> the response body complies with the EnergyPaymentScheduleResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eaa.0006"></a>
## A.EAA.0006: validate account and schema -EnergyConcessionsResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyconcessionsresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyconcessionsresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {accountID} is included </br>AND the {accountId} value is valid |
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 200</br> the response body complies with the EnergyConcessionsResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.0001"></a>
## A.EAR.0001: Validate service point and schema - EnergyServicePointDetailResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyservicepointdetailresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyservicepointdetailresponse)
* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {servicePointId} is included </br>AND the {servicePointId} value is valid |
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 200</br> the response body complies with the EnergyServicePointDetailResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.0002"></a>
## A.EAR.0002: Validate service point - invalid value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {servicePointId} is included </br>AND the requested service point is permanently unavailable. (No subsequent request for the service point will be successful.)|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 404</br> the response body has ErrorListReponse object</br> error code is "Authorisation/InvalidServicePoint"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.0003"></a>
## A.EAR.0003: Validate service point - unavailable

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {servicePointId} is included</br>AND the requested service point is temporarily unavailable. (Subsequent requests for the service point may be successful.)|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 404</br> the response body has ErrorListReponse object</br> error code is "Authorisation/UnavailableServicePoint"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.0004"></a>
## A.EAR.0004: Validate schema - EnergyServicePointListReponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyservicepointlistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyservicepointlistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request to call the API is formatted correctly|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 200</br> the response body complies with the EnergyServiceListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.0005"></a>
## A.EAR.0005: Validate service point and schema - EnergyUsageListResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {servicePointId} is included</br>AND the {servicePointId} value is valid </br>AND the request is formatted correctly|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code of 200</br> the response body complies with the EnergyUsageListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.0006"></a>
## A.EAR.0006: Validate servicePointIdList body and schema - EnergyUsageListResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request payload to call the API is formatted correctly </br>AND contains the mandatory fields|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 200</br> the response body complies with the EnergyUsageListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.0007"></a>
## A.EAR.0007: Validate service point and schema - EnergyDerDetailResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {servicePointId} is included </br>AND the {servicePointId} value is valid |
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 200</br> the response body complies with the EnergyDerDetailResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.0008"></a>
## A.EAR.0008: Validate servicePointIdList body and schema - EnergyDerListResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyderlistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyderlistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request payload to call the API is formatted correctly </br>AND contains the mandatory fields|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 200</br> the response body complies with the EnergyDerListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.0009"></a>
## A.EAR.0009: Validate servicePointIdList - invalid body values

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request payload does not contain the required fields</br>OR the request payload is NOT well formatted|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 422</br> the response body has ErrorListReponse</br> error code is "Field/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.0010"></a>
## A.EAR.0010: Validate schema - 	EnergyUsageListResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request to call the API is formatted correctly|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 200</br> the response body complies with the EnergyUsageListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.0011"></a>
## A.EAR.0011: Validate schema - EnergyDerListResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyderlistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyderlistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request to call the API is formatted correctly|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 200</br> the response body complies with the EnergyDerListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.0001"></a>
## A.EAS.0001: Validate service point and schema - EnergyServicePointDetailResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyservicepointdetailresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyservicepointdetailresponse)
* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {servicePointId} is included </br>AND the {servicePointId} value is valid |
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 200</br> the response body complies with the EnergyServicePointDetailResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.0002"></a>
## A.EAS.0002: Validate service point - invalid NMI value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {servicePointId} is included </br>AND the requested service point is permanently unavailable. No subsequent request for the service point will be successful.|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 404</br> the response body has ErrorListReponse object</br> error code is "Authorisation/InvalidServicePoint"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.0003"></a>
## A.EAS.0003: Validate service point - unavailable NMI

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {servicePointId} is included </br>AND the requested service point is temporarily unavailable. Subsequent requests for the service point may be successful.|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 404</br> the response body has ErrorListReponse object</br> error code is "Authorisation/UnavailableServicePoint"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.0004"></a>
## A.EAS.0004: Validate schema - EnergyServicePointListReponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyservicepointlistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyservicepointlistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request to call the API is formatted correctly|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 200</br> the response body complies with the EnergyServiceListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.0005"></a>
## A.EAS.0005: Validate service point and schema - EnergyUsageListResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {servicePointId} is included </br>AND the {servicePointId} value is valid </br>AND the request is formatted correctly|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code of 200</br> the response body complies with the EnergyUsageListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.0006"></a>
## A.EAS.0006: Validate servicePointIdList body and schema - EnergyUsageListResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request payload to call the API is formatted correctly </br>AND contains the mandatory fields|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 200</br> the response body complies with the EnergyUsageListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.0007"></a>
## A.EAS.0007: Validate service point and schema - EnergyDerDetailResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {servicePointId} is included </br>AND the {servicePointId} value is valid |
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 200</br> the response body complies with the EnergyDerDetailResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.0008"></a>
## A.EAS.0008: Validate servicePointIdList body and schema - EnergyDerListResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyderlistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyderlistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request payload to call the API is formatted correctly </br>AND contains the mandatory fields|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 200</br> the response body complies with the EnergyDerListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.0009"></a>
## A.EAS.0009: Validate servicePointIdList - invalid body values

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSerrorlistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSerrorlistresponse)
* [https://consumerdatastandardsaustralia.github.io/standards/#error-codes](https://consumerdatastandardsaustralia.github.io/standards/#error-codes)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request payload does not contain the required fields</br>OR the request payload is NOT well formatted|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 400</br> the response body complies with the ErrorListReponse schema</br> error code is "Field/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.0010"></a>
## A.EAS.0010: Validate servicePointIdList - invalid servicePointId in body 

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSerrorlistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSerrorlistresponse)
* [https://consumerdatastandardsaustralia.github.io/standards/#error-codes](https://consumerdatastandardsaustralia.github.io/standards/#error-codes)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request payload contains an invalid servicePointID |
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 422</br> the response body complies with the ErrorListReponse schema</br> error code is "Authorisation/InvalidServicePoint"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.0011"></a>
## A.EAS.0011: Validate servicePointIdList - unavailable servicePointId in body 

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSerrorlistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSerrorlistresponse)
* [https://consumerdatastandardsaustralia.github.io/standards/#error-codes](https://consumerdatastandardsaustralia.github.io/standards/#error-codes)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request payload contains a valid servicePointID that is unavailable|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 422</br> the response body complies with the ErrorListReponse schema</br> error code is "Authorisation/UnavailableServicePoint"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0001"></a>
## A.ZAA.0001: Validate pagination - LinksPaginated 

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#pagination](https://consumerdatastandardsaustralia.github.io/standards/#pagination)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the page parameter is included in a GET request</br>AND the page value is a number and page-size is [1..1000,null]|
|When|a response is returned</br>AND the response has a status of 200|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the nominated &lt;page number&gt; is returned</br> the "first" link has page=1</br> the "last" link is greater than or equal to 1</br> the "self" link has page=&lt;page number&gt;</br> the "prev" link has page equal to 1 or &lt;page number&gt; - 1</br> the "prev" link has page equal to "last" or &lt;page number&gt; + 1</br> "meta"/"totalPages" is greater than or equal to &lt;page number&gt;</br> "meta"/"totalRecords" is greater than or equal to &lt;page number&gt; * &lt;page size&gt;</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0002"></a>
## A.ZAA.0002: Validate pagination - Invalid page size value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#error-codes](https://consumerdatastandardsaustralia.github.io/standards/#error-codes)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;page-size&gt; parameter is specified</br>AND the value for &lt;page-size&gt; is outside the range [1..1000]</br>OR the &lt;page-size&gt; is a not a positive integer|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Field/InvalidPageSize"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0003"></a>
## A.ZAA.0003: Validate pagination - Non-numeric <page>

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#error-codes](https://consumerdatastandardsaustralia.github.io/standards/#error-codes)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;page&gt; parameter is included </br>AND the &lt;page&gt; is a not a positive integer|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Field/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0004"></a>
## A.ZAA.0004: Validate pagination - Max record limit exceeded

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#error-codes](https://consumerdatastandardsaustralia.github.io/standards/#error-codes)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;page&gt; parameter is included</br>AND the &lt;page&gt; value is greater than the number of pages available |
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 422</br> the response body has ErrorListReponse object</br> the error code is "Field/InvalidPage"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0005"></a>
## A.ZAA.0005: Validate pagination - Non-numeric <page-size>

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#error-codes](https://consumerdatastandardsaustralia.github.io/standards/#error-codes)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;page-size&gt; parameter is included </br>AND the page size parameter value is not a positive integer (number)|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Field/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0006"></a>
## A.ZAA.0006: Validate version - valid version number [x-v]

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;x-v&gt; header is included </br>AND the value for the &lt;x-v&gt; is a positive integer|
|When|a response is returned</br>AND the response has a status of 200|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em"> &lt;x-v&gt; is in the response header</br> &lt;x-v&gt; is a positive integer</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0007"></a>
## A.ZAA.0007: Validate version - invalid version value [x-v]

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the version parameter is included </br>AND the version value is not a valid number is [-1,0,1001]|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Field/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0008"></a>
## A.ZAA.0008: Validate version - invalid [x-v] format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the version parameter is included</br>AND the version value is not a valid number is an alpha (e.g. "foo")|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Field/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0009"></a>
## A.ZAA.0009: Validate version - unsupported version without <x-min-v>

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;x-v&gt;  is included in a  request header</br>AND &lt;x-min-v&gt; is NOT included</br>AND the request version &lt;x-v&gt; is not supported|
|When|and a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 406</br> the response body has ErrorListReponse object</br> error code is "Header/UnsupportedVersion"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0010"></a>
## A.ZAA.0010: Validate version - unsupported version with <x-min-v>

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;x-v&gt;  is included in a  request header</br>AND  &lt;x-min-v&gt;  is included</br>AND no version between &lt;x-v&gt; and &lt;x-min-v&gt; is supported|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 406</br> the response body has ErrorListReponse object</br> error code is "Header/UnsupportedVersion"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0011"></a>
## A.ZAA.0011: Validate version - <x-min-v> is provided

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;x-min-v&gt; header is included </br>AND the value for the &lt;x-min-v&gt;  is a positive integer|
|When|a response is returned</br>AND the response has a status of 200|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">&lt;x-v&gt; is in the response header</br>  &lt;x-v&gt; = [&lt;x-min-v&gt;, &lt;x-v&gt;]</br> &lt;x-v&gt; is a positive integer</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0012"></a>
## A.ZAA.0012: Validate minimum version - invalid <x-min-v> format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;x-min-v&gt; header is included </br>AND the &lt;x-min-v&gt; is a not a positive integer|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Field/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0013"></a>
## A.ZAA.0013: Validate FAPI Interaction ID - included in request

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;x-fapi-interaction-id&gt; is included in the header of the request</br>AND the &lt;x-fapi-interaction-id&gt; is in a valid format |
|When|a response is returned|
|Then|the Data Holder has returned the &lt;x-fapi-interaction-id&gt; from the request in the response header|


<a id="assertion-a.zaa.0014"></a>
## A.ZAA.0014: Validate FAPI Interaction ID - not in request

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;x-fapi-interaction-id&gt; is NOT included in the header of the request|
|When|a response is returned|
|Then|the Data Holder has returned an &lt;x-fapi-interaction-id&gt; in the response header|


<a id="assertion-a.zaa.0015"></a>
## A.ZAA.0015: Validate FAPI Interaction ID - invalid format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)
* [https://datatracker.ietf.org/doc/html/rfc4122](https://datatracker.ietf.org/doc/html/rfc4122)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;x-fapi-interaction-id&gt; is included </br>AND the &lt;x-fapi-interaction-id&gt; is not in a valid format |
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Header/invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0016"></a>
## A.ZAA.0016: Validate FAPI Auth date - missing from header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)
* [https://openid.net/specs/openid-financial-api-part-1-ID2.html](https://openid.net/specs/openid-financial-api-part-1-ID2.html)
* [https://datatracker.ietf.org/doc/html/rfc7231#page-90](https://datatracker.ietf.org/doc/html/rfc7231#page-90)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the API requires authentication</br>AND the &lt;x-fapi-auth-date&gt; is NOT present  in the request header|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Header/missing"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0017"></a>
## A.ZAA.0017: Validate FAPI Auth date - invalid format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)
* [https://openid.net/specs/openid-financial-api-part-1-ID2.html](https://openid.net/specs/openid-financial-api-part-1-ID2.html)
* [https://datatracker.ietf.org/doc/html/rfc7231#page-90](https://datatracker.ietf.org/doc/html/rfc7231#page-90)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the API requires authentication</br>AND the &lt;x-fapi-auth-date&gt; is in the request header</br>AND is NOT in a valid format|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Header/invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0018"></a>
## A.ZAA.0018: No <x-fapi-auth-date> in header (SR specific)

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the API requires authentication </br>AND the call is from a DH to a SDH|
|When|a response is returned</br>AND the response has a status of 200|
|Then|the &lt;x-fapi-auth-date&gt; is NOT present in the response header|


<a id="assertion-a.zaa.0019"></a>
## A.ZAA.0019: Validate FAPI Customer IP Address - missing from header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)
* [https://consumerdatastandardsaustralia.github.io/standards/#authentication-flows](https://consumerdatastandardsaustralia.github.io/standards/#authentication-flows)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the API requires authentication</br>AND the customer is present</br>AND the &lt;x-fapi-customer-ip-address&gt; is NOT present in the request header|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Header/Missing"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0020"></a>
## A.ZAA.0020: Validate FAPI Customer IP Address - invalid format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)
* [https://consumerdatastandardsaustralia.github.io/standards/#authentication-flows](https://consumerdatastandardsaustralia.github.io/standards/#authentication-flows)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the API requires authentication</br>AND the &lt;x-fapi-customer-ip-address&gt; is in present the request header</br>AND is NEITHER in a valid IPv4 or IPv6 format|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Header/invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0021"></a>
## A.ZAA.0021: No <x-fapi-customer-ip-address> in header (SR specific)

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the call is from a DH to a SDH|
|When|a response is returned|
|Then|the &lt;x-fapi-customer-ip-address&gt; is NOT present in the response header|


<a id="assertion-a.zaa.0022"></a>
## A.ZAA.0022: Validate the client headers - missing from header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)
* [https://consumerdatastandardsaustralia.github.io/standards/#authentication-flows](https://consumerdatastandardsaustralia.github.io/standards/#authentication-flows)
* [https://consumerdatastandardsaustralia.github.io/standards/#common-field-types](https://consumerdatastandardsaustralia.github.io/standards/#common-field-types)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the API requires authentication</br>AND the &lt;x-cds-client-headers&gt; is mandatory</br>AND the &lt;x-cds-client-headers&gt; is NOT present in the request header|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Header/missing"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0023"></a>
## A.ZAA.0023: Validate the client headers - invalid format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)
* [https://consumerdatastandardsaustralia.github.io/standards/#authentication-flows](https://consumerdatastandardsaustralia.github.io/standards/#authentication-flows)
* [https://consumerdatastandardsaustralia.github.io/standards/#common-field-types](https://consumerdatastandardsaustralia.github.io/standards/#common-field-types)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;x-cds-client-headers&gt;  present the request header</br>AND is Not Base64 encoded|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Header/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0024"></a>
## A.ZAA.0024: No <x-cds-client-header> in header (SR specific)

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the call is from a DH to a SDH|
|When|a response is returned|
|Then|the &lt;x-cds-client-header&gt; is NOT present in the response header|


<a id="assertion-a.zaa.0025"></a>
## A.ZAA.0025: CDS arrangement id - missing from header (SR specific)

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)
* [https://consumerdatastandardsaustralia.github.io/standards/#identifiers-and-subject-types](https://consumerdatastandardsaustralia.github.io/standards/#identifiers-and-subject-types)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the call is from a DH to a SDH</br>AND the &lt;x-cds-arrangement&gt; is NOT present in the request header|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Header/Missing"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0026"></a>
## A.ZAA.0026: CDS arrangement id - present but invalid (SR specific)

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)
* [https://consumerdatastandardsaustralia.github.io/standards/#identifiers-and-subject-types](https://consumerdatastandardsaustralia.github.io/standards/#identifiers-and-subject-types)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the call is from a DH to a SDH|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Header/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0027"></a>
## A.ZAA.0027: Validate the Oldest Date parameter - valid format

### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;oldest-date&gt; is included as a query parameter</br>AND the &lt;oldest-date&gt; is in a valid DateString format|
|When|a response is returned</br>AND the response has a status of 200|
|Then|the data is constrained by the date supplied|


<a id="assertion-a.zaa.0028"></a>
## A.ZAA.0028: Validation the Oldest Date parameter - invalid format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#error-codes](https://consumerdatastandardsaustralia.github.io/standards/#error-codes)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;oldest-date&gt; is included as a query parameter</br>AND the &lt;oldest-date&gt; is not in a DateString valid format|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Field/invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0029"></a>
## A.ZAA.0029: Validate the Newest Date parameter - valid format

### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;newest-date&gt; is included as a query parameter</br>AND the &lt;newest-date&gt; is in a valid DateString format|
|When|a response is returned</br>AND the response has a status of 200|
|Then|the data is constrained by the date supplied|


<a id="assertion-a.zaa.0030"></a>
## A.ZAA.0030: Validation the Newest Date parameter - invalid format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#error-codes](https://consumerdatastandardsaustralia.github.io/standards/#error-codes)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;newest-date&gt; is included as a query parameter</br>AND the &lt;newest-date&gt; is not in a valid DateString format|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Field/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.zaa.0031"></a>
## A.ZAA.0031: Validation of the POST body - malformed body

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#error-codes](https://consumerdatastandardsaustralia.github.io/standards/#error-codes)
* [https://consumerdatastandardsaustralia.github.io/standards/#http-response-codes](https://consumerdatastandardsaustralia.github.io/standards/#http-response-codes)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request is a POST request</br>AND the request body is not in a valid JSON format, i.e. it is malformed|
|When|a response is returned|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Field/Invalid"</br></div><div class="predicate outer">)</div>|

