import {  EnergyServicePoint} from "consumer-data-standards/energy";
import { EnergyServicePointWrapper } from "src/logic/schema/cdr-test-data-schema";
import { OpenStatus, RandomEnergy, ServicePointStatus } from  '../../random-generators';
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
    public generateEnergyServicePoint(servicePointId?: string): EnergyServicePointWrapper | undefined { 
        let id = RandomEnergy.GenerateNMI();
        let status = RandomEnergy.ServicePointStatus();
        if (servicePointId != null) {
            id = servicePointId;
            status = ServicePointStatus.ACTIVE;
        }
        let sp: EnergyServicePoint = {
            jurisdictionCode: "ALL",
            lastUpdateDateTime: "",
            nationalMeteringId: "",
            servicePointClassification: "EXTERNAL_PROFILE",
            servicePointId: id,
            servicePointStatus: status,
            validFromDate: ""
        }
        let spw: EnergyServicePointWrapper = {
            servicePoint: sp
        }
        return  spw;
    }
  
    public canCreateEnergyServicePoints(): boolean { return true; };
    public generateEnergyServicePoints(activeServicePoints: string[]): EnergyServicePointWrapper[] | undefined { 
        let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

        let ret: EnergyServicePointWrapper[] = [];
        for (let i = 0; i < count; i++) {
            activeServicePoints.forEach(sp => {
                const el = this.generateEnergyServicePoint(sp);
                if (el) ret.push(el);                
            })
        }
        return ret;
    }
}