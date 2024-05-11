import { Arguments, CommandBuilder } from 'yargs';
import * as generators from '../logic/docgenerators';

type TestDocsOptions = {
  type: string;
  source: string;
  destination: string;
};

// TODO: Add ability to set additional options per media type such as CSS for HTML or version for JSON

export const command: string = 'generate <type> <src> <dst>';
export const desc: string = 'Generate various forms of output.';

export const builder: CommandBuilder<TestDocsOptions, TestDocsOptions> = (yargs) =>
  yargs
    .positional('type', { choices: ['html', 'markdown'], demandOption: true })
    .positional('source', { type: 'string', description: 'The path and filename to the json file describing the test suite (full-test-suite.json)', demandOption: true })
    .positional('destination', { type: 'string', description: 'The path and filename for the generated output file', demandOption: true })

export const handler = (argv: Arguments<TestDocsOptions>): void => {
  const { type, src, dst } = argv;

  let result = 1;

  switch (type) {
    case 'html':
      result = generators.html(src as string, dst as string, process.stdout, process.stderr);
      break;
    case 'markdown':
      result = generators.markdown(src as string, dst as string, process.stdout, process.stderr);
      break;
  }

  process.exit(result);
};
