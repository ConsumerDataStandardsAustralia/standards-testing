import * as fs from 'fs';
import { OpenStatus } from '../../random-generators';
import {
  Factory,
  Helper
} from '.';
import { createFactory } from '.';
import {
  Options,
  OptionsGeneral,
  OptionsFactory,
  OptionsSingleFactory,
  OptionsWeighted,
  OptionsSequence
} from '../options';
import { Authenticated, BankAccountWrapper, ConsumerDataRightTestDataJSONSchema, CustomerWrapper, EnergyAccountWrapper, EnergyServicePointWrapper, Holder, HolderWrapper, Unauthenticated } from '../schema/cdr-test-data-schema';

export const generateData = (options: Options, dst: string, verbose: boolean): number => {

  Helper.setVerbose(verbose);

  Helper.log('Commencing data generation');
  Helper.log(`Destination file: ${dst}`);

  let data: ConsumerDataRightTestDataJSONSchema = {
    fileVersion: options.general?.fileVersion || '',
    standardsVersion: options.general?.standardsVersion || '',
    title: options.general?.title || '',
    description: options.general?.description || ''
  }

  // Execute all data factories
  Helper.log('Executing global factories (if any)');
  data = generateAllData(options, data);

  // Execute holders factories
  Helper.log('Executing holder factories (if any)');
  data = generateHolders(options, data);

  // Execute client factories
  Helper.log('Executing client cache factories (if any)');
  data = generateClientCache(options, data);

  // Execute recipient factories
  Helper.log('Executing register cache factories (if any)');
  data = generateRegisterCache(options, data);

  // Save the generated data to the destination file
  Helper.log(`Outputting generated data to '${dst}'`);
  return outputData(data, dst)
}


// ----------------------------------------------------------------------------
// Data generation functions
// ----------------------------------------------------------------------------

function generateAllData(options: Options, data: ConsumerDataRightTestDataJSONSchema): ConsumerDataRightTestDataJSONSchema {
  let result = data;

  Helper.indentInc();

  // Create the factories
  if (options.factories?.allDataFactory) {
    result = generateSingleItem(options, options.factories?.allDataFactory,
      (factory) => {
        return factory.canCreateFullData();
      },
      (factory) => {
        return factory.generateFullData(JSON.parse(JSON.stringify(result)));
      }) as ConsumerDataRightTestDataJSONSchema;
  } else {
    Helper.log('No global factories configured')
  }

  Helper.indentDec();

  return result;
}

function generateHolders(options: Options, data: ConsumerDataRightTestDataJSONSchema): ConsumerDataRightTestDataJSONSchema {
  let result = data;

  Helper.indentInc();

  Helper.log('Executing multiple holder factories (if Any)');
  result = generateMultipleHolders(options, result);

  Helper.log('Executing detailed holder factories (if Any)');
  if (options.factories?.holders && options.factories?.holders.length > 0) {
    for (let i = 0; i < options.factories?.holders.length; i++) {

      Helper.log(`Executing detailed holder set ${i + 1}`, 1);
      const newData = generateDetailedHolders(options, options.factories?.holders[i], result);

      if (newData && newData.length > 0) {
        if (!result.holders) result.holders = [];
        result.holders.push(...newData);
      }
    }
  } else {
    updateExistingDataHolders(options, options, data);
  }

  Helper.indentDec();

  return result;
}

function generateMultipleHolders(options: Options, data: ConsumerDataRightTestDataJSONSchema): ConsumerDataRightTestDataJSONSchema {
  let result = data;
  let factories: Factory[] = []

  Helper.indentInc();

  // Create the factories
  if (options.factories?.holdersFactory) {
    Helper.log(`Creating multiple holder factories`)
    factories = createFactories(1, options.general, options.factories?.holdersFactory);
  }

  if (factories.length > 0) {
    Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)

    // If we have factories execute each one of them
    for (const factory of factories) {
      Helper.log(`Running factory '${factory.id}'`)
      if (factory.canCreateHolders()) {
        const newData = factory.generateHolders();
        if (newData) {
          if (!data.holders) data.holders = [];
          data.holders.push(...newData);
        }

        Helper.log(`Factory complete - ${newData ? newData.length : 0} holders created`, 1)
      } else {
        Helper.log(`Factory does not support multiple holder generation`, 1)
      }
    }
  } else {
    Helper.log('No multiple holder factories to execute', 1)
  }

  Helper.indentDec();

  return result;
}

