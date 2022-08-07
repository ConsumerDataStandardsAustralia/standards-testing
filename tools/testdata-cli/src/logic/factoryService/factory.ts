import * as schema from '../../schema/cdr-test-data-schema';
import { OptionsGeneral } from '../options';

export interface FactoryOptions {
  general?: OptionsGeneral,
  count?: number,
  options?: {
    [k: string]: unknown;
  }
}

export abstract class Factory {
  protected options: FactoryOptions;

  protected constructor(options: FactoryOptions) {
    this.options = options;
  }

  // Documentation
  public abstract get briefDescription(): string;
  public abstract get detailedDescription(): string;

  // All data
  public canCreateFullData(): boolean { return false; };
  public generateFullData(data: schema.ConsumerDataRightTestDataJSONSchema): schema.ConsumerDataRightTestDataJSONSchema | undefined { return }


  // Register
  public canCreateHolder(): boolean { return false; };
  public generateHolder(): schema.Holder | undefined { return }

  public canCreateHolders(): boolean { return false; };
  public generateHolders(): schema.Holders[] | undefined { return }

  public canCreateClients(): boolean { return false; };
  public generateClients(): schema.Client[] | undefined { return }

  public canCreateRecipients(): boolean { return false; };
  public generateRecipients(): schema.Recipient[] | undefined { return }


  // Admin
  public canCreateStatus(): boolean { return false; };
  public generateStatus(): schema.AdminStatus | undefined { return }

  public canCreateOutages(): boolean { return false; };
  public generateOutages(): schema.AdminOutage[] | undefined { return }


  // Customer
  public canCreateCustomer(): boolean { return false; };
  public generateCustomer(holder: schema.Holder): schema.Customer | undefined { return }

  public canCreateCustomers(): boolean { return false; };
  public generateCustomers(holder: schema.Holder): schema.Customer[] | undefined { return }


  // Banking
  public canCreateBankProduct(): boolean { return false; };
  public generateBankProduct(): schema.BankProduct | undefined { return }

  public canCreateBankProducts(): boolean { return false; };
  public generateBankProducts(): schema.BankProduct[] | undefined { return }

  public canCreateBankAccount(): boolean { return false; };
  public generateBankAccount(customer: schema.Customer): any | undefined { return }

  public canCreateBankAccounts(): boolean { return false; };
  public generateBankAccounts(customer: schema.Customer): any[] | undefined { return }

  public canCreateBankBalance(): boolean { return false; };
  public generateBankBalance(account: any): any | undefined { return }

  public canCreateBankTransaction(): boolean { return false; };
  public generateBankTransaction(account: any): any | undefined { return }

  public canCreateBankTransactions(): boolean { return false; };
  public generateBankTransactions(account: any): any[] | undefined { return }

  public canCreateBankDirectDebits(): boolean { return false; };
  public generateBankDirectDebits(accounts: any[]): any[] | undefined { return }

  public canCreateBankPayees(): boolean { return false; };
  public generateBankPayees(accounts: any[]): any[] | undefined { return }

  public canCreateBankScheduledPayments(): boolean { return false; };
  public generateScheduledPayments(accounts: any[]): any[] | undefined { return }


  // Energy
  public canCreateEnergyPlan(): boolean { return false; };
  public generateEnergyPLan(): any | undefined { return }

  public canCreateEnergyPlans(): boolean { return false; };
  public generateEnergyPlans(): any[] | undefined { return }

  public canCreateEnergyServicePoint(): boolean { return false; };
  public generateEnergyServicePoint(): any | undefined { return }

  public canCreateEnergyServicePoints(): boolean { return false; };
  public generateEnergyServicePoints(): any[] | undefined { return }

  public canCreateEnergyDER(): boolean { return false; };
  public generateEnergyDER(servicePoint: any): any[] | undefined { return }

  public canCreateEnergyUsage(): boolean { return false; };
  public generateEnergyUsage(servicePoint: any): any[] | undefined { return }

  public canCreateEnergyPaymentSchedule(): boolean { return false; };
  public generateEnergyPaymentSchedule(): any | undefined { return }

  public canCreateEnergyConcession(): boolean { return false; };
  public generateEnergyConcession(): any | undefined { return }

  public canCreateEnergyConcessions(): boolean { return false; };
  public generateEnergyConcessions(): any[] | undefined { return }

  public canCreateEnergyAccount(): boolean { return false; };
  public generateEnergyAccount(): any | undefined { return }

  public canCreateEnergyAccounts(): boolean { return false; };
  public generateEnergyAccounts(customer: schema.Customer): any | undefined { return }

  public canCreateEnergyBalance(): boolean { return false; };
  public generateEnergyBalance(account: any): any | undefined { return }

  public canCreateEnergyInvoice(): boolean { return false; };
  public generateEnergyInvoice(): any | undefined { return }

  public canCreateEnergyInvoices(): boolean { return false; };
  public generateEnergyInvoices(): any[] | undefined { return }

  public canCreateEnergyTransaction(): boolean { return false; };
  public generateEnergyTransaction(): any | undefined { return }

  public canCreateEnergyTransactions(): boolean { return false; };
  public generateEnergyTransactions(): any[] | undefined { return }
}
