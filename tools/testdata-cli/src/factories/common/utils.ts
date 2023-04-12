import { faker } from "@faker-js/faker";
import { CommonPhysicalAddress } from "consumer-data-standards/banking";
import { CommonEmailAddress, CommonPAFAddress, CommonPhoneNumber, CommonPhysicalAddressWithPurpose, CommonSimpleAddress } from "consumer-data-standards/common";
import { Helper } from "../../logic/factoryService";
import { AddressPurpose, generateRandomDecimalInRangeFormatted, RandomCommon } from "../../random-generators";


class Utils {
    public static  getAddressPurpose(addressList: CommonPhysicalAddressWithPurpose[] ) : string {
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
     
     public static createAddressList(cnt: number, customerType: string):CommonPhysicalAddressWithPurpose[] {
       let addressList: CommonPhysicalAddressWithPurpose[] = [];
       for(let i = 0; i < cnt; i++) {
         let addressUType = Math.random() > 0.5 ? 'paf' : 'simple' as 'paf'| 'simple';
         let purpose  = this.getAddressPurpose(addressList);
         let address: CommonPhysicalAddressWithPurpose = {
           purpose: purpose as AddressPurpose,
           addressUType: addressUType,
         }
         if (addressUType == 'paf') {
           address.paf = this.createPafAddress(customerType);
         }
         if (addressUType == 'simple') {
           address.simple = this.createCommonSimpleAddress(customerType);
         }
         addressList.push(address);
       }
       return addressList;
     }
    
     public static createPhoneNumberList(cnt: number): CommonPhoneNumber[] {
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
    
     public static createEmailListList(cnt: number): CommonEmailAddress[] {
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
    
     public static createCommonSimpleAddress(customerType: string): CommonSimpleAddress {
       let name: string = faker.name.fullName();
       if (customerType == 'organisation') {name = faker.company.name()}
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
    
     public static createPafAddress(customerType: string): CommonPAFAddress {
       let name: string = faker.name.fullName();
       if (customerType == 'organisation') {name = faker.company.name()}
       
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

     public static createCommPhysicalAddress(customerType: string): CommonPhysicalAddress {
        let addressUType = Math.random() > 0.5 ? 'paf' : 'simple' as 'paf'| 'simple';
        let address: CommonPhysicalAddress = {
          addressUType: addressUType,
        }
        if (addressUType == 'paf') {
          address.paf = this.createPafAddress(customerType);
        }
        if (addressUType == 'simple') {
          address.simple = this.createCommonSimpleAddress(customerType);
        }
        return address;
     }
}

export default Utils;