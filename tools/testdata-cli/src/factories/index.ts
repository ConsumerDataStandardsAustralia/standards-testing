import { Factory } from '../logic/factoryService'


export const factories: any = {}

// General loading factories
import * as loadStatic from './loadStatic';
factories[loadStatic.factoryId] = (options: any): Factory => { return new loadStatic.factory(options) }
