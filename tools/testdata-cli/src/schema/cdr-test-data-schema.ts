/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A JSON schema for defining test data files that can be used to seed a mock, or test, implementation of a Data Holder for the Consumer Data Right
 */
export interface ConsumerDataRightTestDataJSONSchema {
  /**
   * The version of the file formatted using semver (without extensions)
   */
  fileVersion: string;
  /**
   * The version of the CDR standards that these tests are validated for.  For formatted using semver (without extensions)
   */
  standardsVersion: string;
  /**
   * A short title of the test data file
   */
  title: string;
  /**
   * An optional description of the test data file to identify its purpose
   */
  description?: string;
  holders?: Holders;
  /**
   * A cache of previously registered clients
   */
  clientCache?: Client[];
  /**
   * A cache of previously loaded recipients from the CDR Register
   */
  registerCache?: Recipient[];
}
/**
 * A set of data holders, and their associated data, keyed on data holder ID
 */
export interface Holders {
  [k: string]: Holder;
}
/**
 * Data for a single data holder
 *
 * This interface was referenced by `Holders`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9]+$".
 */
export interface Holder {
  /**
   * Unauthenticated data for a single data holder
   */
  unauthenticated: {
    /**
     * Unauthenticated banking data
     */
    banking?: {
      /**
       * An array of banking products
       */
      products?: BankProduct[];
    };
    /**
     * Unauthenticated energy data
     */
    energy?: {
      /**
       * An array of energy plans
       */
      plans?: EnergyPlan[];
    };
    /**
     * Current system status
     */
    admin?: {
      status?: AdminStatus;
      /**
       * An array of planned outages
       */
      outages?: AdminOutage[];
    };
  };
  /**
   * Authenticated data for a single data holder
   */
  authenticated: {
    /**
     * An array of customers and their data
     */
    customers?: CustomerWrapper[];
  };
}
/**
 * A bank product aligned to the current version of the data standards
 */
export interface BankProduct {
  [k: string]: unknown;
}
/**
 * An energy plan aligned to the current version of the data standards
 */
export interface EnergyPlan {
  [k: string]: unknown;
}
/**
 * A status object for the holder
 */
export interface AdminStatus {
  [k: string]: unknown;
}
/**
 * A planned outage object for the holder
 */
export interface AdminOutage {
  [k: string]: unknown;
}
/**
 * A wrapper for a single customer to contain all of the data related to the customer
 */
export interface CustomerWrapper {
  customer: Customer;
  /**
   * Banking data for this customer
   */
  banking: {
    /**
     * An array of accounts and their
     */
    accounts?: BankAccountWrapper[];
    /**
     * An array of direct debit authorisations
     */
    directDebits?: BankDirectDebit[];
    /**
     * An array of payees
     */
    payees?: BankPayee[];
    /**
     * An array of payment schedules
     */
    payments?: BankPaymentSchedule[];
    [k: string]: unknown;
  };
}
/**
 * A customer record aligned to the current version of the data standards
 */
export interface Customer {
  [k: string]: unknown;
}
/**
 * A wrapper for a single bank account to contain all of the data related to the account
 */
export interface BankAccountWrapper {
  account: BankAccount;
  balance: BankAccountBalance;
  /**
   * An array of transactions for the account
   */
  transactions?: BankTransaction[];
}
/**
 * A bank account aligned to the current version of the data standards
 */
export interface BankAccount {
  [k: string]: unknown;
}
/**
 * A balance for a bank account aligned to the current version of the data standards
 */
export interface BankAccountBalance {
  [k: string]: unknown;
}
/**
 * A bank transaction aligned to the current version of the data standards
 */
export interface BankTransaction {
  [k: string]: unknown;
}
/**
 * A direct debit authorisation aligned to the current version of the data standards
 */
export interface BankDirectDebit {
  [k: string]: unknown;
}
/**
 * A payee aligned to the current version of the data standards
 */
export interface BankPayee {
  [k: string]: unknown;
}
/**
 * A payment schedule aligned to the current version of the data standards
 */
export interface BankPaymentSchedule {
  [k: string]: unknown;
}
/**
 * A previously registered client aligned to the current version of the data standards
 */
export interface Client {
  [k: string]: unknown;
}
/**
 * A recipient record from the CDR Register aligned to the current version of the data standards
 */
export interface Recipient {
  [k: string]: unknown;
}
