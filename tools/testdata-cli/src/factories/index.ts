import { Factory } from '../logic/factoryService'


export const factories: any = {}

// General loading factories
 import * as loadStatic from './loadStatic';
import * as loadHolders from './loadHolders';
factories[loadStatic.factoryId] = (options: any): Factory => { return new loadStatic.LoadStatic(options) }
factories[loadHolders.factoryId] = (options: any): Factory => { return new loadHolders.LoadHolders(options) }
