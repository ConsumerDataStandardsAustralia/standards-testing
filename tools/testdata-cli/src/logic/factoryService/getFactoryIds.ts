import { factories } from '../../factories';

export const getFactoryIds = (): string[] => {
  const ids: string[] = [];

  for (const id of Object.keys(factories)) {
    ids.push(id);
  }

  return ids;
}
