export enum OrganisationType {
    COMPANY = "COMPANY", GOVERNMENT_ENTITY = "GOVERNMENT_ENTITY", OTHER = "OTHER",
    PARTNERSHIP = "PARTNERSHIP", SOLE_TRADER = "SOLE_TRADER", TRUST = "TRUST"
}

export enum IndustryVersionCode {
    ANZSIC_1292_0_2006_V1_0 = "ANZSIC_1292.0_2006_V1.0",
    ANZSIC_1292_0_2006_V2_0 = "ANZSIC_1292.0_2006_V2.0"
}

export enum PostalDeliveryType {
    PO_BOX = "PO_BOX", LOCKED_BAG = "LOCKED_BAG", GPO_BOX = "GPO_BOX", CARE_PO = "CARE_PO", RSD = "RSD"
}

export enum CountryCodes3 {
    AUS = "AUS", ARG = "ARG", CHN = "CHN", FRA = "FRA", DEU ="DEU", GBR = "GBR", USA = "USA"
}

export enum AreaCode {
    NSW = "02",
    VIC = "03",
    TAS = "03",
    WA = "08",
    QLD = "07",
    ACT = "02",
    SA = "08",
    NT = "08"
}

export enum OccupationCodeVersion {
    ANZSCO_1220_0_2006_V1_0 = "ANZSCO_1220.0_2006_V1.0",
    ANZSCO_1220_0_2006_V1_1 = "ANZSCO_1220.0_2006_V1.1",
    ANZSCO_1220_0_2013_V1_2 = "ANZSCO_1220.0_2013_V1.2",
    ANZSCO_1220_0_2013_V1_3 = "ANZSCO_1220.0_2013_V1.3"
}

export enum EmailPurpose {
    HOME = "HOME", OTHER = "OTHER", UNSPECIFIED = "UNSPECIFIED", WORK = "WORK"
}

export enum PhoneNumberPurpose {
    HOME = "HOME", INTERNATIONAL = "INTERNATIONAL", MOBILE = "MOBILE", 
    OTHER = "OTHER", UNSPECIFIED = "UNSPECIFIED", WORK = "WORK"
}

export enum AddressPurpose {
    MAIL = "MAIL", OTHER = "OTHER", PHYSICAL = "PHYSICAL", REGISTERED = "REGISTERED", WORK = "WORK"
}

export function generateRandomDecimalInRangeFormatted(min: number, max: number, places: number): string {
    let value:number = (Math.random() * (max - min + 1)) + min;
    return Number.parseFloat(value.toString()).toFixed(places);
}

export function generateRandomNumericInRangeFormatted(min: number, max: number, places: number): number {
    var rand = Math.random()*(max-min) + min;
    var power = Math.pow(10, places);
    return Math.floor(rand*power) / power;
}

export class RandomCommon {

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
    public static OrganisationType(): OrganisationType {
        return this.GetRandomValue(OrganisationType)
    }

    public static IndustryVersionCode(): IndustryVersionCode {
        return this.GetRandomValue(IndustryVersionCode)
    }   
    
    public static AreaCode(): AreaCode {
        return this.GetRandomValue(AreaCode)
    }

    public static OccupationCodeVersion(): OccupationCodeVersion {
        return this.GetRandomValue(OccupationCodeVersion)
    }

    public static EmailPurpose(): EmailPurpose {
        return this.GetRandomValue(EmailPurpose)
    }

    public static PhoneNumberPurpose(): PhoneNumberPurpose {
        return this.GetRandomValue(PhoneNumberPurpose)
    }

    public static AddressPurpose(): AddressPurpose {
        return this.GetRandomValue(AddressPurpose)
    }

    public static PostalDeliveryType(): PostalDeliveryType {
        return this.GetRandomValue(PostalDeliveryType)
    }

    public static CountryCodes3(): CountryCodes3 {
        return this.GetRandomValue(CountryCodes3)
    }
}