
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
}