import * as fs from 'fs';
import { Writable } from 'stream';
import {
  TestCasePredicate,
  AssertionPredicate,
  ConsumerDataRightTestCaseJSONSchema
} from '../../schema/cdr-test-schema.0.0.3';


// TODO: Validate source file
// TODO: Add support for additional options (like css)

// ----------------------------------------------------------------------------
// Exports
// ----------------------------------------------------------------------------

export function html(source: string, destination: string, stdout?: Writable, stderr?: Writable): number {

  // Check that the source path exists and is a file
  if (!fs.existsSync(source) || !fs.lstatSync(source).isFile()) {
    throw 'If generate type of "html" is selected then the <source> parameter ' +
          'must be a JSON file that currently exists containing the tests to ' +
          'generate the HTML from'
  }

  try {
    // Read the source JSON
    const fileData = fs.readFileSync(source, 'utf8');

    // Parse the supplied JSON file
    const testDocs = JSON.parse(fileData) as ConsumerDataRightTestCaseJSONSchema;

    // Create the html output
    const result = generateHtml(testDocs);

    // Output the result to the destination file
    fs.writeFileSync(destination, result);

  } catch (err: any) {
    stderr?.write(((err.message) ? err.message : err) + '\n');
    return 1;
  }

  return 0;
}



// ----------------------------------------------------------------------------
// HTML generation functions
// ----------------------------------------------------------------------------

const toc: any[] = [];

function generateHtml(testDocs: ConsumerDataRightTestCaseJSONSchema): string {
  const summary = generateSummarySection(testDocs);
  const suites = generateSuitesSection(testDocs);
  const scenarios = generateScenariosSection(testDocs);
  const testCases = generateTestCasesSection(testDocs);
  const assertions = generateAssertionsSection(testDocs);

  const toc = generateTableOfContents();

  const fullHtml = startDoc() +
                   toc +
                   startContent() +
                   summary +
                   suites +
                   scenarios +
                   testCases +
                   assertions +
                   endContent() +
                   endDoc();

  return fullHtml;
}

function generateSummarySection(testDocs: ConsumerDataRightTestCaseJSONSchema): string {
  let result = '';

  result += startSection('summary');

  result += header1(testDocs.title, 'introduction');
  result += text('File version: ' + testDocs.fileVersion);
  result += text('Compliant with CDR standards version ' + testDocs.standardsVersion);
  result += text(testDocs.description);

  result += endSection();

  return result;
}

function generateSuitesSection(testDocs: ConsumerDataRightTestCaseJSONSchema): string {
  let result = '';

  result += startSection('suites');

  result += header1('Test Suites', 'suites');

  let nonEmptySuiteFound = false;
  if (testDocs.suites && Object.keys(testDocs.suites).length > 0) {

    // Document each individual suite
    for (const suiteId of Object.keys(testDocs.suites)) {
      const suite = testDocs.suites[suiteId];
      if (!suite.scenarios || suite.scenarios.length === 0) continue;

      nonEmptySuiteFound = true;

      result += startSection('suite');

      result += header2(suiteId + ': ' + suite.title, createSlug('suite', suiteId));
      result += text(processNewlines(suite.description));

      if (suite.purpose) {
        result += header3('Purpose:');
        result += text(processNewlines(suite.purpose));
      }

      if (suite.references && suite.references.length > 0) {
        result += header3('References:');
        result += startUnorderedList();
        for (const reference of suite.references) {
          result += unorderedListItem(link(reference.uri, reference.alt));
        }
        result += endUnorderedList();
      }

      result += header3('Test Scenarios:');
      if (suite.scenarios && suite.scenarios.length > 0) {
        result += startUnorderedList();
        for (const scenarioId of suite.scenarios) {
          let scenarioName = scenarioId;
          if (testDocs.scenarios && testDocs.scenarios[scenarioId]) scenarioName += ': ' + testDocs.scenarios[scenarioId].title;
          result += unorderedListItem(link('#' + createSlug('scenario', scenarioId), scenarioName));
        }
        result += endUnorderedList();
      } else {
        result += text('No test scenarios defined for this test suite');
      }

      result += endSection();
    }
  }
  if (!nonEmptySuiteFound) {
    result += text('No test suites defined');
  }

  result += endSection();

  return result;
}

