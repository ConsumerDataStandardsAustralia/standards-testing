
export  enum ProductCategory {
    BUSINESS_LOANS =  "BUSINESS_LOANS"
    , CRED_AND_CHRG_CARDS =  "CRED_AND_CHRG_CARDS"
    , LEASES = "LEASES"
    , MARGIN_LOANS = "MARGIN_LOANS"
    , OVERDRAFTS =  "OVERDRAFTS"
    , PERS_LOANS = "PERS_LOANS"
    , REGULATED_TRUST_ACCOUNTS = "REGULATED_TRUST_ACCOUNTS"
    , RESIDENTIAL_MORTGAGES = "RESIDENTIAL_MORTGAGES"
    , TERM_DEPOSITS = "TERM_DEPOSITS"
    , TRADE_FINANCE = "TRADE_FINANCE"
    , TRANS_AND_SAVINGS_ACCOUNTS = "TRANS_AND_SAVINGS_ACCOUNTS"
    , TRAVEL_CARDS = "TRAVEL_CARDS"
} 

export  enum OpenStatus {
    CLOSED = "CLOSED" , OPEN = "OPEN" 
} 

export  enum PayeeType {
   "BILLER" , "DIGITAL_WALLET" , "DOMESTIC" , "INTERNATIONAL"
} 

export enum Effective {
    "ALL", "CURRENT", "FUTURE"
}

export enum EligibilityType {
    "BUSINESS"
      , "EMPLOYMENT_STATUS"
      , "MAX_AGE"
      , "MIN_AGE"
      , "MIN_INCOME"
      , "MIN_TURNOVER"
      , "NATURAL_PERSON"
      , "OTHER"
      , "PENSION_RECIPIENT"
      , "RESIDENCY_STATUS"
      , "STAFF"
      , "STUDENT"
}

export enum UnitOfMeasure {
    "DAY" , "DOLLAR" , "MONTH" , "PERCENT"
}

export enum RateApplicationMethod {
    "PER_TIER" , "WHOLE_BALANCE" , null
}

export enum SpecificAccountUType {
    "creditCard" , "loan" , "termDeposit"
}

export enum MaturityInstructions {
   "HOLD_ON_MATURITY" , "PAID_OUT_AT_MATURITY" , "ROLLED_OVER"
}

export enum PayeeUType {
    "biller" , "digitalWallet" , "domestic" , "international"
}

export enum PayeeAccountType {
    "account" , "card" , "payId"
}

export enum PayIDType {
    "ABN" , "EMAIL" , "ORG_IDENTIFIER" , "TELEPHONE"
}

export enum DigitalWalletPayeeType {
    "ABN" , "EMAIL" , "ORG_IDENTIFIER" , "TELEPHONE"
}

export enum ScheduledPaymentStatusType {
   "ACTIVE" , "INACTIVE" , "SKIP"
}

export enum ScheduledPaymentToUType {
    "accountId" , "biller" , "domestic" , "international" , "payeeId"
}

export enum RecurrenceUType {
    "eventBased" , "intervalSchedule" , "lastWeekDay" , "onceOff"
}

export enum NonBusinessDayTreatment {
    "AFTER" , "BEFORE" , "ON" , "ONLY" , null
}

export enum LastWeekDay {
    "FRI" , "MON" , "SAT" , "SUN" , "THU" , "TUE" , "WED"
}

export enum AddressUType {
    "paf", "simple"
}

export enum FeatureType {
    ADDITIONAL_CARDS = "ADDITIONAL_CARDS"
    , BALANCE_TRANSFERS = "BALANCE_TRANSFERS"
    , BILL_PAYMENT = "BILL_PAYMENT"
    , BONUS_REWARDS = "BONUS_REWARDS"
    , CARD_ACCESS = "CARD_ACCESS"
    , CASHBACK_OFFER = "CASHBACK_OFFER"
    , COMPLEMENTARY_PRODUCT_DISCOUNTS = "COMPLEMENTARY_PRODUCT_DISCOUNTS"
    , DIGITAL_BANKING = "DIGITAL_BANKING"
    , DIGITAL_WALLET = "DIGITAL_WALLET"
    , DONATE_INTEREST = "DONATE_INTEREST"
    , EXTRA_REPAYMENTS = "EXTRA_REPAYMENTS"
    , FRAUD_PROTECTION = "FRAUD_PROTECTION"
    , FREE_TXNS = "FREE_TXNS"
    , FREE_TXNS_ALLOWANCE= "FREE_TXNS_ALLOWANCE"
    , GUARANTOR = "GUARANTOR"
    , INSURANCE = "INSURANCE"
    , INSTALMENT_PLAN = "INSTALMENT_PLAN"
    , INTEREST_FREE = "INTEREST_FREE"
    , INTEREST_FREE_TRANSFERS = "INTEREST_FREE_TRANSFERS"
    , LOYALTY_PROGRAM = "LOYALTY_PROGRAM"
    , NOTIFICATIONS ="NOTIFICATIONS"
    , NPP_ENABLED = "NPP_ENABLED"
    , NPP_PAYID = "NPP_PAYID"
    , OFFSET = "OFFSET"
    , OTHER = "OTHER"
    , OVERDRAFT = "OVERDRAFT"
    , REDRAW = "REDRAW"
    , RELATIONSHIP_MANAGEMENT = "RELATIONSHIP_MANAGEMENT"
    , UNLIMITED_TXNS = "UNLIMITED_TXNS"   
}

export enum ContraintType {
    MAX_BALANCE = "MAX_BALANCE" , MAX_LIMIT = "MAX_LIMIT" , MIN_BALANCE = "MIN_BALANCE" ,
    MIN_LIMIT = "MIN_LIMIT" , OPENING_BALANCE = "OPENING_BALANCE"
}

