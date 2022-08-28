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
          banking?: {
            productsFactory?: OptionsFactory
          },
          energy?: {
            plansFactory?: OptionsFactory
          },
          admin?: {
            statusFactory?: OptionsFactory,
            outagesFactory?: OptionsFactory
          }
        },
        authenticated?: {
          customersFactory?: OptionsFactory,
          customers?: [
            {
              count?: OptionsItemCount;
              customerFactory?: OptionsFactory,

              banking?: {
                accountsFactory?: OptionsFactory,
                accounts?: {
                  count?: OptionsItemCount;
                  accountFactory?: OptionsFactory,
                  balanceFactory?: OptionsFactory,
                  transactionsFactory?: OptionsFactory,
                },
                directDebitsFactory?: OptionsFactory,
                payeesFactory?: OptionsFactory,
                scheduledPaymentsFactory?: OptionsFactory
              },
              energy?: {
                accountsFactory?: OptionsFactory,
                accounts?: {
                  count?: OptionsItemCount;
                  accountFactory?: OptionsFactory,
                  balanceFactory?: OptionsFactory,
                  invoicesFactory?: OptionsFactory,
                  transactionsFactory?: OptionsFactory,
                  concessionsFactory?: OptionsFactory,
                  paymentScheduleFactory?: OptionsFactory
                },
                servicePointsFactory?: OptionsFactory,
                servicePoints?: {
                  count?: OptionsItemCount;
                  servicePointFactory?: OptionsFactory,
                  derFactory?: OptionsFactory,
                  usageFactory?: OptionsFactory,
                }
              }
            }
          ]
        }
      }
    ],

    clientCacheFactory?: OptionsFactory,

    registerCacheFactory?: OptionsFactory
  }
}
