import { EnergyDerRecord, EnergyPlan, EnergyUsageRead } from 'consumer-data-standards/energy';
import { RandomEnergy, ReadUTYpe } from '../../random-generators';
import { Factory, FactoryOptions, Helper } from '../../logic/factoryService'
import { EnergyServicePointWrapper } from '../../logic/schema/cdr-test-data-schema';
import { AcEquipmentType, DerDeviceType } from '../../random-generators';

import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

const factoryId: string = "create-energy-usage";


export class CreateEnergyUsage extends Factory {
    public get briefDescription(): string {
        return "Create some Usage for a service point";
    }
    public get detailedDescription(): string {
        return "This will create and associate usage data to a service point";
    } 
    public static id: string = factoryId;
    private count: number | unknown;
    constructor(options: FactoryOptions) {
        super(options, factoryId);
        this.count = options.options?.count;
      }

      public canCreateEnergyUsage(): boolean { return true; };
      public generateEnergyUsage(servicePoint: EnergyServicePointWrapper): EnergyUsageRead[] | undefined { 

        let usageList: EnergyUsageRead[] = [];
        let readType = RandomEnergy.ReadUTYpe();
        let yy = this.count;
        console.log(yy);
        let cnt = this.count != undefined ? this.count as number : 1;
        //let cnt: number = this.options.options?.count? parseInt(this.options.options?["count"]) : 1;
        for (let i = 0; i < cnt; i++) {
            let usage: EnergyUsageRead = {
                readStartDate: Helper.randomDateTimeInThePast(),
                readUType: readType,
                registerSuffix: "",
                servicePointId: servicePoint.servicePoint.servicePointId
            }
            if (readType == ReadUTYpe.basicRead){
                usage.basicRead = {
                    value: parseFloat(Helper.generateRandomDecimalInRange(-10, 100)),              
                };
                if (Math.random() > 0.5) usage.basicRead.quality = RandomEnergy.ReadQuality();
            }
            if (readType == ReadUTYpe.intervalRead){
                usage.intervalRead = {
                    aggregateValue: parseFloat(Helper.generateRandomDecimalInRange(-10, 100)),
                }
                usage.intervalRead.readIntervalLength = Helper.generateRandomIntegerInRange(5,120);

                //let cnt = Helper.generateRandomIntegerInRange(2,5);
                let start = Helper.generateRandomIntegerInRange(10, 100);
                let end = Helper.generateRandomIntegerInRange(101, 200);
                let  readQualities: any = {
                    startInterval: start, endInterval: end, quality: RandomEnergy.ReadQuality()
                };               
                // for (let i = 0; i < cnt; i++) {
                //     readQualities.push({startInterval: i+1, endInterval: i+2, quality: RandomEnergy.ReadQuality()})
                // }
                usage.intervalRead.readQualities = readQualities;

            }
            usageList.push(usage);
        }
        return usageList;
      }

}

