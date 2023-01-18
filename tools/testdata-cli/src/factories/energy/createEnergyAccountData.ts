import { EnergyAccountDetailV2, EnergyPlanContract,  EnergyPlanControlledLoad, EnergyPlanDiscounts, EnergyPlanEligibility, EnergyPlanFees, EnergyPlanGreenPowerCharges, EnergyPlanIncentives, EnergyPlanSolarFeedInTariff, EnergyPlanTariffPeriod } from 'consumer-data-standards/energy';
import { CustomerWrapper, EnergyAccountWrapper } from 'src/logic/schema/cdr-test-data-schema';
import { Days,  EnergyDiscountType, EnergyOpenStatus, FeeTerm, FuelType, generateRandomDecimalInRangeFormatted, generateRandomNumericInRangeFormatted, MethodUType, OpenStatus,PowerChargeType,PricingModel, RandomEnergy, RateBlockUType, SolarFeedDays, SolarTariffUType } from '../../random-generators';
import { Factory, FactoryOptions, Helper } from '../../logic/factoryService'
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

const factoryId: string = "create-energy-account-data";

export class CreateEnergyAccountData extends Factory {

    constructor(options: FactoryOptions) {
        super(options, factoryId);
        let optFuelType = options?.options?.fuelType ? options?.options?.fuelType: FuelType.DUAL;
        switch (optFuelType) {
            case FuelType.ELECTRICITY: 
                this.fuelType = FuelType.ELECTRICITY;
                break;
            case FuelType.GAS: 
                this.fuelType = FuelType.GAS;
                break;
            case FuelType.DUAL: 
                this.fuelType = FuelType.DUAL;
                break;
            default:  this.fuelType = FuelType.DUAL;                       
        }
        let status = options?.options?.status ? options?.options?.status: null;
        switch (status) {
            case EnergyOpenStatus.OPEN: 
                this.accountStatus = EnergyOpenStatus.OPEN;
                break;
            case EnergyOpenStatus.CLOSED: 
                this.accountStatus = EnergyOpenStatus.CLOSED;
                break;
            default:  this.accountStatus = EnergyOpenStatus.OPEN;                     
        }

    }

    private fuelType: FuelType;
    private accountStatus: EnergyOpenStatus ;

    public static id: string = factoryId;

    public get briefDescription(): string {
        return "Create a number of energy accounts for each customer of data holders";
    }
    public get detailedDescription(): string {
        let st =  
        `This library will accept the following options
        
    fuelType:   This should be ELECTRICITY,GAS or DUAL
    status:     OPEN or CLOSED (Default randomly assigned)
    If no value is provided it will default to DUAL.

Key values randomly allocated:

    The number of plans for each account:                      between 1 and 3
    The status of the account (if not as option):              OPEN or CLOSED`;
        return st;
    }

    public canCreateEnergyAccount(): boolean { return true; };
    public canCreateEnergyAccounts(): boolean { return true; };

