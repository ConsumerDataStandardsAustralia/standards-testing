import { Arguments, CommandBuilder } from 'yargs';
import * as schema from '../schema/cdr-test-schema.json';

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
    process.stdout.write(`${schema.properties.fileVersion}\n`);
  } else {
     process.stdout.write(`${JSON.stringify(schema, null, 4)}\n`);
  }

  process.exit(0);
};