function generateDetailedHolders(options: Options, holderOptions: any, data: ConsumerDataRightTestDataJSONSchema): HolderWrapper[] {
  let factories: Factory[] = [];
  let holders: HolderWrapper[] = [];

  Helper.indentInc();

  // Create the holder factories
  if (holderOptions.holderFactory) {
    Helper.log(`Creating detailed holder factories`)
    const count = Helper.isPositiveInteger(holderOptions.count) ? holderOptions.count : 1;
    factories = createFactories(count, options.general, holderOptions.holderFactory);
  }
  // Create the holders required
  if (factories.length > 0) {
    Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)

    // If we have factories execute each one of them
    for (const factory of factories) {
      Helper.log(`Running factory '${factory.id}'`)
      if (factory.canCreateHolder()) {
        const holder = factory.generateHolder();

        Helper.log(`Factory complete - ${holder ? 1 : 0} created`, 1)

        if (holder && holder.holder) {
          holders.push(holder);

          // Create the detail inside the created holder
          if (holderOptions.unauthenticated) {
            Helper.log(`Executing unauthenticated factories for holder`, 1);
            const newData = generateUnauthenticatedData(options, holderOptions.unauthenticated, holder);
            if (newData) holder.holder.unauthenticated = newData;
          } else {
            Helper.log(`No unauthenticated factories configured`, 1)
          }

          if (holderOptions.authenticated) {
            Helper.log(`Executing authenticated factories for holder`, 1);
            const newData = generateAuthenticatedData(options, holderOptions.authenticated, holder);
            if (newData) holder.holder.authenticated = newData;
          } else {
            Helper.log(`No authenticated factories configured`, 1)
          }
        }
      } else {
        Helper.log(`Factory does not support holder generation`, 1)
      }
    }
  } else {
    Helper.log('No detailed holder factories to execute and no holder found in existing data')
  }
  updateExistingDataHolders(options, holderOptions, data);
  Helper.indentDec();
  return holders;
}

function updateExistingDataHolders(options: Options, holderOptions: any, data: ConsumerDataRightTestDataJSONSchema) {
  data.holders?.forEach(holder => {
    if (holder.holderId != null) {
      if (!holder.holder) {
        let h: Holder = {
          unauthenticated: {},
          authenticated: {}
        }
        holder.holder = h;
      }
      // Create the detail inside the created holder
      if (holder.holder.unauthenticated == null && holderOptions.unauthenticated) {
        Helper.log(`Executing unauthenticated factories for holder`, 1);
        const newData = generateUnauthenticatedData(options, holderOptions.unauthenticated, holder);
        if (newData) holder.holder.unauthenticated = newData;
      } else {
        Helper.log(`No unauthenticated factories configured`, 1)
      }

      if (holder.holder.authenticated == null && holderOptions.authenticated) {
        Helper.log(`Executing authenticated factories for holder`, 1);
        if (holder.holder?.authenticated == null) holder.holder.authenticated = {};
        const newData = generateAuthenticatedData(options, holderOptions.authenticated, holder);
        if (newData) holder.holder.authenticated = newData;
      } else {
        Helper.log(`No authenticated factories configured`, 1)
      }
    } else {
      Helper.log('No detailed holder factories to execute and insufficient holder data found in existing data')
    }
  })
}

function generateUnauthenticatedData(options: Options, unauthOptions: any, holder: HolderWrapper): Unauthenticated {
  let result: Unauthenticated = {};
  let factories: Factory[] = [];

  Helper.indentInc();

  // Banking products
  if (unauthOptions.banking?.productsFactory) {
    Helper.log(`Creating banking products factories`)
    factories = createFactories(1, options.general, unauthOptions.banking?.productsFactory);

    if (factories.length > 0) {
      Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)

      // If we have factories execute each one of them
      for (const factory of factories) {
        Helper.log(`Running factory '${factory.id}'`)
        if (factory.canCreateBankProducts()) {
          const newData = factory.generateBankProducts();
          if (newData) {
            if (!result.banking) result.banking = {};
            if (!result.banking.products) result.banking.products = [];
            result.banking.products.push(...newData);
          }

          Helper.log(`Factory complete - ${newData ? newData.length : 0} created`, 1)
        } else {
          Helper.log(`Factory does not support bank product generation`, 1)
        }
      }
    } else {
      Helper.log('No bank product factories to execute')
    }
  }

  // Energy plans
  if (unauthOptions.energy?.plansFactory) {
    Helper.log(`Creating energy plans factories`)
    factories = createFactories(1, options.general, unauthOptions.energy?.plansFactory);

    if (factories.length > 0) {
      Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)

      // If we have factories execute each one of them
      for (const factory of factories) {
        Helper.log(`Running factory '${factory.id}'`)
        if (factory.canCreateEnergyPlans()) {
          const newData = factory.generateEnergyPlans();
          if (newData) {
            if (!result.energy) result.energy = {};
            if (!result.energy.plans) result.energy.plans = [];
            result.energy.plans.push(...newData);
          }

          Helper.log(`Factory complete - ${newData ? newData.length : 0} created`, 1)
        } else {
          Helper.log(`Factory does not support energy plans generation`, 1)
        }
      }
    } else {
      Helper.log('No energy plan factories to execute')
    }
  }

  // Admin Status
  if (unauthOptions.admin?.statusFactory) {
    Helper.log(`Creating status factories`)
    factories = createFactories(1, options.general, unauthOptions.admin?.statusFactory);

    if (factories.length > 0) {
      Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)

      // If we have factories execute each one of them
      for (const factory of factories) {
        Helper.log(`Running factory '${factory.id}'`)
        if (factory.canCreateStatus()) {
          const newData = factory.generateStatus();
          if (newData) {
            if (!result.admin) result.admin = {};
            result.admin.status = newData;
          }

          Helper.log(`Factory complete`, 1)
        } else {
          Helper.log(`Factory does not support status generation`, 1)
        }
      }
    } else {
      Helper.log('No status factories to execute')
    }
  }

  // Admin Outages
  if (unauthOptions.admin?.outagesFactory) {
    Helper.log(`Creating outages factories`)
    factories = createFactories(1, options.general, unauthOptions.admin?.outagesFactory);

    if (factories.length > 0) {
      Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)

      // If we have factories execute each one of them
      for (const factory of factories) {
        Helper.log(`Running factory '${factory.id}'`)
        if (factory.canCreateOutages()) {
          const newData = factory.generateOutages();
          if (newData) {
            if (!result.admin) result.admin = {};
            if (!result.admin.outages) result.admin.outages = [];
            result.admin.outages.push(...newData);
          }

          Helper.log(`Factory complete - ${newData ? newData.length : 0} created`, 1)
        } else {
          Helper.log(`Factory does not support outages generation`, 1)
        }
      }
    } else {
      Helper.log('No outages factories to execute')
    }
  }

  Helper.indentDec();

  return result;
}

