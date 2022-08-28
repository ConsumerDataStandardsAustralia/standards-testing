import * as fs from 'fs';
import {
  Factory,
  Helper
} from '.';
import { createFactory } from '.';
import * as schema from '../../schema/cdr-test-data-schema';
import {
  Options,
  OptionsGeneral,
  OptionsFactory,
  OptionsSingleFactory,
  OptionsWeighted,
  OptionsSequence
} from '../options';

export const generateData = (options: Options, dst: string, verbose: boolean): number => {
  log(verbose, 'Commencing data generation');
  log(verbose, `Destination file: ${dst}`);

  let data: schema.ConsumerDataRightTestDataJSONSchema = {
    fileVersion: options.general?.fileVersion || '',
    standardsVersion: options.general?.standardsVersion || '',
    title: options.general?.title || '',
    description: options.general?.description || ''
  }

  // Execute all data factories
  log(verbose, 'Executing global factories (if any)');
  data = generateAllData(verbose, 1, options, data);

  // Execute holders factories
  log(verbose, 'Executing holder factories (if any)');
  data = generateHolders(verbose, 1, options, data);

  // Execute client factories
  log(verbose, 'Executing client cache factories (if any)');
  data = generateClientCache(verbose, 1, options, data);

  // Execute recipient factories
  log(verbose, 'Executing register cache factories (if any)');
  data = generateRegisterCache(verbose, 1, options, data);

  // Save the generated data to the destination file
  log(verbose, `Outputting generated data to '${dst}'`);
  return outputData(verbose, options, data, dst)
}



// ----------------------------------------------------------------------------
// Data generation functions
// ----------------------------------------------------------------------------

function generateAllData(verbose: boolean, indent: number, options: Options, data: schema.ConsumerDataRightTestDataJSONSchema): schema.ConsumerDataRightTestDataJSONSchema {
  let result = data;
  let factories: Factory[] = []

  // Create the factories
  if (options.factories?.allDataFactory) {
    log(verbose, `Creating global factories`, indent)
    factories = createFactories(1, options.general, options.factories?.allDataFactory);
  }

  if (factories.length > 0) {
    log(verbose, `${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`, indent)

    // If we have factories execute each one of them
    for (const factory of factories) {
      log(verbose, `Running factory '${factory.id}'`, indent)
      if (factory.canCreateFullData()) {
        const newData = factory.generateFullData(JSON.parse(JSON.stringify(result)));
        if (newData) result = newData;

        log(verbose, `Factory complete`, indent+1)
      } else {
        log(verbose, `Factory does not support full data generation`, indent+1)
      }
    }
  } else {
    log(verbose, 'No global factories to execute', indent)
  }

  return result;
}

function generateHolders(verbose: boolean, indent: number, options: Options, data: schema.ConsumerDataRightTestDataJSONSchema): schema.ConsumerDataRightTestDataJSONSchema {
  let result = data;

  log(verbose, 'Executing multiple holder factories (if Any)', indent);
  result = generateMultipleHolders(verbose, indent+1, options, result);

  log(verbose, 'Executing detailed holder factories (if Any)', indent);
  if (options.factories?.holders && options.factories?.holders.length > 0) {
    for (let i = 0; i < options.factories?.holders.length; i++) {

      log(verbose, `Executing detailed holder set ${i+1}`, indent+1);
      const newData = generateDetailedHolders(verbose, indent+2, options, options.factories?.holders[i], result);

      if (newData && newData.length > 0) {
        if (!result.holders) result.holders = [];
        result.holders.push(...newData);
      }
    }
  }

  return result;
}

function generateMultipleHolders(verbose: boolean, indent: number, options: Options, data: schema.ConsumerDataRightTestDataJSONSchema): schema.ConsumerDataRightTestDataJSONSchema {
  let result = data;
  let factories: Factory[] = []

  // Create the factories
  if (options.factories?.holdersFactory) {
    log(verbose, `Creating multiple holder factories`, indent)
    factories = createFactories(1, options.general, options.factories?.holdersFactory);
  }

  if (factories.length > 0) {
    log(verbose, `${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`, indent)

    // If we have factories execute each one of them
    for (const factory of factories) {
      log(verbose, `Running factory '${factory.id}'`, indent)
      if (factory.canCreateHolders()) {
        const newData = factory.generateHolders();
        if (newData) {
          if (!data.holders) data.holders = [];
          data.holders.push(...newData);
        }

        log(verbose, `Factory complete - ${newData ? newData.length : 0} holders created`, indent+1)
      } else {
        log(verbose, `Factory does not support multiple holder generation`, indent+1)
      }
    }
  } else {
    log(verbose, 'No multiple holder factories to execute', indent+1)
  }

  return result;
}

