import { EnergyAccount, EnergyAccountDetailV2, EnergyAccountV2, EnergyPlanContract, EnergyPlanContractFull, EnergyPlanControlledLoad, EnergyPlanDiscounts, EnergyPlanEligibility, EnergyPlanFees, EnergyPlanGreenPowerCharges, EnergyPlanIncentives, EnergyPlanSolarFeedInTariff, EnergyPlanTariffPeriod } from 'consumer-data-standards/energy';
import { CustomerWrapper, EnergyAccountWrapper } from 'src/logic/schema/cdr-test-data-schema';
import { Days, FuelType, generateRandomDecimalInRangeFormatted, OpenStatus,  PaymentOptions,  PricingModel,  RandomEnergy, RateBlockUType } from '../../random-generators';
import { Factory, FactoryOptions, Helper } from '../../logic/factoryService'

const factoryId: string = "create-energy-account-data";

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

        let energyAccount: EnergyAccountDetailV2 = {
            creationDate : Helper.randomDateTimeInThePast(),
            plans: [],
            accountId: Helper.randomId()
        };
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
            let plan: any = {};
            let nickname = Helper.randomBoolean(null)? "nickname": null;
            if (nickname) plan['nickname'] = nickname;
            let spIds = [];
            let servicePointCount = Math.ceil(Math.random()* 10);
            for(let cnt = 0; cnt < servicePointCount; cnt++) {
                spIds.push(RandomEnergy.GenerateNMI());
            }
            plan['servicePointIds'] = spIds;
            if (energyAccount?.status == OpenStatus.OPEN || Math.random() > 0.5) {
                // create a plan overview object
                let planOverview = this.generatePlanOverview();
                plan['planOverview'] = planOverview;
            }
            if (energyAccount?.status == OpenStatus.OPEN || Math.random() > 0.5) {
                let fuelType = RandomEnergy.FuelType();
                let planDetails = this.generatePlanDetails(fuelType);
                if (fuelType == FuelType.GAS || fuelType == FuelType.DUAL) {
                    let gasContract = this.generateGasContract();
                    planDetails['gasContract'] = gasContract;
                }
                if (fuelType == FuelType.ELECTRICITY || fuelType == FuelType.DUAL) {
                    let electricityContract = this.generateElectricityContract();
                    planDetails['electricityContract'] = electricityContract;
                }     
                plan['planDetail'] = planDetails;               
            }
            if (Math.random() > 0.5) {
                plan['authorisedContacts'] = this.generateAuthorisedContacts();
            }
            energyAccount.plans.push(plan);
        }

        let result: EnergyAccountWrapper = {
            account: energyAccount
        };
        return result;
    }
    private generateAuthorisedContacts(): any {
        let authorisedContacts: any = {};
        return authorisedContacts;    
    }

    private generateElectricityContract() : any {
        let electricityContract: any = {};
        return electricityContract;
    }

    private generateGasContract() : any {
        let isFixed: boolean = Math.random() > 0.5? true: false;
        let paymentOtion = RandomEnergy.PaymentOption();
        let planTariffCnt: number = Math.ceil(Math.random()*5);
        let tarrifPeriod: EnergyPlanTariffPeriod[] = this.generatePlanTariffPeriod(PricingModel.SINGLE_RATE, planTariffCnt);

         // For gas contracts this must be single rate
          let gasContract: EnergyPlanContract = {
            isFixed: isFixed,
            paymentOption: paymentOtion,
            pricingModel: PricingModel.SINGLE_RATE,
            tariffPeriod: tarrifPeriod
        };
        let additionalFeeInfo = Helper.randomBoolean(null)? RandomEnergy.AdditionalFeeInformation(): null;
        if (additionalFeeInfo) gasContract.additionalFeeInformation = additionalFeeInfo;
    
        // time zone is optional in this case
        if (Math.random() > 0.5) gasContract.timeZone = RandomEnergy.TimeZone();
        if (isFixed) gasContract.isFixed = isFixed;
        if (!isFixed || Math.random() > 0.5) {
            gasContract.variation = "Variation details for this contract"
        }
        if (Math.random() > 0.5) gasContract.onExpiryDescription= 'This is what happens when prior to expiry of contract';

        if (gasContract.pricingModel in [PricingModel.SINGLE_RATE_CONT_LOAD, PricingModel.TIME_OF_USE_CONT_LOAD, PricingModel.FLEXIBLE_CONT_LOAD]) {
            gasContract.controlledLoad = this.generatePlanControlledLoad();
        }
        let incentiveCnt: number = Math.ceil(Math.random()*5);
        if (Math.random() > 0.5) gasContract.incentives = this.generatePlanIncentives(incentiveCnt);
        let discountCnt: number = Math.ceil(Math.random()*5);
        if (Math.random() > 0.5) gasContract.discounts = this.generatePlanDiscounts(discountCnt);
        let greenCnt: number = Math.ceil(Math.random()*5);
        if (Math.random() > 0.5) gasContract.greenPowerCharges = this.generateGreenPowerCharges(greenCnt);
        if (Math.random() > 0.5) gasContract.eligibility = this.generatePlanEligibility();
        if (Math.random() > 0.5) gasContract.fees = this.generatePlanFees();
        if (Math.random() > 0.5) gasContract.solarFeedInTariff = this.generateSolarFeedInTariffs();
        return gasContract;
    }

    private generatePlanTariffPeriod(pricingModel: PricingModel, planTariffCnt: number): EnergyPlanTariffPeriod[]{
        let result: EnergyPlanTariffPeriod[] = [];
        for(let cnt = 0; cnt <= planTariffCnt; cnt++) {            
            let planTariffPeriod: EnergyPlanTariffPeriod = {
                displayName: 'Energy Tarrif Period Display Name',
                endDate: Helper.randomDateTimeInTheFuture(),
                rateBlockUType: RandomEnergy.RateBlockUType(),
                startDate: Helper.randomDateTimeInThePast()
            }
            if (Math.random() > 0.5) planTariffPeriod.dailySupplyCharges = generateRandomDecimalInRangeFormatted(0.5, 1.5, 2);
            if (Math.random() > 0.5) planTariffPeriod.timeZone = RandomEnergy.TimeZone();
            if ((planTariffPeriod.rateBlockUType == RateBlockUType.singleRate.toString()) || (Math.random() > 0.5)){
                let singleRate: any = {};
                singleRate['displayName'] = 'Mandatory Display Name';
                if (Math.random() > 0.5) singleRate['description'] = "Optional description for single rate";
                if (pricingModel == PricingModel.QUOTA || Math.random() > 0.5) singleRate['generalUnitPrice'] = generateRandomDecimalInRangeFormatted(0.5, 3.0, 4);
                let cnt = Math.ceil(Math.random() * 10)
                singleRate['rates'] = this.generateRates(cnt);
                if (Math.random() > 0.5) singleRate['period'] = 'P3Y6M4DT12H30M5S';
                planTariffPeriod.singleRate = singleRate;
            }
            let timeOfUseRates: any = {};
            timeOfUseRates['displayName'] = 'Time Of Use Display Name';
            if (Math.random() > 0.5) timeOfUseRates['description'] = 'Time Of Use Display Description';
            let cnt = Math.ceil(Math.random() * 10)
            timeOfUseRates['rates'] = this.generateRates(cnt);          
            let timeOfUse: any = [];
            let timeOfUseDayCnt = Math.ceil(Math.random() * 5);
            for (let i = 0; i < timeOfUseDayCnt; i++) {
                let element: any = {};
                element['days'] = [Days.SUN, Days.MON, Days.THU];
                element['startTime'] = Helper.randomDateTimeInThePast();
                element['endTime'] = Helper.randomDateTimeInTheFuture();
                timeOfUse.push(element);
            }
            timeOfUseRates['timeOfUse'] = timeOfUse;
            timeOfUseRates['type'] = RandomEnergy.TimeOfUseRateType();
            planTariffPeriod.timeOfUseRates = timeOfUseRates;

            if (planTariffPeriod.rateBlockUType == RateBlockUType.demandCharges) {
                let demandCharges: any = [];
                let demandChargesCount = Math.ceil(Math.random() * 5);
                for (let i = 0; i < demandChargesCount; i++) {
                    let charge: any = {};
                    charge['displayName'] = `Demand charge ${i} display name`;
                    if (Math.random() > 0.5) charge['description'] = `Demand charge ${i} detailed description`;
                    charge['amount'] = generateRandomDecimalInRangeFormatted(0.5, 1.5, 2);
                    if (Math.random() > 0.5) charge['measureUnit'] = RandomEnergy.MeasureUnit();
                    charge['startTime'] = '00:43:00.12345Z';
                    charge['endTime'] = '15:43:00.12345Z';
                    if (Math.random() > 0.5) charge['days'] = [Days.THU, Days.SUN, Days.WED];
                    if (Math.random() > 0.5) charge['minDemand'] = generateRandomDecimalInRangeFormatted(0.5, 1.5, 2);
                    if (Math.random() > 0.5) charge['maxDemand'] = generateRandomDecimalInRangeFormatted(3.5, 8.8, 2);
                    charge['measurementPeriod'] = RandomEnergy.MeasurementPeriod();
                    charge['chargePeriod'] = RandomEnergy.ChargePeriod();
                    demandCharges.push(charge);
                }
                planTariffPeriod.demandCharges = demandCharges;
            }
            result.push(planTariffPeriod);
        }
        return result;
    }

    private generateRates(rateCount: number): any {
        let rates: any = [];
        for (let i = 0; i < rateCount; i++){
            let rate: any = {};
            rate['unitPrice'] = generateRandomDecimalInRangeFormatted(0.5, 1.5, 2);
            if (Math.random() > 0.5) rate['measureUnit'] = RandomEnergy.MeasureUnit();
            if (Math.random() > 0.5) rate['description'] = "Optional description for single rate";
            rate['volume'] = generateRandomDecimalInRangeFormatted(0.5, 1.5, 2);
            rates.push(rate);
        } 
        return rates;      
    }

    private generatePlanControlledLoad(): EnergyPlanControlledLoad[]{
        let result: EnergyPlanControlledLoad[] = [];
        let controlledLoad: EnergyPlanControlledLoad = {
            displayName: '',
            rateBlockUType: 'singleRate'
        }
        result.push(controlledLoad);
        return result;
    }

    private generatePlanEligibility(): EnergyPlanEligibility[]{
        let result: EnergyPlanEligibility[] = [];
        let eligibility: EnergyPlanEligibility = {
            information: '',
            type: 'OTHER'
        }
        result.push(eligibility);
        return result;
    }

    private generatePlanFees(): EnergyPlanFees[]{
        let result: EnergyPlanFees[] = [];
        let fees: EnergyPlanFees = {
            term: 'PERCENT_OF_BILL',
            type: 'OTHER'
        }
        result.push(fees);
        return result;
    }

    private generateSolarFeedInTariffs(): EnergyPlanSolarFeedInTariff[]{
        let result: EnergyPlanSolarFeedInTariff[] = [];
        let tariff: EnergyPlanSolarFeedInTariff = {
            displayName: '',
            payerType: 'GOVERNMENT',
            scheme: 'OTHER',
            tariffUType: 'singleTariff'
        }
        result.push(tariff);
        return result;
    }


    private generateGreenPowerCharges(greenCnt: number): EnergyPlanGreenPowerCharges[] {

        let result: EnergyPlanGreenPowerCharges[] = [];
        let greenPowerCharges: EnergyPlanGreenPowerCharges = {
            displayName: '',
            scheme: 'OTHER',
            tiers: [],
            type: 'FIXED_PER_DAY'
        }
        result.push(greenPowerCharges);
        return result;       
    }

    private generatePlanIncentives(incenticeCnt: number): EnergyPlanIncentives[]{
        let result: EnergyPlanIncentives[] = [];
        for(let cnt = 0; cnt < incenticeCnt; cnt++){
            let planIncentive: EnergyPlanIncentives = {
                category: 'OTHER',
                description: '',
                displayName: ''
            }
            result.push(planIncentive);
        }
        return result;
    }

    private generatePlanDiscounts(discountCnt: number): EnergyPlanDiscounts[]{
        let result: EnergyPlanDiscounts[] = [];
        for (let cnt = 0; cnt < discountCnt; cnt++){
            let planDiscount: EnergyPlanDiscounts = {
                displayName: '',
                methodUType: 'percentOfBill',
                type: 'OTHER'
            }
            result.push(planDiscount);
        }
        return result;
    }

    private generatePlanOverview() : any {
        // create a plan overview object
        let planOverview: any = {};
        planOverview['endDate'] = Helper.randomDateTimeInTheFuture();
        let planOverviewName = Helper.randomBoolean(null) ? "Display name": null;
        if (planOverviewName) planOverview['displayName'] = planOverviewName;
        return planOverview;
    }

    private generatePlanDetails(fuelType: FuelType): any {
        let planDetails: any = {};
        planDetails['fuelType'] = fuelType;
        if (fuelType != FuelType.DUAL) planDetails['isContingentPlan'] = Helper.randomBoolean(null);
        let includeCharges = Helper.randomBoolean(0.95);
        if (includeCharges) {
            let meteringCharges: any = {};
            meteringCharges['displayName'] = 'Metering Display Name';
            meteringCharges['minimumValue'] = Math.ceil(Math.random()*100).toString();
            meteringCharges['period'] = 'P3Y6M4DT12H30M5S';
            meteringCharges['maximumValue'] =  999999;
            planDetails['meteringCharges'] = meteringCharges;
        } 
        return planDetails;     
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