function generateScenariosSection(testDocs: ConsumerDataRightTestCaseJSONSchema): string {
  let result = '';

  result += startSection('scenarios');

  result += header1('Test Scenarios', 'scenarios');

  let nonEmptyScenarioFound = false;
  if (testDocs.scenarios && Object.keys(testDocs.scenarios).length > 0) {

    // Document each individual scenario
    for (const scenarioId of Object.keys(testDocs.scenarios)) {
      const scenario = testDocs.scenarios[scenarioId];
      if (!scenario.sequence || scenario.sequence.length === 0) continue;

      nonEmptyScenarioFound = true;

      result += startSection('scenario');

      result += header2(scenarioId + ': ' + scenario.title, createSlug('scenario', scenarioId));
      result += text(processNewlines(scenario.description));

      if (scenario.purpose) {
        result += header3('Purpose:');
        result += text(processNewlines(scenario.purpose));
      }

      if (scenario.references && scenario.references.length > 0) {
        result += header3('References:');
        result += startUnorderedList();
        for (const reference of scenario.references) {
          result += unorderedListItem(link(reference.uri, reference.alt));
        }
        result += endUnorderedList();
      }

      result += header3('Testing Sequence:');
      if (scenario.sequence && scenario.sequence.length > 0) {
        result += startTable(['Action No.', 'Action Type', 'Detail']);
        for (let i = 0; i < scenario.sequence.length; i++) {
          const action = scenario.sequence[i];

          // Format the scenario sequence action
          switch (action.type) {
            case 'SETUP':
              result += tableRow([(i+1).toString(), 'Setup', processNewlines(action.action)]);
              break;
            case 'TEST':
              let testCaseName = action.testCase;
              if (testDocs.testCases && testDocs.testCases[action.testCase]) testCaseName += ': ' + testDocs.testCases[action.testCase].title;
              result += tableRow([(i+1).toString(), 'Execute Test', link('#' + createSlug('testcase', action.testCase), testCaseName)]);
              break;
            case 'CLEANUP':
              result += tableRow([(i+1).toString(), 'Clean Up', processNewlines(action.action)]);
              break;
          }
        }

        result += endTable();
      } else {
        result += text('No test sequence defined for this test scenario');
      }

      result += endSection();
    }
  }
  if (!nonEmptyScenarioFound) {
    result += text('No test scenarios defined');
  }

  result += endSection();

  return result;
}