export enum FeeType {
     "DEPOSIT"
    , "EVENT"
    , "EXIT"
    , "PAYMENT"
    , "PERIODIC"
    , "PURCHASE"
    , "TRANSACTION"
    , "UPFRONT"
    , "VARIABLE"
    , "WITHDRAWAL"
}

export enum DepositRateType {
    "BONUS" , "BUNDLE_BONUS" , "FIXED" , "FLOATING" , "INTRODUCTORY" , "MARKET_LINKED" , "VARIABLE"
}

export enum LendingRateType {
     "BUNDLE_DISCOUNT_FIXED"
    , "BUNDLE_DISCOUNT_VARIABLE"
    , "CASH_ADVANCE"
    , "DISCOUNT"
    , "FIXED"
    , "FLOATING"
    , "INTRODUCTORY"
    , "MARKET_LINKED"
    , "PENALTY"
    , "PURCHASE"
    , "VARIABLE"
}

export enum RepaymentType {
    "INTEREST_ONLY" , "PRINCIPAL_AND_INTEREST",  null
}

export enum TransactionType {
        "DIRECT_DEBIT"
    , "FEE"
    , "INTEREST_CHARGED"
    , "INTEREST_PAID"
    , "OTHER"
    , "PAYMENT"
    , "TRANSFER_INCOMING"
    , "TRANSFER_OUTGOING"
}

export enum LoanPurpose {
    "INVESTMENT" , "OWNER_OCCUPIED",  null
}

export enum DiscountType {
    "BALANCE" , "DEPOSITS" , "ELIGIBILITY_ONLY" , "FEE_CAP" , "PAYMENTS"
}

export enum DiscountEligibilityType {
     "BUSINESS"
    , "EMPLOYMENT_STATUS"
    , "INTRODUCTORY"
    , "MAX_AGE"
    , "MIN_AGE"
    , "MIN_INCOME"
    , "MIN_TURNOVER"
    , "NATURAL_PERSON"
    , "OTHER"
    , "PENSION_RECIPIENT"
    , "RESIDENCY_STATUS"
    , "STAFF"
    , "STUDENT"
}

export class RandomBanking {
    public static GetRandomValue(enumeration: any) {
        const values = Object.keys(enumeration);
        let interval = 1 / values.length;
        let rv = Math.random();
        let intervalSum = 0;
        let found: boolean = false;
        let idx: number = 0;
        while (found == false) {
            intervalSum += interval;
            if (rv <= intervalSum || idx >= values.length - 1) {
                found = true;
            }
            else {
                idx++;
            }
        }
        const enumKey = values[idx];
        return enumeration[enumKey];
    }

    public static ProductCategory(): any {
        return this.GetRandomValue(ProductCategory)
    }

    public static FeatureType(): any {
        return this.GetRandomValue(FeatureType)
    }

    public static ContraintType(): any {
        return this.GetRandomValue(ContraintType)
    }

    public static FeeType(): any {
        return this.GetRandomValue(FeeType)
    }

    public static DepositRateType(): any {
        return this.GetRandomValue(DepositRateType)
    }

    public static LendingRateType(): any {
        return this.GetRandomValue(LendingRateType)
    }

    public static LoanPurpose(): any {
        return this.GetRandomValue(LoanPurpose)
    }

    public static RepaymentType(): any {
        return this.GetRandomValue(RepaymentType)
    }

    public static DiscountType(): any {
        return this.GetRandomValue(DiscountType)
    }

    public static DiscountEligibilityType(): any {
        return this.GetRandomValue(DiscountEligibilityType)
    }

    public static OpenStatus(): any {
        return this.GetRandomValue(OpenStatus)
    }

    public static PayeeType(): any {
        return this.GetRandomValue(PayeeType)
    }

    public static Effective(): any {
        return this.GetRandomValue(Effective)
    } 
    
    public static EligibilityType(): any {
        return this.GetRandomValue(EligibilityType)
    }  

    public static UnitOfMeasure(): any {
        return this.GetRandomValue(UnitOfMeasure)
    }   
    
    public static RateApplicationMethod(): any {
        return this.GetRandomValue(RateApplicationMethod)
    }  
    public static SpecificAccountUType(): any {
        return this.GetRandomValue(SpecificAccountUType)
    } 
    
    public static MaturityInstructions(): any {
        return this.GetRandomValue(MaturityInstructions)
    }
    
    public static PayeeUType(): any {
        return this.GetRandomValue(PayeeUType)
    }
    public static PayeeAccountType(): any {
        return this.GetRandomValue(PayeeAccountType)
    } 
    public static PayIDType(): any {
        return this.GetRandomValue(PayIDType)
    }   
    public static DigitalWalletPayeeType(): any {
        return this.GetRandomValue(DigitalWalletPayeeType)
    } 
    public static ScheduledPaymentStatusType(): any {
        return this.GetRandomValue(ScheduledPaymentStatusType)
    } 
    public static ScheduledPaymentToUType(): any {
        return this.GetRandomValue(ScheduledPaymentToUType)
    }  
    public static RecurrenceUType(): any {
        return this.GetRandomValue(RecurrenceUType)
    } 
    public static NonBusinessDayTreatment(): any {
        return this.GetRandomValue(NonBusinessDayTreatment)
    }  
    public static LastWeekDay(): any {
        return this.GetRandomValue(LastWeekDay)
    }  
    public static AddressUType(): any {
        return this.GetRandomValue(AddressUType)
    } 
    public static TransactionType(): any {
        return this.GetRandomValue(TransactionType)
    }                                                          
}