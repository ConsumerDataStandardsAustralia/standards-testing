import * as fs from 'fs';
import {
  Factory
} from '.';
import { createFactory } from '.';
import * as schema from '../../schema/cdr-test-data-schema';
import {
  Options,
  OptionsGeneral,
  OptionsFactory,
  OptionsSingleFactory,
  OptionsWeighted,
  OptionsSequence
} from '../options';

export const generateData = (options: Options, dst: string, verbose: boolean): number => {
  log(verbose, 'Commencing data generation');
  log(verbose, `Destination file: ${dst}`);

  let data: schema.ConsumerDataRightTestDataJSONSchema = {
    fileVersion: options.general?.fileVersion || '',
    standardsVersion: options.general?.standardsVersion || '',
    title: options.general?.title || '',
    description: options.general?.description || ''
  }

  // Execute all data factories
  log(verbose, 'Executing global factories (if any)');
  data = generateAllData(verbose, options, data);

  // Execute holders factories
  log(verbose, 'Executing holder factories (if any)');
  data = generateHolders(verbose, options, data);

  // Execute client factories
  log(verbose, 'Executing client cache factories (if any)');
  data = generateClientCache(verbose, options, data);

  // Execute recipient factories
  log(verbose, 'Executing register cache factories (if any)');
  data = generateRegisterCache(verbose, options, data);

  // Save the generated data to the destination file
  log(verbose, `Outputting generated data to '${dst}'`);
  return outputData(verbose, options, data, dst)
}



// ----------------------------------------------------------------------------
// Data generation functions
// ----------------------------------------------------------------------------

function generateAllData(verbose: boolean, options: Options, data: schema.ConsumerDataRightTestDataJSONSchema): schema.ConsumerDataRightTestDataJSONSchema {
  let result = data;
  let factories: Factory[] = []

  // Create the factories
  if (options.factories?.allDataFactory) {
    log(verbose, `Creating global factories`, 1)
    factories = createFactories(1, options.general, options.factories?.allDataFactory);
  }

  if (factories.length > 0) {
    log(verbose, `${factories.length} ${factories.length > 1 ? 'factories' : 'factory'} created`, 1)

    // If we have factories execute each one of them
    for (const factory of factories) {
      log(verbose, `Running factory '${factory.id}'`, 1)
      if (factory.canCreateFullData()) {
        const newData = factory.generateFullData(JSON.parse(JSON.stringify(result)));
        if (newData) result = newData;

        log(verbose, `Factory complete`, 2)
      } else {
        log(verbose, `Factory does not support full data generation`, 2)
      }
    }
  } else {
    log(verbose, 'No global factories to execute', 1)
  }

  return result;
}

function generateHolders(verbose: boolean, options: Options, data: schema.ConsumerDataRightTestDataJSONSchema): schema.ConsumerDataRightTestDataJSONSchema {
  let result = data;
  //XXXX
  return result;
}

function generateClientCache(verbose: boolean, options: Options, data: schema.ConsumerDataRightTestDataJSONSchema): schema.ConsumerDataRightTestDataJSONSchema {
  let result = data;
  //XXXX
  return result;
}

function generateRegisterCache(verbose: boolean, options: Options, data: schema.ConsumerDataRightTestDataJSONSchema): schema.ConsumerDataRightTestDataJSONSchema {
  let result = data;
  //XXXX
  return result;
}



// ----------------------------------------------------------------------------
// Output functions
// ----------------------------------------------------------------------------

function outputData(verbose: boolean, options: Options, data: schema.ConsumerDataRightTestDataJSONSchema, dst: string): number {
  try {
    fs.writeFileSync(dst, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Failed to output the generated file to the specified destination location')
    return 1;
  }
  return 0;
}



// ----------------------------------------------------------------------------
// Helper functions
// ----------------------------------------------------------------------------

function createFactories(iterations: number, general: OptionsGeneral | undefined, options: OptionsFactory): Factory[] {
  let result: Factory[] = [];

  // Handle OptionsSingleFactory
  if ((options as OptionsSingleFactory).id) {
    result = createSingleFactories(iterations, general, options as OptionsSingleFactory);

  // Handle OptionsWeighted
  } else if((options as OptionsWeighted).weighted) {
    result = createWeightedFactories(iterations, general, options as OptionsWeighted);

  // Handle OptionsSequence
  } else if((options as OptionsSequence).sequence) {
    result = createSequenceFactories(iterations, general, options as OptionsSequence);
  }

  return result;
}

function createSingleFactories(iterations: number, general: OptionsGeneral | undefined, options: OptionsSingleFactory): Factory[] {
  let result: Factory[] = [];

  for (let i = 0; i < iterations; i++) {
    const factory = createFactory(options.id, {
      general: general,
      options: options.options
    });
    if (factory) result.push(factory);
  }

  return result;
}

function createWeightedFactories(iterations: number, general: OptionsGeneral | undefined, options: OptionsWeighted): Factory[] {
  let result: Factory[] = [];

  let max = 0;
  for (const item of options.weighted) {
    max += item.weighting;
  }

  for (let i = 0; i < iterations; i++) {
    let rnd = Math.random() * max;

    for (const item of options.weighted) {
      rnd -= item.weighting;
      if (rnd <= 0) {
        const factory = createFactory(item.factory.id, {
          general: general,
          options: item.factory.options
        });
        if (factory) result.push(factory);
        break;
      }
    }
  }

  return result;
}

function createSequenceFactories(iterations: number, general: OptionsGeneral | undefined, options: OptionsSequence): Factory[] {
  let result: Factory[] = [];

  for (let i = 0; i < iterations; i++) {
    for (const item of options.sequence) {
      const factory = createFactory(item.id, {
        general: general,
        options: item.options
      });
      if (factory) result.push(factory);
    }
  }

  return result;
}

function log(verbose: boolean, message: string, indent?: number) {
  let indentText = '';
  if (indent && indent > 0) {
    indentText = ' '.repeat(indent*2);
  }
  if (verbose) console.log(indentText + message);
}