    public generateEnergyAccount(customer: CustomerWrapper): EnergyAccountWrapper | undefined {

        let energyAccount: EnergyAccountDetailV2 = {
            creationDate: Helper.randomDateTimeInThePast(),
            plans: [],
            accountId: uuidv4()
        };
        let displayName = Helper.randomBoolean(null) ? "Display name" : null;
        // 80% probability that an account number exists
        let accountNumber = Helper.randomBoolean(0.8) ? "23455-4567" : null;
        // create a number of plan object, up to 10
        let planCount = Math.ceil(Math.random() * 3);
        let status = this.accountStatus;

        if (status) energyAccount.openStatus = status;
        if (displayName) energyAccount.displayName = displayName;
        if (accountNumber) energyAccount.accountNumber = accountNumber;
        if (energyAccount?.status == EnergyOpenStatus.OPEN || Math.random() > 0.5) energyAccount.creationDate = Helper.randomDateTimeInThePast();
        for (let cnt = 0; cnt < planCount; cnt++) {
            let plan: any = {};
            let nickname = Helper.randomBoolean(null) ? "nickname" : null;
            if (nickname) plan.nickname = nickname;

            if (energyAccount?.status == EnergyOpenStatus.OPEN) {
                // create a plan overview object
                let planOverview = this.generatePlanOverview();
                plan.planOverview = planOverview;
            }
            if (energyAccount?.status == EnergyOpenStatus.OPEN || energyAccount?.status == undefined || Math.random() > 0.5) {
                var planFuelType : FuelType = RandomEnergy.FuelType();
                if (this.fuelType != FuelType.DUAL) {
                    planFuelType = this.fuelType;
                }
                let planDetails = this.generatePlanDetails(planFuelType);
                if (planFuelType== FuelType.GAS) {
                    let gasContract = this.generateContract(PricingModel.SINGLE_RATE);
                    planDetails.gasContract = gasContract;
                }
                if (planFuelType == FuelType.ELECTRICITY) {
                    let electricityContract = this.generateContract(RandomEnergy.PricingModel());
                    planDetails.electricityContract = electricityContract;
                    plan.servicePoints = this.getServicePointsForAccount();
                }
                if (planFuelType == FuelType.DUAL) {
                    let gasContract = this.generateContract(PricingModel.SINGLE_RATE);
                    planDetails.gasContract = gasContract;
                    let electricityContract = this.generateContract(RandomEnergy.PricingModel());
                    planDetails.electricityContract = electricityContract;
                    plan.servicePoints = this.getServicePointsForAccount();
                }
                plan.planDetail = planDetails;
            }
            if (Math.random() > 0.5) {
                let contactCount: number = Math.ceil(Math.random() * 3);
                plan.authorisedContacts = this.generateAuthorisedContacts(contactCount);
            }
            energyAccount.plans.push(plan);
        }

        let result: EnergyAccountWrapper = {
            account: energyAccount
        };
        return result;
    }

    private getServicePointsForAccount(): string[]{
        let spIds: string[] = [];
        let servicePointCount = Math.ceil(Math.random() * 5);
        for (let cnt = 0; cnt < servicePointCount; cnt++) {
            spIds.push(RandomEnergy.GenerateNMI());
        }
        return spIds;
    }
    private generateAuthorisedContacts(cnt: number): any {
        let authorisedContacts: any[] = [];
        for(let i = 0; i < cnt; i++) {
            let contact: any = {
                lastName: faker.name.lastName()
            }
            authorisedContacts.push(contact)
        }
        return authorisedContacts;
    }

