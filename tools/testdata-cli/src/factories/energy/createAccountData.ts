import { EnergyAccount, EnergyAccountDetailV2, EnergyAccountV2 } from 'consumer-data-standards/energy';
import { CustomerWrapper, EnergyAccountWrapper } from 'src/logic/schema/cdr-test-data-schema';
import { FuelType, OpenStatus, RandomBanking, RandomEnergy } from 'src/random-generators';
import { Factory, FactoryOptions, Helper } from '../../logic/factoryService'

const factoryId: string = "create-energy-account-data";

class Account implements EnergyAccountDetailV2 {
    plans: { nickname?: string | undefined; servicePointIds: string[]; planOverview: { displayName?: string | undefined; startDate: string; endDate?: string | undefined; }; }[];
    accountId: string;
    creationDate: string;
    accountNumber?: string | null | undefined;
    displayName?: string | null | undefined;

    constructor(){
        this.accountId = Helper.randomId();
        this.creationDate = Helper.randomDateTimeInThePast();
        this.plans = [];
    }
    [k: string]: unknown;
}

class Plan {
    constructor() {
        this.servicePointIds = [];
    }
     nickname?: string | undefined; 
     servicePointIds: string[]; 
     planOverview: {
         displayName?: string | undefined;
         startDate: string; endDate?: string | undefined;
     } | undefined; 
}

class PlanOverview {
    constructor() {
        this.startDate = Helper.randomDateTimeInThePast();
    }
    displayName?: string | undefined;
    startDate: string;
    endDate?: string | undefined;

}

class PlanDetail {
    constructor(fuelType: string) {
        this.fuelType = fuelType;
    }
    fuelType: string;
    isContingentPlan?: boolean;
    meteringCharges?: MeteringCharges;

}

class MeteringCharges {
    constructor(displayName: string, minValue: number) {
        this.displayName = displayName;
        this.minimumValue = minValue;
    }
    displayName: string;
    description?: string;
    minimumValue: number;
    maximumValue?: number;
    period?: string;

}


export class CreateAccountData extends Factory {

    constructor(options: FactoryOptions) {
        super(options, factoryId);
      }
    
    public static id: string = factoryId;
    
    public get briefDescription(): string {
        throw new Error('Method not implemented.');
    }
    public get detailedDescription(): string {
        throw new Error('Method not implemented.');
    } 

    public canCreateEnergyAccount(): boolean { return true; };
    public canCreateEnergyAccounts(): boolean { return true; };

    public generateEnergyAccount(customer: CustomerWrapper): EnergyAccountWrapper | undefined {

        let energyAccount = new Account();
        let displayName = Helper.randomBoolean(null)? "Display name": null;
        // 80% probability that an account number exists
        let accountNumber = Helper.randomBoolean(0.8)? "23455-4567": null;
        // create a number of plan object, up to 10
        let planCount = Math.ceil(Math.random()* 10);
        let status = RandomEnergy.OpenStatus();
        if (status) energyAccount.openStatus = status;
        if (displayName) energyAccount.displayName = displayName;
        if (accountNumber) energyAccount.accountNumber = accountNumber;
        if (energyAccount?.status == OpenStatus.OPEN || Math.random() > 0.5) energyAccount.creationDate = Helper.randomDateTimeInThePast();
        for(let cnt = 0; cnt < planCount; cnt++){
            let plan = new Plan();
            let nickname = Helper.randomBoolean(null)? "nickname": null;
            if (nickname) plan.nickname = nickname;

            let servicePointCount = Math.ceil(Math.random()* 10);
            for(let cnt = 0; cnt < servicePointCount; cnt++) {
                plan.servicePointIds.push(RandomEnergy.GenerateNMI())
            }
            if (energyAccount?.status == OpenStatus.OPEN || Math.random() > 0.5) {
                // create a plan overview object
                let planOverview: PlanOverview = new PlanOverview();
                planOverview.endDate = Helper.randomDateTimeInTheFuture();
                let planOverviewName = Helper.randomBoolean(null)? "Display name": null;
                if (planOverviewName) planOverview.displayName = planOverviewName;
                  
            }
            if (energyAccount?.status == OpenStatus.OPEN || Math.random() > 0.5) {
                let fuelType = RandomEnergy.FuelType();
                let planDetail: PlanDetail = new PlanDetail(fuelType);
                if (fuelType != FuelType.DUAL) planDetail.isContingentPlan = Helper.randomBoolean(null);
                let includeCharges = Helper.randomBoolean(0.75);
                if (includeCharges) {
                    let meteringCharges = new MeteringCharges("Display name", Math.ceil(Math.random()*100));
                    meteringCharges.period = "P3Y6M4DT12H30M5S";
                    meteringCharges.maximumValue =  999999
                }
            }
        }

        let result: EnergyAccountWrapper = {
            account: energyAccount
        };
        return result;
    }

    public generateEnergyAccounts(customer: CustomerWrapper): EnergyAccountWrapper[] | undefined {
        let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

        let ret: EnergyAccountWrapper[] = [];
        for (let i = 0; i < count; i++) {
          const el = this.generateEnergyAccount(customer);
          if (el) ret.push(el);
        }
        return ret;
    }
}