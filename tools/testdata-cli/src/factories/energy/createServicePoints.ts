import { EnergyDerRecord, EnergyServicePoint, EnergyUsageRead } from "consumer-data-standards/energy";
import { EnergyServicePointWrapper } from "src/logic/schema/cdr-test-data-schema";
import { AcEquipmentType, DerDeviceType, OpenStatus, RandomCommon, RandomEnergy, ReadUTYpe, ServicePointConsumerClassification, ServicePointStatus } from '../../random-generators';
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
        return "Create a detailed service point";
    }
    public get detailedDescription(): string {
        let st = "Create a detailed service point information.";
        return st;
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
        let customerType = Math.random() > 0.5 ? 'person' : 'organisation';

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

        sp.relatedParticipants.push({ party: faker.company.name(), role: RandomEnergy.ServicePointParticipantRole() })
        if (Math.random() > 0.75) sp.isGenerator = Math.random() > 0.25;
        if (Math.random() > 0.5) {
            sp.consumerProfile = {};
            sp.consumerProfile.classification = RandomEnergy.ServicePointConsumerClassification();
            sp.consumerProfile.threshold = RandomEnergy.ServicePointThreshold();
        }
        let meters: any[] = [];
        let cnt = Helper.generateRandomIntegerInRange(0, 3);
        for (let i = 0; i < cnt; i++) {
            let meter: any = {
                meterId: Helper.randomId(),
                specifications: {
                    installationType: RandomEnergy.ServicePointInstallationType(),
                    status: RandomEnergy.ServicePointStatus()
                }
            };
            meters.push(meter);
        }
        sp.meters = meters;
        let spw: EnergyServicePointWrapper = {
            servicePoint: sp
        }
        return spw;
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