    private generateContract(pricingModel: PricingModel): any {
        let isFixed: boolean = Math.random() > 0.5 ? true : false;
        let paymentOtion = RandomEnergy.PaymentOption();
        let planTariffCnt: number = Math.ceil(Math.random() * 3);
        let tarrifPeriod: EnergyPlanTariffPeriod[] = this.generatePlanTariffPeriod(pricingModel, planTariffCnt);

        // For gas contracts this must be single rate
        let contract: EnergyPlanContract = {
            isFixed: isFixed,
            paymentOption: paymentOtion,
            pricingModel: pricingModel,
            tariffPeriod: tarrifPeriod
        };
        let additionalFeeInfo = Helper.randomBoolean(null) ? RandomEnergy.AdditionalFeeInformation() : null;
        if (additionalFeeInfo) contract.additionalFeeInformation = additionalFeeInfo;

        // time zone is optional in this case
        if (Math.random() > 0.5) contract.timeZone = RandomEnergy.TimeZone();
        if (isFixed) contract.isFixed = isFixed;
        if (!isFixed || Math.random() > 0.5) {
            contract.variation = "Variation details for this contract"
        }
        if (Math.random() > 0.5) contract.onExpiryDescription = 'This is what happens when prior to expiry of contract';
        if (Math.random() > 0.5) contract.intrinsicGreenPower = { "greenPercentage": generateRandomDecimalInRangeFormatted(0.3, 4.0, 2) }
        if (contract.pricingModel == PricingModel.SINGLE_RATE_CONT_LOAD ||
            contract.pricingModel == PricingModel.TIME_OF_USE_CONT_LOAD ||
            contract.pricingModel == PricingModel.FLEXIBLE_CONT_LOAD) {
            let cnt: number = Math.ceil(Math.random() * 3);
            contract.controlledLoad = this.generatePlanControlledLoad(cnt);
        }
        let incentiveCnt: number = Math.ceil(Math.random() * 3);
        if (Math.random() > 0.5) contract.incentives = this.generatePlanIncentives(incentiveCnt);
        let discountCnt: number = Math.ceil(Math.random() * 3);
        if (Math.random() > 0.5) contract.discounts = this.generatePlanDiscounts(discountCnt);
        let greenCnt: number = Math.ceil(Math.random() * 3);
        if (Math.random() > 0.5) contract.greenPowerCharges = this.generateGreenPowerCharges(greenCnt);
        let eligibilityCnt: number = Math.ceil(Math.random() * 3);
        if (Math.random() > 0.5) contract.eligibility = this.generatePlanEligibility(eligibilityCnt);
        let feeCnt: number = Math.ceil(Math.random() * 3);
        if (Math.random() > 0.5) contract.fees = this.generatePlanFees(feeCnt);
        let solarCnt: number = Math.ceil(Math.random() * 3);
        if (Math.random() > 0.5) contract.solarFeedInTariff = this.generateSolarFeedInTariffs(solarCnt);
        return contract;
    }

