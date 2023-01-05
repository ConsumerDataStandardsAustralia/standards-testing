import { BankingProductV4 } from 'consumer-data-standards/banking';
import * as fs from 'fs';
import { ConsumerDataRightTestDataJSONSchema, Customer, CustomerWrapper, Holder, HolderWrapper } from 'src/logic/schema/cdr-test-data-schema';
import { resourceLimits } from 'worker_threads';
import { Factory, FactoryOptions, Helper } from '../logic/factoryService'
import { faker } from '@faker-js/faker';
import { CommonOrganisationDetailV2, CommonPersonDetailV2, CommonPhysicalAddressWithPurpose } from 'consumer-data-standards/common';
const factoryId: string = "create-customers";

export class CreateCustomers extends Factory {

    constructor(options: FactoryOptions) {
        super(options, factoryId);
        this.customerType = options.options?.type;
        faker.locale = 'en_AU';
    }
    
    private customerType: any; 
    public static id: string = factoryId;

    public get briefDescription(): string {
        return "Create a set  of customers";
    }
    public get detailedDescription(): string {
        return "A set of customers with all the details";
    }
  
    public canCreateCustomer(): boolean { return true; };
    public generateCustomer(): CustomerWrapper | undefined {
      let cust : Customer = {
        customerUType: this.customerType ? this.customerType : 'person'
      }
      if (this.customerType == 'person') {
        let details = this.createPerson();
        cust.person = details;
      }

      if (this.customerType == 'orgonisation') {
        let details = this.createOrganisation();
        cust.organisation = details;
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

    private createPerson(): CommonPersonDetailV2 {
      let person: CommonPersonDetailV2 = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        middleNames: [faker.name.middleName()],
        phoneNumbers: [{
          isPreferred: true,
          purpose: 'HOME',
          countryCode: '+61',
          areaCode: '2',
          number: faker.phone.number('0#-####-####'),
          extension: 'x34',
          fullNumber: faker.phone.number('+61 0#-#### ####')
        }],
        emailAddresses: [{
          isPreferred: true,
          purpose: 'HOME',
          address: faker.internet.email()
        }
        ],
        physicalAddresses: []
      }
      let addressList: CommonPhysicalAddressWithPurpose[] = [];
      let address: CommonPhysicalAddressWithPurpose = {
        purpose: 'OTHER',
        addressUType: 'paf',
        paf: {
          mailingName: 'Home address',
          localityName: '',
          addressLine1: faker.address.street(),
          postcode: faker.address.zipCode('####'),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'AUS'
        }
      }
      addressList.push(address);
      person.physicalAddresses = addressList;
      return person;
    }

    private createOrganisation(): CommonOrganisationDetailV2 {
      let organisation : CommonOrganisationDetailV2 = {
        physicalAddresses: [],
        agentLastName: '',
        agentRole: '',
        businessName: '',
        organisationType: 'OTHER'
      }
      return organisation;
    }

}