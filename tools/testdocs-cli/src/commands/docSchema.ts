import { Arguments, CommandBuilder } from 'yargs';
import cdr_test_schema from '../schema/cdr-test-schema.0.0.3.json';

const schema_version = '0.0.3';

type Options = {
  version: boolean | undefined;
};

export const command: string = 'doc-schema';
export const desc: string = 'Print out the testdocs schema currently in use (or it\'s version if --version is specified)';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      vonly: { type: 'boolean', describe: 'Only print the version number of the schema in use' },
    })

export const handler = (argv: Arguments<Options>): void => {
  const { vonly } = argv;

  if (vonly) {
    process.stdout.write(`${schema_version}\n`);
  } else {
    process.stdout.write(`${JSON.stringify(cdr_test_schema, null, 4)}\n`);
  }

  process.exit(0);
};