    private generatePlanTariffPeriod(pricingModel: PricingModel, planTariffCnt: number): EnergyPlanTariffPeriod[] {
        let result: EnergyPlanTariffPeriod[] = [];
        for (let cnt = 0; cnt <= planTariffCnt; cnt++) {
            let planTariffPeriod: EnergyPlanTariffPeriod = {
                displayName: 'Energy Tarrif Period Display Name',
                endDate: Helper.randomDateTimeInTheFuture(),
                rateBlockUType: RandomEnergy.RateBlockUType(),
                startDate: Helper.randomDateTimeInThePast()
            }

            if (Math.random() > 0.5) planTariffPeriod.dailySupplyCharges = generateRandomDecimalInRangeFormatted(0.5, 1.5, 2);
            if (Math.random() > 0.5) planTariffPeriod.timeZone = RandomEnergy.TimeZone();

            if (planTariffPeriod.rateBlockUType == RateBlockUType.singleRate.toString()) {
                let singleRate: any = {};
                planTariffPeriod.singleRate = singleRate;
                if (planTariffPeriod.singleRate != null) {
                    planTariffPeriod.singleRate.displayName = 'Single Rate Display Name';
                    if (Math.random() > 0.5) planTariffPeriod.singleRate.description = "Optional description for single rate";
                    if (pricingModel == PricingModel.QUOTA || Math.random() > 0.5) planTariffPeriod.singleRate.generalUnitPrice = generateRandomDecimalInRangeFormatted(0.5, 3.0, 4);
                    let cnt = Math.ceil(Math.random() * 3)
                    planTariffPeriod.singleRate.rates = this.generateRates(cnt);
                    if (Math.random() > 0.5) planTariffPeriod.singleRate.period = 'P3Y6M4DT12H30M5S';
                    planTariffPeriod.singleRate = singleRate;
                }

            }
            if (planTariffPeriod.rateBlockUType == RateBlockUType.timeOfUseRates.toString()) {

                let timeOfUseRates: any[] = [];
                let rateCnt = Math.ceil(Math.random() * 3);
                // create random number of empty objects
                for (let i = 0; i < rateCnt; i++) timeOfUseRates.push({});
                planTariffPeriod.timeOfUseRates = timeOfUseRates;
                planTariffPeriod.timeOfUseRates.forEach(entry => {
                    if (planTariffPeriod.timeOfUseRates != null) {
                        entry.displayName = 'Time Of Use Display Name';
                        if (Math.random() > 0.5) entry.description = 'Time Of Use Display Description';
                        let cnt = Math.ceil(Math.random() * 3)
                        entry.rates = this.generateRates(cnt);
                        let timeOfUse: any[] = [];
                        let timeOfUseDayCnt = Math.ceil(Math.random() * 3);
                        for (let i = 0; i < timeOfUseDayCnt; i++) timeOfUse.push({});
                        entry.timeOfUse = timeOfUse;
                        entry.timeOfUse.forEach(element => {
                            element.days = this.getRandomDays(3);
                            element.startTime = Helper.randomDateTimeInThePast();
                            element.endTime = Helper.randomDateTimeInTheFuture();
                            timeOfUse.push(element);
                        })
                        entry.timeOfUse = timeOfUse;
                        entry.type = RandomEnergy.TimeOfUseRateType();
                    }
                })
            };
            if (planTariffPeriod.rateBlockUType == RateBlockUType.demandCharges) {
                let demandCharges: any[] = [];
                let demandChargesCount = Math.ceil(Math.random() * 2);
                for (let i = 0; i < demandChargesCount; i++) demandCharges.push({});
                planTariffPeriod.demandCharges = demandCharges;
                let idx: number = 0;
                planTariffPeriod.demandCharges.forEach(element => {
                    //let charge: any = {};
                    idx++;
                    element.displayName = `Demand charge ${idx} display name`;
                    if (Math.random() > 0.5) element.description = `Demand charge ${idx} detailed description`;
                    element.amount = generateRandomDecimalInRangeFormatted(0.5, 1.5, 2);
                    if (Math.random() > 0.5) element.measureUnit = RandomEnergy.MeasureUnit();
                    element.startTime = '00:43:00.12345Z';
                    element.endTime = '15:43:00.12345Z';
                    if (Math.random() > 0.5) element.days = this.getRandomDays(3);
                    if (Math.random() > 0.5) element.minDemand = generateRandomDecimalInRangeFormatted(0.5, 1.5, 2);
                    if (Math.random() > 0.5) element.maxDemand = generateRandomDecimalInRangeFormatted(3.5, 8.8, 2);
                    element.measurementPeriod = RandomEnergy.MeasurementPeriod();
                    element.chargePeriod = RandomEnergy.ChargePeriod();
                })
            }
            result.push(planTariffPeriod);
        }
        return result;
    }

    private generateRates(rateCount: number): any {
        let rates: any = [];
        for (let i = 0; i < rateCount; i++) {
            let rate: any = {};
            rate['unitPrice'] = generateRandomDecimalInRangeFormatted(0.5, 1.5, 2);
            if (Math.random() > 0.5) rate['measureUnit'] = RandomEnergy.MeasureUnit();
            if (Math.random() > 0.5) rate['description'] = "Optional description for single rate";
            rate['volume'] = generateRandomNumericInRangeFormatted(0.5, 1.5, 2);
            rates.push(rate);
        }
        return rates;
    }

