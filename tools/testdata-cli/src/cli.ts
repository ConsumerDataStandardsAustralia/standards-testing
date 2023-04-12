#!/usr/bin/env node

import yargs from 'yargs';
import { commands } from './commands';

const argv = yargs
  // Use the commands directory to scaffold.
  .command(commands as any)
  // Enable strict mode.
  .strict()
  // Useful aliases.
  .alias({
    h: 'help',
    f: 'factory',
    fs: 'factories',
    g: 'generate',
    s: 'schema',
    vd: 'validate'
  })
  .argv;
