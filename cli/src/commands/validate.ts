import { Arguments, CommandBuilder } from 'yargs';
import * as schemaValidate from '../logic/validate';

type Options = {
  type: string;
  filename: string;
  verbose: boolean | undefined;
};

export const command: string = 'validate <type> <filename>';
export const desc: string = 'Validate the <filename> against either current testdocs or changelog schema';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      verbose: { type: 'boolean' },
    })
    .positional('type', { choices: ['testdoc', 'changelog'], demandOption: true })
    .positional('filename', { type: 'string', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { type, filename, verbose } = argv;

  if (schemaValidate.validateSchema(type, filename, verbose, process.stdout, process.stderr)) {
    process.exit(1);
  } else {
    process.exit(0);
  }
};