    private generatePlanControlledLoad(controlledLoadCnt: number): EnergyPlanControlledLoad[] {
        let result: EnergyPlanControlledLoad[] = [];

        for (let i = 0; i < controlledLoadCnt; i++) {
            let rateBlockUType = RandomEnergy.RateBlockUType()
            let controlledLoad: EnergyPlanControlledLoad = {
                displayName: `Display name for controlled load ${i}`,
                rateBlockUType: rateBlockUType
            }
            if (Math.random() > 0.5) controlledLoad.startDate = Helper.randomDateTimeInThePast();
            if (Math.random() > 0.5) controlledLoad.endDate = Helper.randomDateTimeInTheFuture();

            if (controlledLoad.rateBlockUType == RateBlockUType.singleRate) {
                let singleRate: any = {};
                controlledLoad.singleRate = singleRate;
                if (controlledLoad.singleRate != null) {
                    controlledLoad.singleRate.displayName = `Controlled Load single rate ${i} display name`;
                    if (Math.random() > 0.5) controlledLoad.singleRate.description = `Controlled Load single rate ${i} description`;
                    controlledLoad.singleRate.dailySupplyCharge = generateRandomDecimalInRangeFormatted(0.5, 1.5, 2);
                    let rateCount = Math.ceil(Math.random() * 2);
                    controlledLoad.singleRate.rates = this.generateRates(rateCount);
                }
            }
            if (rateBlockUType == RateBlockUType.timeOfUseRates) {
                let timeOfUseRates: any[] = [];
                let timeOfUseRateCnt = Math.ceil(Math.random() * 3);
                for (let i = 0; i < timeOfUseRateCnt; i++) timeOfUseRates.push({});
                controlledLoad.timeOfUseRates = timeOfUseRates;
                controlledLoad.timeOfUseRates.forEach(elem => {
                    elem.displayName = 'Time Of Use Display Name';
                    if (Math.random() > 0.5) elem.description = 'Time Of Use Display Description';
                    elem.dailySupplyCharge = generateRandomDecimalInRangeFormatted(0.5, 1.5, 2);
                    let cnt = Math.ceil(Math.random() * 3)
                    elem.rates = this.generateRates(cnt);
                    let timeOfUse: any[] = [];
                    let timeOfUseDayCnt = Math.ceil(Math.random() * 2);
                    for (let i = 0; i < timeOfUseDayCnt; i++) timeOfUse.push({});
                    elem.timeOfUse = timeOfUse;
                    elem.timeOfUse.forEach(x => {
                        let l = Object.keys(Days).length; 
                        if (Math.random() > 0.5) x.days = this.getRandomDays(3);
                        x.startTime = Helper.randomDateTimeInThePast();
                        x.endTime = Helper.randomDateTimeInTheFuture();
                        if (Math.random() > 0.5) x.additionalInfoUri = 'http://moreinfo';
                        if (elem.startTime == null || elem.endTime == null || elem.additionalInfoUri != null) x.additionalInfo = 'Additional info for Time of Use'
                    })

                    elem.timeOfUse = timeOfUse;
                    elem.type = RandomEnergy.TimeOfUseRateType();
                })
            }
            result.push(controlledLoad);
        }
        return result;
    }

    private getRandomDays(cnt: number): Days[] {
        let days: Days[] = [];
        let l = Math.min(Object.values(Days).length, 7)
        do {
            let day = Object.values(Days)[Helper.generateRandomIntegerInRange(0,l-1)];
            if (days.indexOf(day) == -1)
                days.push(day);
        } while(days.length< cnt)
        return days;
    }

    private generatePlanEligibility(cnt: number): EnergyPlanEligibility[] {
        let result: EnergyPlanEligibility[] = [];
        for(let i =0; i < cnt; i++) {
            let eligibility: EnergyPlanEligibility = {
                information: 'Energy Plan Eligibility Information',
                type: RandomEnergy.EnergyEligibilityType()
            }
            if (Math.random() > 0.5) eligibility.description = 'Energy Plan Eligibility Description'
            result.push(eligibility);
        }
        return result;
    }

    private generatePlanFees(cnt: number): EnergyPlanFees[] {
        let result: EnergyPlanFees[] = [];
        for (let i= 0; i < cnt; i++) {
            let term = RandomEnergy.FeeTerm();
            let type = RandomEnergy.EnergyFeeType();
            let fees: EnergyPlanFees = {
                term: term,
                type: type
            }
            if (Math.random() > 0.5) fees.description = 'Optional description for this fee'
            if (term != FeeTerm.PERCENT_OF_BILL) {
                fees.amount = generateRandomDecimalInRangeFormatted(0.5, 1.5, 2);
                fees.rate = generateRandomDecimalInRangeFormatted(0.5, 1.5, 2);
            }
            result.push(fees);
        }    
        return result;
    }

