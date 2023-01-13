import { EnergyDerRecord, EnergyPlan } from 'consumer-data-standards/energy';
import { RandomEnergy } from '../../random-generators';
import { Factory, FactoryOptions, Helper } from '../../logic/factoryService'
import { EnergyServicePointWrapper } from '../../logic/schema/cdr-test-data-schema';
import { AcEquipmentType, DerDeviceType } from '../../random-generators';

import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

const factoryId: string = "create-der-data";


export class CreateDerData extends Factory {
    public get briefDescription(): string {
        return "Create some Der data for a service point";
    }
    public get detailedDescription(): string {
        return "Create a bunch of plans";
    } 
    public static id: string = factoryId;

    constructor(options: FactoryOptions) {
        super(options, factoryId);
      }

      public canCreateEnergyDER(): boolean { return true; };
      public generateEnergyDER(servicePoint: EnergyServicePointWrapper): EnergyDerRecord | undefined { 
        let capacity = Helper.generateRandomIntegerInRange(0,1000);
        let availablePhases = Helper.generateRandomIntegerInRange(0,3);
        let installedPhases = Helper.generateRandomIntegerInRange(0,3);
        let der: EnergyDerRecord = {
            acConnections: [],
            approvedCapacity: capacity,
            availablePhasesCount: availablePhases,
            installedPhasesCount: installedPhases,
            islandableInstallation: false,
            servicePointId: servicePoint.servicePoint.servicePointId
        }
        if (capacity == 0 || availablePhases == 0 || installedPhases == 0)
            return der;
        else {
            let hasCentralProtectionControl = Math.random() > 0.25;
            if (Math.random() > 0) der.hasCentralProtectionControl = hasCentralProtectionControl;
            if (hasCentralProtectionControl) {
                der.protectionMode = {
                    exportLimitKva: Helper.generateRandomIntegerInRange(10,500),
                    underFrequencyProtection: parseFloat(Helper.generateRandomDecimalInRange(48.5, 49.8, 2)),
                    underFrequencyProtectionDelay: parseFloat(Helper.generateRandomDecimalInRange(0.05, 1.5, 2)),
                    overFrequencyProtection: parseFloat(Helper.generateRandomDecimalInRange(50.1, 51.1, 2)),
                    overFrequencyProtectionDelay: parseFloat(Helper.generateRandomDecimalInRange(0.05, 1.5, 2)),
                    underVoltageProtection: parseFloat(Helper.generateRandomDecimalInRange(230, 239, 2)),
                    underVoltageProtectionDelay: parseFloat(Helper.generateRandomDecimalInRange(0.05, 1.5, 2)),
                    overVoltageProtection: parseFloat(Helper.generateRandomDecimalInRange(241, 250, 2)),
                    overVoltageProtectionDelay: parseFloat(Helper.generateRandomDecimalInRange(0.05, 1.5, 2)),
                    sustainedOverVoltage: parseFloat(Helper.generateRandomDecimalInRange(241, 250, 2)),
                    sustainedOverVoltageDelay: parseFloat(Helper.generateRandomDecimalInRange(0.05, 1.5, 2)),
                    voltageVectorShift: parseFloat(Helper.generateRandomDecimalInRange(25, 70, 2)),
                    frequencyRateOfChange: parseFloat(Helper.generateRandomDecimalInRange(5, 15, 2)),
                    neutralVoltageDisplacement: parseFloat(Helper.generateRandomDecimalInRange(241, 250, 2)),
                    interTripScheme: 'from local substation'
                }
            }
            let equipmentType: AcEquipmentType = RandomEnergy.AcEquipmentType();
            let acConnections: any[] = [];
            let cnt = Helper.generateRandomIntegerInRange(1,5);
            for(let i = 0; i < cnt; i++) {
                let ac: any = {
                    connectionId: uuidv4(),
                    commissioningDate: Helper.randomTimeInThePast(),
                    connectionIdentifier: uuidv4(),
                    count: 1,
                    derDevices: [],
                    status: RandomEnergy.AcInverterStatus()
                }
                ac.equipmentType = equipmentType;
                if (equipmentType == AcEquipmentType.INVERTER) ac.manufacturerName = faker.company.name();
                if (equipmentType == AcEquipmentType.INVERTER) ac.series = faker.lorem.slug();
                if (equipmentType == AcEquipmentType.INVERTER) ac.status = RandomEnergy.AcInverterStatus();
                if (equipmentType == AcEquipmentType.INVERTER) ac.inverterDeviceCapacity = Helper.generateRandomIntegerInRange(100,10000);
                let derDeviceType = RandomEnergy.DerDeviceType();
                let derDeviceCnt = Helper.generateRandomIntegerInRange(1,5);
                let derDevices: any[] = []
                for(let i = 0; i < derDeviceCnt; i++) {
                    let device: any = {};
                    device.deviceIdentifier = uuidv4();
                    device.count = Helper.generateRandomIntegerInRange(1,5);
                    device.manufacturer = faker.company.name();
                    device.modelNumber = 'ABC';
                    device.type = derDeviceType;
                    device.status = RandomEnergy.AcInverterStatus();
                    device.subtype = RandomEnergy.DerDeviceType();
                    device.nominalRatedCapacity = Helper.generateRandomIntegerInRange(10,500);
                    if (derDeviceType == DerDeviceType.STORAGE) device.nominalStorageCapacity =  Helper.generateRandomIntegerInRange(10,1000);
                    derDevices.push(device)
                }
                ac.derDevices = derDevices;
                acConnections.push(ac)
            }
            der.acConnections = acConnections;
            acConnections
            return der;

     }
    }
}

