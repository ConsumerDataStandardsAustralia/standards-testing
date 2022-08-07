export interface OptionsSingleFactory {
  id: string,
  options: {
    [k: string]: unknown;
  }
}

export interface OptionsWeighted {
  weighted: [
    {
      weighting: number,
      factory: OptionsSingleFactory
    }
  ]
}

export interface OptionsSequence {
  sequence: OptionsSingleFactory[]
}

export type OptionsFactory = OptionsSingleFactory | OptionsWeighted | OptionsSequence;

export interface OptionsRandomItemCount {
  min?: number,
  max?: number
}

export type OptionsItemCount = number | OptionsRandomItemCount;

export interface OptionsGeneral {
  fileVersion?: string,
  standardsVersion?: string,
  title?: string,
  description?: string,
}

export interface Options {
  general?: OptionsGeneral,

  factories?: {
    allDataFactory?: OptionsFactory,

    holdersFactory?: OptionsFactory,
    holders?: [
      {
        count?: OptionsItemCount,

        holderFactory?: OptionsFactory,
        unauthenticated?: {
          unauthenticatedFactory?: OptionsFactory,
          banking?: {
            productFactory?: OptionsFactory
          },
          energy?: {
            planFactory?: OptionsFactory
          },
          admin?: {
            adminFactory?: OptionsFactory,
            statusFactory?: OptionsFactory,
            outageFactory?: OptionsFactory
          }
        },
        authenticated?: {
          customersFactory?: OptionsFactory,
          customers?: {
            count?: OptionsItemCount;
            customerFactory?: OptionsFactory,

            banking?: {
              bankingFactory?: OptionsFactory,
              accountsFactory?: OptionsFactory,
              accounts?: {
                count?: OptionsItemCount;
                accountFactory?: OptionsFactory,
                transactionsFactory?: OptionsFactory,
              },
              directDebitsFactory?: OptionsFactory,
              payeesFactory?: OptionsFactory,
              paymentSchedulesFactory?: OptionsFactory
            }
          }
        }
      }
    ],

    clientCacheFactory?: OptionsFactory,

    registerCacheFactory?: OptionsFactory
  }
}
