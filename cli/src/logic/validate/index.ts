import * as fs from 'fs';
import { Writable } from 'stream';
import Ajv2020 from 'ajv/dist/2020';
import betterAjvErrors from 'better-ajv-errors';
import addFormats from 'ajv-formats';
import { changeLogSchema, testDocSchema } from '../schemas';

export function validateSchema(type: string, filename: string, verbose?: boolean, stdout?: Writable, stderr?: Writable): boolean {
  
  const schema = type == 'testdoc' ? testDocSchema() : changeLogSchema();
  
  if (verbose) stdout?.write(`Validating "${filename}"\n`);

  // Read in the file specified
  let file = "";
  try {
    if (verbose) stdout?.write(`    Reading "${filename}"\n`);
    file = fs.readFileSync(filename,'utf8');
  } catch (err) {
    stderr?.write(`Failed to read "${filename}"\n`)
    stderr?.write((err as any).toString() + '\n');
    process.exit(1);
  }

  // Parse the input file as JSON to ensure it is well formatted JSON
  let data: any;
  try {
    if (verbose) stdout?.write(`    JSON parsing the file\n`);
    data = JSON.parse(file);
  } catch (err) {
    stderr?.write(`Failed to JSON parse "${filename}"\n`)
    return false;
  }

  // Compile the testdocs schema so it can be used for validation
  let validate: any;
  try {
    const ajv = new Ajv2020();
    addFormats(ajv);
    if (verbose) stdout?.write(`    Compiling ${type} schema\n`);
    validate = ajv.compile(schema as any);
  } catch (err) {
    stderr?.write(`Failed to compile ${type} schema\n`)
    stderr?.write((err as any).toString() + '\n');
    return false;
  }

  // Validate the input file and report errors or success
  if (verbose) stdout?.write(`    Validating against ${type} schema\n`);
  if (validate(data)) {
    stdout?.write(`"${filename}" validated successfully\n`);
  } else {
    stderr?.write(`"${filename}" validation failed:\n`)
    const output = betterAjvErrors(schema, data, validate.errors, {indent: 4});
    stderr?.write(output + '\n');
    return false;
  }

  return true;
};