function generateAuthenticatedData(options: Options, authOptions: any, holder: HolderWrapper): Authenticated {
  let result: Authenticated = {};

  Helper.indentInc();

  Helper.log('Executing multiple customer factories (if Any)');
  const newCustomers = generateMultipleCustomers(options, authOptions, holder);
  if (newCustomers && newCustomers.length > 0) {
    if (!result.customers) result.customers = [];
    result.customers.push(...newCustomers);
  }

  Helper.log('Executing detailed customer factories (if Any)');
  if (authOptions.customers && authOptions.customers.length > 0) {
    for (let i = 0; i < authOptions.customers.length; i++) {

      Helper.log(`Executing detailed customer set ${i + 1}`, 1);
      const newData = generateDetailedCustomers(options, authOptions.customers[i], holder);

      if (newData && newData.length > 0) {
        if (!result.customers) result.customers = [];
        result.customers.push(...newData);
      }
    }
  }

  Helper.indentDec();

  return result;
}

function generateMultipleCustomers(options: Options, authOptions: any, holder: HolderWrapper): CustomerWrapper[] | undefined {
  let result: CustomerWrapper[] | undefined;
  let factories: Factory[] = []

  Helper.indentInc();

  // Create the factories
  if (authOptions.customersFactory) {
    Helper.log(`Creating multiple customer factories`)
    factories = createFactories(1, options.general, authOptions.customersFactory);
  }

  if (factories.length > 0) {
    Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)

    // If we have factories execute each one of them
    for (const factory of factories) {
      Helper.log(`Running factory '${factory.id}'`)
      if (factory.canCreateCustomers()) {
        const newData = factory.generateCustomers(holder);
        if (newData) {
          if (!result) result = [];
          result.push(...newData);
        }

        Helper.log(`Factory complete - ${newData ? newData.length : 0} customers created`, 1)
      } else {
        Helper.log(`Factory does not support multiple customer generation`, 1)
      }
    }
  } else {
    Helper.log('No multiple customer factories to execute', 1)
  }

  Helper.indentDec();

  return result;
}

function generateDetailedCustomers(options: Options, customerOptions: any, holder: HolderWrapper): CustomerWrapper[] {
  let result: CustomerWrapper[] = [];
  let factories: Factory[] = []

  Helper.indentInc();

  // Create the customer factories
  if (customerOptions.customerFactory) {
    Helper.log(`Creating detailed customer factories`)
    const count = Helper.isPositiveInteger(customerOptions.count) ? customerOptions.count : 1;
    factories = createFactories(count, options.general, customerOptions.customerFactory);
  }

  // Create the customers required
  if (factories.length > 0) {
    Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)

    // If we have factories execute each one of them
    for (const factory of factories) {
      Helper.log(`Running factory '${factory.id}'`)
      if (factory.canCreateCustomer()) {
        const customer = factory.generateCustomer(holder);

        Helper.log(`Factory complete - ${customer ? 1 : 0} created`, 1)

        if (customer && customer.customer) {
          result.push(customer);

          // Create the detail inside the created customer
          if (customerOptions.banking) {
            Helper.log(`Executing banking factories for customer`, 1);
            const newData = generateCustomerBankingData(options, customerOptions.banking, customer);
            if (newData) customer.banking = newData;
          } else {
            Helper.log(`No customer banking factories configured`, 1)
          }

          if (customerOptions.energy) {
            Helper.log(`Executing energy factories for customer`, 1);
            const newData = generateCustomerEnergyData(options, customerOptions.energy, customer);
            if (newData) customer.energy = newData;
          } else {
            Helper.log(`No customer energy factories configured`, 1)
          }
        }
      } else {
        Helper.log(`Factory does not support customer generation`, 1)
      }
    }
  } else {
    Helper.log('No detailed customer factories to execute')
  }

  Helper.indentDec();

  return result;
}

