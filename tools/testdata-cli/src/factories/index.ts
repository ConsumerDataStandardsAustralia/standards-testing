import { Factory } from '../logic/factoryService'

// General loading factories
import * as loadStatic from './loadStatic';

export const factories: any = {}
factories[loadStatic.factoryId] = (options: any): Factory => { return new loadStatic.factory(options) }