function generateDetailedHolders(verbose: boolean, indent: number, options: Options, holderOptions: any, data: schema.ConsumerDataRightTestDataJSONSchema): schema.HolderWrapper[] {
  let result = data;
  let factories: Factory[] = [];
  let holders: schema.HolderWrapper[] = [];

  // Create the holder factories
  if (holderOptions.holderFactory) {
    log(verbose, `Creating detailed holder factories`, indent)
    const count = Helper.isPositiveInteger(holderOptions.count) ? holderOptions.count : 1;
    factories = createFactories(count, options.general, holderOptions.holderFactory);
  }

  // Create the holders required
  if (factories.length > 0) {
    log(verbose, `${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`, indent)

    // If we have factories execute each one of them
    for (const factory of factories) {
      log(verbose, `Running factory '${factory.id}'`, indent)
      if (factory.canCreateHolder()) {
        const holder = factory.generateHolder();

        log(verbose, `Factory complete - ${holder ? 1 : 0} created`, indent+1)

        if (holder && holder.holder) {
          holders.push(holder);

          // Create the detail inside the created holder
          if (holderOptions.unauthenticated) {
            log(verbose, `Executing unauthenticated factories for holder`, indent+1);
            const newData = generateUnauthenticatedData(verbose, indent+2, options, holderOptions.unauthenticated, holder);
            if (newData) holder.holder.unauthenticated = newData;
          } else {
            log(verbose, `No unauthenticated factories configured`, indent+1)
          }

          if (holderOptions.authenticated) {
            log(verbose, `Executing authenticated factories for holder`, indent+1);
            const newData = generateAuthenticatedData(verbose, indent+2, options, holderOptions.authenticated, holder);
            if (newData) holder.holder.authenticated = newData;
          } else {
            log(verbose, `No authenticated factories configured`, indent+1)
          }
        }
      } else {
        log(verbose, `Factory does not support holder generation`, indent+1)
      }
    }
  } else {
    log(verbose, 'No detailed holder factories to execute', indent)
  }

  return holders;
}