function generateTestCasesSection(testDocs: ConsumerDataRightTestCaseJSONSchema): string {
  let result = '';

  result += startSection('testcases');

  result += header1('Test Cases', 'testcases');

  let nonEmptyTestCaseFound = false;
  if (testDocs.testCases && Object.keys(testDocs.testCases).length > 0) {

    // Document each individual test case
    for (const testCaseId of Object.keys(testDocs.testCases)) {
      const testCase = testDocs.testCases[testCaseId];
      if (!testCase.steps || testCase.steps.length === 0) continue;

      nonEmptyTestCaseFound = true;

      result += startSection('testcase');

      result += header2(testCaseId + ': ' + testCase.title, createSlug('testcase', testCaseId));
      result += text(testCase.negative ? 'Negative test case' : 'Positive test case');
      result += text(processNewlines(testCase.description));

      result += header3('Story:');
      result += text(processNewlines(testCase.story));

      if (testCase.references && testCase.references.length > 0) {
        result += header3('References:');
        result += startUnorderedList();
        for (const reference of testCase.references) {
          result += unorderedListItem(link(reference.uri, reference.alt));
        }
        result += endUnorderedList();
      }

      // Pre-conditions
      result += header3('Execution Pre-conditions:');
      if (testCase.preConditions && testCase.preConditions.length > 0) {
        result += startUnorderedList();
        for (const preCondition of testCase.preConditions) {
          result += unorderedListItem(processNewlines(preCondition));
        }
        result += endUnorderedList();
      } else {
        result += text('No pre-conditions for this test case');
      }

      // Execution steps
      result += header3('Execution Steps:');
      if (testCase.steps && testCase.steps.length > 0) {
        result += startTable(['Action No.', 'Action Type', 'Detail']);
        for (let i = 0; i < testCase.steps.length; i++) {
          const step = testCase.steps[i];

          // Format the scenario sequence action
          switch (step.type) {
            case 'WAIT':
              result += tableRow([(i+1).toString(), 'Wait', `${step.period} seconds`]);
              break;
            case 'UNTIL':
              result += tableRow([(i+1).toString(), 'Wait Until', processNewlines(step.condition)]);
              break;
            case 'ACTION':
              result += tableRow([(i+1).toString(), 'Action', processNewlines(step.action)]);
              break;
            case 'ASSERTION':
              result += tableRow([(i+1).toString(), 'Assertion', processTestCasePredicate(testDocs, step.assertion)]);
              break;
          }
        }

        result += endTable();
      } else {
        result += text('No test sequence defined for this test scenario');
      }

      // Assertions
      result += header3('End State Assertions:');
      if (testCase.assertions && testCase.assertions.length > 0) {
        result += startUnorderedList();
        for (const assertionId of testCase.assertions) {
          let assertionName = assertionId;
          if (testDocs.assertions && testDocs.assertions[assertionId]) assertionName += ': ' + testDocs.assertions[assertionId].title;
          result += unorderedListItem(link('#' + createSlug('assertion', assertionId), assertionName));
        }
        result += endUnorderedList();
      } else {
        result += text('No end state ssertions defined for this test case');
      }

      result += endSection();
    }
  }
  if (nonEmptyTestCaseFound) {
    result += text('No test cases defined');
  }

  result += endSection();

  return result;
}

function generateAssertionsSection(testDocs: ConsumerDataRightTestCaseJSONSchema): string {
  let result = '';

  result += startSection('assertions');

  result += header1('Assertions', 'assertions');
  if (testDocs.assertions && Object.keys(testDocs.assertions).length > 0) {

    // Document each individual assertion
    for (const assertionId of Object.keys(testDocs.assertions)) {
      const assertion = testDocs.assertions[assertionId];

      result += startSection('assertion');

      result += header2(assertionId + ': ' + assertion.title, createSlug('assertion', assertionId));
      result += text(processNewlines(assertion.description));

      if (assertion.references && assertion.references.length > 0) {
        result += header3('References:');
        result += startUnorderedList();
        for (const reference of assertion.references) {
          result += unorderedListItem(link(reference.uri, reference.alt));
        }
        result += endUnorderedList();
      }

      result += header3('Severity:');
      switch (assertion.severity) {
        case 'INFO':
          result += text('Informational Only');
          break;
        case 'WARN':
          result += text('Warning');
          break;
        case 'FAIL':
        default:
          result += text('Critical (Test Fails)');
          break;
      }

      result += header3('Assertion Logic:');

      result += startTable([]);

      let given = '';
      for (const clause of assertion.given) {
        if (given) given += '\n';
        given += clause;
      }
      result += tableRow(['Given', processNewlines(given)]);
      let when = '';
      for (const clause of assertion.when) {
        if (when) when += '\n';
        when += clause;
      }
      result += tableRow(['When', processNewlines(when)]);
      result += tableRow(['Then', processAssertionPredicate(testDocs, assertion.then)]);

      result += endTable();

      result += endSection();
    }
  } else {
    result += text('No assertions defined');
  }

  result += endSection();

  return result;
}

function generateTableOfContents(): string {
  let result = '';

  result += startSection('toc');

  for (const tocItem of toc) {
    result += tocHeading(tocItem.level, tocItem.anchor, tocItem.text);
  }

  result += endSection();

  return result;
}

