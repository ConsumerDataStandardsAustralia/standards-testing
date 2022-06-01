import * as fs from 'fs';
import * as path from 'path';
import { Writable } from 'stream';
import { parse } from 'csv-parse/sync';
import {
  TestCase,
  Reference,
  TestCaseStep,
  Assertion,
  AssertionPredicate,
  Suite,
  Scenario,
  ScenarioAction,
  ConsumerDataRightTestCaseJSONSchema
} from '../../schema/cdr-test-schema.0.0.3';
import { JsonGeneratorConfig } from './json-generator-config';

const SUITE_ID_INDEX: number = 1;
const SUITE_TITLE_INDEX: number = 2;
const SUITE_PURPOSE_INDEX: number = 3;

const SCENARIO_ID_INDEX: number = 3;
const SCENARIO_SUITE_INDEX: number = 5;
const SCENARIO_TITLE_INDEX: number = 7;
const SCENARIO_DESCRIPTION_INDEX: number = 8;
const SCENARIO_PURPOSE_INDEX: number = 9;
const SCENARIO_REFERENCES_INDEX: number = 10;
const SCENARIO_SETUP_INDEX: number = 11;
const SCENARIO_CLEANUP_INDEX: number = 12;
const SCENARIO_TEST_CASES: number = 15;

const TEST_ID_INDEX: number = 1;
const TEST_TITLE_INDEX: number = 4;
const TEST_REFERENCE_INDEX: number = 5;
const TEST_POLARITY_INDEX: number = 6;
const TEST_PURPOSE_INDEX: number = 7;
const TEST_PRECONDITION_INDEX: number = 8;
const TEST_DESCRIPTION_INDEX: number = 9;
const TEST_STEP_TYPE_INDEX: number = 10;
const TEST_STEP_VALUE_INDEX: number = 11;
const TEST_SUITE_ASSERTION_INDEX: number = 12;
const TEST_COMMON_ASSERTION_INDEX: number = 13;

const ASSERTION_ID_INDEX: number = 1;
const ASSERTION_TITLE_INDEX: number = 2;
const ASSERTION_GIVEN_INDEX: number = 3;
const ASSERTION_WHEN_INDEX: number = 4;
const ASSERTION_THEN_INDEX: number = 5;
const ASSERTION_SEVERITY_INDEX: number = 6;
const ASSERTION_POLARITY_INDEX: number = 7;
const ASSERTION_REFERENCE_INDEX: number = 8;

