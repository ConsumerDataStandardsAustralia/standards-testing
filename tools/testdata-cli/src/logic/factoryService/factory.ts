import { BankingBalance, BankingDirectDebit, BankingPayeeDetailV2, BankingProductV4, BankingScheduledPayment, BankingTransaction } from 'consumer-data-standards/banking';
import { EnergyConcession, EnergyDerRecord, EnergyInvoice, EnergyPaymentSchedule, EnergyPlan, EnergyUsageRead } from 'consumer-data-standards/energy';
import { RegisterDataRecipient } from 'consumer-data-standards/register';
import * as schema from '../../schema/cdr-test-data-schema';
import { OptionsGeneral } from '../options';

export interface FactoryOptions {
  general?: OptionsGeneral,
  options?: {
    [k: string]: unknown;
  }
}

export abstract class Factory {
  protected options: FactoryOptions;
  protected factoryId: string;

  protected constructor(options: FactoryOptions, factoryId: string) {
    this.options = options;
    this.factoryId = factoryId;
  }

  // ID
  public get id(): string { return this.factoryId};


  // Documentation
  public abstract get briefDescription(): string;
  public abstract get detailedDescription(): string;


  // All data
  public canCreateFullData(): boolean { return false; };
  public generateFullData(data: schema.ConsumerDataRightTestDataJSONSchema): schema.ConsumerDataRightTestDataJSONSchema | undefined { return }


  // Data Holders
  public canCreateHolder(): boolean { return false; };
  public generateHolder(): schema.HolderWrapper | undefined { return }

  public canCreateHolders(): boolean { return false; };
  public generateHolders(): schema.Holders | undefined { return }

  // Client Registration
  public canCreateClients(): boolean { return false; };
  public generateClients(): schema.Client[] | undefined { return }

  // Register
  public canCreateRecipients(): boolean { return false; };
  public generateRecipients(): RegisterDataRecipient[] | undefined { return }


  // Admin
  public canCreateStatus(): boolean { return false; };
  public generateStatus(): schema.AdminStatus | undefined { return }

  public canCreateOutages(): boolean { return false; };
  public generateOutages(): schema.AdminOutage[] | undefined { return }


  // Customer
  public canCreateCustomer(): boolean { return false; };
  public generateCustomer(holder: schema.HolderWrapper): schema.CustomerWrapper | undefined { return }

  public canCreateCustomers(): boolean { return false; };
  public generateCustomers(holder: schema.HolderWrapper): schema.CustomerWrapper[] | undefined { return }


  // Banking
  public canCreateBankProducts(): boolean { return false; };
  public generateBankProducts(): BankingProductV4[] | undefined { return }

  public canCreateBankAccount(): boolean { return false; };
  public generateBankAccount(customer: schema.CustomerWrapper): schema.BankAccountWrapper | undefined { return }

  public canCreateBankAccounts(): boolean { return false; };
  public generateBankAccounts(customer: schema.CustomerWrapper): schema.BankAccountWrapper[] | undefined { return }

  public canCreateBankBalance(): boolean { return false; };
  public generateBankBalance(account: schema.BankAccountWrapper): BankingBalance | undefined { return }

  public canCreateBankTransaction(): boolean { return false; };
  public generateBankTransaction(account: schema.BankAccountWrapper): BankingTransaction | undefined { return }

  public canCreateBankTransactions(): boolean { return false; };
  public generateBankTransactions(account: schema.BankAccountWrapper): BankingTransaction[] | undefined { return }

  public canCreateBankDirectDebits(): boolean { return false; };
  public generateBankDirectDebits(accounts: schema.BankAccountWrapper[]): BankingDirectDebit[] | undefined { return }

  public canCreateBankPayees(): boolean { return false; };
  public generateBankPayees(accounts: schema.BankAccountWrapper[]): BankingPayeeDetailV2[] | undefined { return }

  public canCreateBankScheduledPayments(): boolean { return false; };
  public generateScheduledPayments(accounts: schema.BankAccountWrapper[]): BankingScheduledPayment[] | undefined { return }


  // Energy
  public canCreateEnergyPlans(): boolean { return false; };
  public generateEnergyPlans(): EnergyPlan[] | undefined { return }

  public canCreateEnergyServicePoint(): boolean { return false; };
  public generateEnergyServicePoint(): schema.EnergyServicePointWrapper | undefined { return }

  public canCreateEnergyServicePoints(): boolean { return false; };
  public generateEnergyServicePoints(): schema.EnergyServicePointWrapper[] | undefined { return }

  public canCreateEnergyDER(): boolean { return false; };
  public generateEnergyDER(servicePoint: schema.EnergyServicePointWrapper): EnergyDerRecord[] | undefined { return }

  public canCreateEnergyUsage(): boolean { return false; };
  public generateEnergyUsage(servicePoint: schema.EnergyServicePointWrapper): EnergyUsageRead[] | undefined { return }

  public canCreateEnergyAccount(): boolean { return false; };
  public generateEnergyAccount(customer: schema.CustomerWrapper): schema.EnergyAccountWrapper | undefined { return }

  public canCreateEnergyAccounts(): boolean { return false; };
  public generateEnergyAccounts(customer: schema.CustomerWrapper): schema.EnergyAccountWrapper[] | undefined { return }

  public canCreateEnergyBalance(): boolean { return false; };
  public generateEnergyBalance(account: schema.EnergyAccountWrapper): schema.EnergyAccountBalance | undefined { return }

  public canCreateEnergyPaymentSchedules(): boolean { return false; };
  public generateEnergyPaymentSchedules(account: schema.EnergyAccountWrapper): EnergyPaymentSchedule[] | undefined { return }

  public canCreateEnergyConcession(): boolean { return false; };
  public generateEnergyConcession(account: schema.EnergyAccountWrapper): EnergyConcession | undefined { return }

  public canCreateEnergyConcessions(): boolean { return false; };
  public generateEnergyConcessions(account: schema.EnergyAccountWrapper): EnergyConcession[] | undefined { return }

  public canCreateEnergyInvoice(): boolean { return false; };
  public generateEnergyInvoice(account: schema.EnergyAccountWrapper): EnergyInvoice | undefined { return }

  public canCreateEnergyInvoices(): boolean { return false; };
  public generateEnergyInvoices(account: schema.EnergyAccountWrapper): EnergyInvoice[] | undefined { return }

  public canCreateEnergyTransaction(): boolean { return false; };
  public generateEnergyTransaction(account: schema.EnergyAccountWrapper): schema.EnergyTransaction | undefined { return }

  public canCreateEnergyTransactions(): boolean { return false; };
  public generateEnergyTransactions(account: schema.EnergyAccountWrapper): schema.EnergyTransaction[] | undefined { return }
}
