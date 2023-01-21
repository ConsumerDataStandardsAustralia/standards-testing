import * as fs from 'fs';
import { ConsumerDataRightTestDataJSONSchema } from 'src/logic/schema/cdr-test-data-schema';
import { Factory, FactoryOptions } from '../logic/factoryService'

const factoryId: string = "general-load-static";

export class LoadStatic extends Factory {

  constructor(options: FactoryOptions) {
    super(options, factoryId);
  }

  public static id: string = factoryId;

  public get briefDescription(): string {
    return "Load data from a static file";
  }

  public get detailedDescription(): string {
    return `
    This is
    the detailed
    description
    `;
  }

  public canCreateFullData(): boolean { return true; };

  public generateFullData(data: ConsumerDataRightTestDataJSONSchema): ConsumerDataRightTestDataJSONSchema | undefined {
    let result: ConsumerDataRightTestDataJSONSchema = JSON.parse(JSON.stringify(data));

    if (this.options?.options?.source) {
      try {
        if (this.options.general?.fileVersion) result.fileVersion = this.options.general?.fileVersion;
        if (this.options.general?.standardsVersion) result.standardsVersion = this.options.general?.standardsVersion;
        if (this.options.general?.title) result.title = this.options.general?.title;
        if (this.options.general?.description) result.description = this.options.general?.description;

        const dataText = fs.readFileSync(this.options.options.source as string).toString();
        const newData = JSON.parse(dataText);

        if (newData.fileVersion) result.fileVersion  = newData.fileVersion;
        if (newData.standardsVersion) result.fileVersion = newData.fileVersion;
        if (newData.title) result.title = newData.title;
        if (newData.description) result.description = newData.description;
        if (newData.holders) result.holders = newData.holders;
        if (newData.clientCache) result.clientCache = newData.clientCache;
        if (newData.registerCache) result.registerCache = newData.registerCache;

      } catch (err) {
        console.error(err);
        console.error(`ERROR: Failed to load data from static file ${this.options.options.source}`);
      }
    }

    return result;
  }
}
