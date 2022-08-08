import { Arguments, CommandBuilder } from 'yargs';
import * as generators from '../logic/docgenerators';
import * as fs from 'fs';
import * as path from 'path';
import { JsonGeneratorConfig } from 'src/logic/docgenerators/json-generator-config';

type TestDocsOptions = {
  type: string;
  source: string;
  destination: string;
  cfg?: string;
};

// TODO: Add ability to set additional options per media type such as CSS for HTML or version for JSON

export const command: string = 'generate <type> <src> <dst>';
export const desc: string = 'Generate various forms of output.';

export const builder: CommandBuilder<TestDocsOptions, TestDocsOptions> = (yargs) =>
  yargs
    .positional('type', { choices: ['json', 'html', 'markdown'], demandOption: true })
    .positional('source', { type: 'string', description: 'The path and filename to the json file describing the test suite (full-test-suite.json)', demandOption: true })
    .positional('destination', { type: 'string', description: 'The path and filename for the generated output file',  demandOption: true})
    .option('cfg', { type: 'string', alias: 'c', description: 'The path and filename to the configuration file', demandOption: false})
    

export const handler = (argv: Arguments<TestDocsOptions>): void => {
  const { type, src, dst, cfg } = argv;

  let config: JsonGeneratorConfig = { title: '', description: '', cdrVersion: '', docVersion: '', changeLogUrl: '', githubRepoUrl: ''};
  if (cfg != null) {
    config = getConfiguration(cfg as string);
  }

  let result = 1;

  switch (type) {
    case 'json':
      result = generators.json(src as string, dst as string, config, process.stdout, process.stderr);
      break;
    case 'html':
      result = generators.html(src as string, dst as string, process.stdout, process.stderr);
      break;
    case 'markdown':
      result = generators.markdown(src as string, dst as string, process.stdout, process.stderr);
      break;
  }

  process.exit(result);
};


function getConfiguration(filePath: string): JsonGeneratorConfig {
  let jsonConfiguration = '';
  if (filePath != '') {
    jsonConfiguration = fs.readFileSync(filePath).toString();
  }
  return JSON.parse(jsonConfiguration);
}