function generateCustomerBankingData(options: Options, bankingOptions: any, customer: CustomerWrapper): any {
  let result: any = {};
  let factories: Factory[] = [];

  Helper.indentInc();

  // Banking accounts
  Helper.log('Executing multiple bank account factories (if Any)');
  const newAccounts = generateMultipleBankAccounts(options, bankingOptions, customer);
  if (newAccounts && newAccounts.length > 0) {
    if (!result.accounts) result.accounts = [];
    result.accounts.push(...newAccounts);
  }

  Helper.log('Executing detailed bank account factories (if Any)');
  if (bankingOptions.accounts && bankingOptions.accounts.length > 0) {
    for (let i = 0; i < bankingOptions.accounts.length; i++) {

      Helper.log(`Executing detailed bank account set ${i + 1}`, 1);
      const newData = generateDetailedBankAccounts(options, bankingOptions.accounts[i], customer);

      if (newData && newData.length > 0) {
        if (!result.accounts) result.accounts = [];
        result.accounts.push(...newData);
      }
    }
  }

  if (result.accounts) {
    // Banking Direct Debits
    if (bankingOptions.directDebitsFactory) {
      Helper.log(`Creating banking direct debits factories`)
      factories = createFactories(1, options.general, bankingOptions.directDebitsFactory);

      if (factories.length > 0) {
        Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)

        // If we have factories execute each one of them
        for (const factory of factories) {
          Helper.log(`Running factory '${factory.id}'`)
          if (factory.canCreateBankDirectDebits()) {
            const newData = factory.generateBankDirectDebits(result.accounts);
            if (newData) {
              if (!result.directDebits) result.directDebits = [];
              result.directDebits.push(...newData);
            }

            Helper.log(`Factory complete - ${newData ? newData.length : 0} created`, 1)
          } else {
            Helper.log(`Factory does not support bank direct debit generation`, 1)
          }
        }
      } else {
        Helper.log('No bank direct debit factories to execute')
      }
    }

    // Banking Payees
    if (bankingOptions.payeesFactory) {
      Helper.log(`Creating banking payees factories`)
      factories = createFactories(1, options.general, bankingOptions.payeesFactory);

      if (factories.length > 0) {
        Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)

        // If we have factories execute each one of them
        for (const factory of factories) {
          Helper.log(`Running factory '${factory.id}'`)
          if (factory.canCreateBankPayees()) {
            const newData = factory.generateBankPayees(result.accounts);
            if (newData) {
              if (!result.payees) result.payees = [];
              result.payees.push(...newData);
            }

            Helper.log(`Factory complete - ${newData ? newData.length : 0} created`, 1)
          } else {
            Helper.log(`Factory does not support bank payees generation`, 1)
          }
        }
      } else {
        Helper.log('No bank payees factories to execute')
      }
    }

    // Banking Scheduled Payments
    if (bankingOptions.scheduledPaymentsFactory) {
      Helper.log(`Creating banking scheduled payments factories`)
      factories = createFactories(1, options.general, bankingOptions.scheduledPaymentsFactory);

      if (factories.length > 0) {
        Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)

        // If we have factories execute each one of them
        for (const factory of factories) {
          Helper.log(`Running factory '${factory.id}'`)
          if (factory.canCreateBankScheduledPayments()) {
            const newData = factory.generateScheduledPayments(result.accounts);
            if (newData) {
              if (!result.payments) result.payments = [];
              result.payments.push(...newData);
            }

            Helper.log(`Factory complete - ${newData ? newData.length : 0} created`, 1)
          } else {
            Helper.log(`Factory does not support bank scheduled payments generation`, 1)
          }
        }
      } else {
        Helper.log('No bank scheduled payments factories to execute')
      }
    }
  }

  Helper.indentDec();

  return result;
}

function generateMultipleBankAccounts(options: Options, bankOptions: any, customer: CustomerWrapper): BankAccountWrapper[] | undefined {
  let result: BankAccountWrapper[] | undefined;
  let factories: Factory[] = []

  Helper.indentInc();

  // Create the factories
  if (bankOptions.accountsFactory) {
    Helper.log(`Creating multiple bank account factories`)
    factories = createFactories(1, options.general, bankOptions.accountsFactory);
  }

  if (factories.length > 0) {
    Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)

    // If we have factories execute each one of them
    for (const factory of factories) {
      Helper.log(`Running factory '${factory.id}'`)
      if (factory.canCreateBankAccounts()) {
        const newData = factory.generateBankAccounts(customer);
        if (newData) {
          if (!result) result = [];
          result.push(...newData);
        }

        Helper.log(`Factory complete - ${newData ? newData.length : 0} bank accounts created`, 1)
      } else {
        Helper.log(`Factory does not support multiple bank account generation`, 1)
      }
    }
  } else {
    Helper.log('No multiple bank account factories to execute', 1)
  }

  Helper.indentDec();

  return result;
}

