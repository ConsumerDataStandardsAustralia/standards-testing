import {  EnergyDerRecord, EnergyServicePoint, EnergyUsageRead} from "consumer-data-standards/energy";
import { EnergyServicePointWrapper } from "src/logic/schema/cdr-test-data-schema";
import { AcEquipmentType, DerDeviceType, OpenStatus, RandomCommon, RandomEnergy, ReadUTYpe, ServicePointConsumerClassification, ServicePointStatus } from  '../../random-generators';
import { Factory, FactoryOptions, Helper } from "../../logic/factoryService";
import { EnergyServicePointDetail } from "consumer-data-standards/energy_sdh";
import Utils from "../common/utils";
import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from 'uuid';
import { read } from "fs";

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
    public generateEnergyServicePoint(nationalMeteringId?: string): EnergyServicePointWrapper | undefined { 
        let id = RandomEnergy.GenerateNMI();
        let status = RandomEnergy.ServicePointStatus();
        if (nationalMeteringId != null) {
            id = nationalMeteringId;
            status = ServicePointStatus.ACTIVE;
        }
        // randomly assign customer type
        let customerType =  Math.random() > 0.5 ? 'person' : 'organisation';
        
        let updateTime = Helper.randomDateTimeInThePast();
        let address = Utils.createCommPhysicalAddress(customerType);
        let relatedParticipants: any[] = [];
        let consumerProfile: any = {};
        let sp: EnergyServicePointDetail = {
            jurisdictionCode: RandomEnergy.ServicePointJurisdiction(),
            lastUpdateDateTime: updateTime,
            nationalMeteringId: id,
            servicePointClassification: RandomEnergy.ServicePointClassification(),
            servicePointId: uuidv4(),
            servicePointStatus: status,
            validFromDate: Helper.randomDateTimeBeforeDateString(updateTime),
            distributionLossFactor: {
                code: 'ABCFR',
                description: "Mandatory dscription for distribution loss factor",
                lossValue: Helper.generateRandomDecimalInRange(12, 25, 2)
            },
            location: address,
            relatedParticipants: relatedParticipants
        }
        if (Math.random() > 0.5) {
            consumerProfile.classification = RandomEnergy.ServicePointConsumerClassification();
            consumerProfile.threshold = RandomEnergy.ServicePointThreshold();
            sp.consumerProfile = consumerProfile;
        }

        sp.relatedParticipants.push({party: faker.company.name(), role: RandomEnergy.ServicePointParticipantRole()})
        if (Math.random() > 0.75) sp.isGenerator = Math.random() > 0.25;
        if (Math.random() > 0.5) {
            sp.consumerProfile = {};
            sp.consumerProfile.classification = RandomEnergy.ServicePointConsumerClassification();
            sp.consumerProfile.threshold = RandomEnergy.ServicePointThreshold();
        }
        let meters: any[] = [];
        let cnt = Helper.generateRandomIntegerInRange(0, 3);
        for(let i = 0; i < cnt; i++){
            let meter: any = {
                meterId: Helper.randomId(),
                specifications : {
                    installationType : RandomEnergy.ServicePointInstallationType(), 
                    status : RandomEnergy.ServicePointStatus()
                }
            };
            meters.push(meter);
        }
        sp.meters = meters;
        let der = this.generateDERData(sp.servicePointId);
        let usage = this.generateUsage(sp.servicePointId);
        let spw: EnergyServicePointWrapper = {
            servicePoint: sp,
            der: der,
            usage: usage
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

    private generateDERData(id: string): EnergyDerRecord {
        let capacity = Helper.generateRandomIntegerInRange(0,1000);
        let availablePhases = Helper.generateRandomIntegerInRange(0,3);
        let installedPhases = Helper.generateRandomIntegerInRange(0,3);
        let der: EnergyDerRecord = {
            acConnections: [],
            approvedCapacity: capacity,
            availablePhasesCount: availablePhases,
            installedPhasesCount: installedPhases,
            islandableInstallation: false,
            servicePointId: id
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

    private generateUsage(id: string): EnergyUsageRead[] {
        let usageList: EnergyUsageRead[] = [];
        let readType = RandomEnergy.ReadUTYpe();
        let cnt = Helper.generateRandomIntegerInRange(1,5);
        for (let i = 0; i < cnt; i++) {
            let usage: EnergyUsageRead = {
                readStartDate: Helper.randomDateTimeInThePast(),
                readUType: readType,
                registerSuffix: "",
                servicePointId: id
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

                let cnt = Helper.generateRandomIntegerInRange(2,5);
                let  readQualities: any[] = [];               
                for (let i = 0; i < cnt; i++) {
                    readQualities.push({startInterval: i+1, endInterval: i+2, quality: RandomEnergy.ReadQuality()})
                }
                usage.intervalRead.readQualities = readQualities;

            }
            usageList.push(usage);
        }
        return usageList;
    }
}

