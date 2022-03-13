import express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';
import * as events from 'events';
import { TestCase, Reference, TestCaseStep, Assertion, AssertionPredicate } from './test-schema-definitions';

const lineReader = require('line-reader');


const TEST_ID_INDEX: number = 1;
const TEST_TITLE_INDEX: number = 4;
const TEST_REFERENCE_INDEX: number = 5;
const TEST_POLARITY_INDEX: number = 6;
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


const app = express();
const port = 3000;

// set to whatever you need to
const baseSourceDirectory: string = './source-files';
const baseSinkDirectory: string = './output-files'

const testCaseDirectorySourcePath = path.join(baseSourceDirectory, '/test-cases/' );
const testCaseDirectorySinkPath = path.join(baseSinkDirectory, '/test-cases/' );

const assertionDirectorySourcePath = path.join(baseSourceDirectory, '/assertions/' );
const assertionDirectorySinkPath = path.join(baseSinkDirectory, '/assertions/' );

const scenarioDirectorySourcePath = path.join(baseSourceDirectory, '/scenarios/' );
const scenarioDirectorySinkPath = path.join(baseSinkDirectory, '/scenarios/' );

var testCaseFiles = fs.readdirSync(testCaseDirectorySourcePath);
var assertionFiles = fs.readdirSync(assertionDirectorySourcePath);

// Process the test case files: input is csv (from Excel) => output is json in specified schema
for (let i = 0; i < testCaseFiles.length; i++) {
  var filePath = path.join(testCaseDirectorySourcePath, testCaseFiles[i]);

    
  console.log("Processing: " + testCaseFiles[i]);
  let lineCount = 0;
  let firstCase = true;
  let linesForTestCase = 0;
  let currentTestCase = '';
  let lastTestCase = '';
  //let testCaseLines = [];
  let testCaseLines: Array<Array<string>> = [];
  lineReader.eachLine(filePath, {separator: '\r\n'}, function(line:string, last: boolean) {
      lineCount++;
      var idx = testCaseFiles[i].indexOf('Test Cases');
      var fileWritePath = path.join(testCaseDirectorySinkPath, testCaseFiles[i].substring(0, idx-1)) + '/';
      // ignore the first three lines    
      if (lineCount > 3)
      {
          var arr: Array<string> = splitCSVButIgnoreCommasInDoublequotes(line);
          if (arr[1] != null && arr[1].indexOf('T.') > -1)
          {
            // This is thew firs line of a test case          
             if (firstCase) {
               firstCase = false;
               currentTestCase = arr[1];
               lastTestCase = currentTestCase;
               testCaseLines.push(arr);
             } else {
              processTestCase(testCaseLines, lastTestCase, fileWritePath);
              currentTestCase = arr[1];
              lastTestCase = currentTestCase;
              linesForTestCase = 0;
              testCaseLines = [];
              testCaseLines.push(arr);
             }
          }
          else {
            linesForTestCase++;
            if (lastTestCase == currentTestCase ) {
              testCaseLines.push(arr);
            } else {              
              currentTestCase = '';        
            }
          }
          if (last == true){
            processTestCase(testCaseLines, lastTestCase, fileWritePath);  
          } 
      }    
  }); 
}

// Process the assertion case files: input is csv (from Excel) => output is json in specified schema
for (let i = 0; i < assertionFiles.length; i++) {
  var filePath = path.join(assertionDirectorySourcePath, assertionFiles[i]);
    
  console.log("Processing: " + assertionFiles[i]);
  let lineCount = 0;
  let firstAssertion = true;

  let currentAssertionName = '';
  let lastAssertionName = '';
  let assertion = [];
  let assertionLines: Array<string> = [];

  lineReader.eachLine(filePath, {separator: '\r\n'}, function(line:string, last: boolean) {
      lineCount++;
      // ignore the first two lines  
      var idx = assertionFiles[i].indexOf('Assertions');
      var fileWritePath = path.join(assertionDirectorySinkPath, assertionFiles[i].substring(0, idx-1)) + '/';  
      if (lineCount > 2)
      {

          let arr = splitCSVButIgnoreCommasInDoublequotes(line);
          if (arr != null && (arr[1] != null && arr[1].indexOf('A.') > -1))
          {
              processAssertion(arr, arr[1], fileWritePath);
          }
          if (last == true){
            processAssertion(arr, lastAssertionName, fileWritePath);  
          } 
      }    
  }); 
}


/******************* Utility function section ************************/
function processTestCase(arr: Array<Array<string>>, testCaseName: string, fileWritePath: string) {
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
            //returnedElements.push(element);
            assertions.push(st);
            testCase.assertions = assertions;
        }
        else {
          processOtherTestLines(arr[i],testCase)
        }
        
      }
      //const writeFile = path.join(testCaseDirectorySinkPath, testCaseName + '.json' );
      //var stream = fs.createWriteStream(writeFile);
      var data = JSON.stringify(testCase, null, 2);
      writeDataToFile(data, fileWritePath, testCaseName);
     // stream.write(data);
     // stream.end();
  }


}

function processAssertion(arr: Array<string>, assertionName: string, fileWritePath: string){
  if (assertionName == '')
    return;
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

}

function writeDataToFile(json: string, fileWritePath: string, fileName: string) {
  fs.mkdir(fileWritePath, { recursive: true }, (err) => {
    if (err) throw err;
  });
  var fileName = fileWritePath  + fileName + '.json' 
  fs.writeFile( fileName, json, (err) => {
    if (err) console.error(err);
  });
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
  if (commonAss != null && commonAss.indexOf('A.') >= 0) {
      assertions.push(FixString(commonAss));
  }
  if (suiteAss != null && suiteAss.indexOf('A.') >= 0) {
    assertions.push(FixString(suiteAss));
  }
  //header[TEST_SUITE_ASSERTION_INDEX] != null  && header[TEST_SUITE_ASSERTION_INDEX].indexOf('A.') >= 0 ? assertions.push(header[TEST_SUITE_ASSERTION_INDEX]) : null;
  //header[TEST_COMMON_ASSERTION_INDEX] != null && header[TEST_COMMON_ASSERTION_INDEX].indexOf('A.') >= 0? assertions.push(header[TEST_COMMON_ASSERTION_INDEX]) : null;

  let testCase: TestCase = {
    id: header[TEST_ID_INDEX],
    title: header[TEST_TITLE_INDEX],
    description: header[TEST_DESCRIPTION_INDEX],
    references: processReferences(header[TEST_REFERENCE_INDEX], header[TEST_ID_INDEX]),
    negative: header[TEST_POLARITY_INDEX] == 'TRUE'? true: false,
    preConditions: processPreConditions(header[TEST_PRECONDITION_INDEX], header[TEST_ID_INDEX]),
    steps: [],
    assertions: assertions
  }
  return testCase;
}

function processPreConditions(preconditions: string, id: string): Array<string> {
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
    returnArray.push(newReference)
  })
  return returnArray;
}

