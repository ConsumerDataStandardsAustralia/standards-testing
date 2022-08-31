import * as schema from '../schema/cdr-test-data-schema';
import { Factory, Helper, FactoryOptions } from '../logic/factoryService'

export const factoryId: string = "simple-full";

export class factory extends Factory {

  constructor(options: FactoryOptions) {
    super(options);
  }

  public get id(): string {
    return factoryId;
  }

  public get briefDescription(): string {
    return "Create simple but complete payloads for all types";
  }

  public get detailedDescription(): string {
    return '' +
`This factory supports all types of generation but will only generate
simple payloads with all fields populated with schema compliant content.
The payloads generated will be schema compliant but will not be semantically
useful.

Multiple records of the same type will have the same content with the
exception of identifier and date values which will be randomised.

This factory supports the follow option fields:

  count    The count field is a number that specifies the number of entities
           to create.  It is used when the factory is being used togenerate
           multiple entities at once (e.g. client cache or bank transactions).
           If present in the context of single entity generation then it will
           be ignored.  If not present a count of 1 is assumed.
`;
  }

  // Data Holders
  public canCreateHolder(): boolean { return true; };
  public generateHolder(): schema.HolderWrapper | undefined {
    return {
      holderId: Helper.randomId(),
      holder: {
        unauthenticated: {},
        authenticated: {}
      }
    };
  }

  public canCreateHolders(): boolean { return true; };
  public generateHolders(): schema.HolderWrapper[] | undefined {
    let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

    let ret: schema.HolderWrapper[] = [];
    for (let i = 0; i < count; i++) {
      const el = this.generateHolder();
      if (el) ret.push(el);
    }
    return ret;
  }

  // Client Registration
  public canCreateClients(): boolean { return true; };
  public generateClients(): schema.Client[] | undefined {
    let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

    let ret: schema.Client[] = [];
    for (let i = 0; i < count; i++) {
      ret.push ({
        clientId: Helper.randomId(),
        legalEntityId: Helper.randomId(),
        orgId: Helper.randomId(),
        softwareId: Helper.randomId(),
        legalEntityName: "Legal entity name",
        orgName: "Organisation name",
        clientName: "Client name",
        clientDescription: "Client description",
        clientUri: "http://about:blank",
        redirectUris: [
          "http://about:blank"
        ],
        sectorIdentifierUri: "http://about:blank",
        logoUri: "http://about:blank",
        tosUri: "http://about:blank",
        policyUri: "http://about:blank",
        jwksUri: "http://about:blank",
        revocationUri: "http://about:blank",
        recipientBaseUri: "http://about:blank",
        softwareRoles: "data-recipient-software-product",
        scopes: [
          'openid',
          'profile',
          'bank:accounts.basic:read',
          'bank:accounts.detail:read',
          'bank:transactions:read',
          'bank:payees:read',
          'bank:regular_payments:read',
          'common:customer.basic:read',
          'common:customer.detail:read',
          'cdr:registration'
        ]
      });
    }
    return ret;
  }

  // Register
  public canCreateRecipients(): boolean { return true; };
  public generateRecipients(): schema.Recipient[] | undefined {
    let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

    let ret: schema.Recipient[] = [];
    for (let i = 0; i < count; i++) {
      ret.push ({
        legalEntityId: Helper.randomId(),
        legalEntityName: "Legal entity name",
        accreditationNumber: "1234",
        accreditationLevel: "UNRESTRICTED",
        logoUri: "http://about:blank",
        status: "ACTIVE",
        lastUpdated: Helper.randomDateTimeInThePast(),
        dataRecipientBrands: [
          {
            dataRecipientBrandId: Helper.randomId(),
            brandName: "Brand name",
            logoUri: "http://about:blank",
            status: "ACTIVE",
            softwareProducts: [
              {
                softwareProductId: Helper.randomId(),
                softwareProductName: "Software product name",
                softwareProductDescription: "Software product description",
                logoUri: "http://about:blank",
                status: "ACTIVE"
              }
            ]
          }
        ]
      });
    }
    return ret;
  }


