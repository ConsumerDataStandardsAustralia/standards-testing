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
  
    public canCreateCustomer(): boolean { return true; };
    public generateCustomer(): CustomerWrapper | undefined {
      let cust: Customer = {
          firstName : "Tomas"
      }
       let cw : CustomerWrapper = {
         customerId: Helper.randomId(),
         customer: cust
       }  
   
       return cw;
    }

    public canCreateCustomers(): boolean { return true; };
    public generateCustomers(): CustomerWrapper[] | undefined {
      let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

      let ret: CustomerWrapper[] = [];
      for (let i = 0; i < count; i++) {
        const el = this.generateCustomer();
        if (el) ret.push(el);
      }
      return ret;
    }

}