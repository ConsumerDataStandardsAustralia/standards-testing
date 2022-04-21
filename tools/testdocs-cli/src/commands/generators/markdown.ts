import * as fs from 'fs';
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

export function markdown(source: string, destination: string): number {

  // Check that the source path exists and is a file
  if (!fs.existsSync(source) || !fs.lstatSync(source).isFile()) {
    throw 'If generate type of "markdown" is selected then the <source> parameter ' +
          'must be a JSON file that currently exists containing the tests to ' +
          'generate the markdown from'
  }

  try {
    // Read the source JSON
    const fileData = fs.readFileSync(source, 'utf8');

    // Parse the supplied JSON file
    const testDocs = JSON.parse(fileData) as ConsumerDataRightTestCaseJSONSchema;

    // Create the html output
    const result:string = `# Output from ${testDocs.title}`; //XXXX

    // Output the result to the destination file
    fs.writeFileSync(destination, result);

  } catch (err: any) {
    console.error((err.message) ? err.message : err);
    return 1;
  }

  return 0;
}