export function json(source: string, destination: string, config: JsonGeneratorConfig, stdout?: Writable, stderr?: Writable): number {
  const baseSourceDirectory: string = source;
  const baseSinkDirectory: string = destination;

  const testCaseDirectorySourcePath = path.join(baseSourceDirectory, '/test-cases/' );
  const testCaseDirectorySinkPath = path.join(baseSinkDirectory, '/test-cases/' );

  const assertionDirectorySourcePath = path.join(baseSourceDirectory, '/assertions/' );
  const assertionDirectorySinkPath = path.join(baseSinkDirectory, '/assertions/' );

  const scenarioDirectorySourcePath = path.join(baseSourceDirectory, '/scenarios/' );
  const scenarioDirectorySinkPath = path.join(baseSinkDirectory, '/scenarios/' );

  const suiteDirectorySourcePath = path.join(baseSourceDirectory, '/test-suites/' );
  const suiteDirectorySinkPath = path.join(baseSinkDirectory, '/suites/' );

  // Check that the source path exists and is a directory
  if (!fs.existsSync(baseSourceDirectory) || !fs.lstatSync(baseSourceDirectory).isDirectory()) {
    throw 'If generate type of "json" is selected then the <source> parameter ' +
          'must be a directory that currently exists containing the decomposed ' +
          'CSV files that will be used to generate the test documentaiton ' +
          'JSON file'
  }

  try {
    // Read the source CSV files
    var testCaseFiles = fs.readdirSync(testCaseDirectorySourcePath);
    var assertionFiles = fs.readdirSync(assertionDirectorySourcePath);
    var suiteFiles = fs.readdirSync(suiteDirectorySourcePath);
    var scenarioFiles = fs.readdirSync(scenarioDirectorySourcePath);

    // Clear any existing output files and create the structure
    fs.rmSync(baseSinkDirectory, { recursive: true, force: true });
    fs.mkdirSync(baseSinkDirectory);
    fs.mkdirSync(testCaseDirectorySinkPath);
    fs.mkdirSync(assertionDirectorySinkPath);
    fs.mkdirSync(scenarioDirectorySinkPath);
    fs.mkdirSync(suiteDirectorySinkPath);

    // Initialise the master output file
    const fullOutput: ConsumerDataRightTestCaseJSONSchema = {
      fileVersion: config.docVersion,
      standardsVersion: config.cdrVersion,
      title: config?.title,
      description: config?.description,
      assertions: {},
      testCases: {},
      scenarios: {},
      suites: {}
    }

    // Process the suite files: input is csv (from Excel) => output is json in specified schema
    for (let i = 0; i < suiteFiles.length; i++) {
      var filePath = path.join(suiteDirectorySourcePath, suiteFiles[i]);

      stdout?.write("Processing: " + suiteFiles[i] + '\n');

      const fileData = fs.readFileSync(filePath, 'utf8');
      const records = parse(fileData, { from_line: 2 });
      for (const arr of records) {
        if (arr != null && (arr[1] != null && arr[1].indexOf('SUITE.') > -1)) {
          const suite = processSuite(arr, arr[1], suiteDirectorySinkPath);
          if (suite && fullOutput.suites) fullOutput.suites[suite.id] = suite;
        }
      }
    }

    // Process the scenario case files: input is csv (from Excel) => output is json in specified schema
    for (let i = 0; i < scenarioFiles.length; i++) {
      var filePath = path.join(scenarioDirectorySourcePath, scenarioFiles[i]);
      stdout?.write("Processing: " + scenarioFiles[i] + '\n');

      const fileData = fs.readFileSync(filePath, 'utf8');
      const records = parse(fileData, { from_line: 5 });
      for (const arr of records) {
        if (arr[SCENARIO_ID_INDEX] != null && arr[SCENARIO_ID_INDEX].indexOf('S.') > -1) {
          const scenario = processScenario(arr, arr[SCENARIO_ID_INDEX], scenarioDirectorySinkPath);
          if (scenario) {
            if (fullOutput.scenarios) fullOutput.scenarios[arr[SCENARIO_ID_INDEX]] = scenario;

            const suite: string = arr[SCENARIO_SUITE_INDEX];
            if (fullOutput.suites && fullOutput.suites[suite]) {
              if (!fullOutput.suites[suite].scenarios) fullOutput.suites[suite].scenarios = [];
              fullOutput.suites[suite].scenarios.push(scenario.id);
            }
          }
        }
      }
    }

    // Process the test case files: input is csv (from Excel) => output is json in specified schema
    for (let i = 0; i < testCaseFiles.length; i++) {
      var filePath = path.join(testCaseDirectorySourcePath, testCaseFiles[i]);

      stdout?.write("Processing: " + testCaseFiles[i] + '\n');

      // Break down the lines into test cases
      let currentTestCase: any | undefined;
      const testCases: any = [];
      const fileData = fs.readFileSync(filePath, 'utf8');
      const records = parse(fileData, { from_line: 4 });
      for (const arr of records) {
        // Is this the first line of a test case
        if (arr[1] != null && arr[1]?.indexOf('T.') > -1 && arr[2]?.length > 0) {
           if (currentTestCase) {
             testCases.push(currentTestCase);
           }
           currentTestCase = [arr];
        } else {
          if (currentTestCase) currentTestCase.push(arr);
        }
      }
      if (currentTestCase) {
        testCases.push(currentTestCase);
      }

      // Process the test cases
      for (const testCaseRaw of testCases) {
        if (testCaseRaw[0] && testCaseRaw[0][TEST_ID_INDEX]
          && testCaseRaw[0][TEST_ID_INDEX]?.indexOf('T.') > -1
          && testCaseRaw[0][TEST_TITLE_INDEX]?.length > 0) {
          const testCase = processTestCase(testCaseRaw, testCaseRaw[0][1], testCaseDirectorySinkPath);
          if (testCase && fullOutput.testCases) fullOutput.testCases[testCase.id] = testCase;
        }
      }
    }

    // Process the assertion case files: input is csv (from Excel) => output is json in specified schema
    for (let i = 0; i < assertionFiles.length; i++) {
      var filePath = path.join(assertionDirectorySourcePath, assertionFiles[i]);

      stdout?.write("Processing: " + assertionFiles[i] + '\n');

      const fileData = fs.readFileSync(filePath, 'utf8');
      const records = parse(fileData, { from_line: 3 });
      for (const arr of records) {
        if (arr != null && (arr[1] != null && arr[1]?.indexOf('A.') > -1 && arr[2]?.length > 0)) {
          const assertion = processAssertion(arr, arr[1], assertionDirectorySinkPath);
          if (assertion && fullOutput.assertions) fullOutput.assertions[assertion.id] = assertion;
        }
      }
    }

    stdout?.write("Output full test file\n");
    writeDataToFile(JSON.stringify(fullOutput, null, 2), baseSinkDirectory + '/', 'full-test-suite')

  } catch (err: any) {
    stderr?.write(((err.message) ? err.message : err) + '\n');
    return 1;
  }

  return 0;
}


