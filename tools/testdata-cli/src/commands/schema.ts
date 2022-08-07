import { Arguments, CommandBuilder } from 'yargs';
import * as schema from '../logic/schema';

type Options = {
  vonly: boolean | undefined;
};

export const command: string = 'schema';
export const desc: string = 'Print out the testdata schema currently in use (or it\'s version if --vonly is specified)';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      vonly: { type: 'boolean', describe: 'Only print the version number of the schema in use' },
    })

export const handler = (argv: Arguments<Options>): void => {
  const { vonly } = argv;

  if (vonly) {
    process.stdout.write(`${schema.testDataVersion()}\n`);
  } else {
    process.stdout.write(`${JSON.stringify(schema.testDataSchema(), null, 4)}\n`);
  }

  process.exit(0);
};
