import { Factory } from '.';
import { factories } from '../../factories';

export const getFactoryIds = (): string[] => {
  const ids: string[] = [];

  for (const id of Object.keys(factories)) {
    ids.push(id);
  }

  return ids;
}

export const createFactory = (id: string, options: any): Factory | undefined => {
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
