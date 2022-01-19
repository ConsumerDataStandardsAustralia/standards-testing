import { Arguments, CommandBuilder } from 'yargs';

type Options = {
  filename: string;
  follow: boolean | undefined;
};

export const command: string = 'validate <filename>';
export const desc: string = 'Validate the tests in <filename> against the current testdocs schema';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      follow: { type: 'boolean' },
    })
    .positional('filename', { type: 'string', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { filename, follow } = argv;
  process.stdout.write(`Validating file named "${filename}"`);
  if (follow) process.stdout.write(` following $refs`);
  process.stdout.write('\n');
  process.exit(0);
};
