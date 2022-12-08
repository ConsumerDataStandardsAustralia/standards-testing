import * as fs from 'fs';
import * as schema from '../schema/cdr-test-data-schema';
import { Factory, FactoryOptions } from '../logic/factoryService'
import { Holder, Holders } from '../schema/cdr-test-data-schema';

export const factoryId: string = "load-holders";

export class LoadHolders extends Factory {

    constructor(options: FactoryOptions) {
        super(options);
    }

    public get id(): string {
        return factoryId;
    }
    public get briefDescription(): string {
        return "Create some data holder data";
    }
    public get detailedDescription(): string {
        return `
        This factory will create a number of data holder objects
        with varying degrees of details.
        All json objects created are valid.
        `;
    }
    public canCreateHolders(): boolean { return true; };
    
    public generateHolders(): schema.Holders | undefined {

        let holder: Holder = {
            unauthenticated: {
                banking: undefined,
                energy: undefined,
                admin: undefined
            },
            authenticated: {
                customers: undefined
            }
        }

        let result: Holders = 
        [
            {hhh: holder}
        ]
        return result;
    }
}