function generateUnauthenticatedData(verbose: boolean, indent: number, options: Options, unauthOptions: any, holder: schema.HolderWrapper): schema.Unauthenticated {
  let result: schema.Unauthenticated = {};
  let factories: Factory[] = [];

  // Banking products
  if (unauthOptions.banking?.productsFactory) {
    log(verbose, `Creating banking products factories`, indent)
    factories = createFactories(1, options.general, unauthOptions.banking?.productsFactory);

    if (factories.length > 0) {
      log(verbose, `${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`, indent)

      // If we have factories execute each one of them
      for (const factory of factories) {
        log(verbose, `Running factory '${factory.id}'`, indent)
        if (factory.canCreateBankProducts()) {
          const newData = factory.generateBankProducts();
          if (newData) {
            if (!result.banking) result.banking = {};
            if (!result.banking.products) result.banking.products = [];
            result.banking.products.push(...newData);
          }

          log(verbose, `Factory complete - ${newData ? newData.length : 0} created`, indent+1)
        } else {
          log(verbose, `Factory does not support bank product generation`, indent+1)
        }
      }
    } else {
      log(verbose, 'No bank product factories to execute', indent)
    }
  }

  // Energy plans
  if (unauthOptions.energy?.plansFactory) {
    log(verbose, `Creating energy plans factories`, indent)
    factories = createFactories(1, options.general, unauthOptions.energy?.plansFactory);

    if (factories.length > 0) {
      log(verbose, `${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`, indent)

      // If we have factories execute each one of them
      for (const factory of factories) {
        log(verbose, `Running factory '${factory.id}'`, indent)
        if (factory.canCreateEnergyPlans()) {
          const newData = factory.generateEnergyPlans();
          if (newData) {
            if (!result.energy) result.energy = {};
            if (!result.energy.plans) result.energy.plans = [];
            result.energy.plans.push(...newData);
          }

          log(verbose, `Factory complete - ${newData ? newData.length : 0} created`, indent+1)
        } else {
          log(verbose, `Factory does not support energy plans generation`, indent+1)
        }
      }
    } else {
      log(verbose, 'No energy plan factories to execute', indent)
    }
  }

  // Admin Status
  if (unauthOptions.admin?.statusFactory) {
    log(verbose, `Creating status factories`, indent)
    factories = createFactories(1, options.general, unauthOptions.admin?.statusFactory);

    if (factories.length > 0) {
      log(verbose, `${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`, indent)

      // If we have factories execute each one of them
      for (const factory of factories) {
        log(verbose, `Running factory '${factory.id}'`, indent)
        if (factory.canCreateStatus()) {
          const newData = factory.generateStatus();
          if (newData) {
            if (!result.admin) result.admin = {};
            result.admin.status = newData;
          }

          log(verbose, `Factory complete`, indent+1)
        } else {
          log(verbose, `Factory does not support status generation`, indent+1)
        }
      }
    } else {
      log(verbose, 'No status factories to execute', indent)
    }
  }

  // Admin Outages
  if (unauthOptions.admin?.outagesFactory) {
    log(verbose, `Creating outages factories`, indent)
    factories = createFactories(1, options.general, unauthOptions.admin?.outagesFactory);

    if (factories.length > 0) {
      log(verbose, `${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`, indent)

      // If we have factories execute each one of them
      for (const factory of factories) {
        log(verbose, `Running factory '${factory.id}'`, indent)
        if (factory.canCreateOutages()) {
          const newData = factory.generateOutages();
          if (newData) {
            if (!result.admin) result.admin = {};
            if (!result.admin.outages) result.admin.outages = [];
            result.admin.outages.push(...newData);
          }

          log(verbose, `Factory complete - ${newData ? newData.length : 0} created`, indent+1)
        } else {
          log(verbose, `Factory does not support outages generation`, indent+1)
        }
      }
    } else {
      log(verbose, 'No outages factories to execute', indent)
    }
  }

  return result;
}

function generateAuthenticatedData(verbose: boolean, indent: number, options: Options, authOptions: any, holder: schema.HolderWrapper): schema.Authenticated {
  let result: schema.Authenticated = {};

  log(verbose, 'Executing multiple customer factories (if Any)', indent);
  const newCustomers = generateMultipleCustomers(verbose, indent+1, options, authOptions, holder);
  if (newCustomers && newCustomers.length > 0) {
    if (!result.customers) result.customers = [];
    result.customers.push(...newCustomers);
  }

  log(verbose, 'Executing detailed customer factories (if Any)', indent);
  if (authOptions.customers && authOptions.customers.length > 0) {
    for (let i = 0; i < authOptions.customers.length; i++) {

      log(verbose, `Executing detailed customer set ${i+1}`, indent+1);
      const newData = generateDetailedCustomers(verbose, indent+2, options, authOptions.customers[i], holder);

      if (newData && newData.length > 0) {
        if (!result.customers) result.customers = [];
        result.customers.push(...newData);
      }
    }
  }

  return result;
}

function generateMultipleCustomers(verbose: boolean, indent: number, options: Options, authOptions: any, holder: schema.HolderWrapper): schema.CustomerWrapper[] | undefined {
  let result: schema.CustomerWrapper[] | undefined;
  let factories: Factory[] = []

  // Create the factories
  if (authOptions.customersFactory) {
    log(verbose, `Creating multiple customer factories`, indent)
    factories = createFactories(1, options.general, authOptions.customersFactory);
  }

  if (factories.length > 0) {
    log(verbose, `${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`, indent)

    // If we have factories execute each one of them
    for (const factory of factories) {
      log(verbose, `Running factory '${factory.id}'`, indent)
      if (factory.canCreateCustomers()) {
        const newData = factory.generateCustomers(holder);
        if (newData) {
          if (!result) result = [];
          result.push(...newData);
        }

        log(verbose, `Factory complete - ${newData ? newData.length : 0} customers created`, indent+1)
      } else {
        log(verbose, `Factory does not support multiple customer generation`, indent+1)
      }
    }
  } else {
    log(verbose, 'No multiple customer factories to execute', indent+1)
  }

  return result;
}

