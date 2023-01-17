import { EnergyPlan, EnergyPlanDetail} from "consumer-data-standards/energy";
import { Factory, FactoryOptions, Helper } from "../../logic/factoryService";

const factoryId: string = "create-energy-plan-data";

export class CreateEnergyPlanData extends Factory {

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

    public canCreateEnergyPlans(): boolean {return true}


    public generateEnergyPlans(): EnergyPlanDetail[] | undefined  {
        let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

        let ret: EnergyPlanDetail[] = [];
        for (let i = 0; i < count; i++) {
            const plan: EnergyPlanDetail = {
                brand: "",
                brandName: "",
                fuelType: "ELECTRICITY",
                lastUpdated: "",
                planId: "",
                type: "REGULATED"
            };
            ret.push(plan);
        }
        return ret;      
    }
}