/******************* Utility function section ************************/
function processScenario(arr:Array<string>, scenarioName: string, fileWritePath: string): Scenario | undefined {
  if (scenarioName === '') return;
  let cnt = arr.length;
  if (cnt > 0) {
    var scenario = processFirstScenarioLine(arr);
    var data = JSON.stringify(scenario, null, 2);
    writeDataToFile(data, fileWritePath, scenarioName);
    return scenario;
  }
  return;
}

function processSuite(arr: Array<string>, suiteName: string, fileWritePath: string): Suite | undefined {
  if (suiteName === '') return;

  const suite: Suite = {
    id: arr[SUITE_ID_INDEX],
    title: arr[SUITE_TITLE_INDEX],
    purpose: arr[SUITE_PURPOSE_INDEX],
    scenarios: []
  }
  const data = JSON.stringify(suite, null, 2);
  writeDataToFile(data, fileWritePath, suiteName);
  return suite;
}

function processTestCase(arr: Array<Array<string>>, testCaseName: string, fileWritePath: string): TestCase | undefined {
  if (testCaseName === '') return;
  let cnt = arr.length;
  if (cnt > 0) {
    var testCase = processFirstTestLine(arr[0]);
    for(let i = 1; i < cnt; i++) {
      if (arr[i][0].indexOf('A.') == 0) {
        let assertions = testCase.assertions == null ? [] : testCase.assertions;
        // this is an assertion line
        var st = arr[i][0].substring(0, 9);
        if (st.indexOf('"') == 0) {
          st = st.substring(1);
        }
        if (st.lastIndexOf('"') == st.length-1) {
          st = st.substring(0, st.length-1);
        }
        assertions.push(...st.split(/\n/));
        testCase.assertions = assertions;
      }
      else {
        processOtherTestLines(arr[i],testCase)
      }

    }
    var data = JSON.stringify(testCase, null, 2);
    writeDataToFile(data, fileWritePath, testCaseName);
    return testCase;
  }
  return;
}

function processAssertion(arr: Array<string>, assertionName: string, fileWritePath: string): Assertion | undefined {
  if (assertionName == '') return;
  let predicate = buildAssertionPredicate(arr[ASSERTION_THEN_INDEX]);
  let assertion: Assertion = {
    id: arr[ASSERTION_ID_INDEX],
    title: arr[ASSERTION_TITLE_INDEX],
    given: processMultiLineToArray(arr[ASSERTION_GIVEN_INDEX]),
    when: processMultiLineToArray(arr[ASSERTION_WHEN_INDEX]),
    then: predicate,
    references: processReferences(arr[ASSERTION_REFERENCE_INDEX], arr[ASSERTION_ID_INDEX]),
    negative: arr[TEST_POLARITY_INDEX] == 'TRUE'? true: false,
  }

  var data = JSON.stringify(assertion, null, 2);
  writeDataToFile(data, fileWritePath, assertionName);
  return assertion;
}

function writeDataToFile(json: string, fileWritePath: string, fileName: string) {
  fs.mkdirSync(fileWritePath, { recursive: true });
  var fileName = path.join(fileWritePath, fileName + '.json');
  fs.writeFileSync(fileName, json);
}

function processMultiLineToArray(multiLineInput: string): string[] {
    var retVal : string[] = [];
    multiLineInput = cleanStringOfDoubleQuotes(multiLineInput);
    retVal = multiLineInput.split('\n');
    return retVal;
}

