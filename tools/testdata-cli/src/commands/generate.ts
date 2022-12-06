import { Arguments, CommandBuilder } from 'yargs';
import { generateData } from '../logic/factoryService';
import * as fs from 'fs';
import { Options } from '../logic/options';

type ArgOptions = {
  opts: string;
  dst: string;
  verbose: boolean | undefined;
};

export const command: string = 'generate <opts> <dst>';
export const desc: string = 'Read in the specified options file and generate a data file in the file specified as the destination.  The resulting file will contain JSON consistent with the test data schema supported by the CLI.';

export const builder: CommandBuilder<ArgOptions, ArgOptions> = (yargs) =>
  yargs
    .positional('opts', { type: 'string', description: 'The path and filename to the json file containing the options that will drive the file generation', demandOption: true })
    .positional('dst', { type: 'string', description: 'The path and filename for the generated output file',  demandOption: true})
    .options({
      verbose: { type: 'boolean', describe: 'Verbose console messaging' },
    })


export const handler = (argv: Arguments<ArgOptions>): void => {
  const { opts, dst, verbose } = argv;

  // Load the options
  let options: Options = {};
  try {
    options = getOptions(opts as string);
  } catch (err) {
    console.error('Failed to load the specified options file');
    process.exit(1);
  }

  // Default the general options if not specified
  if (!options?.general) {
    options.general = {
      fileVersion: '1.0.0',
      standardsVersion: '1.18.0',
      title: 'Automatically generated data file',
      description: 'Test data generated by the CDR Test Data CLI'
    };
  }

  process.exit(generateData(options, dst, !!verbose));
};


function getOptions(filePath: string): Options {
  let optionsText = '';
  if (filePath != '') {
    optionsText = fs.readFileSync(filePath).toString();
  }
  return JSON.parse(optionsText);
}
