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
import { CreateCustomers} from './createCustomers';
factories[CreateCustomers.id] = (options: any): Factory => { return new CreateCustomers(options) }

// create energy plans
import { CreatePlans} from './createPlans';
factories[CreatePlans.id] = (options: any): Factory => { return new CreatePlans(options) }


