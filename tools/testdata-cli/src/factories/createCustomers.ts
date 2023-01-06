import { BankingProductV4, CommonSimpleAddress } from 'consumer-data-standards/banking';
import * as fs from 'fs';
import { ConsumerDataRightTestDataJSONSchema, Customer, CustomerWrapper, Holder, HolderWrapper } from 'src/logic/schema/cdr-test-data-schema';
import { resourceLimits } from 'worker_threads';
import { Factory, FactoryOptions, Helper } from '../logic/factoryService'
import { faker } from '@faker-js/faker';
import { CommonEmailAddress, CommonOrganisationDetailV2, CommonPAFAddress, CommonPersonDetailV2, CommonPhoneNumber, CommonPhysicalAddressWithPurpose } from 'consumer-data-standards/common';
import { RandomCommon } from '../random-generators';

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
      
      let person: CommonPersonDetailV2 = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        middleNames: [faker.name.middleName()],       
        phoneNumbers: this.createPhoneNumberList(3),
        emailAddresses: this.createEmailListList(2),
        physicalAddresses: this.createAddressList(3)
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
      let organisation : CommonOrganisationDetailV2 = {
        physicalAddresses: this.createAddressList(3),
        agentLastName: '',
        agentRole: '',
        businessName: '',
        organisationType: 'OTHER'
      }
      return organisation;
    }

    private createAddressList(cnt: number):CommonPhysicalAddressWithPurpose[] {
      let addressList: CommonPhysicalAddressWithPurpose[] = [];
      for(let i = 0; i < cnt; i++) {
        let address: CommonPhysicalAddressWithPurpose = {
          purpose: RandomCommon.AddressPurpose(),
          addressUType: 'paf',
          paf: {
            mailingName: 'Home address',
            localityName: faker.address.city(),
            addressLine1: faker.address.street(),
            postcode: faker.address.zipCode('####'),
            city: faker.address.cityName(),
            state: faker.address.state(),
            country: 'AUS'
          }
        }
        addressList.push(address);
      }
      return addressList;
    }

    private createPhoneNumberList(cnt: number): CommonPhoneNumber[] {
      let areaCode: string =  RandomCommon.AreaCode();
      let phoneList: CommonPhoneNumber[] = [];
      for (let i = 0; i < cnt; i++) {
        let phoneNumber: CommonPhoneNumber = {
          isPreferred: true,
          purpose: RandomCommon.PhoneNumberPurpose(),
          countryCode: '+61',
          areaCode: areaCode,
          number: faker.phone.number(`${areaCode}-####-####`),
          extension: 'x34',
          fullNumber: faker.phone.number(`+61 ${areaCode}-#### ####`)
        }
        phoneList.push(phoneNumber);
      }
      return phoneList;
    }

    private createEmailListList(cnt: number): CommonEmailAddress[] {
      let emailList: CommonEmailAddress[] = [];
      for (let i = 0; i < cnt; i++) {
        let emailPurpose = RandomCommon.EmailPurpose()
        let email: CommonEmailAddress = {
          isPreferred: (i <= 0), //first email is the preferred one
          purpose: RandomCommon.EmailPurpose(),
          address: faker.internet.email()
        };
        emailList.push(email);
      }

      return emailList;
    }

    private createCommonSimpleAddress(): CommonSimpleAddress {
        let address: CommonSimpleAddress = {
          addressLine1: '',
          city: '',
          state: ''
        }
        return address;
    }

    private createPafAddress(): CommonPAFAddress {
      let address: CommonPAFAddress = {
        localityName: '',
        postcode: '',
        state: ''
      }
      return address;
  }
}