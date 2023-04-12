
import { CustomerWrapper,  HolderWrapper } from 'src/logic/schema/cdr-test-data-schema';
import { Factory, FactoryOptions, Helper } from '../../logic/factoryService'
import { faker } from '@faker-js/faker';

const factoryId: string = "create-invalid-customers";

export class CreateInvalidCustomers extends Factory {

    constructor(options: FactoryOptions) {
        super(options, factoryId);
        faker.locale = 'en_AU';
    }
    
    public static id: string = factoryId;

    public get briefDescription(): string {
        return "Create a some  invalid customer";
    }
    public get detailedDescription(): string { 
        return `Generates set of customers with data NOT compliant with the technical standard
This factory does noit have any options

The names, addresses, and person details are randomised but realistic values.
`;
    }
  
    public canCreateCustomer(): boolean { return true; };
    public generateCustomer(holder: HolderWrapper): CustomerWrapper | undefined {
      let cust: any = {
          first: faker.name.firstName(),
          last: faker.name.lastName(),
          dob: faker.date.birthdate({ min: 18, max: 98}),
          address: faker.address.streetAddress()
      }
      let cw : CustomerWrapper = {
         customerId: Helper.randomId(),
         customer: cust
       }  
       return cw;
    }

    public canCreateCustomers(): boolean { return true; };
    public generateCustomers(holder: HolderWrapper): CustomerWrapper[] | undefined {
      let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

      let ret: CustomerWrapper[] = [];
      for (let i = 0; i < count; i++) {
        const el = this.generateCustomer(holder);
        if (el) ret.push(el);
      }
      return ret;
    }
}