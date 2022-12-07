import { Factory } from '../logic/factoryService'


export const factories: any = {}

// General loading factories
import * as loadStatic from './loadStatic';
import * as loadCustomer from './loadCustomer';
factories[loadStatic.factoryId] = (options: any): Factory => { return new loadStatic.LoadStatic(options) }
factories[loadCustomer.factoryId] = (options: any): Factory => { return new loadCustomer.LoadCustomer(options) }
