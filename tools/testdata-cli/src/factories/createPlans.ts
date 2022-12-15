import { EnergyPlan } from 'consumer-data-standards/energy';
import * as fs from 'fs';
import { ConsumerDataRightTestDataJSONSchema, Holder, HolderWrapper } from 'src/logic/schema/cdr-test-data-schema';
import { Factory, FactoryOptions } from '../logic/factoryService'

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

    public canCreateEnergyPlans(): boolean { return true; };
    public generateEnergyPlans(): EnergyPlan[] {
        let result: EnergyPlan[] = [];
       let aPlan : EnergyPlan = {
           brand: '',
           brandName: '',
           fuelType: 'ELECTRICITY',
           lastUpdated: '',
           planId: '',
           type: 'STANDING'
       }  
       result.push(aPlan); 
       return result;
    }

}