import { Factory, FactoryOptions } from '../logic/factoryService'

export class loadStatic extends Factory {

  constructor(options: FactoryOptions) {
    super(options);
  }

  public get briefDescription(): string {
    return "Load data from a static file";
  }

  public get detailedDescription(): string {
    return "XXXX";
  }

  public canCreateFullData(): boolean { return true; };
}