function generateDetailedBankAccounts(options: Options, accountOptions: any, customer: CustomerWrapper): BankAccountWrapper[] {
  let result: BankAccountWrapper[] = [];
  let factories: Factory[] = []

  Helper.indentInc();

  // Create the bank account factories
  if (accountOptions.accountFactory) {
    Helper.log(`Creating detailed bank account factories`)
    const count = Helper.isPositiveInteger(accountOptions.count) ? accountOptions.count : 1;
    factories = createFactories(count, options.general, accountOptions.accountFactory);
  }

  // Create the bank accounts required
  if (factories.length > 0) {
    Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)

    // If we have factories execute each one of them
    for (const factory of factories) {
      Helper.log(`Running factory '${factory.id}'`)
      if (factory.canCreateBankAccount()) {
        const account = factory.generateBankAccount(customer);

        Helper.log(`Factory complete - ${account ? 1 : 0} created`, 1)

        if (account && account.account) {
          result.push(account);

          // Create the detail inside the created account
          if (accountOptions.balanceFactory) {
            Helper.log(`Executing balance factories for bank account`, 1);
            account.balance = generateSingleItem(options, accountOptions.balanceFactory,
              (factory) => {
                return factory.canCreateBankBalance();
              },
              (factory) => {
                return factory.generateBankBalance(account);
              })
          } else {
            Helper.log(`No bank account balance factories configured`, 1)
          }

          if (accountOptions.transactionsFactory) {
            Helper.log(`Executing transactions factories for bank account`, 1);
            account.transactions = generateArrayOfItems(options, accountOptions.transactionsFactory,
              (factory) => {
                return factory.canCreateBankTransactions();
              },
              (factory) => {
                return factory.generateBankTransactions(account);
              })
          } else {
            Helper.log(`No bank account transactions factories configured`, 1)
          }
        }
      } else {
        Helper.log(`Factory does not support bank account generation`, 1)
      }
    }
  } else {
    Helper.log('No detailed bank account factories to execute')
  }

  Helper.indentDec();

  return result;
}

function getServicePointsForAllAcounts(accounts: EnergyAccountWrapper[]): string[] {
  let sp: string[] = [];
  accounts?.forEach(account => {
    let electricitySp = account.account.plans.find(x => x.planDetail?.electricityContract)?.servicePointIds;
    if (electricitySp != undefined) { sp.push(...electricitySp) }
  })
  return sp;
}

function generateCustomerEnergyData(options: Options, energyOptions: any, customer: CustomerWrapper): any {
  let result: any = {};

  Helper.indentInc();

  // Banking accounts
  Helper.log('Executing multiple energy account factories (if Any)');
  const newAccounts = generateMultipleEnergyAccounts(options, energyOptions, customer);
  if (newAccounts && newAccounts.length > 0) {
    if (!result.accounts) result.accounts = [];
    result.accounts.push(...newAccounts);
  }

  Helper.log('Executing detailed energy account factories (if Any)');
  if (energyOptions.accounts && energyOptions.accounts.length > 0) {
    for (let i = 0; i < energyOptions.accounts.length; i++) {

      Helper.log(`Executing detailed energy account set ${i + 1}`, 1);
      const newData = generateDetailedEnergyAccounts(options, energyOptions.accounts[i], customer);

      if (newData && newData.length > 0) {
        if (!result.accounts) result.accounts = [];
        result.accounts.push(...newData);
      }
    }
  }

  // extract the service point ids from the active service points
  let activeServicePoints: string[] = getServicePointsForAllAcounts(result.accounts as EnergyAccountWrapper[]);
  result?.accounts?.forEach((acc: EnergyAccountWrapper) => {
    if (acc.account.openStatus == OpenStatus.OPEN) {
      acc.account.plans.forEach((p: any) => {
        if (p?.servicePoints?.length > 0)
          activeServicePoints.push(...p.servicePoints);
      })
    }
  })
  // Service points
  Helper.log('Executing multiple service point factories (if Any)');
  const newServicePoints = generateMultipleServicePoints(options, energyOptions, activeServicePoints);
  if (newServicePoints && newServicePoints.length > 0) {
    if (!result.servicePoints) result.servicePoints = [];
    result.servicePoints.push(...newServicePoints);
  }

  Helper.log('Executing detailed service point factories (if Any)');
  if (energyOptions.servicePoints && energyOptions.servicePoints.length > 0) {
    for (let i = 0; i < energyOptions.servicePoints.length; i++) {

      Helper.log(`Executing detailed service point set ${i + 1}`, 1);
      const newData = generateDetailedServicePoints(options, energyOptions.servicePoints[i], activeServicePoints);

      if (newData && newData.length > 0) {
        if (!result.servicePoints) result.servicePoints = [];
        result.servicePoints.push(...newData);
      }
    }
  }

  Helper.indentDec();

  return result;
}

