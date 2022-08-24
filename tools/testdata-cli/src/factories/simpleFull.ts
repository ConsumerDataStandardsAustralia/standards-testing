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
           be ignored.
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
    if (Helper.isPositiveInteger(this.options.options?.count)) {
      let ret: schema.HolderWrapper[] = [];
      for (let i = 0; i < (this.options.options?.count as number); i++) {
        const el = this.generateHolder();
        if (el) ret.push(el);
      }
      return ret;
    }
    return;
  }

  // Client Registration
  public canCreateClients(): boolean { return true; };
  public generateClients(): schema.Client[] | undefined {
    if (Helper.isPositiveInteger(this.options.options?.count)) {
      let ret: schema.Client[] = [];
      for (let i = 0; i < (this.options.options?.count as number); i++) {
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
    return;
  }

  // Register
  public canCreateRecipients(): boolean { return true; };
  public generateRecipients(): schema.Recipient[] | undefined {
    if (Helper.isPositiveInteger(this.options.options?.count)) {
      let ret: schema.Recipient[] = [];
      for (let i = 0; i < (this.options.options?.count as number); i++) {
        ret.push ({
          legalEntityId: Helper.randomId(),
          legalEntityName: "Legal entity name",
          accreditationNumber: "1234",
          accreditationLevel: "UNRESTRICTED",
          logoUri: "http://about:blank",
          status: "ACTIVE",
          lastUpdated: Helper.randomDateInThePast(),
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
    return;
  }


  // Admin
  public canCreateStatus(): boolean { return true; };
  public generateStatus(): schema.AdminStatus | undefined {
    return; //XXXX
  }

  public canCreateOutages(): boolean { return true; };
  public generateOutages(): schema.AdminOutage[] | undefined {
    if (Helper.isPositiveInteger(this.options.options?.count)) {
      let ret: schema.AdminOutage[] = [];
      for (let i = 0; i < (this.options.options?.count as number); i++) {
        //XXXX
      }
      return ret;
    }
    return;
  }


  // Customer
  public canCreateCustomer(): boolean { return true; };
  public generateCustomer(holder: schema.HolderWrapper): schema.CustomerWrapper | undefined {
    return; //XXXX
  }

  public canCreateCustomers(): boolean { return true; };
  public generateCustomers(holder: schema.HolderWrapper): schema.CustomerWrapper[] | undefined {
    if (Helper.isPositiveInteger(this.options.options?.count)) {
      let ret: schema.CustomerWrapper[] = [];
      for (let i = 0; i < (this.options.options?.count as number); i++) {
        const el = this.generateCustomer(holder);
        if (el) ret.push(el);
      }
      return ret;
    }
    return;
  }


  // Banking
  public canCreateBankProduct(): boolean { return true; };
  public generateBankProduct(): schema.BankProduct | undefined {
    return; //XXXX
  }

  public canCreateBankProducts(): boolean { return true; };
  public generateBankProducts(): schema.BankProduct[] | undefined {
    if (Helper.isPositiveInteger(this.options.options?.count)) {
      let ret: schema.BankProduct[] = [];
      for (let i = 0; i < (this.options.options?.count as number); i++) {
        const el = this.generateBankProduct();
        if (el) ret.push(el);
      }
      return ret;
    }
    return;
  }

  public canCreateBankAccount(): boolean { return true; };
  public generateBankAccount(customer: schema.CustomerWrapper): schema.BankAccountWrapper | undefined {
    return; //XXXX
  }

  public canCreateBankAccounts(): boolean { return true; };
  public generateBankAccounts(customer: schema.CustomerWrapper): schema.BankAccountWrapper[] | undefined {
    if (Helper.isPositiveInteger(this.options.options?.count)) {
      let ret: schema.BankAccountWrapper[] = [];
      for (let i = 0; i < (this.options.options?.count as number); i++) {
        const el = this.generateBankAccount(customer);
        if (el) ret.push(el);
      }
      return ret;
    }
    return;
  }

  public canCreateBankBalance(): boolean { return true; };
  public generateBankBalance(account: schema.BankAccountWrapper): schema.BankAccountBalance | undefined {
    return; //XXXX
  }

  public canCreateBankTransaction(): boolean { return true; };
  public generateBankTransaction(account: schema.BankAccountWrapper): schema.BankTransaction | undefined {
    return; //XXXX
  }

  public canCreateBankTransactions(): boolean { return true; };
  public generateBankTransactions(account: schema.BankAccountWrapper): schema.BankTransaction[] | undefined {
    if (Helper.isPositiveInteger(this.options.options?.count)) {
      let ret: schema.BankTransaction[] = [];
      for (let i = 0; i < (this.options.options?.count as number); i++) {
        const el = this.generateBankTransaction(account);
        if (el) ret.push(el);
      }
      return ret;
    }
    return;
  }

  public canCreateBankDirectDebits(): boolean { return true; };
  public generateBankDirectDebits(accounts: schema.BankAccountWrapper[]): schema.BankDirectDebit[] | undefined {
    if (Helper.isPositiveInteger(this.options.options?.count)) {
      let ret: schema.BankDirectDebit[] = [];
      for (let i = 0; i < (this.options.options?.count as number); i++) {
        //XXXX
      }
      return ret;
    }
    return;
  }

  public canCreateBankPayees(): boolean { return true; };
  public generateBankPayees(accounts: schema.BankAccountWrapper[]): schema.BankPayee[] | undefined {
    if (Helper.isPositiveInteger(this.options.options?.count)) {
      let ret: schema.BankPayee[] = [];
      for (let i = 0; i < (this.options.options?.count as number); i++) {
        //XXXX
      }
      return ret;
    }
    return;
  }

  public canCreateBankScheduledPayments(): boolean { return true; };
  public generateScheduledPayments(accounts: schema.BankAccountWrapper[]): schema.BankPaymentSchedule[] | undefined {
    if (Helper.isPositiveInteger(this.options.options?.count)) {
      let ret: schema.BankPaymentSchedule[] = [];
      for (let i = 0; i < (this.options.options?.count as number); i++) {
        //XXXX
      }
      return ret;
    }
    return;
  }


  // Energy
  public canCreateEnergyPlan(): boolean { return true; };
  public generateEnergyPlan(): schema.EnergyPlan | undefined {
    return; //XXXX
  }

  public canCreateEnergyPlans(): boolean { return true; };
  public generateEnergyPlans(): schema.EnergyPlan[] | undefined {
    if (Helper.isPositiveInteger(this.options.options?.count)) {
      let ret: schema.EnergyPlan[] = [];
      for (let i = 0; i < (this.options.options?.count as number); i++) {
        const el = this.generateEnergyPlan();
        if (el) ret.push(el);
      }
      return ret;
    }
    return;
  }

  public canCreateEnergyServicePoint(): boolean { return true; };
  public generateEnergyServicePoint(): schema.EnergyServicePointWrapper | undefined {
    return; //XXXX
  }

  public canCreateEnergyServicePoints(): boolean { return true; };
  public generateEnergyServicePoints(): schema.EnergyServicePointWrapper[] | undefined {
    if (Helper.isPositiveInteger(this.options.options?.count)) {
      let ret: schema.EnergyServicePointWrapper[] = [];
      for (let i = 0; i < (this.options.options?.count as number); i++) {
        const el = this.generateEnergyServicePoint();
        if (el) ret.push(el);
      }
      return ret;
    }
    return;
  }

  public canCreateEnergyDER(): boolean { return true; };
  public generateEnergyDER(servicePoint: schema.EnergyServicePointWrapper): schema.EnergyDerData[] | undefined {
    if (Helper.isPositiveInteger(this.options.options?.count)) {
      let ret: schema.EnergyDerData[] = [];
      for (let i = 0; i < (this.options.options?.count as number); i++) {
        //XXXX
      }
      return ret;
    }
    return;
  }

  public canCreateEnergyUsage(): boolean { return true; };
  public generateEnergyUsage(servicePoint: schema.EnergyServicePointWrapper): schema.EnergyUsageRead[] | undefined {
    if (Helper.isPositiveInteger(this.options.options?.count)) {
      let ret: schema.EnergyUsageRead[] = [];
      for (let i = 0; i < (this.options.options?.count as number); i++) {
        //XXXX
      }
      return ret;
    }
    return;
  }

  public canCreateEnergyAccount(): boolean { return true; };
  public generateEnergyAccount(customer: schema.CustomerWrapper): schema.EnergyAccountWrapper | undefined {
    return; //XXXX
  }

  public canCreateEnergyAccounts(): boolean { return true; };
  public generateEnergyAccounts(customer: schema.CustomerWrapper): schema.EnergyAccountWrapper[] | undefined {
    if (Helper.isPositiveInteger(this.options.options?.count)) {
      let ret: schema.EnergyAccountWrapper[] = [];
      for (let i = 0; i < (this.options.options?.count as number); i++) {
        const el = this.generateEnergyAccount(customer);
        if (el) ret.push(el);
      }
      return ret;
    }
    return;
  }

  public canCreateEnergyBalance(): boolean { return true; };
  public generateEnergyBalance(account: schema.EnergyAccountWrapper): schema.EnergyAccountBalance | undefined {
    return; //XXXX
  }

  public canCreateEnergyPaymentSchedule(): boolean { return true; };
  public generateEnergyPaymentSchedule(account: schema.EnergyAccountWrapper): schema.EnergyPaymentSchedule | undefined {
    return; //XXXX
  }

  public canCreateEnergyConcession(): boolean { return true; };
  public generateEnergyConcession(account: schema.EnergyAccountWrapper): schema.EnergyConcession | undefined {
    return; //XXXX
  }

  public canCreateEnergyConcessions(): boolean { return true; };
  public generateEnergyConcessions(account: schema.EnergyAccountWrapper): schema.EnergyConcession[] | undefined {
    if (Helper.isPositiveInteger(this.options.options?.count)) {
      let ret: schema.EnergyConcession[] = [];
      for (let i = 0; i < (this.options.options?.count as number); i++) {
        const el = this.generateEnergyConcession(account);
        if (el) ret.push(el);
      }
      return ret;
    }
    return;
  }

  public canCreateEnergyInvoice(): boolean { return true; };
  public generateEnergyInvoice(account: schema.EnergyAccountWrapper): schema.EnergyInvoice | undefined {
    return; //XXXX
  }

  public canCreateEnergyInvoices(): boolean { return true; };
  public generateEnergyInvoices(account: schema.EnergyAccountWrapper): schema.EnergyInvoice[] | undefined {
    if (Helper.isPositiveInteger(this.options.options?.count)) {
      let ret: schema.EnergyInvoice[] = [];
      for (let i = 0; i < (this.options.options?.count as number); i++) {
        const el = this.generateEnergyInvoice(account);
        if (el) ret.push(el);
      }
      return ret;
    }
    return;
  }

  public canCreateEnergyTransaction(): boolean { return true; };
  public generateEnergyTransaction(account: schema.EnergyAccountWrapper): schema.EnergyTransaction | undefined {
    return; //XXXX
  }

  public canCreateEnergyTransactions(): boolean { return true; };
  public generateEnergyTransactions(account: schema.EnergyAccountWrapper): schema.EnergyTransaction[] | undefined {
    if (Helper.isPositiveInteger(this.options.options?.count)) {
      let ret: schema.EnergyTransaction[] = [];
      for (let i = 0; i < (this.options.options?.count as number); i++) {
        const el = this.generateEnergyTransaction(account);
        if (el) ret.push(el);
      }
      return ret;
    }
    return;
  }

}
