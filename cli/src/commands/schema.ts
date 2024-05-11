import { Arguments, CommandBuilder } from 'yargs';
import testdoc_schema from '../schemas/cdr-test-doc-schema.json';
import changelog_schema from '../schemas/cdr-test-changelog-schema.json';

type Options = {
  type: string;
};

export const command: string = 'schema <type>';
export const desc: string = 'Prints out the testdoc or changelog schema currently in use.';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .positional('type', { choices: ['testdoc', 'changelog'], demandOption: true })
    
export const handler = (argv: Arguments<Options>): void => {
  const { type } = argv;

  console.log(type)
  switch (type) {
    case 'testdoc': 
      process.stdout.write(`${JSON.stringify(testdoc_schema, null, 4)}\n`);
    case 'changelog': 
      process.stdout.write(`${JSON.stringify(changelog_schema, null, 4)}\n`);
  }

  process.exit(0);
};