function generateDetailedCustomers(verbose: boolean, indent: number, options: Options, customerOptions: any, holder: schema.HolderWrapper): schema.CustomerWrapper[] {
  let result: schema.CustomerWrapper[] = [];
  let factories: Factory[] = []

  // Create the customer factories
  if (customerOptions.customerFactory) {
    log(verbose, `Creating detailed customer factories`, indent)
    const count = Helper.isPositiveInteger(customerOptions.count) ? customerOptions.count : 1;
    factories = createFactories(count, options.general, customerOptions.customerFactory);
  }

  // Create the customers required
  if (factories.length > 0) {
    log(verbose, `${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`, indent)

    // If we have factories execute each one of them
    for (const factory of factories) {
      log(verbose, `Running factory '${factory.id}'`, indent)
      if (factory.canCreateCustomer()) {
        const customer = factory.generateCustomer(holder);

        log(verbose, `Factory complete - ${customer ? 1 : 0} created`, indent+1)

        if (customer && customer.customer) {
          result.push(customer);

          // Create the detail inside the created customer
          if (customerOptions.banking) {
            log(verbose, `Executing banking factories for customer`, indent+1);
            const newData = generateCustomerBankingData(verbose, indent+2, options, customerOptions.banking, customer);
            if (newData) customer.customer.banking = newData;
          } else {
            log(verbose, `No customer banking factories configured`, indent+1)
          }

          if (customerOptions.energy) {
            log(verbose, `Executing energy factories for customer`, indent+1);
            const newData = generateCustomerEnergyData(verbose, indent+2, options, customerOptions.energy, customer);
            if (newData) customer.customer.banking = newData;
          } else {
            log(verbose, `No customer energy factories configured`, indent+1)
          }
        }
      } else {
        log(verbose, `Factory does not support customer generation`, indent+1)
      }
    }
  } else {
    log(verbose, 'No detailed customer factories to execute', indent)
  }

  return result;
}

function generateCustomerBankingData(verbose: boolean, indent: number, options: Options, bankingOptions: any, customer: schema.CustomerWrapper): any {
  let result: any = {};
  let factories: Factory[] = [];

  // Banking accounts
  //XXXX

  if (result.accounts) {
    // Banking Direct Debits
    if (bankingOptions.directDebitsFactory) {
      log(verbose, `Creating banking direct debits factories`, indent)
      factories = createFactories(1, options.general, bankingOptions.directDebitsFactory);

      if (factories.length > 0) {
        log(verbose, `${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`, indent)

        // If we have factories execute each one of them
        for (const factory of factories) {
          log(verbose, `Running factory '${factory.id}'`, indent)
          if (factory.canCreateBankDirectDebits()) {
            const newData = factory.generateBankDirectDebits(result.accounts);
            if (newData) {
              if (!result.directDebits) result.directDebits = [];
              result.directDebits.push(...newData);
            }

            log(verbose, `Factory complete - ${newData ? newData.length : 0} created`, indent+1)
          } else {
            log(verbose, `Factory does not support bank direct debit generation`, indent+1)
          }
        }
      } else {
        log(verbose, 'No bank direct debit factories to execute', indent)
      }
    }

    // Banking Payees
    if (bankingOptions.payeesFactory) {
      log(verbose, `Creating banking payees factories`, indent)
      factories = createFactories(1, options.general, bankingOptions.payeesFactory);

      if (factories.length > 0) {
        log(verbose, `${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`, indent)

        // If we have factories execute each one of them
        for (const factory of factories) {
          log(verbose, `Running factory '${factory.id}'`, indent)
          if (factory.canCreateBankPayees()) {
            const newData = factory.generateBankPayees(result.accounts);
            if (newData) {
              if (!result.payees) result.payees = [];
              result.payees.push(...newData);
            }

            log(verbose, `Factory complete - ${newData ? newData.length : 0} created`, indent+1)
          } else {
            log(verbose, `Factory does not support bank payees generation`, indent+1)
          }
        }
      } else {
        log(verbose, 'No bank payees factories to execute', indent)
      }
    }

    // Banking Scheduled Payments
    if (bankingOptions.scheduledPaymentsFactory) {
      log(verbose, `Creating banking scheduled payments factories`, indent)
      factories = createFactories(1, options.general, bankingOptions.scheduledPaymentsFactory);

      if (factories.length > 0) {
        log(verbose, `${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`, indent)

        // If we have factories execute each one of them
        for (const factory of factories) {
          log(verbose, `Running factory '${factory.id}'`, indent)
          if (factory.canCreateBankScheduledPayments()) {
            const newData = factory.generateScheduledPayments(result.accounts);
            if (newData) {
              if (!result.payments) result.payments = [];
              result.payments.push(...newData);
            }

            log(verbose, `Factory complete - ${newData ? newData.length : 0} created`, indent+1)
          } else {
            log(verbose, `Factory does not support bank scheduled payments generation`, indent+1)
          }
        }
      } else {
        log(verbose, 'No bank scheduled payments factories to execute', indent)
      }
    }
  }

  return result;
}


