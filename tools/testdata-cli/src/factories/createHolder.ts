import { HolderWrapper } from 'src/logic/schema/cdr-test-data-schema';
import { Factory, FactoryOptions, Helper } from '../logic/factoryService'

const factoryId: string = "create-holder";

export class CreateHolder extends Factory {

    constructor(options: FactoryOptions) {
        super(options, factoryId);
      }
    
    public static id: string = factoryId;

    public get briefDescription(): string {
        return "Create a single  data holders";
    }
    public get detailedDescription(): string {
        return "A single data holde with all the details";
    }
    public canCreateHolders(): boolean { return true; };
    public canCreateHolder(): boolean { return true; };
    public generateHolder(): HolderWrapper | undefined {
       let result : HolderWrapper = {
         holderId: Helper.randomId(),
         holder : {
            unauthenticated: {},
            authenticated: {}
          }
         }      
       return result;
    }

    public generateHolders(): HolderWrapper[] | undefined {
      let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;
        
      let ret: HolderWrapper[] = [];
      for (let i = 0; i < count; i++) {
        const el = this.generateHolder();
        if (el) ret.push(el);
      }
      return ret;
   }
}