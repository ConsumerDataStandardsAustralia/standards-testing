import { BankingProductV4 } from 'consumer-data-standards/banking';
import * as fs from 'fs';
import { ConsumerDataRightTestDataJSONSchema, Customer, CustomerWrapper, Holder, HolderWrapper } from 'src/logic/schema/cdr-test-data-schema';
import { resourceLimits } from 'worker_threads';
import { Factory, FactoryOptions, Helper } from '../logic/factoryService'

const factoryId: string = "create-customers";

export class CreateCustomers extends Factory {

    constructor(options: FactoryOptions) {
        super(options, factoryId);
      }
    
    public static id: string = factoryId;

    public get briefDescription(): string {
        return "Create a set  of customers";
    }
    public get detailedDescription(): string {
        return "A set of customers with all the details";
    }
  
    public canCreateCustomers(): boolean { return true; };
    public generateCustomers(): CustomerWrapper[] | undefined {
      let result: CustomerWrapper[] = [];
      let cust: Customer = {
          firstName : "Tomas"
      }
       let cw : CustomerWrapper = {
         customerId: Helper.randomId(),
         customer: cust
       }  
       result.push(cw);    
       return result;
    }

    // public canCreateBankProducts(): boolean { return true; };
    // public generateBankProducts(): BankingProductV4[] | undefined {
    //   let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;
  
    //   let ret: BankingProductV4[] = [];
    //   for (let i = 0; i < count; i++) {
    //     const el = this.generateBankProduct();
    //     if (el) ret.push(el);
    //   }
    //   return ret;
    // }
}