function buildAssertionPredicate(predicateStr: string): AssertionPredicate {
  var arr = predicateStr.split('\n');
  let predicate : AssertionPredicate = '';
  let andPredicate: AssertionPredicate[] = [];
  let orPredicate: AssertionPredicate[] = [];
  let cnt = 0;
  arr.forEach(elem => {
      cnt++;
      let isAnd = elem.substring(0, 3).match(/and/i);
      let isOr = elem.substring(0, 2).match(/or/i)
      if (isAnd == null && isOr == null){
          if (arr.length == 1) {
             predicate = elem;
          } else {
            andPredicate.push(cleanStringOfDoubleQuotes(elem));
          }
      }
      if (isAnd) {
        var st: AssertionPredicate = elem.substring(elem.toUpperCase().indexOf('AND')+ 3);
        andPredicate.push(cleanStringOfDoubleQuotes(st));
      }
      if (isOr) {
        var st: AssertionPredicate = elem.substring(elem.toUpperCase().indexOf('OR')+ 2);
        orPredicate.push(cleanStringOfDoubleQuotes(st));
      }
  })
  if (andPredicate.length > 0)
    predicate = {and: andPredicate};
  return predicate;
}

function FixString(stringToFix: string): string {
  let st = stringToFix;
  if (st.indexOf('"') == 0) {
    st = st.substring(1);
  }
  if (st.lastIndexOf('"') == st.length-1) {
    st = st.substring(0, st.length-1);
  }
  return st;
}

function processOtherTestLines(line: Array<string>, testCase: TestCase){
  let steps = testCase.steps == null ? [] : testCase.steps;
  if (line[TEST_STEP_TYPE_INDEX] != null) {
      let step: TestCaseStep;
      let stepType = line[TEST_STEP_TYPE_INDEX];
      if (stepType == "ACTION" ) {
       step = {
          type: "ACTION",
          action: line[TEST_STEP_VALUE_INDEX]
        }
        steps.push(step);
      }
      if (stepType == "WAIT" ) {
        step = {
           type: "WAIT",
           period: parseInt(line[TEST_STEP_VALUE_INDEX])
         }
         steps.push(step);
       }

       if (stepType == "UNTIL" ) {
        step = {
           type: "UNTIL",
           condition: line[TEST_STEP_VALUE_INDEX]
         }
         steps.push(step);
       }
  }
  testCase.steps = steps;

}

function processFirstTestLine(header: Array<string>): TestCase {
  let assertions: string[] = [];
  let commonAss: string = header[TEST_COMMON_ASSERTION_INDEX];
  let suiteAss: string = header[TEST_SUITE_ASSERTION_INDEX];
  var tt: Array<string> = [];
  if (commonAss != null && commonAss.indexOf('A.') >= 0) {

      assertions.push(...FixString(commonAss).split(/\n/));
      
  }
  if (suiteAss != null && suiteAss.indexOf('A.') >= 0) {
    assertions.push(...FixString(suiteAss).split(/\n/));
  }
  //header[TEST_SUITE_ASSERTION_INDEX] != null  && header[TEST_SUITE_ASSERTION_INDEX].indexOf('A.') >= 0 ? assertions.push(header[TEST_SUITE_ASSERTION_INDEX]) : null;
  //header[TEST_COMMON_ASSERTION_INDEX] != null && header[TEST_COMMON_ASSERTION_INDEX].indexOf('A.') >= 0? assertions.push(header[TEST_COMMON_ASSERTION_INDEX]) : null;
  let  cleanAssertion: string[] = [];
  assertions.forEach(x  => {
    x = x.replace(/\n|\r/g, "");
    cleanAssertion.push(x);
  });;
  let testCase: TestCase = {
    id: header[TEST_ID_INDEX],
    title: header[TEST_TITLE_INDEX],
    description: header[TEST_DESCRIPTION_INDEX],
    references: processReferences(header[TEST_REFERENCE_INDEX], header[TEST_ID_INDEX]),
    negative: header[TEST_POLARITY_INDEX] == 'TRUE'? true: false,
    preConditions: processMultiLineString(header[TEST_PRECONDITION_INDEX], header[TEST_ID_INDEX]),
    purpose: FixString(header[TEST_PURPOSE_INDEX]),
    steps: [],
    assertions: cleanAssertion
  }
  return testCase;
}

function processFirstScenarioLine(header: Array<string>): Scenario {

  let maxCnt = header.length;
  var actions: ScenarioAction[]= [];
  if (header[SCENARIO_SETUP_INDEX] != null && header[SCENARIO_SETUP_INDEX] != '') {
    let scenarioAction: ScenarioAction = {
        type: "SETUP",
        action: header[SCENARIO_SETUP_INDEX]
    }
    actions.push(scenarioAction);
  }
  if (header[SCENARIO_CLEANUP_INDEX] != null  && header[SCENARIO_CLEANUP_INDEX] != '') {
    let scenarioAction: ScenarioAction = {
      type: "CLEANUP",
      action: header[SCENARIO_CLEANUP_INDEX]
    }
    actions.push(scenarioAction);
  }
  for(let i = SCENARIO_TEST_CASES; i < maxCnt; i++) {
      if (header[i] != undefined && header[i] != '') {
        let testAction: ScenarioAction = {
          type: "TEST",
          testCase: header[i]
        }
        actions.push(testAction);
      }
  }
  let scenario: Scenario = {
    id: header[SCENARIO_ID_INDEX],
    title: header[SCENARIO_TITLE_INDEX],
    purpose: header[SCENARIO_PURPOSE_INDEX],
    description: header[SCENARIO_DESCRIPTION_INDEX],
    references: processReferences(header[SCENARIO_REFERENCES_INDEX], header[SCENARIO_ID_INDEX]),
    sequence: actions
  }
  return scenario;
}


