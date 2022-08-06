import { Factory } from '../logic/factoryService'

export class loadStatic extends Factory {

  constructor(options: any) {
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
