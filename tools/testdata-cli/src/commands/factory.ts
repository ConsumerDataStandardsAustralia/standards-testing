import {
  Arguments,
  CommandBuilder
} from 'yargs';
import {
  createFactory
}
from '../logic/factoryService';

type Options = {
  id: string;
};

export const command: string = 'factory <id>';
export const desc: string = 'Give detailed documentation for a specific factory including the purpose of the factory, the data that it generates or modifies and the options that it consumes.';

export const  builder: CommandBuilder<Options, Options> =   (yargs) =>
  yargs
    .positional('id', { type: 'string', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { id } = argv;

  let result = 1;

  try {
    const factory = createFactory(id, {});
    if (factory) {
      let output = '';

      output += `Documentation for the '${id}' factory\n\n`;
      output += `Supported capabilities include:\n`;

      if (factory.canCreateFullData()) output +='    generate a full data set\n';
      if (factory.canCreateHolder()) output +='    create a data holder\n';
      if (factory.canCreateHolders()) output +='    create a set of data holders\n';
      if (factory.canCreateClients()) output +='    create clients for a client cache\n';
      if (factory.canCreateRecipients()) output +='    create recipients for a register cache\n';
      if (factory.canCreateStatus()) output +='    create a holder status message\n';
      if (factory.canCreateOutages()) output +='    create a set of holder planned outages\n';
      if (factory.canCreateCustomer()) output +='    create a customer\n';
      if (factory.canCreateCustomers()) output +='    create a set of customers\n';
      if (factory.canCreateBankProducts()) output +='    create a set of bank products\n';
      if (factory.canCreateBankAccount()) output +='    create a bank account\n';
      if (factory.canCreateBankAccounts()) output +='    create a set of bank accounts\n';
      if (factory.canCreateBankBalance()) output +='    create a bank account balance\n';
      if (factory.canCreateBankTransaction()) output +='    create a bank transaction\n';
      if (factory.canCreateBankTransactions()) output +='    create a set of bank transactions\n';
      if (factory.canCreateBankDirectDebits()) output +='    create a set of direct debits authorisations\n';
      if (factory.canCreateBankPayees()) output +='    create a set of banking payees\n';
      if (factory.canCreateBankScheduledPayments()) output +='    create a set of banking scheduled payments\n';
      if (factory.canCreateEnergyPlans()) output +='    create a set of energy plans\n';
      if (factory.canCreateEnergyServicePoint()) output +='    create an energy service point (NMI)\n';
      if (factory.canCreateEnergyServicePoints()) output +='    create a set of energy service points\n';
      if (factory.canCreateEnergyDER()) output +='    create a set of distributed energy resources\n';
      if (factory.canCreateEnergyUsage()) output +='    create a set of electricity usage records\n';
      if (factory.canCreateEnergyPaymentSchedules()) output +='    create an energy payment election\n';
      if (factory.canCreateEnergyConcession()) output +='    create an energy concession record\n';
      if (factory.canCreateEnergyConcessions()) output +='    create a set of energy concessions\n';
      if (factory.canCreateEnergyAccount()) output +='    create an energy account\n';
      if (factory.canCreateEnergyAccounts()) output +='    create a set of energy accounts\n';
      if (factory.canCreateEnergyBalance()) output +='    create an energy account balance\n';
      if (factory.canCreateEnergyInvoice()) output +='    create an energy invoice\n';
      if (factory.canCreateEnergyInvoices()) output +='    create a set of energy invoices\n';
      if (factory.canCreateEnergyTransaction()) output +='    create an energy transaction\n';
      if (factory.canCreateEnergyTransactions()) output +='    create a set of energy transactions\n';

      output += '\n';
      output += factory.detailedDescription;

      console.log(output);
      result = 0;
    }
  } catch (err) {
    console.error (`Error obtaining documentation for factory with ID '${id}'`);
  }

  process.exit(result);
};
