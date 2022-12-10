import { Factory } from '../logic/factoryService'


export const factories: any = {}

// General loading factories
import { LoadStatic } from './loadStatic';
factories[LoadStatic.id] = (options: any): Factory => { return new LoadStatic(options) }

// Simple factories
import { SimpleFull } from './simpleFull';
factories[SimpleFull.id] = (options: any): Factory => { return new SimpleFull(options) }
