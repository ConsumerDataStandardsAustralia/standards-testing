import { BankingProductV4 } from 'consumer-data-standards/banking';

import { HolderWrapper } from 'src/logic/schema/cdr-test-data-schema';
import { RandomBanking } from '../random-generators/random-banking';
import { Factory, FactoryOptions, Helper } from '../logic/factoryService'

const factoryId: string = "create-products";

export class CreateProducts extends Factory {

    constructor(options: FactoryOptions) {
        super(options, factoryId);
      }
    
    public static id: string = factoryId;

    public get briefDescription(): string {
        return "Create a number of banking products for data holders";
    }
    public get detailedDescription(): string {
        return "Create a number of banking products for data holders";
    }
    
    public canCreateHolder(): boolean { return true; };
    public generateHolder(): HolderWrapper | undefined {
       let result : HolderWrapper = {
         holderId: Helper.randomId(),
         holder : {
            unauthenticated: {},
            authenticated: {}
          }
         }      
       return result;
    }

    public canCreateBankProduct(): boolean { return true; };
    public generateBankProduct(): BankingProductV4 {
      return {
        productId: Helper.randomId(),
        effectiveFrom: Helper.randomDateTimeInThePast(),
        effectiveTo: Helper.randomDateTimeInTheFuture(),
        lastUpdated: Helper.randomDateTimeInThePast(),
        productCategory: RandomBanking.ProductCategory(),
        name: "Name",
        description: "Description",
        brand: "BRAND",
        brandName: "Brand name",
        applicationUri: "http://about:blank",
        isTailored: false,
        additionalInformation: {
          overviewUri: "http://about:blank",
          termsUri: "http://about:blank",
          eligibilityUri: "http://about:blank",
          feesAndPricingUri: "http://about:blank",
          bundleUri: "http://about:blank"
        },
        cardArt: [
          {
            title: "Title",
            imageUri: "http://about:blank"
          }
        ],
        bundles: [
          {
            name: "Name",
            description: "Description",
            additionalInfo: "Additional info",
            additionalInfoUri: "http://about:blank",
            productIds: [
              Helper.randomId()
            ]
          }
        ],
        features: [
          {
            featureType: RandomBanking.FeatureType(),
            additionalValue: "3",
            additionalInfo: "Additional info",
            additionalInfoUri: "http://about:blank"
          }
        ],
        constraints: [
          {
            constraintType: RandomBanking.ContraintType(),
            additionalValue: "1000.00",
            additionalInfo: "Additional info",
            additionalInfoUri: "http://about:blank"
          }
        ],
        eligibility: [
          {
            eligibilityType: "BUSINESS",
            additionalInfo: "Additional info",
            additionalInfoUri: "http://about:blank"
          }
        ],
        fees: [
          {
            name: "Name",
            feeType: "DEPOSIT",
            amount: "10.00",
            additionalInfo: "Additional info",
            additionalInfoUri: "http://about:blank"
          }
        ],
        depositRates: [
          {
            depositRateType: "VARIABLE",
            rate: "0.01",
            calculationFrequency: "P1D",
            applicationFrequency: "P1M",
            additionalInfo: "Additional info",
            additionalInfoUri: "http://about:blank"
          }
        ],
        lendingRates: [
          {
            lendingRateType: "VARIABLE",
            rate: "0.01",
            comparisonRate: "0.01",
            calculationFrequency: "P1D",
            applicationFrequency: "P1M",
            interestPaymentDue: "IN_ADVANCE",
            repaymentType: "INTEREST_ONLY",
            loanPurpose: "INVESTMENT",
            additionalInfo: "Additional info",
            additionalInfoUri: "http://about:blank"
          }
        ]
      };
    }
    public canCreateBankProducts(): boolean { return true; };
    public generateBankProducts(): BankingProductV4[] | undefined {
      let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;
        
      let ret: BankingProductV4[] = [];
      for (let i = 0; i < count; i++) {
        const el = this.generateBankProduct();
        if (el) ret.push(el);
      }
      return ret;
    }
}