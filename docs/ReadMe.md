
<a id="introduction"></a>
# The CDR Test Documentation

File version: 1.0.1

This documentation has been  created by the DSB to assist participants in the development of compliant APIs

<a id="suites"></a>
# Test Suites

<a id="suite-suite.010"></a>
## SUITE.010: APIs - Energy Standing Data, Usage and DER

### Test Scenarios:

* [S.EAR.073: Get Service Points v1](#scenario-s.ear.073)
* [S.EAR.074: Get Service Points Negative v1](#scenario-s.ear.074)
* [S.EAR.075: Get Service Point Detail v1](#scenario-s.ear.075)
* [S.EAR.076: Get Service Point Detail Negative v1](#scenario-s.ear.076)
* [S.EAR.077: Get Usage For Service Point v1](#scenario-s.ear.077)
* [S.EAR.078: Get Usage For Service Point Negative v1](#scenario-s.ear.078)
* [S.EAR.079: Get Bulk Usage v1](#scenario-s.ear.079)
* [S.EAR.080: Get Bulk Usage Negative v1](#scenario-s.ear.080)
* [S.EAR.081: Get Usage For Specific Service Points v1](#scenario-s.ear.081)
* [S.EAR.082: Get Usage For Specific Service Points Negative v1](#scenario-s.ear.082)
* [S.EAR.083: Get DER for Service Point v1](#scenario-s.ear.083)
* [S.EAR.084: Get DER for Service Point Negative v1](#scenario-s.ear.084)
* [S.EAR.085: Get Bulk DER v1](#scenario-s.ear.085)
* [S.EAR.086: Get Bulk DER Negative v1](#scenario-s.ear.086)
* [S.EAR.087: Get DER For Specific Service Points v1](#scenario-s.ear.087)
* [S.EAR.088: Get DER For Specific Service Points Negative  v1](#scenario-s.ear.088)


<a id="suite-suite.011"></a>
## SUITE.011: APIs - Energy Standing Data, Usage and DER SR

### Test Scenarios:

* [S.EAS.089: Get Service Points SR v1](#scenario-s.eas.089)
* [S.EAS.090: Get Service Points Negative SR v1](#scenario-s.eas.090)
* [S.EAS.091: Get Service Point Detail SR v1](#scenario-s.eas.091)
* [S.EAS.092: Get Service Point Detail Negative SR v1](#scenario-s.eas.092)
* [S.EAS.093: Get Usage For Service Point SR v1](#scenario-s.eas.093)
* [S.EAS.094: Get Usage For Service Point Negative SR v1](#scenario-s.eas.094)
* [S.EAS.095: Get Usage For Specific Service Points SR v1](#scenario-s.eas.095)
* [S.EAS.096: Get Usage For Specific Service Points Negative SR v1](#scenario-s.eas.096)
* [S.EAS.097: Get DER for Service Point SR v1](#scenario-s.eas.097)
* [S.EAS.098: Get DER for Service Point Negative SR v1](#scenario-s.eas.098)
* [S.EAS.099: Get DER For Specific Service Points SR v1](#scenario-s.eas.099)
* [S.EAS.100: Get DER For Specific Service Points Negative SR v1](#scenario-s.eas.100)


<a id="scenarios"></a>
# Test Scenarios

<a id="scenario-s.baa.005"></a>
## S.BAA.005: Get Accounts

Test the Get Accounts endpoint

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Setup|Authentication|


<a id="scenario-s.ear.073"></a>
## S.EAR.073: Get Service Points v1

As a DH I provide an API which exposes information about the service points

### Purpose:

Test cases which will return a 2xx status code

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)


### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Setup|Authorise session</br>AND x-v is set in header|
|2|Execute Test|[T.EAR.001: ADR call to DH: Get Service Points - no pagination](#testcase-t.ear.001)|
|3|Execute Test|[T.EAR.002: ADR call to DH: Get Service Points - with pagination](#testcase-t.ear.002)|


<a id="scenario-s.ear.074"></a>
## S.EAR.074: Get Service Points Negative v1

As a DH I return appropriate codes and messages for failed or invalid requests

### Purpose:

Test cases which will return codes other than 2xx

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)


### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Setup|Authorise session|
|2|Execute Test|[T.EAR.003: ADR call to DH: Get Service Points - unsupported version without x-v-min included](#testcase-t.ear.003)|
|3|Execute Test|[T.EAR.004: ADR call to DH: Get Service Points - invalid page parameters](#testcase-t.ear.004)|
|4|Execute Test|[T.EAR.005: ADR call to DH: Get Service Points - invalid FAPI Interaction ID format ](#testcase-t.ear.005)|
|5|Execute Test|[T.EAR.073: ADR call to DH: Get Service Points - missing FAPI Auth Date](#testcase-t.ear.073)|
|6|Execute Test|[T.EAR.074: ADR call to DH: Get Service Points - invalid FAPI Auth Date](#testcase-t.ear.074)|
|7|Execute Test|[T.EAR.075: ADR call to DH: Get Service Points - missing FAPI Customer IP Address](#testcase-t.ear.075)|
|8|Execute Test|[T.EAR.076: ADR call to DH: Get Service Points - invalid FAPI Customer IP Address](#testcase-t.ear.076)|
|9|Execute Test|[T.EAR.077: ADR call to DH: Get Service Points - missing CDS Client Header](#testcase-t.ear.077)|
|10|Execute Test|[T.EAR.078: ADR call to DH: Get Service Points - invalid CDS Client Header](#testcase-t.ear.078)|
|11|Execute Test|[T.EAR.109: ADR call to DH: Get Service Points - invalid version value](#testcase-t.ear.109)|
|12|Execute Test|[T.EAR.110: ADR call to DH: Get Service Points - invalid version format](#testcase-t.ear.110)|
|13|Execute Test|[T.EAR.125: ADR call to DH: Get Service Points - unsupported version when x-v-min is included](#testcase-t.ear.125)|


<a id="scenario-s.ear.075"></a>
## S.EAR.075: Get Service Point Detail v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.006: ADR call to DH: Get Service Point Detail ](#testcase-t.ear.006)|


<a id="scenario-s.ear.076"></a>
## S.EAR.076: Get Service Point Detail Negative v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.007: ADR call to DH: Get Service Point Detail - unsupported version without x-v-min included](#testcase-t.ear.007)|
|2|Execute Test|[T.EAR.008: ADR call to DH: Get Service Point Detail - invalid format of Service Point ID](#testcase-t.ear.008)|
|3|Execute Test|[T.EAR.009: ADR call to DH: Get Service Point Detail - unavailable Service Point ID](#testcase-t.ear.009)|
|4|Execute Test|[T.EAR.010: ADR call to DH: Get Service Point Detail - invalid FAPI Interaction ID format ](#testcase-t.ear.010)|
|5|Execute Test|[T.EAR.079: ADR call to DH: Get Service Point - missing FAPI Auth Date](#testcase-t.ear.079)|
|6|Execute Test|[T.EAR.080: ADR call to DH: Get Service Point - invalid FAPI Auth Date](#testcase-t.ear.080)|
|7|Execute Test|[T.EAR.081: ADR call to DH: Get Service Point - missing FAPI Customer IP Address](#testcase-t.ear.081)|
|8|Execute Test|[T.EAR.082: ADR call to DH: Get Service Point - invalid FAPI Customer IP Address](#testcase-t.ear.082)|
|9|Execute Test|[T.EAR.083: ADR call to DH: Get Service Point - missing CDS Client Header](#testcase-t.ear.083)|
|10|Execute Test|[T.EAR.084: ADR call to DH: Get Service Point - invalid CDS Client Header](#testcase-t.ear.084)|
|11|Execute Test|[T.EAR.111: ADR call to DH: Get Service Point - invalid version value](#testcase-t.ear.111)|
|12|Execute Test|[T.EAR.112: ADR call to DH: Get Service Point - invalid version format](#testcase-t.ear.112)|
|13|Execute Test|[T.EAR.126: ADR call to DH: Get Service Point - unsupported version when x-v-min is included](#testcase-t.ear.126)|


<a id="scenario-s.ear.077"></a>
## S.EAR.077: Get Usage For Service Point v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.011: ADR call to DH: Get Usage for Service Point Detail - no pagination](#testcase-t.ear.011)|
|2|Execute Test|[T.EAR.012: ADR call to DH: Get Usage for Service Points - with pagination](#testcase-t.ear.012)|
|3|Execute Test|[T.EAR.015: ADR call to DH: Get Usage for Service Points - oldest date](#testcase-t.ear.015)|
|4|Execute Test|[T.EAR.016: ADR call to DH: Get Usage for Service Points - newest date](#testcase-t.ear.016)|


<a id="scenario-s.ear.078"></a>
## S.EAR.078: Get Usage For Service Point Negative v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.013: ADR call to DH: Get Usage for Service Points - unsupported version without x-v-min included](#testcase-t.ear.013)|
|2|Execute Test|[T.EAR.014: ADR call to DH: Get Usage for Service Points - invalid page parameters](#testcase-t.ear.014)|
|3|Execute Test|[T.EAR.017: ADR call to DH: Get Usage for Service Points - invalid Service Point ID](#testcase-t.ear.017)|
|4|Execute Test|[T.EAR.018: ADR call to DH: Get Usage for Service Points - unavailable Service Point ID](#testcase-t.ear.018)|
|5|Execute Test|[T.EAR.019: ADR call to DH: Get Usage for Service Points - invalid format oldest date ](#testcase-t.ear.019)|
|6|Execute Test|[T.EAR.020: ADR call to DH: Get Usage for Service Points - invalid format newest date](#testcase-t.ear.020)|
|7|Execute Test|[T.EAR.021: ADR call to DH: Get Usage For Service Point - invalid FAPI Interaction ID format](#testcase-t.ear.021)|
|8|Execute Test|[T.EAR.085: ADR call to DH: Get Usage For Service Point - missing FAPI Auth Date](#testcase-t.ear.085)|
|9|Execute Test|[T.EAR.086: ADR call to DH: Get Usage For Service Point - invalid FAPI Auth Date](#testcase-t.ear.086)|
|10|Execute Test|[T.EAR.087: ADR call to DH: Get Usage For Service Point - missing FAPI Customer IP Address](#testcase-t.ear.087)|
|11|Execute Test|[T.EAR.088: ADR call to DH: Get Usage For Service Point - invalid FAPI Customer IP Address](#testcase-t.ear.088)|
|12|Execute Test|[T.EAR.089: ADR call to DH: Get Usage For Service Point - missing CDS Client Header](#testcase-t.ear.089)|
|13|Execute Test|[T.EAR.090: ADR call to DH: Get Usage For Service Point - invalid CDS Client Header](#testcase-t.ear.090)|
|14|Execute Test|[T.EAR.113: ADR call to DH: Get Usage For Service Point - invalid version value](#testcase-t.ear.113)|
|15|Execute Test|[T.EAR.114: ADR call to DH: Get Usage For Service Point - invalid version format](#testcase-t.ear.114)|
|16|Execute Test|[T.EAR.127: ADR call to DH: Get Usage For Service Point - unsupported version when x-v-min is included](#testcase-t.ear.127)|


<a id="scenario-s.ear.079"></a>
## S.EAR.079: Get Bulk Usage v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.045: ADR call to DH: Get Bulk Usage ](#testcase-t.ear.045)|
|2|Execute Test|[T.EAR.046: ADR call to DH: Get Bulk Usage - with pagination](#testcase-t.ear.046)|
|3|Execute Test|[T.EAR.049: ADR call to DH: Get Bulk Usage - oldest date](#testcase-t.ear.049)|
|4|Execute Test|[T.EAR.050: ADR call to DH: Get Bulk Usage - newest date](#testcase-t.ear.050)|


<a id="scenario-s.ear.080"></a>
## S.EAR.080: Get Bulk Usage Negative v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.047: ADR call to DH: Get Bulk Usage - unsupported version without x-v-min included](#testcase-t.ear.047)|
|2|Execute Test|[T.EAR.048: ADR call to DH: Get Bulk Usage - invalid page parameters](#testcase-t.ear.048)|
|3|Execute Test|[T.EAR.051: ADR call to DH: Get Bulk Usage - invalid format oldest date ](#testcase-t.ear.051)|
|4|Execute Test|[T.EAR.052: ADR call to DH: Get Bulk Usage - invalid format newest date](#testcase-t.ear.052)|
|5|Execute Test|[T.EAR.053: ADR call to DH: Get Bulk Usage - invalid FAPI Interaction ID format](#testcase-t.ear.053)|
|6|Execute Test|[T.EAR.054: ADR call to DH: Get Bulk Usage - missing FAPI Auth Date](#testcase-t.ear.054)|
|7|Execute Test|[T.EAR.055: ADR call to DH: Get Bulk Usage - invalid FAPI Auth Date](#testcase-t.ear.055)|
|8|Execute Test|[T.EAR.056: ADR call to DH: Get Bulk Usage - missing FAPI Customer IP Address](#testcase-t.ear.056)|
|9|Execute Test|[T.EAR.057: ADR call to DH: Get Bulk Usage - invalid FAPI Customer IP Address](#testcase-t.ear.057)|
|10|Execute Test|[T.EAR.058: ADR call to DH: Get Bulk Usage - missing CDS Client Header](#testcase-t.ear.058)|
|11|Execute Test|[T.EAR.059: ADR call to DH: Get Bulk Usage - invalid CDS Client Header](#testcase-t.ear.059)|
|12|Execute Test|[T.EAR.115: ADR call to DH: Get Bulk Usage - invalid version value](#testcase-t.ear.115)|
|13|Execute Test|[T.EAR.116: ADR call to DH: Get Bulk Usage - invalid version format](#testcase-t.ear.116)|
|14|Execute Test|[T.EAR.128: ADR call to DH: Get Bulk Usage - unsupported version when x-v-min is included](#testcase-t.ear.128)|


<a id="scenario-s.ear.081"></a>
## S.EAR.081: Get Usage For Specific Service Points v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.022: ADR call to DH: Get Usage for Specific Service Points - no pagination](#testcase-t.ear.022)|
|2|Execute Test|[T.EAR.023: ADR call to DH: Get Usage for Specific Service Points - with pagination](#testcase-t.ear.023)|
|3|Execute Test|[T.EAR.026: ADR call to DH: Get Usage for Specific Service Points - oldest date](#testcase-t.ear.026)|
|4|Execute Test|[T.EAR.027: ADR call to DH: Get Usage for Specific Service Points - newest date](#testcase-t.ear.027)|


<a id="scenario-s.ear.082"></a>
## S.EAR.082: Get Usage For Specific Service Points Negative v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.024: ADR call to DH: Get Usage for Specific Service Points - unsupported version without x-v-min included](#testcase-t.ear.024)|
|2|Execute Test|[T.EAR.025: ADR call to DH: Get Usage for Specific Service Points - invalid page parameters](#testcase-t.ear.025)|
|3|Execute Test|[T.EAR.028: ADR call to DH: Get Usage for Specific Service Points - invalid format oldest date ](#testcase-t.ear.028)|
|4|Execute Test|[T.EAR.029: ADR call to DH: Get Usage for Specific Service Points - invalid format newest date](#testcase-t.ear.029)|
|5|Execute Test|[T.EAR.030: ADR call to DH: Get Usage For Specific Service Points - invalid FAPI Interaction ID format](#testcase-t.ear.030)|
|6|Execute Test|[T.EAR.031: ADR call to DH: Get Usage for Specific Service Points - invalid body values](#testcase-t.ear.031)|
|7|Execute Test|[T.EAR.032: ADR call to DH: Get Usage for Specific Service Points - invalid body format](#testcase-t.ear.032)|
|8|Execute Test|[T.EAR.091: ADR call to DH: Get Usage for Specific Service Points - missing FAPI Auth Date](#testcase-t.ear.091)|
|9|Execute Test|[T.EAR.092: ADR call to DH: Get Usage for Specific Service Points - invalid FAPI Auth Date](#testcase-t.ear.092)|
|10|Execute Test|[T.EAR.093: ADR call to DH: Get Usage for Specific Service Points - missing FAPI Customer IP Address](#testcase-t.ear.093)|
|11|Execute Test|[T.EAR.094: ADR call to DH: Get Usage for Specific Service Points - invalid FAPI Customer IP Address](#testcase-t.ear.094)|
|12|Execute Test|[T.EAR.095: ADR call to DH: Get Usage for Specific Service Points - missing CDS Client Header](#testcase-t.ear.095)|
|13|Execute Test|[T.EAR.096: ADR call to DH: Get Usage for Specific Service Points - invalid CDS Client Header](#testcase-t.ear.096)|
|14|Execute Test|[T.EAR.117: ADR call to DH: Get Usage for Specific Service Points - invalid version value](#testcase-t.ear.117)|
|15|Execute Test|[T.EAR.118: ADR call to DH: Get Usage for Specific Service Points - invalid version format](#testcase-t.ear.118)|
|16|Execute Test|[T.EAR.129: ADR call to DH: Get Usage for Specific Service Points - unsupported version when x-v-min is included](#testcase-t.ear.129)|


<a id="scenario-s.ear.083"></a>
## S.EAR.083: Get DER for Service Point v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.033: ADR call to DH: Get DER for Service Point ](#testcase-t.ear.033)|


<a id="scenario-s.ear.084"></a>
## S.EAR.084: Get DER for Service Point Negative v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.034: ADR call to DH: Get Service Point Detail - unsupported version without x-v-min included](#testcase-t.ear.034)|
|2|Execute Test|[T.EAR.035: ADR call to DH: Get Service Point Detail - invalid format of Service Point ID](#testcase-t.ear.035)|
|3|Execute Test|[T.EAR.036: ADR call to DH: Get Service Point Detail - unavailable Service Point ID](#testcase-t.ear.036)|
|4|Execute Test|[T.EAR.037: ADR call to DH: Get DER for Service Point - invalid FAPI Interaction ID format](#testcase-t.ear.037)|
|5|Execute Test|[T.EAR.097: ADR call to DH: Get DER for Service Point - missing FAPI Auth Date](#testcase-t.ear.097)|
|6|Execute Test|[T.EAR.098: ADR call to DH: Get DER for Service Point - invalid FAPI Auth Date](#testcase-t.ear.098)|
|7|Execute Test|[T.EAR.099: ADR call to DH: Get DER for Service Point - missing FAPI Customer IP Address](#testcase-t.ear.099)|
|8|Execute Test|[T.EAR.100: ADR call to DH: Get DER for Service Point - invalid FAPI Customer IP Address](#testcase-t.ear.100)|
|9|Execute Test|[T.EAR.101: ADR call to DH: Get DER for Service Point - missing CDS Client Header](#testcase-t.ear.101)|
|10|Execute Test|[T.EAR.102: ADR call to DH: Get DER for Service Point - invalid CDS Client Header](#testcase-t.ear.102)|
|11|Execute Test|[T.EAR.119: ADR call to DH: Get DER for Service Point - invalid version value](#testcase-t.ear.119)|
|12|Execute Test|[T.EAR.120: ADR call to DH: Get DER for Service Point - invalid version format](#testcase-t.ear.120)|
|13|Execute Test|[T.EAR.130: ADR call to DH: Get DER for Service Point - unsupported version when x-v-min is included](#testcase-t.ear.130)|


<a id="scenario-s.ear.085"></a>
## S.EAR.085: Get Bulk DER v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.060: ADR call to DH: Get Bulk DER ](#testcase-t.ear.060)|
|2|Execute Test|[T.EAR.061: ADR call to DH: Get Bulk DER - with pagination](#testcase-t.ear.061)|


<a id="scenario-s.ear.086"></a>
## S.EAR.086: Get Bulk DER Negative v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.062: ADR call to DH: Get Bulk DER - unsupported version without x-v-min included](#testcase-t.ear.062)|
|2|Execute Test|[T.EAR.063: ADR call to DH: Get Bulk DER - invalid page parameters](#testcase-t.ear.063)|
|3|Execute Test|[T.EAR.064: ADR call to DH: Get Bulk DER - missing FAPI Auth Date](#testcase-t.ear.064)|
|4|Execute Test|[T.EAR.065: ADR call to DH: DHGet Bulk DER - invalid FAPI Auth Date](#testcase-t.ear.065)|
|5|Execute Test|[T.EAR.066: ADR call to DH: Get Bulk DER - missing FAPI Customer IP Address](#testcase-t.ear.066)|
|6|Execute Test|[T.EAR.067: ADR call to DH: DH: Get Bulk DER - invalid FAPI Customer IP Address](#testcase-t.ear.067)|
|7|Execute Test|[T.EAR.068: ADR call to DH: Get Bulk DER - missing CDS Client Header](#testcase-t.ear.068)|
|8|Execute Test|[T.EAR.069: ADR call to DH: Get Bulk DER - invalid CDS Client Header](#testcase-t.ear.069)|
|9|Execute Test|[T.EAR.070: ADR call to DH: Get Bulk DER - invalid FAPI Auth Date](#testcase-t.ear.070)|
|10|Execute Test|[T.EAR.071: ADR call to DH: Get Bulk DER - missing FAPI Customer IP Address](#testcase-t.ear.071)|
|11|Execute Test|[T.EAR.072: ADR call to DH: Get Bulk DER - invalid FAPI Customer IP Address](#testcase-t.ear.072)|
|12|Execute Test|[T.EAR.121: ADR call to DH: Get Bulk DER - invalid version value](#testcase-t.ear.121)|
|13|Execute Test|[T.EAR.122: ADR call to DH: Get Bulk DER - invalid version format](#testcase-t.ear.122)|
|14|Execute Test|[T.EAR.131: ADR call to DH: Get Bulk DER - unsupported version when x-v-min is included](#testcase-t.ear.131)|


<a id="scenario-s.ear.087"></a>
## S.EAR.087: Get DER For Specific Service Points v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.038: ADR call to DH: Get DER for Specific Service Points - no pagination](#testcase-t.ear.038)|
|2|Execute Test|[T.EAR.039: ADR call to DH: Get DER for Specific Service Points - with pagination](#testcase-t.ear.039)|


<a id="scenario-s.ear.088"></a>
## S.EAR.088: Get DER For Specific Service Points Negative  v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAR.040: ADR call to DH: Get DER for Specific Service Points - unsupported version without x-v-min included](#testcase-t.ear.040)|
|2|Execute Test|[T.EAR.041: ADR call to DH: Get DER for Specific Service Points - invalid page parameters](#testcase-t.ear.041)|
|3|Execute Test|[T.EAR.042: ADR call to DH: Get DER for Specific Service Points - invalid body values](#testcase-t.ear.042)|
|4|Execute Test|[T.EAR.043: ADR call to DH: Get DER for Specific Service Points - invalid body format](#testcase-t.ear.043)|
|5|Execute Test|[T.EAR.044: ADR call to DH: Get DER For Specific Service Points - invalid FAPI Interaction ID format](#testcase-t.ear.044)|
|6|Execute Test|[T.EAR.103: ADR call to DH: Get DER For Specific Service Points - missing FAPI Auth Date](#testcase-t.ear.103)|
|7|Execute Test|[T.EAR.104: ADR call to DH: Get DER For Specific Service Points - invalid FAPI Auth Date](#testcase-t.ear.104)|
|8|Execute Test|[T.EAR.105: ADR call to DH: Get DER For Specific Service Points - missing FAPI Customer IP Address](#testcase-t.ear.105)|
|9|Execute Test|[T.EAR.106: ADR call to DH: Get DER For Specific Service Points - invalid FAPI Customer IP Address](#testcase-t.ear.106)|
|10|Execute Test|[T.EAR.107: ADR call to DH: Get DER For Specific Service Points - missing CDS Client Header](#testcase-t.ear.107)|
|11|Execute Test|[T.EAR.108: ADR call to DH: Get DER For Specific Service Points - invalid CDS Client Header](#testcase-t.ear.108)|
|12|Execute Test|[T.EAR.123: ADR call to DH: Get DER For Specific Service Points - invalid version value](#testcase-t.ear.123)|
|13|Execute Test|[T.EAR.124: ADR call to DH: Get DER For Specific Service Points - invalid version format](#testcase-t.ear.124)|
|14|Execute Test|[T.EAR.132: ADR call to DH: Get DER For Specific Service Points - unsupported version when x-v-min is included](#testcase-t.ear.132)|


<a id="scenario-s.eas.089"></a>
## S.EAS.089: Get Service Points SR v1

Test the Happy Path for Get Service Points

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr)


### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.001: DH call to SDH: Get Service Points - no pagination](#testcase-t.eas.001)|
|2|Execute Test|[T.EAS.002: DH call to SDH: Get Service Points - with pagination](#testcase-t.eas.002)|


<a id="scenario-s.eas.090"></a>
## S.EAS.090: Get Service Points Negative SR v1

Test errors and edge cases for Get Service Points 

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points-sr)


### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.003: DH call to SDH: Get Service Points - unsupported version without x-min-v included](#testcase-t.eas.003)|
|2|Execute Test|[T.EAS.004: DH call to SDH: Get Service Points - invalid page parameters](#testcase-t.eas.004)|
|3|Execute Test|[T.EAS.039: DH call to SDH: Get Service Points - invalid FAPI Interaction ID format ](#testcase-t.eas.039)|
|4|Execute Test|[T.EAS.045: DH call to SDH: Get Service Points - no arragement id ](#testcase-t.eas.045)|
|5|Execute Test|[T.EAS.046: DH call to SDH: Get Service Points - arrangement ID invalid](#testcase-t.eas.046)|
|6|Execute Test|[T.EAS.057: DH call to SDH: Get Service Points - invalid version value](#testcase-t.eas.057)|
|7|Execute Test|[T.EAS.058: DH call to SDH: Get Service Points - invalid version format](#testcase-t.eas.058)|
|8|Execute Test|[T.EAS.069: DH call to SDH: Get Service Points - unsupported version when x-min-v is included](#testcase-t.eas.069)|
|9|Execute Test|[T.EAS.075: DH call to SDH: Get Service Points - missing servicePointId in body](#testcase-t.eas.075)|
|10|Execute Test|[T.EAS.076: DH call to SDH: Get Service Points - invalid servicePointId in body](#testcase-t.eas.076)|
|11|Execute Test|[T.EAS.077: DH call to SDH: Get Service Points - unavailable servicePointId in body](#testcase-t.eas.077)|


<a id="scenario-s.eas.091"></a>
## S.EAS.091: Get Service Point Detail SR v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.005: DH call to SDH: Get Service Point Detail ](#testcase-t.eas.005)|


<a id="scenario-s.eas.092"></a>
## S.EAS.092: Get Service Point Detail Negative SR v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.006: DH call to SDH: Get Service Point Detail - unsupported version without x-min-v included](#testcase-t.eas.006)|
|2|Execute Test|[T.EAS.007: DH call to SDH: Get Service Point Detail - invalid format of Service Point ID](#testcase-t.eas.007)|
|3|Execute Test|[T.EAS.008: DH call to SDH: Get Service Point Detail - unavailable Service Point ID](#testcase-t.eas.008)|
|4|Execute Test|[T.EAS.040: DH call to SDH: Get Service Point Detail - invalid FAPI Interaction ID format ](#testcase-t.eas.040)|
|5|Execute Test|[T.EAS.047: DH call to SDH: Get Service Point Detail - no arragement id ](#testcase-t.eas.047)|
|6|Execute Test|[T.EAS.048: DH call to SDH: Get Service Point Detail - arrangement ID invalid](#testcase-t.eas.048)|
|7|Execute Test|[T.EAS.059: DH call to SDH: Get Service Point Detail - invalid version value](#testcase-t.eas.059)|
|8|Execute Test|[T.EAS.060: DH call to SDH: Get Service Point Detail - invalid version format](#testcase-t.eas.060)|
|9|Execute Test|[T.EAS.070: DH call to SDH: Get Service Point Detail - unsupported version when x-min-v is included](#testcase-t.eas.070)|


<a id="scenario-s.eas.093"></a>
## S.EAS.093: Get Usage For Service Point SR v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.009: DH call to SDH: Get Usage for Service Point Detail - no pagination](#testcase-t.eas.009)|
|2|Execute Test|[T.EAS.010: DH call to SDH: Get Usage for Service Points - with pagination](#testcase-t.eas.010)|
|3|Execute Test|[T.EAS.014: DH call to SDH: Get Usage for Service Points - newest date](#testcase-t.eas.014)|


<a id="scenario-s.eas.094"></a>
## S.EAS.094: Get Usage For Service Point Negative SR v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.011: DH call to SDH: Get Usage for Service Points - unsupported version without x-min-v included](#testcase-t.eas.011)|
|2|Execute Test|[T.EAS.012: DH call to SDH: Get Usage for Service Points - invalid page parameters](#testcase-t.eas.012)|
|3|Execute Test|[T.EAS.013: DH call to SDH: Get Usage for Service Points - oldest date](#testcase-t.eas.013)|
|4|Execute Test|[T.EAS.015: DH call to SDH: Get Usage for Service Points - invalid Service Point ID](#testcase-t.eas.015)|
|5|Execute Test|[T.EAS.016: DH call to SDH: Get Usage for Service Points - unavailable Service Point ID](#testcase-t.eas.016)|
|6|Execute Test|[T.EAS.017: DH call to SDH: Get Usage for Service Points - invalid format oldest date ](#testcase-t.eas.017)|
|7|Execute Test|[T.EAS.018: DH call to SDH: Get Usage for Service Points - invalid format newest date](#testcase-t.eas.018)|
|8|Execute Test|[T.EAS.041: DH call to SDH: Get Usage For Service Point - invalid FAPI Interaction ID format](#testcase-t.eas.041)|
|9|Execute Test|[T.EAS.049: DH call to Get Usage For Service Point - no arragement id ](#testcase-t.eas.049)|
|10|Execute Test|[T.EAS.050: DH call to SDH: Get Usage For Service Point - arrangement ID invalid](#testcase-t.eas.050)|
|11|Execute Test|[T.EAS.061: DH call to SDH: Get Usage For Service Point - invalid version value](#testcase-t.eas.061)|
|12|Execute Test|[T.EAS.062: DH call to SDH: Get Usage For Service Point - invalid version format](#testcase-t.eas.062)|
|13|Execute Test|[T.EAS.071: DH call to SDH: Get Usage for Service Points - unsupported version when x-min-v is included](#testcase-t.eas.071)|


<a id="scenario-s.eas.095"></a>
## S.EAS.095: Get Usage For Specific Service Points SR v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.019](#testcase-t.eas.019)|
|2|Execute Test|[T.EAS.020: DH call to SDH: Get Usage for Specific Service Points - with pagination](#testcase-t.eas.020)|
|3|Execute Test|[T.EAS.023: DH call to SDH: Get Usage for Specific Service Points - oldest date](#testcase-t.eas.023)|
|4|Execute Test|[T.EAS.024: DH call to SDH: Get Usage for Specific Service Points - newest date](#testcase-t.eas.024)|


<a id="scenario-s.eas.096"></a>
## S.EAS.096: Get Usage For Specific Service Points Negative SR v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.021: DH call to SDH: Get Usage for Specific Service Points - unsupported version without x-min-v included](#testcase-t.eas.021)|
|2|Execute Test|[T.EAS.022: DH call to SDH: Get Usage for Specific Service Points - invalid page parameters](#testcase-t.eas.022)|
|3|Execute Test|[T.EAS.025: DH call to SDH: Get Usage for Specific Service Points - invalid format oldest date ](#testcase-t.eas.025)|
|4|Execute Test|[T.EAS.026: DH call to SDH: Get Usage for Specific Service Points - invalid format newest date](#testcase-t.eas.026)|
|5|Execute Test|[T.EAS.037: DH call to SDH: Get Usage for Specific Service Points - invalid body values](#testcase-t.eas.037)|
|6|Execute Test|[T.EAS.038: DH call to SDH: Get Usage for Specific Service Points - invalid body format](#testcase-t.eas.038)|
|7|Execute Test|[T.EAS.042: DH call to SDH: Get Usage For Specific Service Points - invalid FAPI Interaction ID format](#testcase-t.eas.042)|
|8|Execute Test|[T.EAS.051: DH call to SDH: Get Usage For Specific Service Points - no arragement id ](#testcase-t.eas.051)|
|9|Execute Test|[T.EAS.052: DH call to SDH: Get Usage For Specific Service Points - arrangement ID invalid](#testcase-t.eas.052)|
|10|Execute Test|[T.EAS.063: DH call to SDH: Get Usage For Specific Service Points - invalid version value](#testcase-t.eas.063)|
|11|Execute Test|[T.EAS.064: DH call to SDH: Get Usage For Specific Service Points - invalid version format](#testcase-t.eas.064)|
|12|Execute Test|[T.EAS.072: DH call to SDH: Get Usage for Specific Service Points - unsupported version when x-min-v  is included](#testcase-t.eas.072)|


<a id="scenario-s.eas.097"></a>
## S.EAS.097: Get DER for Service Point SR v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.027: DH call to SDH: Get DER for Service Point ](#testcase-t.eas.027)|


<a id="scenario-s.eas.098"></a>
## S.EAS.098: Get DER for Service Point Negative SR v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.028: DH call to SDH: Get Service Point Detail - unsupported version without x-min-v included](#testcase-t.eas.028)|
|2|Execute Test|[T.EAS.029: DH call to SDH: Get Service Point Detail - invalid format of Service Point ID](#testcase-t.eas.029)|
|3|Execute Test|[T.EAS.030: DH call to SDH: Get Service Point Detail - unavailable Service Point ID](#testcase-t.eas.030)|
|4|Execute Test|[T.EAS.043: DH call to SDH: Get DER for Service Point - invalid FAPI Interaction ID format](#testcase-t.eas.043)|
|5|Execute Test|[T.EAS.053: DH call to SDH: Get DER for Service Point - no arragement id ](#testcase-t.eas.053)|
|6|Execute Test|[T.EAS.054: DH call to SDH: Get DER for Service Point - arrangement ID invalid](#testcase-t.eas.054)|
|7|Execute Test|[T.EAS.065: DH call to SDH: Get DER for Service Point - invalid version value](#testcase-t.eas.065)|
|8|Execute Test|[T.EAS.066: DH call to SDH: Get DER for Service Point - invalid version format](#testcase-t.eas.066)|
|9|Execute Test|[T.EAS.073: DH call to SDH: Get Service Point Detail - unsupported version when x-min-v is included](#testcase-t.eas.073)|


<a id="scenario-s.eas.099"></a>
## S.EAS.099: Get DER For Specific Service Points SR v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.031: DH call to SDH: Get DER for Specific Service Points - no pagination](#testcase-t.eas.031)|
|2|Execute Test|[T.EAS.032: DH call to SDH: Get DER for Specific Service Points - with pagination](#testcase-t.eas.032)|


<a id="scenario-s.eas.100"></a>
## S.EAS.100: Get DER For Specific Service Points Negative SR v1

### Testing Sequence:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Execute Test|[T.EAS.033: DH call to SDH: Get DER for Specific Service Points - unsupported version without x-min-v included](#testcase-t.eas.033)|
|2|Execute Test|[T.EAS.034: DH call to SDH: Get DER for Specific Service Points - invalid page parameters](#testcase-t.eas.034)|
|3|Execute Test|[T.EAS.035: DH call to SDH: Get DER for Specific Service Points - invalid body values](#testcase-t.eas.035)|
|4|Execute Test|[T.EAS.036: DH call to SDH: Get DER for Specific Service Points - invalid body format](#testcase-t.eas.036)|
|5|Execute Test|[T.EAS.044: DH call to SDH: Get DER For Specific Service Points - invalid FAPI Interaction ID format](#testcase-t.eas.044)|
|6|Execute Test|[T.EAS.055: DH call to Get DER For Specific Service Points - no arragement id ](#testcase-t.eas.055)|
|7|Execute Test|[T.EAS.056: DH call to SDH: Get DER For Specific Service Points - arrangement ID invalid](#testcase-t.eas.056)|
|8|Execute Test|[T.EAS.067: DH call to SDH: Get DER For Specific Service Points - invalid version value](#testcase-t.eas.067)|
|9|Execute Test|[T.EAS.068: DH call to SDH: Get DER For Specific Service Points - invalid version format](#testcase-t.eas.068)|
|10|Execute Test|[T.EAS.074: DH call to SDH: Get DER for Specific Service Points - unsupported version when x-min-v is included](#testcase-t.eas.074)|


<a id="testcases"></a>
# Test Cases

<a id="testcase-t.ear.001"></a>
## T.EAR.001: ADR call to DH: Get Service Points - no pagination

Negative test case

Obtain a list of service points owned by the consumer that has authorised the current session

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints|


### End State Assertions:

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.001: Validate FAPI Auth date - valid format](#assertion-a.cfa.001)
* [A.CFC.001: Validate FAPI Customer IP Address - is present](#assertion-a.cfc.001)
* [A.CCH.001: Validate the client headers - valid format](#assertion-a.cch.001)
* [A.EAR.004: Validate schema - EnergyServicePointListReponse](#assertion-a.ear.004)


<a id="testcase-t.ear.002"></a>
## T.EAR.002: ADR call to DH: Get Service Points - with pagination

Negative test case

Obtain a paginated list of service points owned by the consumer that has authorised the current session

### Purpose:

Test API with pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)


### Execution Pre-conditions:

*  &lt;page-size&gt; and&lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints|


### End State Assertions:

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.001: Validate FAPI Auth date - valid format](#assertion-a.cfa.001)
* [A.CFC.001: Validate FAPI Customer IP Address - is present](#assertion-a.cfc.001)
* [A.CCH.001: Validate the client headers - valid format](#assertion-a.cch.001)
* [A.EAR.004: Validate schema - EnergyServicePointListReponse](#assertion-a.ear.004)


<a id="testcase-t.ear.003"></a>
## T.EAR.003: ADR call to DH: Get Service Points - unsupported version without x-v-min included

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

* [A.CVN.004: Validate version - unsupported version without <x-min-v>](#assertion-a.cvn.004)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.004"></a>
## T.EAR.004: ADR call to DH: Get Service Points - invalid page parameters

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

* [A.CPG.002: Validate pagination - Invalid page size value](#assertion-a.cpg.002)
* [A.CPG.003: Validate pagination - Non-numeric <page>](#assertion-a.cpg.003)
* [A.CPG.004: Validate pagination - Max record limit exceeded](#assertion-a.cpg.004)
* [A.CPG.005: Validate pagination - Non-numeric <page-size>](#assertion-a.cpg.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.005"></a>
## T.EAR.005: ADR call to DH: Get Service Points - invalid FAPI Interaction ID format 

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

* [A.CFI.003: Validate FAPI Interation ID - invalid format](#assertion-a.cfi.003)


<a id="testcase-t.ear.006"></a>
## T.EAR.006: ADR call to DH: Get Service Point Detail 

Negative test case

Obtain the details of a service point owned by the consumer that has authorised the current session

### Purpose:

Test API with a vaild service point and version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail)


### Execution Pre-conditions:

* The {servicePointId} is set in the Path 
* AND value &lt;x-v&gt; is set in the request header to a version supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.001: Validate FAPI Auth date - valid format](#assertion-a.cfa.001)
* [A.CFC.001: Validate FAPI Customer IP Address - is present](#assertion-a.cfc.001)
* [A.CCH.001: Validate the client headers - valid format](#assertion-a.cch.001)
* [A.EAR.001: Validate service point and schema - EnergyServicePointDetailResponse](#assertion-a.ear.001)


<a id="testcase-t.ear.007"></a>
## T.EAR.007: ADR call to DH: Get Service Point Detail - unsupported version without x-v-min included

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

* [A.CVN.004: Validate version - unsupported version without <x-min-v>](#assertion-a.cvn.004)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.008"></a>
## T.EAR.008: ADR call to DH: Get Service Point Detail - invalid format of Service Point ID

Positive test case

Ensure the endpoint returns servicePointId compatible errors

### Purpose:

Test API with an invalid servicePointId

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail)


### Execution Pre-conditions:

* The &lt;{servicePointId}&gt; is set in the Path to a value that is 


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.EAR.002: Validate service point - invalid value](#assertion-a.ear.002)


<a id="testcase-t.ear.009"></a>
## T.EAR.009: ADR call to DH: Get Service Point Detail - unavailable Service Point ID

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.EAR.003: Validate service point - unavailable](#assertion-a.ear.003)


<a id="testcase-t.ear.010"></a>
## T.EAR.010: ADR call to DH: Get Service Point Detail - invalid FAPI Interaction ID format 

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

* [A.CFI.003: Validate FAPI Interation ID - invalid format](#assertion-a.cfi.003)


<a id="testcase-t.ear.011"></a>
## T.EAR.011: ADR call to DH: Get Usage for Service Point Detail - no pagination

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.001: Validate FAPI Auth date - valid format](#assertion-a.cfa.001)
* [A.CFC.001: Validate FAPI Customer IP Address - is present](#assertion-a.cfc.001)
* [A.CCH.001: Validate the client headers - valid format](#assertion-a.cch.001)
* [A.EAR.005: Validate service point and schema - EnergyUsageListResponse](#assertion-a.ear.005)


<a id="testcase-t.ear.012"></a>
## T.EAR.012: ADR call to DH: Get Usage for Service Points - with pagination

Negative test case

Obtain a paginated list of electricity usage data from a particular service point owned by the consumer that has authorised the current session

### Purpose:

Test API with pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

*  &lt;page-size&gt; and&lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.001: Validate FAPI Auth date - valid format](#assertion-a.cfa.001)
* [A.CFC.001: Validate FAPI Customer IP Address - is present](#assertion-a.cfc.001)
* [A.CCH.001: Validate the client headers - valid format](#assertion-a.cch.001)
* [A.EAR.005: Validate service point and schema - EnergyUsageListResponse](#assertion-a.ear.005)


<a id="testcase-t.ear.013"></a>
## T.EAR.013: ADR call to DH: Get Usage for Service Points - unsupported version without x-v-min included

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

* [A.CVN.004: Validate version - unsupported version without <x-min-v>](#assertion-a.cvn.004)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.014"></a>
## T.EAR.014: ADR call to DH: Get Usage for Service Points - invalid page parameters

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

* [A.CPG.002: Validate pagination - Invalid page size value](#assertion-a.cpg.002)
* [A.CPG.003: Validate pagination - Non-numeric <page>](#assertion-a.cpg.003)
* [A.CPG.004: Validate pagination - Max record limit exceeded](#assertion-a.cpg.004)
* [A.CPG.005: Validate pagination - Non-numeric <page-size>](#assertion-a.cpg.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.015"></a>
## T.EAR.015: ADR call to DH: Get Usage for Service Points - oldest date

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.001: Validate FAPI Auth date - valid format](#assertion-a.cfa.001)
* [A.CFC.001: Validate FAPI Customer IP Address - is present](#assertion-a.cfc.001)
* [A.CCH.001: Validate the client headers - valid format](#assertion-a.cch.001)
* [A.COD.001: Validate the Oldest Date parameter - valid format](#assertion-a.cod.001)
* [A.EAR.005: Validate service point and schema - EnergyUsageListResponse](#assertion-a.ear.005)


<a id="testcase-t.ear.016"></a>
## T.EAR.016: ADR call to DH: Get Usage for Service Points - newest date

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.001: Validate FAPI Auth date - valid format](#assertion-a.cfa.001)
* [A.CFC.001: Validate FAPI Customer IP Address - is present](#assertion-a.cfc.001)
* [A.CCH.001: Validate the client headers - valid format](#assertion-a.cch.001)
* [A.CND.001: Validate the Newest Date parameter - valid format](#assertion-a.cnd.001)
* [A.EAR.005: Validate service point and schema - EnergyUsageListResponse](#assertion-a.ear.005)


<a id="testcase-t.ear.017"></a>
## T.EAR.017: ADR call to DH: Get Usage for Service Points - invalid Service Point ID

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.EAR.002: Validate service point - invalid value](#assertion-a.ear.002)


<a id="testcase-t.ear.018"></a>
## T.EAR.018: ADR call to DH: Get Usage for Service Points - unavailable Service Point ID

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.EAR.003: Validate service point - unavailable](#assertion-a.ear.003)


<a id="testcase-t.ear.019"></a>
## T.EAR.019: ADR call to DH: Get Usage for Service Points - invalid format oldest date 

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

* [A.COD.002: Validation the Oldest Date parameter - invalid format](#assertion-a.cod.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.020"></a>
## T.EAR.020: ADR call to DH: Get Usage for Service Points - invalid format newest date

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

* [A.CND.002: Validation the Newest Date parameter - invalid format](#assertion-a.cnd.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.021"></a>
## T.EAR.021: ADR call to DH: Get Usage For Service Point - invalid FAPI Interaction ID format

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

* [A.CFI.003: Validate FAPI Interation ID - invalid format](#assertion-a.cfi.003)


<a id="testcase-t.ear.022"></a>
## T.EAR.022: ADR call to DH: Get Usage for Specific Service Points - no pagination

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.001: Validate FAPI Auth date - valid format](#assertion-a.cfa.001)
* [A.CFC.001: Validate FAPI Customer IP Address - is present](#assertion-a.cfc.001)
* [A.CCH.001: Validate the client headers - valid format](#assertion-a.cch.001)
* [A.EAR.006: Validate servicePointIdList body and schema - EnergyUsageListResponse](#assertion-a.ear.006)


<a id="testcase-t.ear.023"></a>
## T.EAR.023: ADR call to DH: Get Usage for Specific Service Points - with pagination

Negative test case

Obtain the electricity usage data for a specific set of service points owned by the consumer that has authorised the current session

### Purpose:

Test API with pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

*  &lt;page-size&gt; and&lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.001: Validate FAPI Auth date - valid format](#assertion-a.cfa.001)
* [A.CFC.001: Validate FAPI Customer IP Address - is present](#assertion-a.cfc.001)
* [A.CCH.001: Validate the client headers - valid format](#assertion-a.cch.001)
* [A.EAR.006: Validate servicePointIdList body and schema - EnergyUsageListResponse](#assertion-a.ear.006)


<a id="testcase-t.ear.024"></a>
## T.EAR.024: ADR call to DH: Get Usage for Specific Service Points - unsupported version without x-v-min included

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

* [A.CVN.004: Validate version - unsupported version without <x-min-v>](#assertion-a.cvn.004)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.025"></a>
## T.EAR.025: ADR call to DH: Get Usage for Specific Service Points - invalid page parameters

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

* [A.CPG.002: Validate pagination - Invalid page size value](#assertion-a.cpg.002)
* [A.CPG.003: Validate pagination - Non-numeric <page>](#assertion-a.cpg.003)
* [A.CPG.004: Validate pagination - Max record limit exceeded](#assertion-a.cpg.004)
* [A.CPG.005: Validate pagination - Non-numeric <page-size>](#assertion-a.cpg.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.026"></a>
## T.EAR.026: ADR call to DH: Get Usage for Specific Service Points - oldest date

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.001: Validate FAPI Auth date - valid format](#assertion-a.cfa.001)
* [A.CFC.001: Validate FAPI Customer IP Address - is present](#assertion-a.cfc.001)
* [A.CCH.001: Validate the client headers - valid format](#assertion-a.cch.001)
* [A.COD.001: Validate the Oldest Date parameter - valid format](#assertion-a.cod.001)
* [A.EAR.006: Validate servicePointIdList body and schema - EnergyUsageListResponse](#assertion-a.ear.006)


<a id="testcase-t.ear.027"></a>
## T.EAR.027: ADR call to DH: Get Usage for Specific Service Points - newest date

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.001: Validate FAPI Auth date - valid format](#assertion-a.cfa.001)
* [A.CFC.001: Validate FAPI Customer IP Address - is present](#assertion-a.cfc.001)
* [A.CCH.001: Validate the client headers - valid format](#assertion-a.cch.001)
* [A.CND.001: Validate the Newest Date parameter - valid format](#assertion-a.cnd.001)
* [A.EAR.006: Validate servicePointIdList body and schema - EnergyUsageListResponse](#assertion-a.ear.006)


<a id="testcase-t.ear.028"></a>
## T.EAR.028: ADR call to DH: Get Usage for Specific Service Points - invalid format oldest date 

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

* [A.COD.002: Validation the Oldest Date parameter - invalid format](#assertion-a.cod.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.029"></a>
## T.EAR.029: ADR call to DH: Get Usage for Specific Service Points - invalid format newest date

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

* [A.CND.002: Validation the Newest Date parameter - invalid format](#assertion-a.cnd.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.030"></a>
## T.EAR.030: ADR call to DH: Get Usage For Specific Service Points - invalid FAPI Interaction ID format

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

* [A.CFI.003: Validate FAPI Interation ID - invalid format](#assertion-a.cfi.003)


<a id="testcase-t.ear.031"></a>
## T.EAR.031: ADR call to DH: Get Usage for Specific Service Points - invalid body values

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.EAR.009: Validate servicePointIdList - invalid body values](#assertion-a.ear.009)


<a id="testcase-t.ear.032"></a>
## T.EAR.032: ADR call to DH: Get Usage for Specific Service Points - invalid body format

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CBD.001: Validation of the POST body - malformed body](#assertion-a.cbd.001)


<a id="testcase-t.ear.033"></a>
## T.EAR.033: ADR call to DH: Get DER for Service Point 

Negative test case

Obtain a list of DER data from a particular service point owned by the consumer that has authorised the current session

### Purpose:

Test API with a vaild service point and version

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)


### Execution Pre-conditions:

* The {servicePointId} is set in the Path 
* AND value &lt;x-v&gt; is set in the request header to a version supported by the DH


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.001: Validate FAPI Auth date - valid format](#assertion-a.cfa.001)
* [A.CFC.001: Validate FAPI Customer IP Address - is present](#assertion-a.cfc.001)
* [A.CCH.001: Validate the client headers - valid format](#assertion-a.cch.001)
* [A.EAR.007: Validate service point and schema - EnergyDerDetailResponse](#assertion-a.ear.007)


<a id="testcase-t.ear.034"></a>
## T.EAR.034: ADR call to DH: Get Service Point Detail - unsupported version without x-v-min included

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

* [A.CVN.004: Validate version - unsupported version without <x-min-v>](#assertion-a.cvn.004)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.035"></a>
## T.EAR.035: ADR call to DH: Get Service Point Detail - invalid format of Service Point ID

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.EAR.002: Validate service point - invalid value](#assertion-a.ear.002)


<a id="testcase-t.ear.036"></a>
## T.EAR.036: ADR call to DH: Get Service Point Detail - unavailable Service Point ID

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.EAR.003: Validate service point - unavailable](#assertion-a.ear.003)


<a id="testcase-t.ear.037"></a>
## T.EAR.037: ADR call to DH: Get DER for Service Point - invalid FAPI Interaction ID format

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

* [A.CFI.003: Validate FAPI Interation ID - invalid format](#assertion-a.cfi.003)


<a id="testcase-t.ear.038"></a>
## T.EAR.038: ADR call to DH: Get DER for Specific Service Points - no pagination

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.001: Validate FAPI Auth date - valid format](#assertion-a.cfa.001)
* [A.CFC.001: Validate FAPI Customer IP Address - is present](#assertion-a.cfc.001)
* [A.CCH.001: Validate the client headers - valid format](#assertion-a.cch.001)
* [A.EAR.008: Validate servicePointIdList body and schema - EnergyDerListResponse](#assertion-a.ear.008)


<a id="testcase-t.ear.039"></a>
## T.EAR.039: ADR call to DH: Get DER for Specific Service Points - with pagination

Negative test case

Obtain DER data for a specific set of service points owned by the consumer that has authorised the current session

### Purpose:

Test API with pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points)


### Execution Pre-conditions:

*  &lt;page-size&gt; and&lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.001: Validate FAPI Auth date - valid format](#assertion-a.cfa.001)
* [A.CFC.001: Validate FAPI Customer IP Address - is present](#assertion-a.cfc.001)
* [A.CCH.001: Validate the client headers - valid format](#assertion-a.cch.001)
* [A.EAR.008: Validate servicePointIdList body and schema - EnergyDerListResponse](#assertion-a.ear.008)


<a id="testcase-t.ear.040"></a>
## T.EAR.040: ADR call to DH: Get DER for Specific Service Points - unsupported version without x-v-min included

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

* [A.CVN.004: Validate version - unsupported version without <x-min-v>](#assertion-a.cvn.004)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.041"></a>
## T.EAR.041: ADR call to DH: Get DER for Specific Service Points - invalid page parameters

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

* [A.CPG.002: Validate pagination - Invalid page size value](#assertion-a.cpg.002)
* [A.CPG.003: Validate pagination - Non-numeric <page>](#assertion-a.cpg.003)
* [A.CPG.004: Validate pagination - Max record limit exceeded](#assertion-a.cpg.004)
* [A.CPG.005: Validate pagination - Non-numeric <page-size>](#assertion-a.cpg.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.042"></a>
## T.EAR.042: ADR call to DH: Get DER for Specific Service Points - invalid body values

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.EAR.009: Validate servicePointIdList - invalid body values](#assertion-a.ear.009)


<a id="testcase-t.ear.043"></a>
## T.EAR.043: ADR call to DH: Get DER for Specific Service Points - invalid body format

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CBD.001: Validation of the POST body - malformed body](#assertion-a.cbd.001)


<a id="testcase-t.ear.044"></a>
## T.EAR.044: ADR call to DH: Get DER For Specific Service Points - invalid FAPI Interaction ID format

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

* [A.CFI.003: Validate FAPI Interation ID - invalid format](#assertion-a.cfi.003)


<a id="testcase-t.ear.045"></a>
## T.EAR.045: ADR call to DH: Get Bulk Usage 

Negative test case

Obtain the electricity usage data for all service points owned by the consumer that has authorised the current session

### Purpose:

Test API without any pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)


### Execution Pre-conditions:

* Neither &lt;page-size&gt; or &lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.001: Validate FAPI Auth date - valid format](#assertion-a.cfa.001)
* [A.CFC.001: Validate FAPI Customer IP Address - is present](#assertion-a.cfc.001)
* [A.CCH.001: Validate the client headers - valid format](#assertion-a.cch.001)
* [A.EAR.010: Validate schema - 	EnergyUsageListResponse](#assertion-a.ear.010)


<a id="testcase-t.ear.046"></a>
## T.EAR.046: ADR call to DH: Get Bulk Usage - with pagination

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.001: Validate FAPI Auth date - valid format](#assertion-a.cfa.001)
* [A.CFC.001: Validate FAPI Customer IP Address - is present](#assertion-a.cfc.001)
* [A.CCH.001: Validate the client headers - valid format](#assertion-a.cch.001)
* [A.EAR.010: Validate schema - 	EnergyUsageListResponse](#assertion-a.ear.010)


<a id="testcase-t.ear.047"></a>
## T.EAR.047: ADR call to DH: Get Bulk Usage - unsupported version without x-v-min included

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

* [A.CVN.004: Validate version - unsupported version without <x-min-v>](#assertion-a.cvn.004)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.048"></a>
## T.EAR.048: ADR call to DH: Get Bulk Usage - invalid page parameters

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

* [A.CPG.002: Validate pagination - Invalid page size value](#assertion-a.cpg.002)
* [A.CPG.003: Validate pagination - Non-numeric <page>](#assertion-a.cpg.003)
* [A.CPG.004: Validate pagination - Max record limit exceeded](#assertion-a.cpg.004)
* [A.CPG.005: Validate pagination - Non-numeric <page-size>](#assertion-a.cpg.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.049"></a>
## T.EAR.049: ADR call to DH: Get Bulk Usage - oldest date

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.001: Validate FAPI Auth date - valid format](#assertion-a.cfa.001)
* [A.CCH.001: Validate the client headers - valid format](#assertion-a.cch.001)
* [A.CFC.001: Validate FAPI Customer IP Address - is present](#assertion-a.cfc.001)
* [A.COD.001: Validate the Oldest Date parameter - valid format](#assertion-a.cod.001)
* [A.EAR.010: Validate schema - 	EnergyUsageListResponse](#assertion-a.ear.010)


<a id="testcase-t.ear.050"></a>
## T.EAR.050: ADR call to DH: Get Bulk Usage - newest date

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.001: Validate FAPI Auth date - valid format](#assertion-a.cfa.001)
* [A.CFC.001: Validate FAPI Customer IP Address - is present](#assertion-a.cfc.001)
* [A.CCH.001: Validate the client headers - valid format](#assertion-a.cch.001)
* [A.CND.001: Validate the Newest Date parameter - valid format](#assertion-a.cnd.001)
* [A.EAR.010: Validate schema - 	EnergyUsageListResponse](#assertion-a.ear.010)


<a id="testcase-t.ear.051"></a>
## T.EAR.051: ADR call to DH: Get Bulk Usage - invalid format oldest date 

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

* [A.COD.002: Validation the Oldest Date parameter - invalid format](#assertion-a.cod.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.052"></a>
## T.EAR.052: ADR call to DH: Get Bulk Usage - invalid format newest date

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

* [A.CND.002: Validation the Newest Date parameter - invalid format](#assertion-a.cnd.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.053"></a>
## T.EAR.053: ADR call to DH: Get Bulk Usage - invalid FAPI Interaction ID format

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

* [A.CFI.003: Validate FAPI Interation ID - invalid format](#assertion-a.cfi.003)


<a id="testcase-t.ear.054"></a>
## T.EAR.054: ADR call to DH: Get Bulk Usage - missing FAPI Auth Date

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.002: Validate FAPI Auth date - missing from header](#assertion-a.cfa.002)


<a id="testcase-t.ear.055"></a>
## T.EAR.055: ADR call to DH: Get Bulk Usage - invalid FAPI Auth Date

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.003: Validate FAPI Auth date - invalid format](#assertion-a.cfa.003)


<a id="testcase-t.ear.056"></a>
## T.EAR.056: ADR call to DH: Get Bulk Usage - missing FAPI Customer IP Address

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFC.002: Validate FAPI Customer IP Address - missing from header](#assertion-a.cfc.002)


<a id="testcase-t.ear.057"></a>
## T.EAR.057: ADR call to DH: Get Bulk Usage - invalid FAPI Customer IP Address

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFC.003: Validate FAPI Customer IP Address - invalid format](#assertion-a.cfc.003)


<a id="testcase-t.ear.058"></a>
## T.EAR.058: ADR call to DH: Get Bulk Usage - missing CDS Client Header

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CCH.002: Validate the client headers - missing from header](#assertion-a.cch.002)


<a id="testcase-t.ear.059"></a>
## T.EAR.059: ADR call to DH: Get Bulk Usage - invalid CDS Client Header

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CCH.003: Validate the client headers - invalid format](#assertion-a.cch.003)


<a id="testcase-t.ear.060"></a>
## T.EAR.060: ADR call to DH: Get Bulk DER 

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFC.001: Validate FAPI Customer IP Address - is present](#assertion-a.cfc.001)
* [A.CCH.001: Validate the client headers - valid format](#assertion-a.cch.001)
* [A.CFA.001: Validate FAPI Auth date - valid format](#assertion-a.cfa.001)
* [A.EAR.011: Validate schema - EnergyDerListResponse](#assertion-a.ear.011)


<a id="testcase-t.ear.061"></a>
## T.EAR.061: ADR call to DH: Get Bulk DER - with pagination

Negative test case

Obtain the electricity usage data for all service points owned by the consumer that has authorised the current session

### Purpose:

Test API with pagination partameters

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der)


### Execution Pre-conditions:

*  &lt;page-size&gt; and&lt;page&gt; query parameters are provided


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.CPG.001: Validate pagination - LinksPaginated ](#assertion-a.cpg.001)
* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.001: Validate FAPI Auth date - valid format](#assertion-a.cfa.001)
* [A.CCH.001: Validate the client headers - valid format](#assertion-a.cch.001)
* [A.EAR.011: Validate schema - EnergyDerListResponse](#assertion-a.ear.011)


<a id="testcase-t.ear.062"></a>
## T.EAR.062: ADR call to DH: Get Bulk DER - unsupported version without x-v-min included

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

* [A.CVN.004: Validate version - unsupported version without <x-min-v>](#assertion-a.cvn.004)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.063"></a>
## T.EAR.063: ADR call to DH: Get Bulk DER - invalid page parameters

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

* [A.CPG.002: Validate pagination - Invalid page size value](#assertion-a.cpg.002)
* [A.CPG.003: Validate pagination - Non-numeric <page>](#assertion-a.cpg.003)
* [A.CPG.004: Validate pagination - Max record limit exceeded](#assertion-a.cpg.004)
* [A.CPG.005: Validate pagination - Non-numeric <page-size>](#assertion-a.cpg.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.064"></a>
## T.EAR.064: ADR call to DH: Get Bulk DER - missing FAPI Auth Date

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.002: Validate FAPI Auth date - missing from header](#assertion-a.cfa.002)


<a id="testcase-t.ear.065"></a>
## T.EAR.065: ADR call to DH: DHGet Bulk DER - invalid FAPI Auth Date

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.003: Validate FAPI Auth date - invalid format](#assertion-a.cfa.003)


<a id="testcase-t.ear.066"></a>
## T.EAR.066: ADR call to DH: Get Bulk DER - missing FAPI Customer IP Address

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFC.002: Validate FAPI Customer IP Address - missing from header](#assertion-a.cfc.002)


<a id="testcase-t.ear.067"></a>
## T.EAR.067: ADR call to DH: DH: Get Bulk DER - invalid FAPI Customer IP Address

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFC.003: Validate FAPI Customer IP Address - invalid format](#assertion-a.cfc.003)


<a id="testcase-t.ear.068"></a>
## T.EAR.068: ADR call to DH: Get Bulk DER - missing CDS Client Header

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CCH.002: Validate the client headers - missing from header](#assertion-a.cch.002)


<a id="testcase-t.ear.069"></a>
## T.EAR.069: ADR call to DH: Get Bulk DER - invalid CDS Client Header

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CCH.003: Validate the client headers - invalid format](#assertion-a.cch.003)


<a id="testcase-t.ear.070"></a>
## T.EAR.070: ADR call to DH: Get Bulk DER - invalid FAPI Auth Date

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.003: Validate FAPI Auth date - invalid format](#assertion-a.cfa.003)


<a id="testcase-t.ear.071"></a>
## T.EAR.071: ADR call to DH: Get Bulk DER - missing FAPI Customer IP Address

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFC.002: Validate FAPI Customer IP Address - missing from header](#assertion-a.cfc.002)


<a id="testcase-t.ear.072"></a>
## T.EAR.072: ADR call to DH: Get Bulk DER - invalid FAPI Customer IP Address

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFC.003: Validate FAPI Customer IP Address - invalid format](#assertion-a.cfc.003)


<a id="testcase-t.ear.073"></a>
## T.EAR.073: ADR call to DH: Get Service Points - missing FAPI Auth Date

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.002: Validate FAPI Auth date - missing from header](#assertion-a.cfa.002)


<a id="testcase-t.ear.074"></a>
## T.EAR.074: ADR call to DH: Get Service Points - invalid FAPI Auth Date

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.003: Validate FAPI Auth date - invalid format](#assertion-a.cfa.003)


<a id="testcase-t.ear.075"></a>
## T.EAR.075: ADR call to DH: Get Service Points - missing FAPI Customer IP Address

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFC.002: Validate FAPI Customer IP Address - missing from header](#assertion-a.cfc.002)


<a id="testcase-t.ear.076"></a>
## T.EAR.076: ADR call to DH: Get Service Points - invalid FAPI Customer IP Address

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFC.003: Validate FAPI Customer IP Address - invalid format](#assertion-a.cfc.003)


<a id="testcase-t.ear.077"></a>
## T.EAR.077: ADR call to DH: Get Service Points - missing CDS Client Header

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CCH.002: Validate the client headers - missing from header](#assertion-a.cch.002)


<a id="testcase-t.ear.078"></a>
## T.EAR.078: ADR call to DH: Get Service Points - invalid CDS Client Header

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CCH.003: Validate the client headers - invalid format](#assertion-a.cch.003)


<a id="testcase-t.ear.079"></a>
## T.EAR.079: ADR call to DH: Get Service Point - missing FAPI Auth Date

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.002: Validate FAPI Auth date - missing from header](#assertion-a.cfa.002)


<a id="testcase-t.ear.080"></a>
## T.EAR.080: ADR call to DH: Get Service Point - invalid FAPI Auth Date

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.003: Validate FAPI Auth date - invalid format](#assertion-a.cfa.003)


<a id="testcase-t.ear.081"></a>
## T.EAR.081: ADR call to DH: Get Service Point - missing FAPI Customer IP Address

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFC.002: Validate FAPI Customer IP Address - missing from header](#assertion-a.cfc.002)


<a id="testcase-t.ear.082"></a>
## T.EAR.082: ADR call to DH: Get Service Point - invalid FAPI Customer IP Address

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFC.003: Validate FAPI Customer IP Address - invalid format](#assertion-a.cfc.003)


<a id="testcase-t.ear.083"></a>
## T.EAR.083: ADR call to DH: Get Service Point - missing CDS Client Header

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CCH.002: Validate the client headers - missing from header](#assertion-a.cch.002)


<a id="testcase-t.ear.084"></a>
## T.EAR.084: ADR call to DH: Get Service Point - invalid CDS Client Header

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CCH.003: Validate the client headers - invalid format](#assertion-a.cch.003)


<a id="testcase-t.ear.085"></a>
## T.EAR.085: ADR call to DH: Get Usage For Service Point - missing FAPI Auth Date

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.002: Validate FAPI Auth date - missing from header](#assertion-a.cfa.002)


<a id="testcase-t.ear.086"></a>
## T.EAR.086: ADR call to DH: Get Usage For Service Point - invalid FAPI Auth Date

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.003: Validate FAPI Auth date - invalid format](#assertion-a.cfa.003)


<a id="testcase-t.ear.087"></a>
## T.EAR.087: ADR call to DH: Get Usage For Service Point - missing FAPI Customer IP Address

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFC.002: Validate FAPI Customer IP Address - missing from header](#assertion-a.cfc.002)


<a id="testcase-t.ear.088"></a>
## T.EAR.088: ADR call to DH: Get Usage For Service Point - invalid FAPI Customer IP Address

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFC.003: Validate FAPI Customer IP Address - invalid format](#assertion-a.cfc.003)


<a id="testcase-t.ear.089"></a>
## T.EAR.089: ADR call to DH: Get Usage For Service Point - missing CDS Client Header

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CCH.002: Validate the client headers - missing from header](#assertion-a.cch.002)


<a id="testcase-t.ear.090"></a>
## T.EAR.090: ADR call to DH: Get Usage For Service Point - invalid CDS Client Header

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CCH.003: Validate the client headers - invalid format](#assertion-a.cch.003)


<a id="testcase-t.ear.091"></a>
## T.EAR.091: ADR call to DH: Get Usage for Specific Service Points - missing FAPI Auth Date

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.002: Validate FAPI Auth date - missing from header](#assertion-a.cfa.002)


<a id="testcase-t.ear.092"></a>
## T.EAR.092: ADR call to DH: Get Usage for Specific Service Points - invalid FAPI Auth Date

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.003: Validate FAPI Auth date - invalid format](#assertion-a.cfa.003)


<a id="testcase-t.ear.093"></a>
## T.EAR.093: ADR call to DH: Get Usage for Specific Service Points - missing FAPI Customer IP Address

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFC.002: Validate FAPI Customer IP Address - missing from header](#assertion-a.cfc.002)


<a id="testcase-t.ear.094"></a>
## T.EAR.094: ADR call to DH: Get Usage for Specific Service Points - invalid FAPI Customer IP Address

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFC.003: Validate FAPI Customer IP Address - invalid format](#assertion-a.cfc.003)


<a id="testcase-t.ear.095"></a>
## T.EAR.095: ADR call to DH: Get Usage for Specific Service Points - missing CDS Client Header

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CCH.002: Validate the client headers - missing from header](#assertion-a.cch.002)


<a id="testcase-t.ear.096"></a>
## T.EAR.096: ADR call to DH: Get Usage for Specific Service Points - invalid CDS Client Header

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CCH.003: Validate the client headers - invalid format](#assertion-a.cch.003)


<a id="testcase-t.ear.097"></a>
## T.EAR.097: ADR call to DH: Get DER for Service Point - missing FAPI Auth Date

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.002: Validate FAPI Auth date - missing from header](#assertion-a.cfa.002)


<a id="testcase-t.ear.098"></a>
## T.EAR.098: ADR call to DH: Get DER for Service Point - invalid FAPI Auth Date

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.003: Validate FAPI Auth date - invalid format](#assertion-a.cfa.003)


<a id="testcase-t.ear.099"></a>
## T.EAR.099: ADR call to DH: Get DER for Service Point - missing FAPI Customer IP Address

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFC.002: Validate FAPI Customer IP Address - missing from header](#assertion-a.cfc.002)


<a id="testcase-t.ear.100"></a>
## T.EAR.100: ADR call to DH: Get DER for Service Point - invalid FAPI Customer IP Address

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFC.003: Validate FAPI Customer IP Address - invalid format](#assertion-a.cfc.003)


<a id="testcase-t.ear.101"></a>
## T.EAR.101: ADR call to DH: Get DER for Service Point - missing CDS Client Header

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CCH.002: Validate the client headers - missing from header](#assertion-a.cch.002)


<a id="testcase-t.ear.102"></a>
## T.EAR.102: ADR call to DH: Get DER for Service Point - invalid CDS Client Header

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CCH.003: Validate the client headers - invalid format](#assertion-a.cch.003)


<a id="testcase-t.ear.103"></a>
## T.EAR.103: ADR call to DH: Get DER For Specific Service Points - missing FAPI Auth Date

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.002: Validate FAPI Auth date - missing from header](#assertion-a.cfa.002)


<a id="testcase-t.ear.104"></a>
## T.EAR.104: ADR call to DH: Get DER For Specific Service Points - invalid FAPI Auth Date

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFA.003: Validate FAPI Auth date - invalid format](#assertion-a.cfa.003)


<a id="testcase-t.ear.105"></a>
## T.EAR.105: ADR call to DH: Get DER For Specific Service Points - missing FAPI Customer IP Address

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFC.002: Validate FAPI Customer IP Address - missing from header](#assertion-a.cfc.002)


<a id="testcase-t.ear.106"></a>
## T.EAR.106: ADR call to DH: Get DER For Specific Service Points - invalid FAPI Customer IP Address

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CFC.003: Validate FAPI Customer IP Address - invalid format](#assertion-a.cfc.003)


<a id="testcase-t.ear.107"></a>
## T.EAR.107: ADR call to DH: Get DER For Specific Service Points - missing CDS Client Header

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CCH.002: Validate the client headers - missing from header](#assertion-a.cch.002)


<a id="testcase-t.ear.108"></a>
## T.EAR.108: ADR call to DH: Get DER For Specific Service Points - invalid CDS Client Header

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)
* [A.CCH.003: Validate the client headers - invalid format](#assertion-a.cch.003)


<a id="testcase-t.ear.109"></a>
## T.EAR.109: ADR call to DH: Get Service Points - invalid version value

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with invalid version value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)


### Execution Pre-conditions:

* The &lt;x-v&gt; version is not a valid number


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints|


### End State Assertions:

* [A.CVN.002: Validate version - invalid version value [x-v]](#assertion-a.cvn.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.110"></a>
## T.EAR.110: ADR call to DH: Get Service Points - invalid version format

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

* [A.CVN.003: Validate version - validate [x-v] format](#assertion-a.cvn.003)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.111"></a>
## T.EAR.111: ADR call to DH: Get Service Point - invalid version value

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

* [A.CVN.002: Validate version - invalid version value [x-v]](#assertion-a.cvn.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.112"></a>
## T.EAR.112: ADR call to DH: Get Service Point - invalid version format

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

* [A.CVN.003: Validate version - validate [x-v] format](#assertion-a.cvn.003)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.113"></a>
## T.EAR.113: ADR call to DH: Get Usage For Service Point - invalid version value

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

* [A.CVN.002: Validate version - invalid version value [x-v]](#assertion-a.cvn.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.114"></a>
## T.EAR.114: ADR call to DH: Get Usage For Service Point - invalid version format

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

* [A.CVN.003: Validate version - validate [x-v] format](#assertion-a.cvn.003)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.115"></a>
## T.EAR.115: ADR call to DH: Get Bulk Usage - invalid version value

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

* [A.CVN.002: Validate version - invalid version value [x-v]](#assertion-a.cvn.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.116"></a>
## T.EAR.116: ADR call to DH: Get Bulk Usage - invalid version format

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

* [A.CVN.003: Validate version - validate [x-v] format](#assertion-a.cvn.003)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.117"></a>
## T.EAR.117: ADR call to DH: Get Usage for Specific Service Points - invalid version value

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

* [A.CVN.002: Validate version - invalid version value [x-v]](#assertion-a.cvn.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.118"></a>
## T.EAR.118: ADR call to DH: Get Usage for Specific Service Points - invalid version format

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

* [A.CVN.003: Validate version - validate [x-v] format](#assertion-a.cvn.003)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.119"></a>
## T.EAR.119: ADR call to DH: Get DER for Service Point - invalid version value

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

* [A.CVN.002: Validate version - invalid version value [x-v]](#assertion-a.cvn.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.120"></a>
## T.EAR.120: ADR call to DH: Get DER for Service Point - invalid version format

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

* [A.CVN.003: Validate version - validate [x-v] format](#assertion-a.cvn.003)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.121"></a>
## T.EAR.121: ADR call to DH: Get Bulk DER - invalid version value

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

* [A.CVN.002: Validate version - invalid version value [x-v]](#assertion-a.cvn.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.122"></a>
## T.EAR.122: ADR call to DH: Get Bulk DER - invalid version format

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

* [A.CVN.003: Validate version - validate [x-v] format](#assertion-a.cvn.003)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.123"></a>
## T.EAR.123: ADR call to DH: Get DER For Specific Service Points - invalid version value

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

* [A.CVN.002: Validate version - invalid version value [x-v]](#assertion-a.cvn.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.124"></a>
## T.EAR.124: ADR call to DH: Get DER For Specific Service Points - invalid version format

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

* [A.CVN.003: Validate version - validate [x-v] format](#assertion-a.cvn.003)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.125"></a>
## T.EAR.125: ADR call to DH: Get Service Points - unsupported version when x-v-min is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-service-points)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-v-min&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints|


### End State Assertions:

* [A.CVN.005: Validate version - unsupported version with <x-min-v>](#assertion-a.cvn.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.126"></a>
## T.EAR.126: ADR call to DH: Get Service Point - unsupported version when x-v-min is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail](https://consumerdatastandardsaustralia.github.io/standards/#get-service-point-detail)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-v-min&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}|


### End State Assertions:

* [A.CVN.005: Validate version - unsupported version with <x-min-v>](#assertion-a.cvn.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.127"></a>
## T.EAR.127: ADR call to DH: Get Usage For Service Point - unsupported version when x-v-min is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-service-point)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-v-min&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/usage|


### End State Assertions:

* [A.CVN.005: Validate version - unsupported version with <x-min-v>](#assertion-a.cvn.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.128"></a>
## T.EAR.128: ADR call to DH: Get Bulk Usage - unsupported version when x-v-min is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-usage)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-v-min&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.CVN.005: Validate version - unsupported version with <x-min-v>](#assertion-a.cvn.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.129"></a>
## T.EAR.129: ADR call to DH: Get Usage for Specific Service Points - unsupported version when x-v-min is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-usage-for-specific-service-points)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-v-min&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.CVN.005: Validate version - unsupported version with <x-min-v>](#assertion-a.cvn.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.130"></a>
## T.EAR.130: ADR call to DH: Get DER for Service Point - unsupported version when x-v-min is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-v-min&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/{servicePointId}/der|


### End State Assertions:

* [A.CVN.005: Validate version - unsupported version with <x-min-v>](#assertion-a.cvn.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.131"></a>
## T.EAR.131: ADR call to DH: Get Bulk DER - unsupported version when x-v-min is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der](https://consumerdatastandardsaustralia.github.io/standards/#get-bulk-der)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-v-min&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|GET /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.CVN.005: Validate version - unsupported version with <x-min-v>](#assertion-a.cvn.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.ear.132"></a>
## T.EAR.132: ADR call to DH: Get DER For Specific Service Points - unsupported version when x-v-min is included

Positive test case

Ensure that the endpoint returns version compatibility errors

### Purpose:

Test API with a version that is not supported by the DH

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-specific-service-points)


### Execution Pre-conditions:

* the value &lt;x-v&gt; is set in the request header to a version not supported by the DH
* AND the &lt;x-v-min&gt; is included


### Execution Steps:

|Action No.|Action Type|Detail|
|-|-|-|
|1|Action|POST /energy/electricity/servicepoints/der|


### End State Assertions:

* [A.CVN.005: Validate version - unsupported version with <x-min-v>](#assertion-a.cvn.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFI.002: Validate FAPI Interaction ID - not in request](#assertion-a.cfi.002)


<a id="testcase-t.eas.001"></a>
## T.EAS.001: DH call to SDH: Get Service Points - no pagination

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFA.004: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.cfa.004)
* [A.CFC.004: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.cfc.004)
* [A.CCH.004: No <x-cds-client-header> in header (SR specific)](#assertion-a.cch.004)
* [A.CAI.001: CDS arrangement id - present and valid (SR specific)](#assertion-a.cai.001)
* [A.EAS.004: Validate schema - EnergyServicePointListReponse](#assertion-a.eas.004)


<a id="testcase-t.eas.002"></a>
## T.EAS.002: DH call to SDH: Get Service Points - with pagination

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFA.004: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.cfa.004)
* [A.CFC.004: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.cfc.004)
* [A.CCH.004: No <x-cds-client-header> in header (SR specific)](#assertion-a.cch.004)
* [A.CAI.001: CDS arrangement id - present and valid (SR specific)](#assertion-a.cai.001)
* [A.CPG.001: Validate pagination - LinksPaginated ](#assertion-a.cpg.001)
* [A.EAS.004: Validate schema - EnergyServicePointListReponse](#assertion-a.eas.004)


<a id="testcase-t.eas.003"></a>
## T.EAS.003: DH call to SDH: Get Service Points - unsupported version without x-min-v included

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

* [A.CVN.004: Validate version - unsupported version without <x-min-v>](#assertion-a.cvn.004)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.004"></a>
## T.EAS.004: DH call to SDH: Get Service Points - invalid page parameters

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

* [A.CPG.002: Validate pagination - Invalid page size value](#assertion-a.cpg.002)
* [A.CPG.003: Validate pagination - Non-numeric <page>](#assertion-a.cpg.003)
* [A.CPG.004: Validate pagination - Max record limit exceeded](#assertion-a.cpg.004)
* [A.CPG.005: Validate pagination - Non-numeric <page-size>](#assertion-a.cpg.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.005"></a>
## T.EAS.005: DH call to SDH: Get Service Point Detail 

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFA.004: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.cfa.004)
* [A.CFC.004: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.cfc.004)
* [A.CCH.004: No <x-cds-client-header> in header (SR specific)](#assertion-a.cch.004)
* [A.CAI.001: CDS arrangement id - present and valid (SR specific)](#assertion-a.cai.001)
* [A.EAS.001: Validate service point and schema - EnergyServicePointDetailResponse](#assertion-a.eas.001)


<a id="testcase-t.eas.006"></a>
## T.EAS.006: DH call to SDH: Get Service Point Detail - unsupported version without x-min-v included

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

* [A.CVN.004: Validate version - unsupported version without <x-min-v>](#assertion-a.cvn.004)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.007"></a>
## T.EAS.007: DH call to SDH: Get Service Point Detail - invalid format of Service Point ID

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.EAS.002: Validate service point - invalid NMI value](#assertion-a.eas.002)


<a id="testcase-t.eas.008"></a>
## T.EAS.008: DH call to SDH: Get Service Point Detail - unavailable Service Point ID

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.EAS.003: Validate service point - unavailable NMI](#assertion-a.eas.003)


<a id="testcase-t.eas.009"></a>
## T.EAS.009: DH call to SDH: Get Usage for Service Point Detail - no pagination

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFA.004: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.cfa.004)
* [A.CFC.004: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.cfc.004)
* [A.CCH.004: No <x-cds-client-header> in header (SR specific)](#assertion-a.cch.004)
* [A.CAI.001: CDS arrangement id - present and valid (SR specific)](#assertion-a.cai.001)
* [A.EAS.005: Validate service point and schema - EnergyUsageListResponse](#assertion-a.eas.005)


<a id="testcase-t.eas.010"></a>
## T.EAS.010: DH call to SDH: Get Usage for Service Points - with pagination

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFA.004: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.cfa.004)
* [A.CFC.004: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.cfc.004)
* [A.CCH.004: No <x-cds-client-header> in header (SR specific)](#assertion-a.cch.004)
* [A.CAI.001: CDS arrangement id - present and valid (SR specific)](#assertion-a.cai.001)
* [A.CPG.001: Validate pagination - LinksPaginated ](#assertion-a.cpg.001)
* [A.EAS.005: Validate service point and schema - EnergyUsageListResponse](#assertion-a.eas.005)


<a id="testcase-t.eas.011"></a>
## T.EAS.011: DH call to SDH: Get Usage for Service Points - unsupported version without x-min-v included

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

* [A.CVN.004: Validate version - unsupported version without <x-min-v>](#assertion-a.cvn.004)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.012"></a>
## T.EAS.012: DH call to SDH: Get Usage for Service Points - invalid page parameters

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

* [A.CPG.002: Validate pagination - Invalid page size value](#assertion-a.cpg.002)
* [A.CPG.003: Validate pagination - Non-numeric <page>](#assertion-a.cpg.003)
* [A.CPG.004: Validate pagination - Max record limit exceeded](#assertion-a.cpg.004)
* [A.CPG.005: Validate pagination - Non-numeric <page-size>](#assertion-a.cpg.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.013"></a>
## T.EAS.013: DH call to SDH: Get Usage for Service Points - oldest date

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFA.004: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.cfa.004)
* [A.CFC.004: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.cfc.004)
* [A.CCH.004: No <x-cds-client-header> in header (SR specific)](#assertion-a.cch.004)
* [A.CAI.001: CDS arrangement id - present and valid (SR specific)](#assertion-a.cai.001)
* [A.COD.001: Validate the Oldest Date parameter - valid format](#assertion-a.cod.001)
* [A.EAS.005: Validate service point and schema - EnergyUsageListResponse](#assertion-a.eas.005)


<a id="testcase-t.eas.014"></a>
## T.EAS.014: DH call to SDH: Get Usage for Service Points - newest date

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFA.004: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.cfa.004)
* [A.CFC.004: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.cfc.004)
* [A.CCH.004: No <x-cds-client-header> in header (SR specific)](#assertion-a.cch.004)
* [A.CAI.001: CDS arrangement id - present and valid (SR specific)](#assertion-a.cai.001)
* [A.CND.001: Validate the Newest Date parameter - valid format](#assertion-a.cnd.001)
* [A.EAS.005: Validate service point and schema - EnergyUsageListResponse](#assertion-a.eas.005)


<a id="testcase-t.eas.015"></a>
## T.EAS.015: DH call to SDH: Get Usage for Service Points - invalid Service Point ID

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.EAS.002: Validate service point - invalid NMI value](#assertion-a.eas.002)


<a id="testcase-t.eas.016"></a>
## T.EAS.016: DH call to SDH: Get Usage for Service Points - unavailable Service Point ID

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.EAS.003: Validate service point - unavailable NMI](#assertion-a.eas.003)


<a id="testcase-t.eas.017"></a>
## T.EAS.017: DH call to SDH: Get Usage for Service Points - invalid format oldest date 

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

* [A.COD.002: Validation the Oldest Date parameter - invalid format](#assertion-a.cod.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.018"></a>
## T.EAS.018: DH call to SDH: Get Usage for Service Points - invalid format newest date

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
|2|Action|POST /secondary/energy/electricity/servicepoints/usage|


### End State Assertions:

* [A.CND.002: Validation the Newest Date parameter - invalid format](#assertion-a.cnd.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.020"></a>
## T.EAS.020: DH call to SDH: Get Usage for Specific Service Points - with pagination

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFA.004: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.cfa.004)
* [A.CFC.004: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.cfc.004)
* [A.CCH.004: No <x-cds-client-header> in header (SR specific)](#assertion-a.cch.004)
* [A.CAI.001: CDS arrangement id - present and valid (SR specific)](#assertion-a.cai.001)
* [A.CPG.001: Validate pagination - LinksPaginated ](#assertion-a.cpg.001)
* [A.EAS.006: Validate servicePointIdList body and schema - EnergyUsageListResponse](#assertion-a.eas.006)


<a id="testcase-t.eas.021"></a>
## T.EAS.021: DH call to SDH: Get Usage for Specific Service Points - unsupported version without x-min-v included

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

* [A.CVN.004: Validate version - unsupported version without <x-min-v>](#assertion-a.cvn.004)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.022"></a>
## T.EAS.022: DH call to SDH: Get Usage for Specific Service Points - invalid page parameters

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

* [A.CPG.002: Validate pagination - Invalid page size value](#assertion-a.cpg.002)
* [A.CPG.003: Validate pagination - Non-numeric <page>](#assertion-a.cpg.003)
* [A.CPG.004: Validate pagination - Max record limit exceeded](#assertion-a.cpg.004)
* [A.CPG.005: Validate pagination - Non-numeric <page-size>](#assertion-a.cpg.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.023"></a>
## T.EAS.023: DH call to SDH: Get Usage for Specific Service Points - oldest date

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFA.004: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.cfa.004)
* [A.CFC.004: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.cfc.004)
* [A.CCH.004: No <x-cds-client-header> in header (SR specific)](#assertion-a.cch.004)
* [A.CAI.001: CDS arrangement id - present and valid (SR specific)](#assertion-a.cai.001)
* [A.COD.001: Validate the Oldest Date parameter - valid format](#assertion-a.cod.001)
* [A.EAS.006: Validate servicePointIdList body and schema - EnergyUsageListResponse](#assertion-a.eas.006)


<a id="testcase-t.eas.024"></a>
## T.EAS.024: DH call to SDH: Get Usage for Specific Service Points - newest date

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFA.004: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.cfa.004)
* [A.CFC.004: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.cfc.004)
* [A.CCH.004: No <x-cds-client-header> in header (SR specific)](#assertion-a.cch.004)
* [A.CAI.001: CDS arrangement id - present and valid (SR specific)](#assertion-a.cai.001)
* [A.CND.001: Validate the Newest Date parameter - valid format](#assertion-a.cnd.001)
* [A.EAS.006: Validate servicePointIdList body and schema - EnergyUsageListResponse](#assertion-a.eas.006)


<a id="testcase-t.eas.025"></a>
## T.EAS.025: DH call to SDH: Get Usage for Specific Service Points - invalid format oldest date 

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

* [A.COD.002: Validation the Oldest Date parameter - invalid format](#assertion-a.cod.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.026"></a>
## T.EAS.026: DH call to SDH: Get Usage for Specific Service Points - invalid format newest date

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

* [A.CND.002: Validation the Newest Date parameter - invalid format](#assertion-a.cnd.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.027"></a>
## T.EAS.027: DH call to SDH: Get DER for Service Point 

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFA.004: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.cfa.004)
* [A.CFC.004: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.cfc.004)
* [A.CCH.004: No <x-cds-client-header> in header (SR specific)](#assertion-a.cch.004)
* [A.CAI.001: CDS arrangement id - present and valid (SR specific)](#assertion-a.cai.001)
* [A.EAS.007: Validate service point and schema - EnergyDerDetailResponse](#assertion-a.eas.007)


<a id="testcase-t.eas.028"></a>
## T.EAS.028: DH call to SDH: Get Service Point Detail - unsupported version without x-min-v included

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

* [A.CVN.004: Validate version - unsupported version without <x-min-v>](#assertion-a.cvn.004)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.029"></a>
## T.EAS.029: DH call to SDH: Get Service Point Detail - invalid format of Service Point ID

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.EAS.002: Validate service point - invalid NMI value](#assertion-a.eas.002)


<a id="testcase-t.eas.030"></a>
## T.EAS.030: DH call to SDH: Get Service Point Detail - unavailable Service Point ID

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.EAS.003: Validate service point - unavailable NMI](#assertion-a.eas.003)


<a id="testcase-t.eas.031"></a>
## T.EAS.031: DH call to SDH: Get DER for Specific Service Points - no pagination

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFA.004: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.cfa.004)
* [A.CFC.004: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.cfc.004)
* [A.CCH.004: No <x-cds-client-header> in header (SR specific)](#assertion-a.cch.004)
* [A.CAI.001: CDS arrangement id - present and valid (SR specific)](#assertion-a.cai.001)
* [A.EAS.008: Validate servicePointIdList body and schema - EnergyDerListResponse](#assertion-a.eas.008)


<a id="testcase-t.eas.032"></a>
## T.EAS.032: DH call to SDH: Get DER for Specific Service Points - with pagination

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

* [A.CVN.001: Validate version - valid version number [x-v]](#assertion-a.cvn.001)
* [A.CVM.001: Validate version - <x-min-v> is provided](#assertion-a.cvm.001)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CFA.004: No <x-fapi-auth-date> in header (SR specific)](#assertion-a.cfa.004)
* [A.CFC.004: No <x-fapi-customer-ip-address> in header (SR specific)](#assertion-a.cfc.004)
* [A.CCH.004: No <x-cds-client-header> in header (SR specific)](#assertion-a.cch.004)
* [A.CAI.001: CDS arrangement id - present and valid (SR specific)](#assertion-a.cai.001)
* [A.CPG.001: Validate pagination - LinksPaginated ](#assertion-a.cpg.001)
* [A.EAS.008: Validate servicePointIdList body and schema - EnergyDerListResponse](#assertion-a.eas.008)


<a id="testcase-t.eas.033"></a>
## T.EAS.033: DH call to SDH: Get DER for Specific Service Points - unsupported version without x-min-v included

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

* [A.CVN.004: Validate version - unsupported version without <x-min-v>](#assertion-a.cvn.004)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.034"></a>
## T.EAS.034: DH call to SDH: Get DER for Specific Service Points - invalid page parameters

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

* [A.CPG.002: Validate pagination - Invalid page size value](#assertion-a.cpg.002)
* [A.CPG.003: Validate pagination - Non-numeric <page>](#assertion-a.cpg.003)
* [A.CPG.004: Validate pagination - Max record limit exceeded](#assertion-a.cpg.004)
* [A.CPG.005: Validate pagination - Non-numeric <page-size>](#assertion-a.cpg.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.035"></a>
## T.EAS.035: DH call to SDH: Get DER for Specific Service Points - invalid body values

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.EAS.009: Validate servicePointIdList - invalid body values](#assertion-a.eas.009)


<a id="testcase-t.eas.036"></a>
## T.EAS.036: DH call to SDH: Get DER for Specific Service Points - invalid body format

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CBD.001: Validation of the POST body - malformed body](#assertion-a.cbd.001)


<a id="testcase-t.eas.037"></a>
## T.EAS.037: DH call to SDH: Get Usage for Specific Service Points - invalid body values

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.EAS.009: Validate servicePointIdList - invalid body values](#assertion-a.eas.009)


<a id="testcase-t.eas.038"></a>
## T.EAS.038: DH call to SDH: Get Usage for Specific Service Points - invalid body format

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CBD.001: Validation of the POST body - malformed body](#assertion-a.cbd.001)


<a id="testcase-t.eas.039"></a>
## T.EAS.039: DH call to SDH: Get Service Points - invalid FAPI Interaction ID format 

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

* [A.CFI.003: Validate FAPI Interation ID - invalid format](#assertion-a.cfi.003)


<a id="testcase-t.eas.040"></a>
## T.EAS.040: DH call to SDH: Get Service Point Detail - invalid FAPI Interaction ID format 

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

* [A.CFI.003: Validate FAPI Interation ID - invalid format](#assertion-a.cfi.003)


<a id="testcase-t.eas.041"></a>
## T.EAS.041: DH call to SDH: Get Usage For Service Point - invalid FAPI Interaction ID format

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

* [A.CFI.003: Validate FAPI Interation ID - invalid format](#assertion-a.cfi.003)


<a id="testcase-t.eas.042"></a>
## T.EAS.042: DH call to SDH: Get Usage For Specific Service Points - invalid FAPI Interaction ID format

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

* [A.CFI.003: Validate FAPI Interation ID - invalid format](#assertion-a.cfi.003)


<a id="testcase-t.eas.043"></a>
## T.EAS.043: DH call to SDH: Get DER for Service Point - invalid FAPI Interaction ID format

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

* [A.CFI.003: Validate FAPI Interation ID - invalid format](#assertion-a.cfi.003)


<a id="testcase-t.eas.044"></a>
## T.EAS.044: DH call to SDH: Get DER For Specific Service Points - invalid FAPI Interaction ID format

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

* [A.CFI.003: Validate FAPI Interation ID - invalid format](#assertion-a.cfi.003)


<a id="testcase-t.eas.045"></a>
## T.EAS.045: DH call to SDH: Get Service Points - no arragement id 

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CAI.002: CDS arrangement id - missing from header (SR specific)](#assertion-a.cai.002)


<a id="testcase-t.eas.046"></a>
## T.EAS.046: DH call to SDH: Get Service Points - arrangement ID invalid

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CAI.003: CDS arrangement id - present but invalid (SR specific)](#assertion-a.cai.003)


<a id="testcase-t.eas.047"></a>
## T.EAS.047: DH call to SDH: Get Service Point Detail - no arragement id 

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CAI.002: CDS arrangement id - missing from header (SR specific)](#assertion-a.cai.002)


<a id="testcase-t.eas.048"></a>
## T.EAS.048: DH call to SDH: Get Service Point Detail - arrangement ID invalid

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.CAI.003: CDS arrangement id - present but invalid (SR specific)](#assertion-a.cai.003)


<a id="testcase-t.eas.049"></a>
## T.EAS.049: DH call to Get Usage For Service Point - no arragement id 

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

* [A.CAI.002: CDS arrangement id - missing from header (SR specific)](#assertion-a.cai.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.050"></a>
## T.EAS.050: DH call to SDH: Get Usage For Service Point - arrangement ID invalid

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

* [A.CAI.003: CDS arrangement id - present but invalid (SR specific)](#assertion-a.cai.003)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.051"></a>
## T.EAS.051: DH call to SDH: Get Usage For Specific Service Points - no arragement id 

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

* [A.CAI.002: CDS arrangement id - missing from header (SR specific)](#assertion-a.cai.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.052"></a>
## T.EAS.052: DH call to SDH: Get Usage For Specific Service Points - arrangement ID invalid

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

* [A.CAI.003: CDS arrangement id - present but invalid (SR specific)](#assertion-a.cai.003)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.053"></a>
## T.EAS.053: DH call to SDH: Get DER for Service Point - no arragement id 

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

* [A.CAI.002: CDS arrangement id - missing from header (SR specific)](#assertion-a.cai.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.054"></a>
## T.EAS.054: DH call to SDH: Get DER for Service Point - arrangement ID invalid

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

* [A.CAI.003: CDS arrangement id - present but invalid (SR specific)](#assertion-a.cai.003)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.055"></a>
## T.EAS.055: DH call to Get DER For Specific Service Points - no arragement id 

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

* [A.CAI.002: CDS arrangement id - missing from header (SR specific)](#assertion-a.cai.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.056"></a>
## T.EAS.056: DH call to SDH: Get DER For Specific Service Points - arrangement ID invalid

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

* [A.CAI.003: CDS arrangement id - present but invalid (SR specific)](#assertion-a.cai.003)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.057"></a>
## T.EAS.057: DH call to SDH: Get Service Points - invalid version value

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

* [A.CVN.002: Validate version - invalid version value [x-v]](#assertion-a.cvn.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.058"></a>
## T.EAS.058: DH call to SDH: Get Service Points - invalid version format

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

* [A.CVN.003: Validate version - validate [x-v] format](#assertion-a.cvn.003)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.059"></a>
## T.EAS.059: DH call to SDH: Get Service Point Detail - invalid version value

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

* [A.CVN.002: Validate version - invalid version value [x-v]](#assertion-a.cvn.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.060"></a>
## T.EAS.060: DH call to SDH: Get Service Point Detail - invalid version format

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

* [A.CVN.003: Validate version - validate [x-v] format](#assertion-a.cvn.003)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.061"></a>
## T.EAS.061: DH call to SDH: Get Usage For Service Point - invalid version value

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

* [A.CVN.002: Validate version - invalid version value [x-v]](#assertion-a.cvn.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.062"></a>
## T.EAS.062: DH call to SDH: Get Usage For Service Point - invalid version format

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

* [A.CVN.003: Validate version - validate [x-v] format](#assertion-a.cvn.003)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.063"></a>
## T.EAS.063: DH call to SDH: Get Usage For Specific Service Points - invalid version value

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

* [A.CVN.002: Validate version - invalid version value [x-v]](#assertion-a.cvn.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.064"></a>
## T.EAS.064: DH call to SDH: Get Usage For Specific Service Points - invalid version format

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

* [A.CVN.003: Validate version - validate [x-v] format](#assertion-a.cvn.003)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.065"></a>
## T.EAS.065: DH call to SDH: Get DER for Service Point - invalid version value

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

* [A.CVN.002: Validate version - invalid version value [x-v]](#assertion-a.cvn.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.066"></a>
## T.EAS.066: DH call to SDH: Get DER for Service Point - invalid version format

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

* [A.CVN.003: Validate version - validate [x-v] format](#assertion-a.cvn.003)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.067"></a>
## T.EAS.067: DH call to SDH: Get DER For Specific Service Points - invalid version value

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

* [A.CVN.002: Validate version - invalid version value [x-v]](#assertion-a.cvn.002)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.068"></a>
## T.EAS.068: DH call to SDH: Get DER For Specific Service Points - invalid version format

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

* [A.CVN.003: Validate version - validate [x-v] format](#assertion-a.cvn.003)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.069"></a>
## T.EAS.069: DH call to SDH: Get Service Points - unsupported version when x-min-v is included

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

* [A.CVN.005: Validate version - unsupported version with <x-min-v>](#assertion-a.cvn.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.070"></a>
## T.EAS.070: DH call to SDH: Get Service Point Detail - unsupported version when x-min-v is included

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

* [A.CVN.005: Validate version - unsupported version with <x-min-v>](#assertion-a.cvn.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.071"></a>
## T.EAS.071: DH call to SDH: Get Usage for Service Points - unsupported version when x-min-v is included

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

* [A.CVN.005: Validate version - unsupported version with <x-min-v>](#assertion-a.cvn.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.072"></a>
## T.EAS.072: DH call to SDH: Get Usage for Specific Service Points - unsupported version when x-min-v  is included

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

* [A.CVN.005: Validate version - unsupported version with <x-min-v>](#assertion-a.cvn.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.073"></a>
## T.EAS.073: DH call to SDH: Get Service Point Detail - unsupported version when x-min-v is included

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

* [A.CVN.005: Validate version - unsupported version with <x-min-v>](#assertion-a.cvn.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.074"></a>
## T.EAS.074: DH call to SDH: Get DER for Specific Service Points - unsupported version when x-min-v is included

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

* [A.CVN.005: Validate version - unsupported version with <x-min-v>](#assertion-a.cvn.005)
* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)


<a id="testcase-t.eas.075"></a>
## T.EAS.075: DH call to SDH: Get Service Points - missing servicePointId in body

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.EAS.009: Validate servicePointIdList - invalid body values](#assertion-a.eas.009)


<a id="testcase-t.eas.076"></a>
## T.EAS.076: DH call to SDH: Get Service Points - invalid servicePointId in body

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.EAS.010: Validate servicePointIdList - invalid servicePointId in body ](#assertion-a.eas.010)


<a id="testcase-t.eas.077"></a>
## T.EAS.077: DH call to SDH: Get Service Points - unavailable servicePointId in body

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

* [A.CFI.001: Validate FAPI Interation ID - included in request](#assertion-a.cfi.001)
* [A.EAS.011: Validate servicePointIdList - unavailable servicePointId in body ](#assertion-a.eas.011)


No test cases defined

<a id="assertions"></a>
# Assertions

<a id="assertion-a.cpg.001"></a>
## A.CPG.001: Validate pagination - LinksPaginated 

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#pagination](https://consumerdatastandardsaustralia.github.io/standards/#pagination)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the page parameter is included in a GET request|
|When|the page value is a number and page-size is [1,25,1000,null]|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the nominated &lt;page number&gt; is returned</br> the response has a status of 200</br> the "first" link has page=1</br> the "last" link is greater than or equal to 1</br> the "self" link has page=&lt;page number&gt;</br> the "prev" link has page equal to 1 or &lt;page number&gt; - 1</br> the "prev" link has page equal to "last" or &lt;page number&gt; + 1</br> "meta"/"totalPages" is greater than or equal to &lt;page number&gt;</br> "meta"/"totalRecords" is greater than or equal to &lt;page number&gt; * &lt;page size&gt;</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cpg.002"></a>
## A.CPG.002: Validate pagination - Invalid page size value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#error-codes](https://consumerdatastandardsaustralia.github.io/standards/#error-codes)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;page-size&gt; parameter is specified in a GET request|
|When|the value for &lt;page-size&gt; is outside the range [1..1000]</br>OR the &lt;page-size&gt; is a not a positive integer|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Field/InvalidPageSize"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cpg.003"></a>
## A.CPG.003: Validate pagination - Non-numeric <page>

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#error-codes](https://consumerdatastandardsaustralia.github.io/standards/#error-codes)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;page&gt; parameter is included in a GET request|
|When|the &lt;page&gt; is a not a positive integer|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Field/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cpg.004"></a>
## A.CPG.004: Validate pagination - Max record limit exceeded

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#error-codes](https://consumerdatastandardsaustralia.github.io/standards/#error-codes)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;page&gt; parameter is included in a GET request|
|When|the &lt;page&gt; value is greater than the number of pages available |
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 422</br> the response body has ErrorListReponse object</br> the error code is "Field/InvalidPage"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cpg.005"></a>
## A.CPG.005: Validate pagination - Non-numeric <page-size>

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#error-codes](https://consumerdatastandardsaustralia.github.io/standards/#error-codes)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;page-size&gt; parameter is included in a GET request|
|When|the page size parameter value is not a positive integer (number)|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Field/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cvn.001"></a>
## A.CVN.001: Validate version - valid version number [x-v]

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;x-v&gt; header is included in a get request|
|When|the value for the &lt;x-v&gt; is a positive integer|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 200</br> &lt;x-v&gt; is in the repsonse header</br> &lt;x-v&gt; is a positive integer</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cvn.002"></a>
## A.CVN.002: Validate version - invalid version value [x-v]

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the version parameter is included in a GET request|
|When|the version value is not a valid number is [-1,0,1001]|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Field/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cvn.003"></a>
## A.CVN.003: Validate version - validate [x-v] format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the version parameter is included in a GET request|
|When|the verison value is not a valid number is an alpha (e.g. "foo")|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Field/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cvn.004"></a>
## A.CVN.004: Validate version - unsupported version without <x-min-v>

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;x-v&gt;  is included in a  request header</br>AND &lt;x-min-v&gt; is NOT included|
|When|the request version &lt;x-v&gt; is not supported|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 406</br> the response body has ErrorListReponse object</br> error code is "Header/UnsupportedVersion"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cvn.005"></a>
## A.CVN.005: Validate version - unsupported version with <x-min-v>

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;x-v&gt;  is included in a  request header</br>AND  &lt;x-min-v&gt;  is included|
|When|no version between &lt;x-v&gt; and &lt;x-min-v&gt; is supported|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 406</br> the response body has ErrorListReponse object</br> error code is "Header/UnsupportedVersion"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cvm.001"></a>
## A.CVM.001: Validate version - <x-min-v> is provided

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;x-min-v&gt; header is included in a get request|
|When|the value for the &lt;x-min-v&gt;  is a positive integer|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">&lt;x-v&gt; is in the repsonse header</br>  &lt;x-v&gt; = [&lt;x-min-v&gt;, &lt;x-v&gt;]</br> &lt;x-v&gt; is a positive integer</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cvm.002"></a>
## A.CVM.002: Validate minimum version - validate <x-min-v> format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;x-min-v&gt; header is included in a get request|
|When|the &lt;x-min-v&gt; is a not a positive integer|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Field/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cfi.001"></a>
## A.CFI.001: Validate FAPI Interation ID - included in request

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;x-fapi-interaction-id&gt; is included in the header of the request|
|When|the &lt;x-fapi-interaction-id&gt; is in a valid format |
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em"> the Data Holder has returned the &lt;x-fapi-interaction-id&gt; from the request in the response header</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cfi.002"></a>
## A.CFI.002: Validate FAPI Interaction ID - not in request

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


<a id="assertion-a.cfi.003"></a>
## A.CFI.003: Validate FAPI Interation ID - invalid format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)
* [https://datatracker.ietf.org/doc/html/rfc4122](https://datatracker.ietf.org/doc/html/rfc4122)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;x-fapi-interaction-id&gt; is included in the GET request|
|When|the &lt;x-fapi-interaction-id&gt; is not in a valid format |
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Header/invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cfa.001"></a>
## A.CFA.001: Validate FAPI Auth date - valid format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)
* [https://openid.net/specs/openid-financial-api-part-1-ID2.html](https://openid.net/specs/openid-financial-api-part-1-ID2.html)
* [https://datatracker.ietf.org/doc/html/rfc7231#page-90](https://datatracker.ietf.org/doc/html/rfc7231#page-90)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the called API is a resource call and does require authentication|
|When|the &lt;x-fapi-auth-date&gt; is present in the request header</br>AND is in a valid format|
|Then|the response has a status of 200|


<a id="assertion-a.cfa.002"></a>
## A.CFA.002: Validate FAPI Auth date - missing from header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)
* [https://openid.net/specs/openid-financial-api-part-1-ID2.html](https://openid.net/specs/openid-financial-api-part-1-ID2.html)
* [https://datatracker.ietf.org/doc/html/rfc7231#page-90](https://datatracker.ietf.org/doc/html/rfc7231#page-90)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the called API is a resource call and does require authentication|
|When|the &lt;x-fapi-auth-date&gt; is NOT present  in the request header|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> error code is "Header/missing"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cfa.003"></a>
## A.CFA.003: Validate FAPI Auth date - invalid format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)
* [https://openid.net/specs/openid-financial-api-part-1-ID2.html](https://openid.net/specs/openid-financial-api-part-1-ID2.html)
* [https://datatracker.ietf.org/doc/html/rfc7231#page-90](https://datatracker.ietf.org/doc/html/rfc7231#page-90)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the called API is a resource call and does require authentication|
|When|the &lt;x-fapi-auth-date&gt; is  in the request header</br>AND is NOT in a valid format|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Header/invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cfa.004"></a>
## A.CFA.004: No <x-fapi-auth-date> in header (SR specific)

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the call is from a DH to a SDH|
|When|a response is returned|
|Then|the &lt;x-fapi-auth-date&gt; is NOT present in the response header|


<a id="assertion-a.cfc.001"></a>
## A.CFC.001: Validate FAPI Customer IP Address - is present

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)
* [https://consumerdatastandardsaustralia.github.io/standards/#authentication-flows](https://consumerdatastandardsaustralia.github.io/standards/#authentication-flows)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the called API requires authentication|
|When|the &lt;x-fapi-customer-ip-address&gt; is present in the request header</br>AND is in a valid IPv4 or IPv6 format|
|Then|the response has a status of 200|


<a id="assertion-a.cfc.002"></a>
## A.CFC.002: Validate FAPI Customer IP Address - missing from header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)
* [https://consumerdatastandardsaustralia.github.io/standards/#authentication-flows](https://consumerdatastandardsaustralia.github.io/standards/#authentication-flows)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the called API requires authentication|
|When|the &lt;x-fapi-customer-ip-address&gt; is NOT present in the request header|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Header/Missing"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cfc.003"></a>
## A.CFC.003: Validate FAPI Customer IP Address - invalid format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)
* [https://consumerdatastandardsaustralia.github.io/standards/#authentication-flows](https://consumerdatastandardsaustralia.github.io/standards/#authentication-flows)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the called API requires authentication|
|When|the &lt;x-fapi-customer-ip-address&gt; in present the request header</br>AND is NEITHER  in a valid IPv4 or IPv6 format|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Header/invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cfc.004"></a>
## A.CFC.004: No <x-fapi-customer-ip-address> in header (SR specific)

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


<a id="assertion-a.cch.001"></a>
## A.CCH.001: Validate the client headers - valid format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)
* [https://consumerdatastandardsaustralia.github.io/standards/#authentication-flows](https://consumerdatastandardsaustralia.github.io/standards/#authentication-flows)
* [https://consumerdatastandardsaustralia.github.io/standards/#common-field-types](https://consumerdatastandardsaustralia.github.io/standards/#common-field-types)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the called API requires authentication</br>AND the call is an attended, ie customer present, call|
|When|the &lt;x-cds-client-headers&gt; is present in the request header</br>AND is Base64 encoded|
|Then|the response has a status of 200|


<a id="assertion-a.cch.002"></a>
## A.CCH.002: Validate the client headers - missing from header

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)
* [https://consumerdatastandardsaustralia.github.io/standards/#authentication-flows](https://consumerdatastandardsaustralia.github.io/standards/#authentication-flows)
* [https://consumerdatastandardsaustralia.github.io/standards/#common-field-types](https://consumerdatastandardsaustralia.github.io/standards/#common-field-types)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the called API requires authentication</br>AND the call is an attended, ie customer present, call|
|When|the &lt;x-cds-client-headers&gt; is NOT present in the request header|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Header/missing"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cch.003"></a>
## A.CCH.003: Validate the client headers - invalid format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#http-headers](https://consumerdatastandardsaustralia.github.io/standards/#http-headers)
* [https://consumerdatastandardsaustralia.github.io/standards/#authentication-flows](https://consumerdatastandardsaustralia.github.io/standards/#authentication-flows)
* [https://consumerdatastandardsaustralia.github.io/standards/#common-field-types](https://consumerdatastandardsaustralia.github.io/standards/#common-field-types)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the called API requires authentication</br>AND the call is an attended, ie customer present, call|
|When|the &lt;x-cds-client-headers&gt;  present the request header</br>AND is Not Base64 encoded|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Header/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cch.004"></a>
## A.CCH.004: No <x-cds-client-header> in header (SR specific)

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


<a id="assertion-a.cai.001"></a>
## A.CAI.001: CDS arrangement id - present and valid (SR specific)

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)
* [https://consumerdatastandardsaustralia.github.io/standards/#identifiers-and-subject-types](https://consumerdatastandardsaustralia.github.io/standards/#identifiers-and-subject-types)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the call is from a DH to a SDH|
|When|the &lt;x-cds-arrangement&gt; is present in the request header</br>AND is in a valid format|
|Then|the response has a status of 200|


<a id="assertion-a.cai.002"></a>
## A.CAI.002: CDS arrangement id - missing from header (SR specific)

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)
* [https://consumerdatastandardsaustralia.github.io/standards/#identifiers-and-subject-types](https://consumerdatastandardsaustralia.github.io/standards/#identifiers-and-subject-types)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the call is from a DH to a SDH|
|When|the &lt;x-cds-arrangement&gt; is NOT present in the request header|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Header/Missing"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cai.003"></a>
## A.CAI.003: CDS arrangement id - present but invalid (SR specific)

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)
* [https://consumerdatastandardsaustralia.github.io/standards/#identifiers-and-subject-types](https://consumerdatastandardsaustralia.github.io/standards/#identifiers-and-subject-types)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the call is from a DH to a SDH|
|When|the &lt;x-cds-arrangement&gt; is present in the request header</br>AND is NOT in a valid format|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Header/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cod.001"></a>
## A.COD.001: Validate the Oldest Date parameter - valid format

### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;oldest-date&gt; is included as a query parameter|
|When|the &lt;oldest-date&gt; is in a valid DateString format|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 200</br> the data is constrained by the date supplied</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cod.002"></a>
## A.COD.002: Validation the Oldest Date parameter - invalid format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#error-codes](https://consumerdatastandardsaustralia.github.io/standards/#error-codes)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;oldest-date&gt; is included as a query parameter|
|When|the &lt;oldest-date&gt; is not in a DateString valid format|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Field/invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cnd.001"></a>
## A.CND.001: Validate the Newest Date parameter - valid format

### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;newest-date&gt; is included as a query parameter|
|When|the &lt;newest-date&gt; is in a valid DateString format|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 200</br> the data is constrained by the date supplied</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cnd.002"></a>
## A.CND.002: Validation the Newest Date parameter - invalid format

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#error-codes](https://consumerdatastandardsaustralia.github.io/standards/#error-codes)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the &lt;newest-date&gt; is included as a query parameter|
|When|the &lt;newest-date&gt; is not in a valid DateString format|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Field/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.cbd.001"></a>
## A.CBD.001: Validation of the POST body - malformed body

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#error-codes](https://consumerdatastandardsaustralia.github.io/standards/#error-codes)
* [https://consumerdatastandardsaustralia.github.io/standards/#http-response-codes](https://consumerdatastandardsaustralia.github.io/standards/#http-response-codes)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request is a POST request|
|When|the request body is not in a valid JSON format, ie it is malformed|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 400</br> the response body has ErrorListReponse object</br> error code is "Field/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.001"></a>
## A.EAR.001: Validate service point and schema - EnergyServicePointDetailResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyservicepointdetailresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyservicepointdetailresponse)
* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {servicePointId} is included in the ADR to DH request|
|When|the {servicePointId} value is valid |
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 200</br> the response body complies with the EnergyServicePointDetailResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.002"></a>
## A.EAR.002: Validate service point - invalid value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {servicePointId} is included in the ADR to DH request url|
|When|The requested service point is permanently unavailable. (No subsequent request for the service point will be successful.)|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 404</br> the response body has ErrorListReponse object</br> error code is "Authorisation/InvalidServicePoint"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.003"></a>
## A.EAR.003: Validate service point - unavailable

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {servicePointId} is included in the ADR to DH request|
|When|The requested service point is temporarily unavailable. (Subsequent requests for the service point may be successful.)|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 404</br> the response body has ErrorListReponse object</br> error code is "Authorisation/UnavailableServicePoint"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.004"></a>
## A.EAR.004: Validate schema - EnergyServicePointListReponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyservicepointlistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyservicepointlistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request to call the API is formatted correctly by the ADR|
|When|the DH receives the request|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 200</br> the response body complies with the EnergyServiceListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.005"></a>
## A.EAR.005: Validate service point and schema - EnergyUsageListResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/# tocSenergyusagelistresponse](https://consumerdatastandardsaustralia.github.io/standards/# tocSenergyusagelistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {servicePointId} is included in the ADR to DH request|
|When|the {servicePointId} value is valid </br>AND the request is formated correctlly|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code of 200</br> the response body complies with the EnergyUsageListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.006"></a>
## A.EAR.006: Validate servicePointIdList body and schema - EnergyUsageListResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request payload to call the API is formatted correctly </br>AND contains the mandatory fields|
|When|the DH receives the request </br>AND interprets the Body|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 200</br> the response body complies with the EnergyUsageListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.007"></a>
## A.EAR.007: Validate service point and schema - EnergyDerDetailResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {servicePointId} is included in the ADR to DH request|
|When|the {servicePointId} value is valid |
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 200</br> the response body complies with the EnergyDerDetailResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.008"></a>
## A.EAR.008: Validate servicePointIdList body and schema - EnergyDerListResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyderlistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyderlistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request payload to call the API is formatted correctly </br>AND contains the mandatory fields|
|When|the DH receives the request</br>AND interprets the Body|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 200</br> the response body complies with the EnergyDerListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.009"></a>
## A.EAR.009: Validate servicePointIdList - invalid body values

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request payload does not contain the required fields</br>OR the request payload is NOT well formatted|
|When|the DH receives the request </br>AND interprets the Body|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 422</br> the response body has ErrorListReponse</br> error code is "Field/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.010"></a>
## A.EAR.010: Validate schema - 	EnergyUsageListResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request to call the API is formatted correctly by the ADR|
|When|the DH receives the request|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 200</br> the response body complies with the EnergyUsageListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.ear.011"></a>
## A.EAR.011: Validate schema - EnergyDerListResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyderlistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyderlistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request to call the API is formatted correctly by the ADR|
|When|the DH receives the request|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 200</br> the response body complies with the EnergyDerListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.001"></a>
## A.EAS.001: Validate service point and schema - EnergyServicePointDetailResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyservicepointdetailresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyservicepointdetailresponse)
* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {servicePointId} is included in the DH to SDH request|
|When|the {servicePointId} value is valid |
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 200</br> the response body complies with the EnergyServicePointDetailResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.002"></a>
## A.EAS.002: Validate service point - invalid NMI value

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {servicePointId} is included in the DH to SDH request url|
|When|The requested service point is permanently unavailable. No subsequent request for the service point will be successful.|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 404</br> the response body has ErrorListReponse object</br> error code is "Authorisation/InvalidServicePoint"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.003"></a>
## A.EAS.003: Validate service point - unavailable NMI

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#energy](https://consumerdatastandardsaustralia.github.io/standards/#energy)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {servicePointId} is included in the DH to SDH request|
|When|The requested service point is temporarily unavailable. Subsequent requests for the service point may be successful.|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 404</br> the response body has ErrorListReponse object</br> error code is "Authorisation/UnavailableServicePoint"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.004"></a>
## A.EAS.004: Validate schema - EnergyServicePointListReponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyservicepointlistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyservicepointlistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request to call the API is formatted correctly by the DH|
|When|the SDH receives the request|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 200</br> the response body complies with the EnergyServiceListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.005"></a>
## A.EAS.005: Validate service point and schema - EnergyUsageListResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {servicePointId} is included in the DH to SDH request|
|When|the {servicePointId} value is valid </br>AND the request is formated correctlly|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code of 200</br> the response body complies with the EnergyUsageListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.006"></a>
## A.EAS.006: Validate servicePointIdList body and schema - EnergyUsageListResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyusagelistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request payload to call the API is formatted correctly </br>AND contains the mandatory fields|
|When|the SDH receives the request and interprets the Body|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 200</br> the response body complies with the EnergyUsageListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.007"></a>
## A.EAS.007: Validate service point and schema - EnergyDerDetailResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point](https://consumerdatastandardsaustralia.github.io/standards/#get-der-for-service-point)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the {servicePointId} is included in the DH to SDH request|
|When|the {servicePointId} value is valid |
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status of 200</br> the response body complies with the EnergyDerDetailResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.008"></a>
## A.EAS.008: Validate servicePointIdList body and schema - EnergyDerListResponse

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyderlistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSenergyderlistresponse)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request payload to call the API is formatted correctly </br>AND contains the mandatory fields|
|When|the SDH receives the request and interprets the Body|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 200</br> the response body complies with the EnergyDerListResponse schema</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.009"></a>
## A.EAS.009: Validate servicePointIdList - invalid body values

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSerrorlistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSerrorlistresponse)
* [https://consumerdatastandardsaustralia.github.io/standards/#error-codes](https://consumerdatastandardsaustralia.github.io/standards/#error-codes)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request payload does not contain the required fields</br>OR the request payload is NOT well formatted|
|When|the SDH receives the request and interprets the Body|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 400</br> the response body complies with the ErrorListReponse schema</br> error code is "Field/Invalid"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.010"></a>
## A.EAS.010: Validate servicePointIdList - invalid servicePointId in body 

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSerrorlistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSerrorlistresponse)
* [https://consumerdatastandardsaustralia.github.io/standards/#error-codes](https://consumerdatastandardsaustralia.github.io/standards/#error-codes)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request payload contains an invalid servicePointID |
|When|the SDH receives the request and interprets the Body|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 422</br> the response body complies with the ErrorListReponse schema</br> error code is "Authorisation/InvalidServicePoint"</br></div><div class="predicate outer">)</div>|


<a id="assertion-a.eas.011"></a>
## A.EAS.011: Validate servicePointIdList - unavailable servicePointId in body 

### References:

* [https://consumerdatastandardsaustralia.github.io/standards/#tocSerrorlistresponse](https://consumerdatastandardsaustralia.github.io/standards/#tocSerrorlistresponse)
* [https://consumerdatastandardsaustralia.github.io/standards/#error-codes](https://consumerdatastandardsaustralia.github.io/standards/#error-codes)


### Severity:

Critical (Test Fails)

### Assertion Logic:

|||
|-|-|
|Given|the request payload contains a valid servicePointID that is unavailable|
|When|the SDH receives the request and interprets the Body|
|Then|<div class="predicate outer">AND (</div><div class="predicate inner" style="margin-left:2em">the response has a status code 422</br> the response body complies with the ErrorListReponse schema</br> error code is "Authorisation/UnavailableServicePoint"</br></div><div class="predicate outer">)</div>|

