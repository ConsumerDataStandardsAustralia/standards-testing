import { EnergyAccountWrapper, HolderWrapper } from 'src/logic/schema/cdr-test-data-schema';
import { Factory, FactoryOptions, Helper } from '../../logic/factoryService'

const factoryId: string = "create-invalid-energy-account";

export class CreateInvalidEnergyAccountData extends Factory {

    constructor(options: FactoryOptions) {
        super(options, factoryId);
      }
    
    public static id: string = factoryId;

    public get briefDescription(): string {
        return "Create some invalid energy account data";
    }
    public get detailedDescription(): string {
        return `Generates energy account data NOT compliant with the technical standard
        This factory does noit have any options`
    }
    public canCreateEnergyAccounts(): boolean { return true; };
    public canCreateEnergyAccount(): boolean { return true; };
    public generateEnergyAccount(): EnergyAccountWrapper | undefined {
       
       let energyAccount : any = {
            accountId: Helper.randomId(),
            accountBalance: Helper.generateRandomDecimalInRange(100,200),
            dueDate: Helper.randomDateTimeInTheFuture(),
            invoiceAmount: Helper.generateRandomDecimalInRange(10, 500)
         } 
         let wrapper: EnergyAccountWrapper = {
            account : energyAccount
         }; 
   
       return wrapper;
    }

    public generateEnergyAccounts(): EnergyAccountWrapper[] | undefined {
      let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;
        
      let ret: any[] = [];
      for (let i = 0; i < count; i++) {
        const el = this.generateHolder();
        if (el) ret.push(el);
      }
      return ret;
   }
}