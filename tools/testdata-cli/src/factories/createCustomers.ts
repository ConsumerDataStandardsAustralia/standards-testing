import { CommonSimpleAddress } from 'consumer-data-standards/banking';
import { Customer, CustomerWrapper,  HolderWrapper } from 'src/logic/schema/cdr-test-data-schema';
import { Factory, FactoryOptions, Helper } from '../logic/factoryService'
import { faker } from '@faker-js/faker';
import { CommonEmailAddress, CommonOrganisationDetailV2, CommonPAFAddress, CommonPersonDetailV2, CommonPhoneNumber, CommonPhysicalAddressWithPurpose } from 'consumer-data-standards/common';
import { AddressPurpose, generateRandomDecimalInRangeFormatted, OrganisationType, PostalDeliveryType, RandomCommon } from '../random-generators';
import { randomBytes } from 'crypto';

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
        return `A set of customers with all the details
                This factory supports the follow option fields:

                type     The type must be either 'person' or 'organisation'. This will determine if a 
                         CommonPersonDetail or a CommonOrganisationDetail structue will be created.
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
        phoneNumbers: this.createPhoneNumberList(phoneCount),
        emailAddresses: this.createEmailListList(emailCount),
        physicalAddresses: this.createAddressList(addressCount)
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
        physicalAddresses: this.createAddressList(addressCount),
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

    private getAddressPurpose(addressList: CommonPhysicalAddressWithPurpose[] ) : string {
       var purpose;;
       let idxRegistered = addressList.findIndex(x => x.purpose == AddressPurpose.REGISTERED);
       let idxMail= addressList.findIndex(x => x.purpose == AddressPurpose.MAIL);
       let found = false;
       do {
          purpose  = RandomCommon.AddressPurpose();
          if (idxRegistered > -1 && purpose == AddressPurpose.REGISTERED) continue;
          if (idxMail > -1 && purpose == AddressPurpose.MAIL) continue;
          found = true;
       } while(!found)
       return purpose;
    }
    
    private createAddressList(cnt: number):CommonPhysicalAddressWithPurpose[] {
      let addressList: CommonPhysicalAddressWithPurpose[] = [];
      for(let i = 0; i < cnt; i++) {
        let addressUType = Math.random() > 0.5 ? 'paf' : 'simple' as 'paf'| 'simple';
        let purpose  = this.getAddressPurpose(addressList);
        let address: CommonPhysicalAddressWithPurpose = {
          purpose: purpose as AddressPurpose,
          addressUType: addressUType,
        }
        if (addressUType == 'paf') {
          address.paf = this.createPafAddress();
        }
        if (addressUType == 'simple') {
          address.simple = this.createCommonSimpleAddress();
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
      let name: string = faker.name.fullName();
      if (this.customerType == 'organisation') {name = faker.company.name()}
        let address: CommonSimpleAddress = {
          mailingName: name,
          localityName: faker.address.city(),
          addressLine1: faker.address.street(),
          postcode: faker.address.zipCode('####'),
          city: faker.address.cityName(),
          state: faker.address.state(),
          country: 'AUS'
        }
        if (Math.random() > 0.5) address.addressLine2 = faker.address.secondaryAddress();
        if (Math.random() > 0.5) address.addressLine3 = faker.address.buildingNumber();
        return address;
    }

    private createPafAddress(): CommonPAFAddress {
      let name: string = faker.name.fullName();
      if (this.customerType == 'organisation') {name = faker.company.name()}
      
      let address: CommonPAFAddress = {
        localityName: name,
        postcode: faker.address.zipCode('####'),
        state: faker.address.state()
      }
      if (Math.random() > 0.5) {
        address.postalDeliveryType = RandomCommon.PostalDeliveryType();
        address.postalDeliveryNumber = Helper.generateRandomIntegerInRange(26000000, 28999999);
        if (Math.random() > 0.5) address.postalDeliveryNumberSuffix = 'STS';
        if (Math.random() > 0.2) address.postalDeliveryNumberPrefix = 'APT';
      }
      if (Math.random() > 0.5) address.dpid = Helper.generateRandomDecimalInRange(26000000, 28999999, 0);
      if (Math.random() > 0.5) {
        address.thoroughfareNumber1 = Helper.generateRandomIntegerInRange(1, 10000);
        address.thoroughfareNumber1Suffix = 'HWY'
        address.thoroughfareNumber2 = Helper.generateRandomIntegerInRange(address.thoroughfareNumber1, address.thoroughfareNumber1 + 10);
        address.thoroughfareNumber2Suffix = 'HWY'
      }
      if (Math.random() > 0.5) address.flatUnitType = 'UNIT';
      if (Math.random() > 0.5) address.flatUnitNumber = generateRandomDecimalInRangeFormatted(1,55, 0);
      if (Math.random() > 0.5) address.floorLevelNumber = generateRandomDecimalInRangeFormatted(1,100, 0);
      if (Math.random() > 0.5) {
        address.streetName = faker.address.street();
        address.streetType = "ROAD";
        if(Math.random() > 0.25) address.streetSuffix = "E";
        if(Math.random() > 0.5) address.lotNumber = "LOT 2"       
      }
      if (Math.random() > 0.5) address.buildingName1 = "Treasury Building";
      if (Math.random() > 0.5) address.buildingName1 = "Reception area";
      return address;
  }
}