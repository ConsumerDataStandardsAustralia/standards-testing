import { Factory } from '../logic/factoryService'


export const factories: any = {}

// General loading factories
import { LoadStatic } from './loadStatic';
factories[LoadStatic.id] = (options: any): Factory => { return new LoadStatic(options) }

// Simple factories
import { SimpleFull } from './simpleFull';
factories[SimpleFull.id] = (options: any): Factory => { return new SimpleFull(options) }

// Create data holder
import { CreateHolder } from './createHolder';
factories[CreateHolder.id] = (options: any): Factory => { return new CreateHolder(options) }

// create banking products
import { CreateProducts} from './createProducts';
factories[CreateProducts.id] = (options: any): Factory => { return new CreateProducts(options) }

// create banking products
import { CreateCustomers} from './common/createCustomers';
factories[CreateCustomers.id] = (options: any): Factory => { return new CreateCustomers(options) }

// create energy plans
import { CreatePlans} from './createPlans';
factories[CreatePlans.id] = (options: any): Factory => { return new CreatePlans(options) }

// create energy plans
import { CreateEnergyAccountData} from './energy/createEnergyAccountData';
factories[CreateEnergyAccountData.id] = (options: any): Factory => { return new CreateEnergyAccountData(options) }

// create energy invoice data
import { CreateEnergyInvoiceData} from './energy/createEnergyInvoiceData';
factories[CreateEnergyInvoiceData.id] = (options: any): Factory => { return new CreateEnergyInvoiceData(options) }

// create energy service data
import { CreateEnergyServicePoints} from './energy/createServicePoints';
factories[CreateEnergyServicePoints.id] = (options: any): Factory => { return new CreateEnergyServicePoints(options) }

// create der data
import { CreateDerData} from './energy/createDERData';
factories[CreateDerData.id] = (options: any): Factory => { return new CreateDerData(options) }

// create energy usage data
import { CreateEnergyUsage} from './energy/createEnergyUsage';
factories[CreateEnergyUsage.id] = (options: any): Factory => { return new CreateEnergyUsage(options) }

export * from './common/utils';