function processMultiLineString(preconditions: string, id: string): Array<string> {
  if (preconditions == null || preconditions =='')
      return [];
  preconditions = FixString(preconditions);
  var returnArray = new Array<string>();
  returnArray= preconditions.split('\n');
  return returnArray;
}


function cleanStringOfDoubleQuotes(strIn: string): string {
  let idx: number = strIn.indexOf('""');
  while (idx > -1){
    let st1 = strIn.substring(0, idx);
    let st2 = strIn.substring(idx+1);
    strIn = st1 + st2;
    idx = strIn.indexOf('""');
  }
  let testSt = " error code is \"InvalidPageSize\"";
  let idx2: number = testSt.indexOf('\\\"');
  while (idx2 > -1){
    testSt.replace('\\\"', '')
    idx2 = testSt.indexOf('\\\"');
  }
  return strIn;
}

function splitCSVButIgnoreCommasInDoublequotes(str: string) {
  //split the str first
  //then merge the elments between two double quotes
  var delimiter = ',';
  var quotes = '"';
  var elements = str.split(delimiter);
  var newElements = [];
  for (var i = 0; i < elements.length; ++i) {
      if (elements[i].indexOf(quotes) >= 0 && isStringBalanced(elements[i]) == false) {//the left double quotes is found
          var indexOfRightQuotes = -1;
          var tmp = elements[i];
          //find the right double quotes
          for (var j = i + 1; j < elements.length; ++j) {
              if (elements[j].indexOf(quotes) >= 0) {
                  indexOfRightQuotes = j;
                  break;
              }
          }
          //found the right double quotes
          //merge all the elements between double quotes
          if (-1 != indexOfRightQuotes) {
              for (var j = i + 1; j <= indexOfRightQuotes; ++j) {
                  tmp = tmp + delimiter + elements[j];
              }
              newElements.push(tmp);
              i = indexOfRightQuotes;
          }
          else { //right double quotes is not found
              newElements.push(elements[i]);
          }
      }
      else {//no left double quotes is found
          newElements.push(elements[i]);
      }
  }
 // return elements;
 var returnedElements: string[] = [];
 newElements.forEach(element => {
    // let lineStr: string = '';
    if (element.indexOf('"') == 0) {
      element = element.substring(1);
    }
    if (element.lastIndexOf('"') == element.length-1) {
      element = element.substring(0, element.length-1);
    }
    returnedElements.push(element);
  });
  return returnedElements;
}

function isStringBalanced(str: string): boolean {
  if (str == '' || str.length < 2)
     return true;
  var quotes = '"';
  if (str.indexOf(quotes) == 0 && str.lastIndexOf(quotes) == str.length-1)
    return true;
  else
    return false;
}

function processReferences(references: string, id: string): Array<Reference> {
  if (references == null || references == '')
      return [];
  var arr = references.split('\n');
  var returnArray = new Array<Reference>();
  arr.forEach(elem => {
    var oneRefArray = elem.split(',');
    let newReference: Reference = {
      uri: ''
    };
    oneRefArray.forEach(ref => {
      ref = cleanStringOfDoubleQuotes(ref);
      let uriIdx = ref.indexOf('uri=');
      let altIdx = ref.indexOf('alt=');
      let uriSt: string = '';
      let altSt: string = '';
       if (uriIdx > altIdx) {
          uriSt= ref.substring(uriIdx+4,Math.min(altIdx == -1? ref.length:altIdx, ref.length));
          newReference.uri = uriSt;
       }
       else {
          altSt= ref.substring(altIdx+4,Math.min(uriIdx == -1? ref.length:uriIdx, ref.length));
          if (altSt !== '') {
            newReference.alt = altSt;
          }
       }
    })
    if (newReference.uri && newReference.uri !== '') returnArray.push(newReference)
  })
  return returnArray;
}
