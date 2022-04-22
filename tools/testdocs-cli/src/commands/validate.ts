import { Arguments, CommandBuilder } from 'yargs';
import * as fs from 'fs';
import Ajv2020 from 'ajv/dist/2020';
import betterAjvErrors from 'better-ajv-errors';
import addFormats from 'ajv-formats';
import cdr_test_schema from '../schema/cdr-test-schema.0.0.3.json';

type Options = {
  filename: string;
  verbose: boolean | undefined;
};

export const command: string = 'validate <filename>';
export const desc: string = 'Validate the tests in <filename> against the current testdocs schema';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      verbose: { type: 'boolean' },
    })
    .positional('filename', { type: 'string', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { filename, verbose } = argv;

  if (verbose) process.stdout.write(`Validating "${filename}"\n`);

  // Read in the file specified
  let file = "";
  try {
    if (verbose) process.stdout.write(`    Reading "${filename}"\n`);
    file = fs.readFileSync(filename,'utf8');
  } catch (err) {
    process.stderr.write(`Failed to read "${filename}"\n`)
    process.stderr.write((err as any).toString() + '\n');
    process.exit(1);
  }

  // Parse the input file as JSON to ensure it is well formatted JSON
  let data: any;
  try {
    if (verbose) process.stdout.write(`    JSON parsing the file\n`);
    data = JSON.parse(file);
  } catch (err) {
    process.stderr.write(`Failed to JSON parse "${filename}"\n`)
    process.exit(1);
  }

  // Compile the testdocs schema so it can be used for validation
  let validate: any;
  try {
    const ajv = new Ajv2020();
    addFormats(ajv);
    if (verbose) process.stdout.write(`    Compiling schema\n`);
    validate = ajv.compile(cdr_test_schema as any);
  } catch (err) {
    process.stderr.write(`Failed to compile schema\n`)
    process.stderr.write((err as any).toString() + '\n');
    process.exit(1);
  }

  // Validete the input file and report errors or success
  if (verbose) process.stdout.write(`    Validating against testdocs schema\n`);
  if (validate(data)) {
    process.stdout.write(`"${filename}" validated successfully\n`);
  } else {
    process.stderr.write(`"${filename}" validation failed:\n`)
    const output = betterAjvErrors(cdr_test_schema, data, validate.errors, {indent: 4});
    process.stderr.write(output + '\n');
    process.exit(1);
  }

  process.exit(0);
};
