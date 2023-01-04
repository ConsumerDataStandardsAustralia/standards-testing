import { BankingAccount, BankingBalance, BankingDirectDebit, BankingPayeeDetailV2, BankingProductV4, BankingScheduledPayment, BankingTransaction } from "consumer-data-standards/banking";
import { CommonOrganisationDetailV2, CommonPersonDetailV2 } from "consumer-data-standards/common";
import { EnergyAccount, EnergyAccountDetailV2, EnergyConcession, EnergyDerRecord, EnergyInvoice, EnergyPaymentSchedule, EnergyPlan, EnergyServicePoint, EnergyUsageRead } from "consumer-data-standards/energy";
import { RegisterDataRecipient } from "consumer-data-standards/register";

 /* A JSON schema for defining test data files that can be used to seed a mock, or test, implementation of a Data Holder for the Consumer Data Right
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
  registerCache?: RegisterDataRecipient[];
}
/**
 * An array of holders and their data
 */
export type Holders = HolderWrapper[];

/**
 * An energy for a single service point (metering site) to contain all of the data related to the service point
 */
export interface EnergyServicePointWrapper {
  servicePoint: EnergyServicePoint;
  der?: EnergyDerRecord;
  /**
   * An array of reads for the service point
   */
  usage?: EnergyUsageRead[];
}
/**
 * A wrapper for a single eenrgy account to contain all of the data related to the account
 */
export interface EnergyAccountWrapper {
  account: EnergyAccountDetailV2;
  balance?: EnergyAccountBalance;
  /**
   * An array of agreed payment schedules
   */
  paymentSchedule?: EnergyPaymentSchedule[];
  /**
   * An array of invoices for the account
   */
  invoices?: EnergyInvoice[];
  /**
   * An array of transactions for the account
   */
  transactions?: EnergyTransaction[];
  /**
   * An array of concessions for the account
   */
  concessions?: EnergyConcession[];
}
/**
 * A wrapper for a single holder to contain all of the data related to the holder
 */
export interface HolderWrapper {
  /**
   * The unique internal ID of the holder
   */
  holderId: string;
  holder: Holder;
}
/**
 * A wrapper for a single bank account to contain all of the data related to the account
 */
export interface BankAccountWrapper {
  account: BankingAccount;
  balance?: BankingBalance;
  /**
   * An array of transactions for the account
   */
  transactions?: BankingTransaction[];
}
/**
 * A wrapper for a single customer to contain all of the data related to the customer
 */
export interface CustomerWrapper {
  /**
   * The unique internal ID of the customer
   */
  customerId: string;
  customer: Customer;
  /**
   * Banking data for this customer
   */
  banking?: {
    /**
     * An array of accounts and their data
     */
    accounts?: BankAccountWrapper[];
    /**
     * An array of direct debit authorisations
     */
    directDebits?: BankingDirectDebit[];
    /**
     * An array of payees
     */
    payees?: BankingPayeeDetailV2[];
    /**
     * An array of payment schedules
     */
    payments?: BankingScheduledPayment[];
    [k: string]: unknown;
  };
  /**
   * Energy data for this customer
   */
  energy?: {
    /**
     * An array of accounts and their data
     */
    accounts?: EnergyAccountWrapper[];
    /**
     * An array of service points and their data
     */
    servicePoints?: EnergyServicePointWrapper[];
    [k: string]: unknown;
  };
}
/**
 * Data for a single data holder
 */
export interface Holder {
  unauthenticated: Unauthenticated;
  authenticated: Authenticated;
}
/**
 * Authenticated data for a single data holder
 */
export interface Authenticated {
  /**
   * An array of customers and their data
   */
  customers?: CustomerWrapper[];
}
/**
 * Unauthenticated data for a single data holder
 */
export interface Unauthenticated {
  /**
   * Unauthenticated banking data
   */
  banking?: {
    /**
     * An array of banking products
     */
    products?: BankingProductV4[];
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
 * A previously registered client aligned to the current version of the data standards
 */
export interface Client {
  [k: string]: unknown;
}
/**
 * A customer object aligned to the current version of the data standards
 */
export interface Customer {
  customerUType: "organisation" | "person",
  person?: CommonPersonDetailV2,
  organisation?: CommonOrganisationDetailV2
}
/**
 * An energy account balance structure aligned to the current version of the data standards
 */
export interface EnergyAccountBalance {
  [k: string]: unknown;
}
/**
 * An energy transaction aligned to the current version of the data standards
 */
export interface EnergyTransaction {
  [k: string]: unknown;
}