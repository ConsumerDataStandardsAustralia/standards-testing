import { EnergyPlan } from 'consumer-data-standards/energy';
import { RandomEnergy} from '../random-generators/random-energy';
import { Factory, FactoryOptions, Helper } from '../logic/factoryService'

const factoryId: string = "create-plans";


export class CreatePlans extends Factory {
    public get briefDescription(): string {
        return "Create a bunch of plans";
    }
    public get detailedDescription(): string {
        return "Create a bunch of plans";
    } 
    public static id: string = factoryId;

    constructor(options: FactoryOptions) {
        super(options, factoryId);
      }

    public canCreateEnergyPlan(): boolean { return true; };
    public generateEnergyPlan(): EnergyPlan {

    let brand = RandomEnergy.Brand()
       let aPlan : EnergyPlan = {
           brand: brand,
           brandName: `${brand} - Brand name`,
           fuelType: RandomEnergy.FuelType(),
           lastUpdated: Helper.randomDateTimeInThePast(),
           planId: Helper.randomId(),
           type: RandomEnergy.PlanType()
       }   
       return aPlan;
    }

    public canCreateEnergyPlans(): boolean { return true; };
    public generateEnergyPlans(): EnergyPlan[] | undefined {
      let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;
        
      let ret: EnergyPlan[] = [];
      for (let i = 0; i < count; i++) {
        const el = this.generateEnergyPlan();
        if (el) ret.push(el);
      }
      return ret;
    }

}