function generateMultipleEnergyAccounts(options: Options, energyOptions: any, customer: CustomerWrapper): EnergyAccountWrapper[] | undefined {
  let result: EnergyAccountWrapper[] | undefined;
  let factories: Factory[] = []

  Helper.indentInc();

  // Create the factories
  if (energyOptions.accountsFactory) {
    Helper.log(`Creating multiple energy account factories`)
    factories = createFactories(1, options.general, energyOptions.accountsFactory);
  }

  if (factories.length > 0) {
    Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)

    // If we have factories execute each one of them
    for (const factory of factories) {
      Helper.log(`Running factory '${factory.id}'`)
      if (factory.canCreateEnergyAccounts()) {
        const newData = factory.generateEnergyAccounts(customer);
        if (newData) {
          if (!result) result = [];
          result.push(...newData);
        }

        Helper.log(`Factory complete - ${newData ? newData.length : 0} energy accounts created`, 1)
      } else {
        Helper.log(`Factory does not support multiple energy account generation`, 1)
      }
    }
  } else {
    Helper.log('No multiple energy account factories to execute', 1)
  }

  Helper.indentDec();

  return result;
}

function generateDetailedEnergyAccounts(options: Options, accountOptions: any, customer: CustomerWrapper): EnergyAccountWrapper[] {
  let result: EnergyAccountWrapper[] = [];
  let factories: Factory[] = []

  Helper.indentInc();

  // Create the energy account factories
  if (accountOptions.accountFactory) {
    Helper.log(`Creating detailed energy account factories`)
    const count = Helper.isPositiveInteger(accountOptions.count) ? accountOptions.count : 1;
    factories = createFactories(count, options.general, accountOptions.accountFactory);
  }

  // Create the energy accounts required
  if (factories.length > 0) {
    Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)

    // If we have factories execute each one of them
    for (const factory of factories) {
      Helper.log(`Running factory '${factory.id}'`)
      if (factory.canCreateEnergyAccount()) {
        const account = factory.generateEnergyAccount(customer);

        Helper.log(`Factory complete - ${account ? 1 : 0} created`, 1)

        if (account && account.account) {
          result.push(account);

          // Create the detail inside the created account
          if (accountOptions.balanceFactory) {
            Helper.log(`Executing balance factories for energy account`, 1);
            account.balance = generateSingleItem(options, accountOptions.balanceFactory,
              (factory) => {
                return factory.canCreateEnergyBalance();
              },
              (factory) => {
                return factory.generateEnergyBalance(account);
              })
          } else {
            Helper.log(`No energy account balance factories configured`, 1)
          }

          if (accountOptions.invoicesFactory) {
            Helper.log(`Executing invoices factories for energy account`, 1);
            account.invoices = generateArrayOfItems(options, accountOptions.invoicesFactory,
              (factory) => {
                return factory.canCreateEnergyInvoices();
              },
              (factory) => {
                return factory.generateEnergyInvoices(account);
              })
          } else {
            Helper.log(`No energy account invoices factories configured`, 1)
          }

          if (accountOptions.transactionsFactory) {
            Helper.log(`Executing transactions factories for energy account`, 1);
            account.transactions = generateArrayOfItems(options, accountOptions.transactionsFactory,
              (factory) => {
                return factory.canCreateEnergyTransactions();
              },
              (factory) => {
                return factory.generateEnergyTransactions(account);
              })
          } else {
            Helper.log(`No energy account transactions factories configured`, 1)
          }

          if (accountOptions.concessionsFactory) {
            Helper.log(`Executing concessions factories for energy account`, 1);
            account.concessions = generateArrayOfItems(options, accountOptions.concessionsFactory,
              (factory) => {
                return factory.canCreateEnergyConcessions();
              },
              (factory) => {
                return factory.generateEnergyConcessions(account);
              })
          } else {
            Helper.log(`No energy account concessions factories configured`, 1)
          }

          if (accountOptions.paymentScheduleFactory) {
            Helper.log(`Executing payment schedule factories for energy account`, 1);
            account.paymentSchedule = generateArrayOfItems(options, accountOptions.paymentScheduleFactory,
              (factory) => {
                return factory.canCreateEnergyPaymentSchedules();
              },
              (factory) => {
                return factory.generateEnergyPaymentSchedules(account);
              })
          } else {
            Helper.log(`No energy account payment schedule factories configured`, 1)
          }
        }
      } else {
        Helper.log(`Factory does not support energy account generation`, 1)
      }
    }
  } else {
    Helper.log('No detailed energy account factories to execute')
  }

  Helper.indentDec();

  return result;
}