  // Admin
  public canCreateStatus(): boolean { return true; };
  public generateStatus(): schema.AdminStatus | undefined {
    return {
      status: "PARTIAL_FAILURE",
      explanation: "Explanation",
      detectionTime: Helper.randomDateTimeInThePast(),
      expectedResolutionTime: new Date(Date.now()).toISOString(),
      updateTime: Helper.randomDateTimeInTheFuture()
    };
  }

  public canCreateOutages(): boolean { return true; };
  public generateOutages(): schema.AdminOutage[] | undefined {
    let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

    let ret: schema.AdminOutage[] = [];
    for (let i = 0; i < count; i++) {
      ret.push({
        outageTime: Helper.randomDateTimeInTheFuture(),
        duration: "PT2H",
        isPartial: true,
        explanation: "Explanation for outage"
      });
    }
    return ret;
  }


  // Customer
  public canCreateCustomer(): boolean { return true; };
  public generateCustomer(holder: schema.HolderWrapper): schema.CustomerWrapper | undefined {
    return {
      customerId: Helper.randomId(),
      customer: {
        customerUType: "person",
        person: {
          lastUpdateTime: Helper.randomDateTimeInThePast(),
          firstName: "First",
          lastName: "Last",
          middleNames: [ "Middle" ],
          prefix: "Sir",
          suffix: "PHD",
          occupationCode: "2613",
          occupationCodeVersion: "ANZSCO_1220.0_2013_V1.3",
          phoneNumbers: [
            {
              isPreferred: true,
              purpose: "HOME",
              countryCode: "+61",
              areaCode: "2",
              number: "12341234",
              extension: "1234",
              fullNumber: "+61-2-1234-1234"
            }
          ],
          emailAddresses: [
            {
              isPreferred: true,
              purpose: "HOME",
              address: "donotuse@not.a.real.email.org"
            }
          ],
          physicalAddresses: [
            {
              addressUType: "simple",
              simple: {
                mailingName: "Mailing name",
                addressLine1: "Address line 1",
                addressLine2: "Address line 2",
                addressLine3: "Address line 3",
                postcode: "3999",
                city: "Gotham",
                state: "VIC",
                country: "AUS"
              },
              purpose: "MAIL"
            }
          ]
        }
      }
    };
  }

  public canCreateCustomers(): boolean { return true; };
  public generateCustomers(holder: schema.HolderWrapper): schema.CustomerWrapper[] | undefined {
    let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

    let ret: schema.CustomerWrapper[] = [];
    for (let i = 0; i < count; i++) {
      const el = this.generateCustomer(holder);
      if (el) ret.push(el);
    }
    return ret;
  }


