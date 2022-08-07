import { Factory, FactoryOptions } from '.';
import { factories } from '../../factories';

export const createFactory = (id: string, options: FactoryOptions): Factory | undefined => {
  try {
    if (factories[id]) {
      return factories[id](options);
    } else {
      console.error(`Factory with ID '${id}' does not exist`)
    }
  } catch (err) {
    console.error(`Failed to create factory with ID '${id}'`);
  }
}
