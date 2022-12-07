import * as fs from 'fs';
import * as schema from '../schema/cdr-test-data-schema';
import { Factory, FactoryOptions } from '../logic/factoryService'

export const factoryId: string = "general-load-customer";

export class LoadCustomer extends Factory {

    constructor(options: FactoryOptions) {
        super(options);
    }

    public get id(): string {
        return factoryId;
    }
    public get briefDescription(): string {
        return "Create some customer data";
    }
    public get detailedDescription(): string {
        return `
        This factory will create a number of customer objects
        with varying degrees of details.
        All json objects created are valid.
        `;
    }
    public canCreateCustomer(): boolean { return true; };
    
    public generateCustomer(holder: schema.Holder): schema.Customer | undefined {
    let customer : schema.Customer = {
        phoneNumbers: [
            { 
                fullNumber: "12345",
                number: "rererer",
                purpose: "HOME"
            }
        ],
        emailAddresses: [],
        physicalAddresses: []
    }
    return customer
    }
}