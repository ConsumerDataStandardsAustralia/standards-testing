import { CommonSimpleAddress } from 'consumer-data-standards/banking';
import { Customer, CustomerWrapper,  HolderWrapper } from 'src/logic/schema/cdr-test-data-schema';
import { Factory, FactoryOptions, Helper } from '../../logic/factoryService'
import { faker } from '@faker-js/faker';
import { CommonEmailAddress, CommonOrganisationDetailV2, CommonPAFAddress, CommonPersonDetailV2, CommonPhoneNumber, CommonPhysicalAddressWithPurpose } from 'consumer-data-standards/common';
import { AddressPurpose, generateRandomDecimalInRangeFormatted, OrganisationType, PostalDeliveryType, RandomCommon } from '../../random-generators';
import  Utils from './utils';

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
        return `Generates set of customers with all the details
This factory supports the follow option fields:

  type:    The type must be either 'person' or 'organisation'. This will determine if a 
            CommonPersonDetail or a CommonOrganisationDetail structure will be created.

The names, addresses, and person details are randomised but realistic values.
`;
    }
  
    public canCreateCustomer(): boolean { return true; };
    public generateCustomer(holder: HolderWrapper): CustomerWrapper | undefined {
      let cust : Customer = {
        customerUType: this.customerType ? this.customerType : 'person'
      }
      if (this.customerType == 'person' || this.customerType == undefined) {
        let details = this.createPerson();
        cust.person = details;
      }

      if (this.customerType == 'organisation') {
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
    public generateCustomers(holder: HolderWrapper): CustomerWrapper[] | undefined {
      let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

      let ret: CustomerWrapper[] = [];
      for (let i = 0; i < count; i++) {
        const el = this.generateCustomer(holder);
        if (el) ret.push(el);
      }
      return ret;
    }

    private createPerson(): CommonPersonDetailV2 {
      let addressCount = Helper.generateRandomIntegerInRange(0, 3);
      let phoneCount = Helper.generateRandomIntegerInRange(0, 3);
      let emailCount = Helper.generateRandomIntegerInRange(0, 3);
      let person: CommonPersonDetailV2 = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        middleNames: [faker.name.middleName()],       
        phoneNumbers: Utils.createPhoneNumberList(phoneCount),
        emailAddresses: Utils.createEmailListList(emailCount),
        physicalAddresses: Utils.createAddressList(addressCount, 'person')
      }
      // this seems to be the range of occupation codes
      person.occupationCode = Helper.generateRandomDecimalInRange(111111, 899900, 0);
      person.occupationCodeVersion = RandomCommon.OccupationCodeVersion();
      person.lastUpdateTime = Helper.randomDateTimeInThePast();
      person.suffix = faker.name.suffix();
      person.prefix = faker.name.prefix();
      return person;
    }

    private createOrganisation(): CommonOrganisationDetailV2 {
      let addressCount = Helper.generateRandomIntegerInRange(0, 3);
      let organisation : CommonOrganisationDetailV2 = {
        physicalAddresses: Utils.createAddressList(addressCount, 'organisation'),
        agentRole: 'Unspecified',
        businessName: faker.company.name(),
        organisationType: RandomCommon.OrganisationType(),
        agentLastName: faker.name.lastName()
      }
      if (Math.random() > 0.5){
        organisation.industryCode = Helper.generateRandomDecimalInRange(111111, 899900, 0);
        organisation.industryCodeVersion = RandomCommon.IndustryVersionCode();
      }
      if (Math.random() > 0.5) organisation.establishmentDate = Helper.randomDateTimeInThePast();
      if (Math.random() > 0.5)organisation.shortName = 'Short Name';
      if (Math.random() > 0.25) organisation.registeredCountry = RandomCommon.CountryCodes3();
      if (Math.random() > 0.5) organisation.abn = faker.phone.number("###-###-###");
      if (organisation.organisationType == OrganisationType.COMPANY) 
        organisation.acn = faker.phone.number("###-###-###");

      if (Math.random() > 0.8) organisation.isACNCRegistered = true
      return organisation;
    }
}