function processTestCasePredicate(testDocs: ConsumerDataRightTestCaseJSONSchema, predicate: TestCasePredicate): string {
  let result = '';

  if (typeof predicate === 'string') {
    const assertionId = predicate;
    let assertionName = assertionId;
    if (testDocs.assertions && testDocs.assertions[assertionId]) assertionName += ': ' + testDocs.assertions[assertionId].title;
    result += link('#' + createSlug('assertion', assertionId), assertionName);
  } else if (predicate.and) {
    const terms = predicate.and as TestCasePredicate[];
    if (terms.length > 0) {
      let innerResult = '';
      for (let i = 0; i < terms.length; i++) {
        innerResult += processTestCasePredicate(testDocs, terms[i]);
      }
      result += predicateOuter('AND (');
      result += predicateInner(innerResult);
      result += predicateOuter(')');
    }
  } else if (predicate.or) {
    const terms = predicate.or as TestCasePredicate[];
    if (terms.length > 0) {
      let innerResult = '';
      for (let i = 0; i < terms.length; i++) {
        innerResult += processTestCasePredicate(testDocs, terms[i]);
      }
      result += predicateOuter('OR (');
      result += predicateInner(innerResult);
      result += predicateOuter(')');
    }
  }

  return result;
}

function processAssertionPredicate(testDocs: ConsumerDataRightTestCaseJSONSchema, predicate: AssertionPredicate): string {
  let result = '';

  if (typeof predicate === 'string') {
    result += predicate;
  } else if (predicate.and) {
    const terms = predicate.and as AssertionPredicate[];
    if (terms.length > 0) {
      let innerResult = '';
      for (let i = 0; i < terms.length; i++) {
        innerResult += processAssertionPredicate(testDocs, terms[i]);
      }
      result += predicateOuter('AND (');
      result += predicateInner(innerResult);
      result += predicateOuter(')');
    }
  } else if (predicate.or) {
    const terms = predicate.or as AssertionPredicate[];
    if (terms.length > 0) {
      let innerResult = '';
      for (let i = 0; i < terms.length; i++) {
        innerResult += processAssertionPredicate(testDocs, terms[i]);
      }
      result += predicateOuter('OR (');
      result += predicateInner(innerResult);
      result += predicateOuter(')');
    }
  }

  return result;
}



// ----------------------------------------------------------------------------
// Helper functions
// ----------------------------------------------------------------------------

function startDoc(): string {
  return `<html><head><style>${defaultCss}</style></head><body>\n`;
  // return `<html><head><link rel="stylesheet" href="out.css"></head><body>\n`;
}

function endDoc(): string {
  return `</body></html>\n`;
}

function startContent(): string {
  return startSection('content');
}

function endContent(): string {
  return endSection();
}

function startSection(id: string): string {
  return `<div class="${id}">\n`;
}

function endSection(): string {
  return `</div>\n`;
}


function createSlug(prefix: string, id: string): string {
  return `${prefix}-${id}`.toLowerCase();
}

function tocHeading(level:number, anchor: string, text: string): string {
  let result = '';

  result += `<div class="toc${level}"><a href="#${anchor}">${text}</a></div>`;

  return result;
}

function header1(text: string | undefined, anchor?: string): string {
  let result = '';
  if (!text) text = '';
  if (anchor) result += `<a id="${anchor}"></a>`;
  result += `<h1 class="h1">${text}</h1>\n`;

  if (anchor) toc.push({level: 1, anchor, text})

  return result;
}

function header2(text: string | undefined, anchor?: string): string {
  let result = '';
  if (!text) text = '';
  if (anchor) result += `<a id="${anchor}"></a>`;
  result += `<h2 class="h2">${text}</h2>\n`;

  if (anchor) toc.push({level: 2, anchor, text})

  return result;
}

function header3(text: string | undefined, anchor?: string): string {
  let result = '';
  if (!text) text = '';
  if (anchor) result += `<a id="${anchor}"></a>`;
  result += `<h3 class="h3">${text}</h3>\n`;

  if (anchor) toc.push({level: 3, anchor, text})

  return result;
}