function generateMultipleServicePoints(options: Options, servicePointOptions: any, activeServicePoints: string[]): EnergyServicePointWrapper[] | undefined {
  let result: EnergyServicePointWrapper[] | undefined;
  let factories: Factory[] = []

  Helper.indentInc();

  // Create the factories
  if (servicePointOptions.servicePointsFactory) {
    Helper.log(`Creating multiple service point factories`)
    factories = createFactories(1, options.general, servicePointOptions.servicePointsFactory);
  }

  if (factories.length > 0) {
    Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)

    // If we have factories execute each one of them
    for (const factory of factories) {
      Helper.log(`Running factory '${factory.id}'`)
      if (factory.canCreateEnergyServicePoints()) {
        const newData = factory.generateEnergyServicePoints(activeServicePoints);
        if (newData) {
          if (!result) result = [];
          result.push(...newData);
        }

        Helper.log(`Factory complete - ${newData ? newData.length : 0} service points created`, 1)
      } else {
        Helper.log(`Factory does not support multiple service points generation`, 1)
      }
    }
  } else {
    Helper.log('No multiple service point factories to execute', 1)
  }

  Helper.indentDec();

  return result;
}

function generateDetailedServicePoints(options: Options, servicePointOptions: any, activeServicePoints: string[]): EnergyServicePointWrapper[] {
  let result: EnergyServicePointWrapper[] = [];
  let factories: Factory[] = []

  Helper.indentInc();

  // Create the bank account factories
  if (servicePointOptions.servicePointFactory) {
    Helper.log(`Creating detailed service point factories`)
    const count = Helper.isPositiveInteger(servicePointOptions.count) ? servicePointOptions.count : 1;
    factories = createFactories(count, options.general, servicePointOptions.servicePointFactory);
  }

  // Create the service points required
  if (factories.length > 0) {
    Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)
    let cnt = 0;
    // If we have factories execute each one of them
    // allocate some of the service points to this factory
    let spCount = Helper.generateRandomIntegerInRange(0, activeServicePoints.length);
    let spArray = activeServicePoints.splice(0, Math.max(1, spCount - 1));

    for (const factory of factories) {
      Helper.log(`Running factory '${factory.id}'`)
      cnt++;
      if (factory.canCreateEnergyServicePoint()) {
        let sp = undefined;
        if (cnt <= spArray.length) {
          sp = spArray[cnt - 1]
        }
        const servicePoint = factory.generateEnergyServicePoint(sp);

        Helper.log(`Factory complete - ${servicePoint ? 1 : 0} created`, 1)

        if (servicePoint && servicePoint.servicePoint) {
          result.push(servicePoint);

          // Create the detail inside the created service point
          if (servicePointOptions.derFactory) {
            Helper.log(`Executing DER factories for service point`, 1);
            servicePoint.der = generateSingleItem(options, servicePointOptions.derFactory,
              (factory) => {
                return factory.canCreateEnergyDER();
              },
              (factory) => {
                return factory.generateEnergyDER(servicePoint);
              })
          } else {
            Helper.log(`No DER factories configured`, 1)
          }

          if (servicePointOptions.usageFactory) {
            Helper.log(`Executing energy usage factories for service point`, 1);
            servicePoint.usage = generateArrayOfItems(options, servicePointOptions.usageFactory,
              (factory) => {
                return factory.canCreateEnergyUsage();
              },
              (factory) => {
                return factory.generateEnergyUsage(servicePoint);
              })
          } else {
            Helper.log(`No energy usage factories configured`, 1)
          }
        }


      } else {
        Helper.log(`Factory does not support service point generation`, 1)
      }
    }
  } else {
    Helper.log('No detailed service point factories to execute')
  }

  Helper.indentDec();

  return result;
}

function generateClientCache(options: Options, data: ConsumerDataRightTestDataJSONSchema): ConsumerDataRightTestDataJSONSchema {
  let result = data;
  let factories: Factory[] = []

  Helper.indentInc();

  // Create the factories
  if (options.factories?.clientCacheFactory) {
    Helper.log(`Creating client cache factories`)
    factories = createFactories(1, options.general, options.factories?.clientCacheFactory);
  }

  if (factories.length > 0) {
    Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)

    // If we have factories execute each one of them
    for (const factory of factories) {
      Helper.log(`Running factory '${factory.id}'`)
      if (factory.canCreateClients()) {
        const newData = factory.generateClients();
        if (newData) {
          if (!data.clientCache) data.clientCache = [];
          data.clientCache.push(...newData);
        }

        Helper.log(`Factory complete - ${newData ? newData.length : 0} created`, 1)
      } else {
        Helper.log(`Factory does not support client cache generation`, 1)
      }
    }
  } else {
    Helper.log('No client cache factories to execute')
  }

  Helper.indentDec();

  return result;
}

function generateRegisterCache(options: Options, data: ConsumerDataRightTestDataJSONSchema): ConsumerDataRightTestDataJSONSchema {
  let result = data;
  let factories: Factory[] = []

  Helper.indentInc();

  // Create the factories
  if (options.factories?.registerCacheFactory) {
    Helper.log(`Creating register cache factories`)
    factories = createFactories(1, options.general, options.factories?.registerCacheFactory);
  }

  if (factories.length > 0) {
    Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)

    // If we have factories execute each one of them
    for (const factory of factories) {
      Helper.log(`Running factory '${factory.id}'`)
      if (factory.canCreateRecipients()) {
        const newData = factory.generateRecipients();
        if (newData) {
          if (!data.registerCache) data.registerCache = [];
          data.registerCache.push(...newData);
        }

        Helper.log(`Factory complete - ${newData ? newData.length : 0} created`, 1)
      } else {
        Helper.log(`Factory does not support register cache generation`, 1)
      }
    }
  } else {
    Helper.log('No register cache factories to execute')
  }

  Helper.indentDec();

  return result;
}