    private generateSolarFeedInTariffs(cnt: number): EnergyPlanSolarFeedInTariff[] {
        let result: EnergyPlanSolarFeedInTariff[] = [];
        for (let i = 0; i < cnt; i++) {
            let tariffUtype = RandomEnergy.SolarTariffUType();
            let tariff: EnergyPlanSolarFeedInTariff = {
                displayName: 'Mandatory display name for Solar Feed Tariff',
                payerType: RandomEnergy.SolarPayerType(),
                scheme: RandomEnergy.SolarScheme(),
                tariffUType: tariffUtype
            }
            if (Math.random() > 0.5) tariff.description = 'Optional description for Solar Feed Tariff';
            if (tariffUtype == SolarTariffUType.singleTariff) {
                let single: any = {};
                tariff.singleTariff = single;
                if (tariff.singleTariff != null) tariff.singleTariff.amount = generateRandomDecimalInRangeFormatted(0.5, 1.5, 2);
            }
            if (tariffUtype == SolarTariffUType.timeVaryingTariffs) {
                let timeVarying: any = {};
                tariff.timeVaryingTariffs = timeVarying;
                if (tariff.timeVaryingTariffs != null) {
                    if (Math.random() > 0.5) tariff.timeVaryingTariffs.type = RandomEnergy.SolarFeedType();
                    tariff.timeVaryingTariffs.amount = generateRandomDecimalInRangeFormatted(0.5, 1.5, 2);
                    let timeVariations: any[] = []
                    let cnt: number = Math.ceil(Math.random() * 3);
                    for(let i = 0; i < cnt; i++) timeVariations.push({});
                    tariff.timeVaryingTariffs.timeVariations = timeVariations;
                    tariff.timeVaryingTariffs.timeVariations.forEach(variation => {
                        if (Math.random() > 0.5) variation.startTime = Helper.randomDateTimeInThePast();
                        if (Math.random() > 0.5) variation.endTime = Helper.randomDateTimeInTheFuture();
                        let days: SolarFeedDays[] = [];
                        let dayCount: number = Math.ceil(Math.random() * 5);
                        for(let i = 0; i < dayCount; i++) days.push(RandomEnergy.SolarFeedDays());                   
                        variation.days = days;
                    })
                }
            }
            result.push(tariff);
        }
        return result;
    }

    private generateGreenPowerCharges(greenCnt: number): EnergyPlanGreenPowerCharges[] {

        let result: EnergyPlanGreenPowerCharges[] = [];
        for (let i = 0; i < greenCnt; i++) {
            let chargeType = RandomEnergy.PowerChargeType();
            let greenPowerCharges: EnergyPlanGreenPowerCharges = {
                displayName: `Energy Green Power Charge ${i}`,
                scheme: RandomEnergy.PowerScheme(),
                tiers: [],
                type: chargeType
            }
            let rateCnt: number = Math.ceil(Math.random() * 3);
            let percCentageRates: number[] = [];
            for (let i = 0; i < rateCnt; i++) {
                let val = generateRandomNumericInRangeFormatted(0.01, 0.5, 2);
                percCentageRates.push(val);
            }
            percCentageRates.sort();
            let tiers: any[] = [];
            for (let i = 0; i < percCentageRates.length; i++) tiers.push({});
            greenPowerCharges.tiers = tiers;
            let idx: number = 0;
            greenPowerCharges.tiers.forEach(elem => {
                elem.percentGreen = percCentageRates[idx].toString();
                if (Math.random() > 0.5 && 
                    (chargeType == PowerChargeType.PERCENT_OF_BILL
                    || chargeType == PowerChargeType.PERCENT_OF_USE)) elem.rate = generateRandomDecimalInRangeFormatted(0.5, 2.5, 2);
                if (Math.random() > 0.5 &&
                    (chargeType == PowerChargeType.FIXED_PER_DAY
                     ||chargeType == PowerChargeType.FIXED_PER_WEEK
                     ||chargeType == PowerChargeType.FIXED_PER_MONTH
                     ||chargeType == PowerChargeType.FIXED_PER_UNIT ))
                    elem.amount = generateRandomDecimalInRangeFormatted(0.5, 2.5, 2);
                idx++;
            })
            result.push(greenPowerCharges);
        }
        return result;
    }

