import * as fs from 'fs';
//import { Factory, FactoryOptions } from '.';
//import { createFactory } from '.';
import * as schema from '../../schema/cdr-test-data-schema';
import { Options } from '../options';

export const generateData = (options: Options, dst: string, verbose: boolean): number => {
  log(verbose, 'Commencing data generation');
  log(verbose, `Destination file: ${dst}`);

  const data: schema.ConsumerDataRightTestDataJSONSchema = {
    fileVersion: options.general?.fileVersion || '',
    standardsVersion: options.general?.standardsVersion || '',
    title: options.general?.title || '',
    description: options.general?.description || ''
  }

  // Execute all data factories
  log(verbose, 'Executing global factories (if any)');
  generateAllData(verbose, options, data);

  // Execute holders factories
  log(verbose, 'Executing holder factories (if any)');
  generateHolders(verbose, options, data);

  // Execute client factories
  log(verbose, 'Executing client cache factories (if any)');
  generateClientCache(verbose, options, data);

  // Execute recipient factories
  log(verbose, 'Executing register cache factories (if any)');
  generateRegisterCache(verbose, options, data);

  // Save the generated data to the destination file
  log(verbose, `Outputting generated to data to '${dst}'`);
  return outputData(verbose, options, data, dst)
}

function generateAllData(verbose: boolean, options: Options, data: schema.ConsumerDataRightTestDataJSONSchema) {
  //XXXX
}

function generateHolders(verbose: boolean, options: Options, data: schema.ConsumerDataRightTestDataJSONSchema) {
  //XXXX
}

function generateClientCache(verbose: boolean, options: Options, data: schema.ConsumerDataRightTestDataJSONSchema) {
  //XXXX
}

function generateRegisterCache(verbose: boolean, options: Options, data: schema.ConsumerDataRightTestDataJSONSchema) {
  //XXXX
}

function outputData(verbose: boolean, options: Options, data: schema.ConsumerDataRightTestDataJSONSchema, dst: string): number {
  try {
    fs.writeFileSync(dst, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Failed to output the generated file to the specified destination location')
    return 1;
  }
  return 0;
}

function log(verbose: boolean, message: string, indent?: number) {
  let indentText = '';
  if (indent && indent > 0) {
    indentText = ' '.repeat(indent*2);
  }
  if (verbose) console.log(indentText + message);
}