function generateClientCache(verbose: boolean, indent: number, options: Options, data: schema.ConsumerDataRightTestDataJSONSchema): schema.ConsumerDataRightTestDataJSONSchema {
  let result = data;
  let factories: Factory[] = []

  // Create the factories
  if (options.factories?.clientCacheFactory) {
    log(verbose, `Creating client cache factories`, indent)
    factories = createFactories(1, options.general, options.factories?.clientCacheFactory);
  }

  if (factories.length > 0) {
    log(verbose, `${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`, indent)

    // If we have factories execute each one of them
    for (const factory of factories) {
      log(verbose, `Running factory '${factory.id}'`, indent)
      if (factory.canCreateClients()) {
        const newData = factory.generateClients();
        if (newData) {
          if (!data.clientCache) data.clientCache = [];
          data.clientCache.push(...newData);
        }

        log(verbose, `Factory complete - ${newData ? newData.length : 0} created`, indent+1)
      } else {
        log(verbose, `Factory does not support client cache generation`, indent+1)
      }
    }
  } else {
    log(verbose, 'No client cache factories to execute', indent)
  }

  return result;
}

function generateRegisterCache(verbose: boolean, indent: number, options: Options, data: schema.ConsumerDataRightTestDataJSONSchema): schema.ConsumerDataRightTestDataJSONSchema {
  let result = data;
  let factories: Factory[] = []

  // Create the factories
  if (options.factories?.registerCacheFactory) {
    log(verbose, `Creating register cache factories`, indent)
    factories = createFactories(1, options.general, options.factories?.registerCacheFactory);
  }

  if (factories.length > 0) {
    log(verbose, `${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`, indent)

    // If we have factories execute each one of them
    for (const factory of factories) {
      log(verbose, `Running factory '${factory.id}'`, indent)
      if (factory.canCreateRecipients()) {
        const newData = factory.generateRecipients();
        if (newData) {
          if (!data.registerCache) data.registerCache = [];
          data.registerCache.push(...newData);
        }

        log(verbose, `Factory complete - ${newData ? newData.length : 0} created`, indent+1)
      } else {
        log(verbose, `Factory does not support register cache generation`, indent+1)
      }
    }
  } else {
    log(verbose, 'No register cache factories to execute', indent)
  }

  return result;
}



// ----------------------------------------------------------------------------
// Output functions
// ----------------------------------------------------------------------------

function outputData(verbose: boolean, options: Options, data: schema.ConsumerDataRightTestDataJSONSchema, dst: string): number {
  try {
    fs.writeFileSync(dst, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Failed to output the generated file to the specified destination location')
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
  } else if((options as OptionsWeighted).weighted) {
    result = createWeightedFactories(iterations, general, options as OptionsWeighted);

  // Handle OptionsSequence
  } else if((options as OptionsSequence).sequence) {
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

function log(verbose: boolean, message: string, indent?: number) {
  let indentText = '';
  if (indent && indent > 0) {
    indentText = ' '.repeat(indent*2);
  }
  if (verbose) console.log(indentText + message);
}