    private generatePlanIncentives(incenticeCnt: number): EnergyPlanIncentives[] {
        let result: EnergyPlanIncentives[] = [];
        for (let cnt = 0; cnt < incenticeCnt; cnt++) {
            let planIncentive: EnergyPlanIncentives = {
                category: RandomEnergy.EnergyIncentiveCategory(),
                description: 'Mandatory description for energy plan incentive',
                displayName: 'Plan Incentive'
            }
            if (Math.random() > 0.5) planIncentive.eligibility = 'Eligibility criteria for this incentive'
            result.push(planIncentive);
        }
        return result;
    }

    private generatePlanDiscounts(discountCnt: number): EnergyPlanDiscounts[] {
        let result: EnergyPlanDiscounts[] = [];
        for (let cnt = 0; cnt < discountCnt; cnt++) {
            let methodUType = RandomEnergy.MethodUType();
            let discountType = RandomEnergy.DiscountType();
            let planDiscount: EnergyPlanDiscounts = {
                displayName: 'Mandatory display name',
                methodUType: methodUType,
                type: discountType
            }
            if (Math.random() > 0.5 || discountType == EnergyDiscountType) planDiscount.category = RandomEnergy.DiscountCategory();
            if (Math.random() > 0.5) planDiscount.endDate = Helper.randomDateTimeInTheFuture();
            if (methodUType == MethodUType.percentOfBill) {
                let percBill: any = {};
                planDiscount.percentOfBill = percBill;
                if (planDiscount.percentOfBill) planDiscount.percentOfBill.rate = generateRandomDecimalInRangeFormatted(0.3, 4.0, 2);
            }
            if (methodUType == MethodUType.percentOfUse) {
                let percUse: any = {};
                planDiscount.percentOfUse = percUse;
                if (planDiscount.percentOfUse) planDiscount.percentOfUse.rate = generateRandomDecimalInRangeFormatted(0.3, 4.0, 2);

            }
            if (methodUType == MethodUType.fixedAmount) {
                let fixedAmt: any = {};
                planDiscount.fixedAmount = fixedAmt;
                if (planDiscount.fixedAmount) planDiscount.fixedAmount.amount = generateRandomDecimalInRangeFormatted(0.3, 4.0, 2);
            }
            if (methodUType == MethodUType.percentOverThreshold) {
                let percOver: any = {};
                planDiscount.percentOverThreshold = percOver;
                if (planDiscount.percentOverThreshold) planDiscount.percentOverThreshold.rate = generateRandomDecimalInRangeFormatted(0.3, 4.0, 2);
                if (planDiscount.percentOverThreshold) planDiscount.percentOverThreshold.usageAmount = generateRandomDecimalInRangeFormatted(10, 100, 2);
            }
            result.push(planDiscount);
        }
        return result;
    }

    private generatePlanOverview(): any {
        // create a plan overview object
        let planOverview: any = {};
        planOverview['endDate'] = Helper.randomDateTimeInTheFuture();
        let planOverviewName = Helper.randomBoolean(null) ? "Display name" : null;
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
            meteringCharges['minimumValue'] = Math.ceil(Math.random() * 100).toString();
            meteringCharges['period'] = 'P3Y6M4DT12H30M5S';
            meteringCharges['maximumValue'] = 999999;
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