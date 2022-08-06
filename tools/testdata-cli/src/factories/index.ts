import { Factory } from '../logic/factoryService'

// General loading factories
import { loadStatic } from './loadStatic';

export const factories: any = {
  'general-load-static': (options: any): Factory => { return new loadStatic(options) }
};