function text(text: string | undefined): string {
  let result = '';
  if (text) result += `<p class="p">${text}</p>\n`;
  return result;
}

function startUnorderedList(): string {
  return '<ul>\n';
}

function unorderedListItem(text: string | undefined): string {
  let result = '';
  if (text) result += `<li>${text}</li>\n`;
  return result;
}

function endUnorderedList(): string {
  return '</ul>\n';
}

function startTable(columns: string[]): string {
  let result = '<table>\n'
  if (columns.length > 0) {
    result += '<thead><tr>';
    for (const column of columns) {
      result += `<th>${column}</th>`;
    }
    result += '</tr></thead>\n';
  }
  result += '<tbody>\n';
  return result;
}

function tableRow(elements: string[]): string {
  let result = '<tr>';
  for (const element of elements) {
    result += `<td>${element}</td>`;
  }
  result += `</tr>\n`;
  return result;
}

function endTable(): string {
  return '</tbody>\n</table>\n';
}

function link(href: string | undefined, text: string | undefined): string {
  let result = '';
  if (href) {
    if (!text) text = href;
    result += `<a href="${href}">${text}</a>`;
  }
  return result;
}

function predicateOuter(text: string): string {
  return `<div class="predicate outer">${text}</div>\n`;
}

function predicateInner(text: string): string {
  return `<div class="predicate inner" style="margin-left:2em">${text}</div>\n`;
}

function processNewlines(text: string | undefined): string {
  let result = '';
  if (text){
    result = text.replace(/\n/, '</br>');
    result = text.replace(/\n/, '</br>');
    result = text.replace(">", '&gt;');
    result = text.replace("<", '&lt;');
  }
  return result;
}

// This is the minified version of default.css
const defaultCss = 'body{background-color:#f3f7f9;color:#333;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-size:14px;margin:0;padding:0;padding-bottom:4em}div.content div:first-of-type h1:first-of-type{margin-top:0}div{margin-top:0;padding-top:0}h1{font-size:25px;padding-top:.5em;padding-bottom:.5em;padding-left:28px;padding-right:28px;margin-bottom:21px;margin-top:2em;border-top:1px solid #ccc;border-bottom:1px solid #ccc;background-color:#fdfdfd}h2{font-size:19px;margin-top:2em;margin-bottom:0;padding-left:28px;padding-right:28px;border-top:1px solid #ccc;padding-top:1.2em;padding-bottom:.6em}h3{font-size:16px;font-weight:700;margin-bottom:0;padding-left:28px;padding-right:28px;padding-top:.8em;padding-bottom:0}p{padding-left:28px;padding-right:28px}ul li{margin-left:28px;padding-right:28px}table{margin-top:10px;margin-bottom:10px;margin-left:28px;font-size:14px;border-collapse:collapse}th{padding-left:1em;padding-right:1em;padding-top:.3em;padding-bottom:.3em;text-align:left;vertical-align:bottom}table tr:last-child{border-bottom:1px solid #ccc}td{padding-left:1em;padding-right:1em;padding-top:.6em;padding-bottom:.6em;border:0;margin:0;border-top:1px solid #eee;vertical-align:top}tbody tr:nth-child(even){background-color:#fbfcfd}tbody tr:nth-child(odd){background-color:#fff}div.content{margin-left:230px;position:relative;z-index:10;min-height:100%;padding-bottom:1px}div.toc{overflow-y:auto;overflow-x:hidden;position:fixed;z-index:30;top:0;left:0;bottom:0;width:230px;background-color:#000;font-size:13px;font-weight:700;padding-top:10px}div.toc div{padding-top:5px;padding-bottom:5px}div.toc div a{color:#2fb787;text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}div.toc1 a{font-size:13px;font-weight:700;width:210px}div.toc1{padding-left:10px}div.toc2 a{font-size:10px;font-weight:700;width:200px}div.toc2{padding-left:20px}div.toc3 a{font-size:9px;font-weight:400;width:190px}div.toc3{padding-left:30px}';
