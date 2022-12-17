
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

export class RandomBanking {
    public static GetRandomValue(enumeration: any){
        const values = Object.keys(enumeration);
        const enumKey = values[Math.floor(Math.random() * values.length)];
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
}