  // Banking
  public canCreateBankProduct(): boolean { return true; };
  public generateBankProduct(): schema.BankProduct | undefined {
    return {
      productId: Helper.randomId(),
      effectiveFrom: Helper.randomDateTimeInThePast(),
      effectiveTo: Helper.randomDateTimeInTheFuture(),
      lastUpdated: Helper.randomDateTimeInThePast(),
      productCategory: "BUSINESS_LOANS",
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
          featureType: "ADDITIONAL_CARDS",
          additionalValue: "3",
          additionalInfo: "Additional info",
          additionalInfoUri: "http://about:blank"
        }
      ],
      constraints: [
        {
          constraintType: "MAX_BALANCE",
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
  public generateBankProducts(): schema.BankProduct[] | undefined {
    let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

    let ret: schema.BankProduct[] = [];
    for (let i = 0; i < count; i++) {
      const el = this.generateBankProduct();
      if (el) ret.push(el);
    }
    return ret;
  }

  public canCreateBankAccount(): boolean { return true; };
  public generateBankAccount(customer: schema.CustomerWrapper): schema.BankAccountWrapper | undefined {
    return {
      account: {
        accountId: Helper.randomId(),
        creationDate: Helper.randomDateTimeInThePast(),
        displayName: "Display name",
        nickname: "Nick name",
        openStatus: "OPEN",
        isOwned: true,
        maskedNumber: "xxxxxxxxx123",
        productCategory: "TRANS_AND_SAVINGS_ACCOUNTS",
        productName: "Product name",
        bsb: "123123",
        accountNumber: "123123123123",
        bundleName: "Bundle name",
        depositRate: "0.025",
        depositRates: [
          {
            depositRateType: "VARIABLE",
            rate: "0.025",
            calculationFrequency: "P1D",
            applicationFrequency: "P1M",
            additionalInfo: "A variable rate"
          }
        ],
        features: [
          {
            featureType: "ADDITIONAL_CARDS",
            additionalValue: "5",
            isActivated: true
          }
        ],
        fees: [
          {
            name: "A fee",
            feeType: "PERIODIC",
            amount: "10.00",
            additionalValue: "P1Y",
          }
        ],
        addresses: [
          {
            addressUType: "simple",
            simple: {
              mailingName: "Mailing name",
              addressLine1: "Address line 1",
              addressLine2: "Address line 2",
              addressLine3: "Address line 3",
              postcode: "3999",
              city: "Gotham",
              state: "VIC",
              country: "AUS"
            }
          }
        ]
      }
    }
  }

  public canCreateBankAccounts(): boolean { return true; };
  public generateBankAccounts(customer: schema.CustomerWrapper): schema.BankAccountWrapper[] | undefined {
    let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

    let ret: schema.BankAccountWrapper[] = [];
    for (let i = 0; i < count; i++) {
      const el = this.generateBankAccount(customer);
      if (el) ret.push(el);
    }
    return ret;
  }

  public canCreateBankBalance(): boolean { return true; };
  public generateBankBalance(account: schema.BankAccountWrapper): schema.BankAccountBalance | undefined {
    return {
      accountId: account.account.accountId,
      currentBalance: "100.00",
      availableBalance: "100.00"
    }
  }

  public canCreateBankTransaction(): boolean { return true; };
  public generateBankTransaction(account: schema.BankAccountWrapper): schema.BankTransaction | undefined {
    return {
      accountId: account.account.id,
      transactionId: Helper.randomId(),
      isDetailAvailable: true,
      type: "TRANSFER",
      status: "POSTED",
      description: "The description",
      postingDateTime: Helper.randomDateTimeInThePast(),
      amount: "10.00",
      reference: "The reference",
      merchantName: "Placid Pizza",
      merchantCategoryCode: "5814",
      apcaNumber: "000000",
      extendedData: {
        service: "X2P1.01",
        payee: "donotuse@not.a.real.email.org",
        extensionUType: "x2p101Payload",
        x2p101Payload: {
          extendedDescription: "Extended description",
          endToEndId: Helper.randomId()
        }
      }
    }
  }

  public canCreateBankTransactions(): boolean { return true; };
  public generateBankTransactions(account: schema.BankAccountWrapper): schema.BankTransaction[] | undefined {
    let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

    let ret: schema.BankTransaction[] = [];
    for (let i = 0; i < count; i++) {
      const el = this.generateBankTransaction(account);
      if (el) ret.push(el);
    }
    return ret;
  }

  public canCreateBankDirectDebits(): boolean { return true; };
  public generateBankDirectDebits(accounts: schema.BankAccountWrapper[]): schema.BankDirectDebit[] | undefined {
    let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

    let ret: schema.BankDirectDebit[] = [];
    for (let i = 0; i < count; i++) {
      ret.push({
        accountId: accounts[0].account.id,
        authorisedEntity: {
          description: "Direct debit description",
          financialInstitution: "ACME Bank",
          abn: "012345678",
          acn: "012345678"
        },
        lastDebitDateTime: Helper.randomDateTimeInThePast(),
        lastDebitAmount: "10.00"
      })
    }
    return ret;
  }

  public canCreateBankPayees(): boolean { return true; };
  public generateBankPayees(accounts: schema.BankAccountWrapper[]): schema.BankPayee[] | undefined {
    let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

    let ret: schema.BankPayee[] = [];
    for (let i = 0; i < count; i++) {
      ret.push({
        payeeId: Helper.randomId(),
        nickname: "Nick name",
        description: "A standard biller",
        type: "DOMESTIC",
        creationDate: Helper.randomDateTimeInThePast(),
        payeeUType: "domestic",
        payeeAccountUType: "account",
        account: {
          accountName: "The account",
          bsb: "123456",
          accountNumber: "123456789"
        }
      });
    }
    return ret;
  }

  public canCreateBankScheduledPayments(): boolean { return true; };
  public generateScheduledPayments(accounts: schema.BankAccountWrapper[]): schema.BankPaymentSchedule[] | undefined {
    let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

    let ret: schema.BankPaymentSchedule[] = [];
    for (let i = 0; i < count; i++) {
      const dt = Helper.randomDateTimeInTheFuture();
      ret.push({
        scheduledPaymentId: Helper.randomId(),
        nickname: "Nick name",
        payerReference: "Payer reference",
        payeeReference: "Payee reference",
        status: "ACTIVE",
        from: {
          accountId: accounts[0].account.accountId
        },
        paymentSet: [
          {
            to: {
              toUType: "accountId",
              accountId: accounts[1].account.accountId,
            },
            amount: "10.00"
          }
        ],
        recurrence: {
          nextPaymentDate: dt,
          recurrenceUType: "onceOff",
          onceOff: {
            paymentDate: dt
          }
        }
      });
    }
    return ret;
  }


  // Energy
  public canCreateEnergyPlan(): boolean { return true; };
  public generateEnergyPlan(): schema.EnergyPlan | undefined {
    return {
      planId: Helper.randomId(),
      effectiveFrom: Helper.randomDateTimeInThePast(),
      effectiveTo: Helper.randomDateTimeInTheFuture(),
      lastUpdated: Helper.randomDateTimeInThePast(),
      displayName: "Display name",
      description: "Description",
      type: "STANDING",
      fuelType: "ELECTRICITY",
      brand: "BRAND",
      brandName: "Brand Name",
      applicationUri: "http://about:blank",
      additionalInformation: {
        overviewUri: "http://about:blank",
        termsUri: "http://about:blank",
        eligibilityUri: "http://about:blank",
        pricingUri: "http://about:blank",
        bundleUri: "http://about:blank"
      },
      customerType: "RESIDENTIAL",
      geography: {
        excludedPostcodes: [
          "3100"
        ],
        includedPostcodes: [
          "3000-3999"
        ],
        distributors: [
          "Distributor"
        ]
      },
      meteringCharges: [
        {
          displayName: "Display name",
          description: "Description",
          minimumValue: "0",
          maximumValue: "0",
          period: "P1M"
        }
      ],
      electricityContract: {
        additionalFeeInformation: "Additional info",
        pricingModel: "SINGLE_RATE",
        timeZone: "LOCAL",
        isFixed: true,
        variation: "Variation",
        onExpiryDescription: "Expiry description",
        paymentOption: [
          "PAPER_BILL"
        ],
        intrinsicGreenPower: {
          greenPercentage: "0.1"
        },
        controlledLoad: [
          {
            displayName: "Display name",
            rateBlockUType: "singleRate",
            startDate: Helper.randomDateTimeInThePast(),
            endDate: Helper.randomDateTimeInThePast(),
            singleRate: {
              displayName: "Display name",
              description: "Description",
              dailySupplyCharge: "10.00",
              rates: [
                {
                  unitPrice: "10.00",
                  measureUnit: "KWH",
                  volume: 0
                }
              ]
            }
          }
        ],
        incentives: [
          {
            displayName: "Display name",
            description: "Description",
            category: "GIFT",
            eligibility: "Eligibility"
          }
        ],
        discounts: [
          {
            displayName: "Display name",
            description: "Description",
            type: "CONDITIONAL",
            category: "PAY_ON_TIME",
            endDate: Helper.randomDateTimeInTheFuture(),
            methodUType: "percentOfBill",
            percentOfBill: {
              rate: "0.01"
            }
          }
        ],
        greenPowerCharges: [
          {
            displayName: "Display name",
            description: "Description",
            scheme: "GREENPOWER",
            type: "FIXED_PER_DAY",
            tiers: [
              {
                percentGreen: "0.1",
                amount: "10.00"
              },
              {
                percentGreen: "0.2",
                amount: "20.00"
              }
            ]
          }
        ],
        eligibility: [
          {
            type: "EXISTING_CUST",
            information: "Information",
            description: "Description"
          }
        ],
        fees: [
          {
            type: "EXIT",
            term: "FIXED",
            amount: "10.00",
            description: "Description"
          }
        ],
        solarFeedInTariff: [
          {
            displayName: "Display name",
            description: "Description",
            scheme: "PREMIUM",
            payerType: "GOVERNMENT",
            tariffUType: "singleTariff",
            singleTariff: {
              amount: "10.00"
            }
          }
        ],
        tariffPeriod: [
          {
            type: "ENVIRONMENTAL",
            displayName: "Display name",
            startDate: Helper.randomDateTimeInThePast(),
            endDate: Helper.randomDateTimeInThePast(),
            dailySupplyCharges: "10.00",
            timeZone: "LOCAL",
            rateBlockUType: "singleRate",
            singleRate: {
              displayName: "Display name",
              description: "Description",
              generalUnitPrice: "10.00",
              rates: [
                {
                  unitPrice: "10.00",
                  measureUnit: "KWH",
                  volume: 0
                }
              ],
              period: "P1M"
            }
          }
        ]
      }
    };
  }

  public canCreateEnergyPlans(): boolean { return true; };
  public generateEnergyPlans(): schema.EnergyPlan[] | undefined {
    let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

    let ret: schema.EnergyPlan[] = [];
    for (let i = 0; i < count; i++) {
      const el = this.generateEnergyPlan();
      if (el) ret.push(el);
    }
    return ret;
  }

  public canCreateEnergyServicePoint(): boolean { return true; };
  public generateEnergyServicePoint(): schema.EnergyServicePointWrapper | undefined {
    return {
      servicePoint: {
        servicePointId: Helper.randomId(),
        nationalMeteringId: Helper.randomId(),
        servicePointClassification: "SMALL",
        servicePointStatus: "ACTIVE",
        jurisdictionCode: "ALL",
        isGenerator: false,
        validFromDate: Helper.randomDateTimeInThePast(),
        lastUpdateDateTime: Helper.randomDateTimeInThePast(),
        consumerProfile: {
          classification: "RESIDENTIAL",
          threshold: "LOW"
        },
        distributionLossFactor: {
          code: "DLF Code",
          description: "DLF Description",
          lossValue: "DLF Value"
        },
        relatedParticipants: [
          {
            party: "ACME Retailer",
            role: "FRMP"
          }
        ],
        location: {
          addressUType: "simple",
          simple: {
            mailingName: "Mailing name",
            addressLine1: "Address line 1",
            addressLine2: "Address line 2",
            addressLine3: "Address line 3",
            postcode: "3999",
            city: "Gotham",
            state: "VIC",
            country: "AUS"
          }
        },
        meters: [
          {
            meterId: Helper.randomId(),
            specifications: {
              status: "CURRENT",
              installationType: "BASIC",
              manufacturer: "Manifacturer",
              model: "Model",
              readType: "MV1A",
              nextScheduledReadDate: Helper.randomDateTimeInTheFuture()
            },
            registers: [
              {
                registerId: Helper.randomId(),
                registerSuffix: Helper.randomId(),
                averagedDailyLoad: 0,
                registerConsumptionType: "INTERVAL",
                networkTariffCode: "Network tariff code",
                unitOfMeasure: "KWH",
                timeOfDay: "ALLDAY",
                multiplier: 0,
                controlledLoad: false,
                consumptionType: "ACTUAL"
              }
            ]
          }
        ]
      }
    }
  }

  public canCreateEnergyServicePoints(): boolean { return true; };
  public generateEnergyServicePoints(): schema.EnergyServicePointWrapper[] | undefined {
    let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

    let ret: schema.EnergyServicePointWrapper[] = [];
    for (let i = 0; i < count; i++) {
      const el = this.generateEnergyServicePoint();
      if (el) ret.push(el);
    }
    return ret;
  }

  public canCreateEnergyDER(): boolean { return true; };
  public generateEnergyDER(servicePoint: schema.EnergyServicePointWrapper): schema.EnergyDerData[] | undefined {
    let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

    let ret: schema.EnergyDerData[] = [];
    for (let i = 0; i < count; i++) {
      ret.push({
        servicePointId: servicePoint.servicePoint?.servicePointId,
        approvedCapacity: 0,
        availablePhasesCount: 1,
        installedPhasesCount: 1,
        islandableInstallation: true,
        hasCentralProtectionControl: true,
        protectionMode: {
          exportLimitKva: 0,
          underFrequencyProtection: 0,
          underFrequencyProtectionDelay: 0,
          overFrequencyProtection: 0,
          overFrequencyProtectionDelay: 0,
          underVoltageProtection: 0,
          underVoltageProtectionDelay: 0,
          overVoltageProtection: 0,
          overVoltageProtectionDelay: 0,
          sustainedOverVoltage: 0,
          sustainedOverVoltageDelay: 0,
          frequencyRateOfChange: 0,
          voltageVectorShift: 0,
          interTripScheme: "Inter trip scheme",
          neutralVoltageDisplacement: 0
        },
        acConnections: [
          {
            connectionIdentifier: 1,
            count: 0,
            equipmentType: "INVERTER",
            manufacturerName: "Manufacturer",
            inverterSeries: "string",
            inverterModelNumber: "Inverter model number",
            commissioningDate: Helper.randomDateTimeInThePast(),
            status: "ACTIVE",
            inverterDeviceCapacity: 0,
            derDevices: [
              {
                deviceIdentifier: 1,
                count: 0,
                manufacturer: "Manufacturer",
                modelNumber: "Device model number",
                status: "ACTIVE",
                type: "FOSSIL",
                subtype: "other",
                nominalRatedCapacity: 0,
                nominalStorageCapacity: 0
              }
            ]
          }
        ]
      });
    }
    return ret;
  }

  public canCreateEnergyUsage(): boolean { return true; };
  public generateEnergyUsage(servicePoint: schema.EnergyServicePointWrapper): schema.EnergyUsageRead[] | undefined {
    let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

    let ret: schema.EnergyUsageRead[] = [];
    for (let i = 0; i < count; i++) {
      ret.push({
        servicePointId: servicePoint.servicePoint?.servicePointId,
        registerId: Helper.randomId(),
        registerSuffix: Helper.randomId(),
        meterId: Helper.randomId(),
        controlledLoad: false,
        readStartDate: Helper.randomDateTimeInThePast(),
        readEndDate: Helper.randomDateTimeInThePast(),
        unitOfMeasure: "kWh",
        readUType: "basicRead",
        basicRead: {
          quality: "ACTUAL",
          value: 100
        }
      });
    }
    return ret;
  }

  public canCreateEnergyAccount(): boolean { return true; };
  public generateEnergyAccount(customer: schema.CustomerWrapper): schema.EnergyAccountWrapper | undefined {
    return {
      account: {
        accountId: Helper.randomId(),
        accountNumber: Helper.randomId(),
        displayName: "Display name",
        creationDate: Helper.randomDateTimeInThePast(),
        plans: [
          {
            nickname: "Nick name",
            servicePointIds: [
              Helper.randomDateTimeInThePast()
            ],
            planOverview: {
              displayName: "Display name",
              startDate: Helper.randomDateTimeInThePast()
            },
            planDetail: {
              fuelType: "ELECTRICITY",
              isContingentPlan: false,
              meteringCharges: [
                {
                  displayName: "Display name",
                  description: "Description",
                  minimumValue: "0",
                  maximumValue: "0",
                  period: "P1M"
                }
              ],
              electricityContract: {
                additionalFeeInformation: "Additional info",
                pricingModel: "SINGLE_RATE",
                timeZone: "LOCAL",
                isFixed: true,
                variation: "Variation",
                onExpiryDescription: "Expiry description",
                paymentOption: [
                  "PAPER_BILL"
                ],
                intrinsicGreenPower: {
                  greenPercentage: "0.1"
                },
                controlledLoad: [
                  {
                    displayName: "Display name",
                    rateBlockUType: "singleRate",
                    startDate: Helper.randomDateTimeInThePast(),
                    endDate: Helper.randomDateTimeInThePast(),
                    singleRate: {
                      displayName: "Display name",
                      description: "Description",
                      dailySupplyCharge: "10.00",
                      rates: [
                        {
                          unitPrice: "10.00",
                          measureUnit: "KWH",
                          volume: 0
                        }
                      ]
                    }
                  }
                ],
                incentives: [
                  {
                    displayName: "Display name",
                    description: "Description",
                    category: "GIFT",
                    eligibility: "Eligibility"
                  }
                ],
                discounts: [
                  {
                    displayName: "Display name",
                    description: "Description",
                    type: "CONDITIONAL",
                    category: "PAY_ON_TIME",
                    endDate: Helper.randomDateTimeInTheFuture(),
                    methodUType: "percentOfBill",
                    percentOfBill: {
                      rate: "0.01"
                    }
                  }
                ],
                greenPowerCharges: [
                  {
                    displayName: "Display name",
                    description: "Description",
                    scheme: "GREENPOWER",
                    type: "FIXED_PER_DAY",
                    tiers: [
                      {
                        percentGreen: "0.1",
                        amount: "10.00"
                      },
                      {
                        percentGreen: "0.2",
                        amount: "20.00"
                      }
                    ]
                  }
                ],
                eligibility: [
                  {
                    type: "EXISTING_CUST",
                    information: "Information",
                    description: "Description"
                  }
                ],
                fees: [
                  {
                    type: "EXIT",
                    term: "FIXED",
                    amount: "10.00",
                    description: "Description"
                  }
                ],
                solarFeedInTariff: [
                  {
                    displayName: "Display name",
                    description: "Description",
                    scheme: "PREMIUM",
                    payerType: "GOVERNMENT",
                    tariffUType: "singleTariff",
                    singleTariff: {
                      amount: "10.00"
                    }
                  }
                ],
                tariffPeriod: [
                  {
                    type: "ENVIRONMENTAL",
                    displayName: "Display name",
                    startDate: Helper.randomDateTimeInThePast(),
                    endDate: Helper.randomDateTimeInThePast(),
                    dailySupplyCharges: "10.00",
                    timeZone: "LOCAL",
                    rateBlockUType: "singleRate",
                    singleRate: {
                      displayName: "Display name",
                      description: "Description",
                      generalUnitPrice: "10.00",
                      rates: [
                        {
                          unitPrice: "10.00",
                          measureUnit: "KWH",
                          volume: 0
                        }
                      ],
                      period: "P1M"
                    }
                  }
                ]
              }
            },
            authorisedContacts: [
              {
                firstName: "First",
                lastName: "Last",
                middleNames: [
                  "Middle"
                ],
                prefix: "Dr",
                suffix: "OAM"
              }
            ]
          }
        ]
      }
    }
  }

  public canCreateEnergyAccounts(): boolean { return true; };
  public generateEnergyAccounts(customer: schema.CustomerWrapper): schema.EnergyAccountWrapper[] | undefined {
    let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

    let ret: schema.EnergyAccountWrapper[] = [];
    for (let i = 0; i < count; i++) {
      const el = this.generateEnergyAccount(customer);
      if (el) ret.push(el);
    }
    return ret;
  }

  public canCreateEnergyBalance(): boolean { return true; };
  public generateEnergyBalance(account: schema.EnergyAccountWrapper): schema.EnergyAccountBalance | undefined {
    return {
      accountId: account.account.accountId,
      balance: "10.00"
    }
  }

  public canCreateEnergyPaymentSchedules(): boolean { return true; };
  public generateEnergyPaymentSchedules(account: schema.EnergyAccountWrapper): schema.EnergyPaymentSchedule[] | undefined {
    let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

    let ret: schema.EnergyPaymentSchedule[] = [];
    for (let i = 0; i < count; i++) {
      ret.push({
        amount: "100.00",
        paymentScheduleUType: "manualPayment",
        manualPayment: {
          billFrequency: "P1M"
        }
      });
    }
    return ret;
  }

  public canCreateEnergyConcession(): boolean { return true; };
  public generateEnergyConcession(account: schema.EnergyAccountWrapper): schema.EnergyConcession | undefined {
    return {
      type: "FIXED_AMOUNT",
      displayName: "Display name",
      additionalInfo: "A concession",
      startDate: Helper.randomDateTimeInThePast(),
      endDate: Helper.randomDateTimeInTheFuture(),
      discountFrequency: "P1M",
      amount: "10.00"
    }
  }

  public canCreateEnergyConcessions(): boolean { return true; };
  public generateEnergyConcessions(account: schema.EnergyAccountWrapper): schema.EnergyConcession[] | undefined {
    let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

    let ret: schema.EnergyConcession[] = [];
    for (let i = 0; i < count; i++) {
      const el = this.generateEnergyConcession(account);
      if (el) ret.push(el);
    }
    return ret;
  }

  public canCreateEnergyInvoice(): boolean { return true; };
  public generateEnergyInvoice(account: schema.EnergyAccountWrapper): schema.EnergyInvoice | undefined {
    return {
      accountId: account.account.accountId,
      invoiceNumber: Helper.randomId(),
      issueDate: Helper.randomDateTimeInThePast(),
      dueDate: Helper.randomDateTimeInTheFuture(),
      period: {
        startDate: Helper.randomDateTimeInThePast(),
        endDate: Helper.randomDateTimeInTheFuture()
      },
      invoiceAmount: "100.00",
      gstAmount: "10.00",
      payOnTimeDiscount: {
        discountAmount: "10.00",
        gstAmount: "1.00",
        date: Helper.randomDateTimeInTheFuture()
      },
      balanceAtIssue: "100.00",
      servicePoints: [
        Helper.randomId()
      ],
      electricity: {
        totalUsageCharges: "200.00",
        totalGenerationCredits: "100.000",
        totalOnceOffCharges: "100.00",
        totalOnceOffDiscounts: "100.00",
        totalGst: "10.00"
      },
      accountCharges: {
        totalCharges: "0",
        totalDiscounts: "0",
        totalGst: "0"
      },
      paymentStatus: "NOT_PAID"
    }
  }

  public canCreateEnergyInvoices(): boolean { return true; };
  public generateEnergyInvoices(account: schema.EnergyAccountWrapper): schema.EnergyInvoice[] | undefined {
    let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

    let ret: schema.EnergyInvoice[] = [];
    for (let i = 0; i < count; i++) {
      const el = this.generateEnergyInvoice(account);
      if (el) ret.push(el);
    }
    return ret;
  }

  public canCreateEnergyTransaction(): boolean { return true; };
  public generateEnergyTransaction(account: schema.EnergyAccountWrapper): schema.EnergyTransaction | undefined {
    return {
      accountId: account.account.accountId,
      executionDateTime: Helper.randomDateTimeInThePast(),
      gst: "1.00",
      transactionUType: "usage",
      usage: {
        servicePointId: Helper.randomId(),
        invoiceNumber: Helper.randomId(),
        timeOfUseType: "PEAK",
        description: "Description",
        startDate: Helper.randomDateTimeInThePast(),
        endDate: Helper.randomDateTimeInThePast(),
        measureUnit: "KWH",
        usage: 20,
        amount: "10.00"
      }
    }
  }

  public canCreateEnergyTransactions(): boolean { return true; };
  public generateEnergyTransactions(account: schema.EnergyAccountWrapper): schema.EnergyTransaction[] | undefined {
    let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

    let ret: schema.EnergyTransaction[] = [];
    for (let i = 0; i < count; i++) {
      const el = this.generateEnergyTransaction(account);
      if (el) ret.push(el);
    }
    return ret;
  }

}
