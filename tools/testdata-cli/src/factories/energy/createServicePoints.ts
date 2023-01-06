import {  EnergyServicePoint} from "consumer-data-standards/energy";
import { EnergyServicePointWrapper } from "src/logic/schema/cdr-test-data-schema";
import { Factory, FactoryOptions, Helper } from "../../logic/factoryService";

const factoryId: string = "create-energy-service-points";

export class CreateEnergyServicePoints extends Factory {

    constructor(options: FactoryOptions) {
        super(options, factoryId);
    }

    public static id: string = factoryId;

    public get briefDescription(): string {
        throw new Error("Method not implemented.");
    }
    public get detailedDescription(): string {
        throw new Error("Method not implemented.");
    } 

    public canCreateEnergyServicePoint(): boolean { return true; };
    public generateEnergyServicePoint(): EnergyServicePointWrapper | undefined { 
        let sp: EnergyServicePoint = {
            jurisdictionCode: "ALL",
            lastUpdateDateTime: "",
            nationalMeteringId: "",
            servicePointClassification: "EXTERNAL_PROFILE",
            servicePointId: "",
            servicePointStatus: "ACTIVE",
            validFromDate: ""
        }
        let spw: EnergyServicePointWrapper = {
            servicePoint: sp
        }
        return  spw;
    }
  
    public canCreateEnergyServicePoints(): boolean { return true; };
    public generateEnergyServicePoints(): EnergyServicePointWrapper[] | undefined { 
        let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

        let ret: EnergyServicePointWrapper[] = [];
        for (let i = 0; i < count; i++) {
            const el = this.generateEnergyServicePoint();
            if (el) ret.push(el);
        }
        return ret;
    }
}