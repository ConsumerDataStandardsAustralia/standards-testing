
export  enum FuelType {
    GAS = "GAS",
    ELECTRICITY = "ELECTRICITY",
    DUAL = "DUAL"
}

export  enum PlanType {
    STANDING = "STANDING",
    MARKET = "MARKET",
    REGULATED = "REGULATED"
}  

export  enum CustomerType {
    RESIDENTIAL = "RESIDENTIAL",
    BUSINESS = "BUSINESS"
}  

export enum Brand {
   AGL = "AGL", ORIGIN = "ORIGIN", ENERGY_AUSTRALIA = "ENERGY AUSTRALIA",
   RED_ENERGY = "RED ENERGY", ERGON="ERGON", AURORO_ENERGY = "AURORO ENERGY",
   ALINTA_ENERGY = "ALINTA ENERGY", ACETEWAGL = "ACETEWAGL"
}

export  enum EnergyOpenStatus {
    CLOSED = "CLOSED" , OPEN = "OPEN" 
} 

export enum PricingModel {
    SINGLE_RATE = "SINGLE_RATE"
    ,SINGLE_RATE_CONT_LOAD = "SINGLE_RATE_CONT_LOAD"
    , TIME_OF_USE = "TIME_OF_USE"
    , TIME_OF_USE_CONT_LOAD ="TIME_OF_USE_CONT_LOAD"
    , FLEXIBLE = "FLEXIBLE"
    , FLEXIBLE_CONT_LOAD = "FLEXIBLE_CONT_LOAD"
    , QUOTA = "QUOTA"
}

export enum PaymentOptions {
    OTHER = 'OTHER' , PAPER_BILL = 'PAPER_BILL' , CREDIT_CARD = 'CREDIT_CARD' , DIRECT_DEBIT = 'DIRECT_DEBIT' , BPAY ='BPAY'
}

export enum TimeZones {
    AEST = 'AEST' , UTC = 'UTC' , ACST = 'ACST' , AWST = 'AWST' 
}

export enum RateBlockUType {
    singleRate =  "singleRate" , timeOfUseRates = "timeOfUseRates" , demandCharges = "demandCharges"
}

export enum ChargePeriod {
    DAY = "DAY" , MONTH = "MONTH" , TARIFF_PERIOD = "TARIFF_PERIOD"
}

export enum MeasureUnit {
    KWH = "KWH" , KVA = "KVA" , KVAR = "KVAR" , KVARH = "KVARH" , KW = "KW" , DAYS = "DAYS" , METER = "METER" , MONTH = "MONTH"
}

export enum Days {
 SUN = "SUN", MON = "MON", TUE = "TUE", WED = "WED", THU = "THU", FRI = "FRI", SAT = "SAT"
}

export enum TimeOfUseRateType {
    PUBLIC_HOLIDAYS = "PUBLIC_HOLIDAYS", PEAK = "PEAK", OFF_PEAK = "OFF_PEAK", SHOULDER = "SHOULDER", SHOULDER1 = "SHOULDER1", SHOULDER2 = "SHOULDER2"
}

export enum MeasurementPeriod {
    DAY = "DAY", MONTH = "MONTH", TARIFF_PERIOD = "TARIFF_PERIOD"
}

export enum EnergyDiscountType {
    CONDITIONAL = "CONDITIONAL", GUARANTEED = "GUARANTEED", OTHER = "OTHER"
}

export enum EnergyDiscountCategory {
    PAY_ON_TIME = "PAY_ON_TIME", DIRECT_DEBIT = "DIRECT_DEBIT", GUARANTEED_DISCOUNT = "GUARANTEED_DISCOUNT", OTHER = "OTHER"
}

export enum MethodUType {
    percentOfBill = "percentOfBill", percentOfUse = "percentOfUse", fixedAmount = "fixedAmount", percentOverThreshold = "percentOverThreshold"
}

export enum EnergyIncentiveCategory {
    GIFT = "GIFT", ACCOUNT_CREDIT = "ACCOUNT_CREDIT", OTHER = "OTHER"
}

export enum PowerChargeType {
    FIXED_PER_DAY = "FIXED_PER_DAY", FIXED_PER_WEEK = "FIXED_PER_WEEK", FIXED_PER_MONTH = "FIXED_PER_MONTH", 
    FIXED_PER_UNIT = "FIXED_PER_UNIT",PERCENT_OF_USE = "PERCENT_OF_USE", PERCENT_OF_BILL = "PERCENT_OF_BILL"
}

export enum PowerScheme {
    GREENPOWER = "GREENPOWER", OTHER = "OTHER"  
}

export class RandomEnergy {

    public static GetRandomValue(enumeration: any){
        const values = Object.keys(enumeration);
        const enumKey = values[Math.floor(Math.random() * values.length)];
        return enumeration[enumKey];
      }

    public static FuelType(): FuelType {
        return this.GetRandomValue(FuelType)
    }

    public static PlanType(): PlanType {
        return this.GetRandomValue(PlanType)
    }    

    public static CustomerType(): CustomerType {
        return this.GetRandomValue(CustomerType)
    } 
    
    public static Brand(): string {
        return this.GetRandomValue(Brand)
    }
    public static OpenStatus(): any {
        return this.GetRandomValue(EnergyOpenStatus)
    } 

    public static PricingModel(): any {
        return this.GetRandomValue(PricingModel);
    } 

    public static PaymentOption(): any {
        return this.GetRandomValue(PaymentOptions)
    } 

    public static GenerateNMI(): string {
        const min = 1000000000;
        const max = 9999999999;
        let value =  Math.floor(Math.random() * (max - min + 1) + min);
        return value.toString();
    } 

    public static AdditionalFeeInformation(): string {
        // TODO create something meaningful
        return "Some additional fee information"
    }

    public static TimeZone(): any {
        return this.GetRandomValue(TimeZones)
    } 

    public static RateBlockUType(): any {
        return this.GetRandomValue(RateBlockUType)
    } 
    public static ChargePeriod(): any {
        return this.GetRandomValue(ChargePeriod)
    }
    
    public static MeasureUnit(): any {
        return this.GetRandomValue(MeasureUnit)
    }  
    
    public static Days(): any {
        return this.GetRandomValue(Days)
    } 
    
    public static TimeOfUseRateType(): any {
        return this.GetRandomValue(TimeOfUseRateType)
    }  
    public static MeasurementPeriod(): any {
        return this.GetRandomValue(MeasurementPeriod)
    }
    public static DiscountType(): any {
        return this.GetRandomValue(EnergyDiscountType)
    }
    public static DiscountCategory(): any {
        return this.GetRandomValue(EnergyDiscountCategory)
    }
    public static MethodUType(): any {
        return this.GetRandomValue(MethodUType)
    } 
    
    public static EnergyIncentiveCategory(): any {
        return this.GetRandomValue(EnergyIncentiveCategory)
    }  
    
    public static PowerChargeType(): any {
        return this.GetRandomValue(PowerChargeType)
    }       
    public static PowerScheme(): any {
        return this.GetRandomValue(PowerScheme)
    }         
}