function generateSingleItem(options: Options, factoryOptions: OptionsFactory, canFunc: (factory: Factory) => boolean, genFunc: (factory: Factory) => any | undefined): any | undefined {
  let result: any | undefined;
  let factories: Factory[] = [];

  Helper.indentInc();

  if (factoryOptions) {
    Helper.log(`Creating factories`)
    factories = createFactories(1, options.general, factoryOptions);

    if (factories.length > 0) {
      Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)

      // If we have factories execute each one of them
      for (const factory of factories) {
        Helper.log(`Running factory '${factory.id}'`, 1)
        if (canFunc(factory)) {
          const newData = genFunc(factory);
          if (newData) result = newData;

          Helper.log(`Factory complete - ${newData ? 1 : 0} created`, 1)
        } else {
          Helper.log(`Factory does not support requested generation type`, 1)
        }
      }
    } else {
      Helper.log('No factories to execute')
    }
  }

  Helper.indentDec();

  return result;
}

function generateArrayOfItems(options: Options, factoryOptions: OptionsFactory, canFunc: (factory: Factory) => boolean, genFunc: (factory: Factory) => any[] | undefined): any[] | undefined {
  let result: any[] | undefined;
  let factories: Factory[] = [];

  Helper.indentInc();

  if (factoryOptions) {
    Helper.log(`Creating factories`)
    factories = createFactories(1, options.general, factoryOptions);

    if (factories.length > 0) {
      Helper.log(`${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`)

      // If we have factories execute each one of them
      for (const factory of factories) {
        Helper.log(`Running factory '${factory.id}'`, 1)
        if (canFunc(factory)) {
          const newData = genFunc(factory);
          if (newData) {
            if (!result) result = [];
            result.push(...newData);
          }

          Helper.log(`Factory complete - ${newData ? newData.length : 0} created`, 1)
        } else {
          Helper.log(`Factory does not support requested generation type`, 1)
        }
      }
    } else {
      Helper.log('No factories to execute')
    }
  }

  Helper.indentDec();

  return result;
}

// ----------------------------------------------------------------------------
// Output functions
// ----------------------------------------------------------------------------

function outputData(data: ConsumerDataRightTestDataJSONSchema, dst: string): number {
  try {
    fs.writeFileSync(dst, JSON.stringify(data, null, 2));
  } catch (err) {
    Helper.error('Failed to output the generated file to the specified destination location')
    return 1;
  }
  return 0;
}



// ----------------------------------------------------------------------------
// Helper functions
// ----------------------------------------------------------------------------

function createFactories(iterations: number, general: OptionsGeneral | undefined, options: OptionsFactory): Factory[] {
  let result: Factory[] = [];

  // Handle OptionsSingleFactory
  if ((options as OptionsSingleFactory).id) {
    result = createSingleFactories(iterations, general, options as OptionsSingleFactory);

    // Handle OptionsWeighted
  } else if ((options as OptionsWeighted).weighted) {
    result = createWeightedFactories(iterations, general, options as OptionsWeighted);

    // Handle OptionsSequence
  } else if ((options as OptionsSequence).sequence) {
    result = createSequenceFactories(iterations, general, options as OptionsSequence);
  }

  return result;
}

function createSingleFactories(iterations: number, general: OptionsGeneral | undefined, options: OptionsSingleFactory): Factory[] {
  let result: Factory[] = [];

  for (let i = 0; i < iterations; i++) {
    const factory = createFactory(options.id, {
      general: general,
      options: options.options
    });
    if (factory) result.push(factory);
  }

  return result;
}

function createWeightedFactories(iterations: number, general: OptionsGeneral | undefined, options: OptionsWeighted): Factory[] {
  let result: Factory[] = [];

  let max = 0;
  for (const item of options.weighted) {
    max += item.weighting;
  }

  for (let i = 0; i < iterations; i++) {
    let rnd = Math.random() * max;

    for (const item of options.weighted) {
      rnd -= item.weighting;
      if (rnd <= 0) {
        const factory = createFactory(item.factory.id, {
          general: general,
          options: item.factory.options
        });
        if (factory) result.push(factory);
        break;
      }
    }
  }

  return result;
}

function createSequenceFactories(iterations: number, general: OptionsGeneral | undefined, options: OptionsSequence): Factory[] {
  let result: Factory[] = [];

  for (let i = 0; i < iterations; i++) {
    for (const item of options.sequence) {
      const factory = createFactory(item.id, {
        general: general,
        options: item.options
      });
      if (factory) result.push(factory);
    }
  }

  return result;
}