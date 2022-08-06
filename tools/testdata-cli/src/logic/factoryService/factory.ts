export abstract class Factory {
  protected options: any;

  protected constructor(options: any) {
    this.options = options;
  }

  // Documentation
  public abstract get briefDescription(): string;
  public abstract get detailedDescription(): string;

  // All data
  public canCreateFullData(): boolean { return false; };
  public generateFullData(): any | undefined { return }


  // Register
  public canCreateHolder(): boolean { return false; };
  public generateHolder(): any | undefined { return }

  public canCreateHolders(): boolean { return false; };
  public generateHolders(): any[] | undefined { return }

  public canCreateRecipient(): boolean { return false; };
  public generateRecipient(): any | undefined { return }

  public canCreateRecipients(): boolean { return false; };
  public generateRecipients(): any[] | undefined { return }


  // Admin
  public canCreateStatus(): boolean { return false; };
  public generateStatus(): any | undefined { return }

  public canCreateOutages(): boolean { return false; };
  public generateOutages(): any[] | undefined { return }


  // Customer
  public canCreateCustomer(): boolean { return false; };
  public generateCustomer(): any | undefined { return }

  public canCreateCustomers(): boolean { return false; };
  public generateCustomers(): any[] | undefined { return }


  // Banking
  public canCreateBankProduct(): boolean { return false; };
  public generateBankProduct(): any | undefined { return }

  public canCreateBankProducts(): boolean { return false; };
  public generateBankProducts(): any[] | undefined { return }

  public canCreateBankAccount(): boolean { return false; };
  public generateBankAccount(customer: any): any | undefined { return }

  public canCreateBankAccounts(): boolean { return false; };
  public generateBankAccounts(customer: any): any[] | undefined { return }

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
  public generateEnergyAccounts(customer: any): any | undefined { return }

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
