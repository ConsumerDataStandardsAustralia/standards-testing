import { Arguments, CommandBuilder } from 'yargs';
import * as generators from './generators';

type Options = {
  type: string;
  source: string;
  destination: string;
};

export const command: string = 'generate <type> <src> <dst>';
export const desc: string = 'Generate various forms of output.';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .positional('type', { choices: ['json', 'html', 'markdown'], demandOption: true })
    .positional('source', { type: 'string', demandOption: true })
    .positional('destination', { type: 'string', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { type, src, dst } = argv;

  let result = 1;

  switch (type) {
    case 'json':
      result = generators.json(src as string, dst as string);
      break;
    case 'html':
      //XXXX
      break;
    case 'markdown':
      //XXXX
      break;
  }

  process.exit(result);
};
