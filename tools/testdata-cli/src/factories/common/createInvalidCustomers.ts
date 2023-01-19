import { CommonSimpleAddress } from 'consumer-data-standards/banking';
import { Customer, CustomerWrapper,  HolderWrapper } from 'src/logic/schema/cdr-test-data-schema';
import { Factory, FactoryOptions, Helper } from '../../logic/factoryService'
import { faker } from '@faker-js/faker';
import { CommonEmailAddress, CommonOrganisationDetailV2, CommonPAFAddress, CommonPersonDetailV2, CommonPhoneNumber, CommonPhysicalAddressWithPurpose } from 'consumer-data-standards/common';
import { AddressPurpose, generateRandomDecimalInRangeFormatted, OrganisationType, PostalDeliveryType, RandomCommon } from '../../random-generators';
import  Utils from './utils';

const factoryId: string = "create-invalid-customers";

export class CreateInvalidCustomers extends Factory {

    constructor(options: FactoryOptions) {
        super(options, factoryId);
        faker.locale = 'en_AU';
    }
    
    private customerType: any; 
    public static id: string = factoryId;

    public get briefDescription(): string {
        return "Create a some  of customers";
    }
    public get detailedDescription(): string { 
        return `Generates set of customers with all the details
This factory supports the follow option fields:

  type:    The type must be either 'person' or 'organisation'. This will determine if a 
            CommonPersonDetail or a CommonOrganisationDetail structure will be created.

The names, addresses, and person details are randomised but realistic values.
`;
    }
  
    public canCreateCustomer(): boolean { return true; };
    public generateCustomer(holder: HolderWrapper): CustomerWrapper | undefined {
      let cust: any = {
          first: 'Tomas',
          last: 'Not my Last name',
          dob: 2345676787
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