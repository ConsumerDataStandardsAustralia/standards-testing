import { Arguments, CommandBuilder } from 'yargs';
import cdr_test_schema from '../schema/cdr-test-schema.0.0.1.json';

const schema_version = '0.0.2';

type Options = {
  version: boolean | undefined;
};

export const command: string = 'schema';
export const desc: string = 'Print out the testdocs schema currently in use (or it\'s version if --version is specified)';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      version: { type: 'boolean' },
    })

export const handler = (argv: Arguments<Options>): void => {
  const { version } = argv;

  if (version) {
    process.stdout.write(`${schema_version}\n`);
  } else {
    process.stdout.write(`${JSON.stringify(cdr_test_schema, null, 4)}\n`);
  }

  process.exit(0);
};
