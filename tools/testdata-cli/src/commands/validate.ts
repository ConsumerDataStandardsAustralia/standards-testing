import { Arguments, CommandBuilder } from 'yargs';
import * as schemaValidate from '../logic/validate';

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

  if (schemaValidate.validateTestDataSchema(filename, verbose, process.stdout, process.stderr)) {
    process.exit(1);
  } else {
    process.exit(0);
  }
};
