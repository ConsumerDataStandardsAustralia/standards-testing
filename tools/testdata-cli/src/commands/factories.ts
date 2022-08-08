import {
  Arguments,
  CommandBuilder
} from 'yargs';
import {
  getFactoryIds,
  createFactory
}
from '../logic/factoryService';

type Options = {
};

export const command: string = 'factories';
export const desc: string = 'List the factories that are currently implemented with a short description of each factory describing its purpose.';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs

export const handler = (argv: Arguments<Options>): void => {
  let result = 1;

  try {
    for (const id of getFactoryIds()) {
      try {
        const factory = createFactory(id, {});
        if (factory) {
          console.log(`${id}: ${factory.briefDescription}`);
        }
      } catch (_) {}
    }
    result = 0;
  } catch (err) {
    console.error (`Error obtaining factory information`);
  }

  process.exit(result);
};
